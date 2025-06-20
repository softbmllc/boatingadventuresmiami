import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";
import BoatTourTypes from "./BoatTourTypes";
import BoatServiceInfo from "./BoatServiceInfo";
import BoatGallery from "./BoatGallery";
import BoatDetailsInfo from "./BoatDetailsInfo";
import ContactForm from "./ContactForm";
import FaqSection from "./FaqSection";
import Navbar from "./Components/Navbar";
import LandingPage from "./LandingPage";
import BoatingHome from "./BoatingHome";
import Footer from "./Components/Footer";
import { LanguageProvider } from "./LanguageContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
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
                  <Footer />
                </LayoutWrapper>
              }
            />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;