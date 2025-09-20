"use client";
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import MainSection from '@/components/MainSection';
import Navbar from '@/components/Navbar';
import NotificationModal from '@/components/NotificationModal';
import OurOffering from '@/components/OurOffering';
import TestimonialSlider from '@/components/TestimonialSlider';
import WellnessPlans from '@/components/WellnessPlan';
import WhySthirr from '@/components/WhySthirr';
import Image from 'next/image';
import { useState } from 'react';

export default function WellnessLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* <NotificationModal onClose={() => setIsModalOpen(false)} /> */}
    </main>
  );
}