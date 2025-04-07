export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-gray-50 text-gray-800">
        {children}
      </div>
    );
  }