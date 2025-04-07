import { useState } from "react";
import { sendMessageToGPT } from "./chatService";
import { FaPaperPlane } from "react-icons/fa"; // Ícono de avión de papel

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const assistantReply = await sendMessageToGPT(input);
    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: assistantReply,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setLoading(false);
  };

  // Función para mostrar/ocultar el chat
  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div>
      {/* Botón flotante con ícono moderno */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
      >
        <FaPaperPlane className="text-2xl" />
      </button>

      {/* Ventana del chat */}
      {chatVisible && (
        <div className="fixed bottom-4 right-4 w-96 bg-white border shadow-lg rounded-2xl p-6 z-50 flex flex-col">
          {/* Botón de cerrar */}
          <button
            onClick={() => setChatVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ❌
          </button>

          <div className="h-64 overflow-y-auto mb-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg max-w-full ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right rounded-bl-none"
                    : "bg-gray-100 text-left rounded-br-none"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-gray-400 text-sm">Escribiendo...</div>}
          </div>

          <div className="flex gap-2">
            <input
              className="flex-1 border rounded-lg p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu mensaje..."
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
              onClick={handleSend}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}