import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";
import BoatTourTypes from "./BoatTourTypes";
import BoatServiceInfo from "./BoatServiceInfo";
import BoatGallery from "./BoatGallery";
import BoatDetailsInfo from "./BoatDetailsInfo";
import ContactForm from "./ContactForm";
import FaqSection from "./FaqSection";
import Navbar from "./Navbar";
import ChatWidget from "./ChatWidget";
import LandingPage from "./LandingPage";
import BoatingHome from "./BoatingHome";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutWrapper>
                <Navbar />
                <BoatingHome />
                <BoatTourTypes />
                <BoatServiceInfo />
                <BoatGallery /> 
                <BoatDetailsInfo />
                <ContactForm />
                <FaqSection />
                <ChatWidget />
              </LayoutWrapper>
            }
          />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;