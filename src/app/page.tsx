import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import MainSection from '@/components/MainSection';
import Navbar from '@/components/Navbar';
import OurOffering from '@/components/OurOffering';
import TestimonialSlider from '@/components/TestimonialSlider';
import WellnessPlans from '@/components/WellnessPlan';
import WhySthirr from '@/components/WhySthirr';

export default function WellnessLandingPage() {

  return (
    <main>
      <Navbar />
      <MainSection />
      <AboutSection />
      <WhySthirr />
      <OurOffering />
      <WellnessPlans />
      <TestimonialSlider />
      <ContactForm />
      <Footer />
    </main>
  );
}