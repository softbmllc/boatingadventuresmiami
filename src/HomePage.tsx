import LayoutWrapper from "./LayoutWrapper";
import BoatingHome from "./BoatingHome";
import BoatTourTypes from "./BoatTourTypes";
import BoatServiceInfo from "./BoatServiceInfo";
import BoatGallery from "./BoatGallery";
import BoatDetailsInfo from "./BoatDetailsInfo";
import ContactForm from "./ContactForm";
import FaqSection from "./FaqSection";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <LayoutWrapper>
      <Navbar />
      <BoatingHome />
      <BoatTourTypes />
      <BoatServiceInfo />
      <BoatGallery />
      <BoatDetailsInfo />
      <ContactForm />
      <FaqSection />
    </LayoutWrapper>
  );
}