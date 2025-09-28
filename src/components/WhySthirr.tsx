import React from 'react';
import Image from 'next/image';
import img from "../../public/images/why.png";
import holistic from "../../public/images/holist.png";
import sust from "../../public/images/sust.png"
import guidance from "../../public/images/guidance.png";
import steadness from "../../public/images/steadness.png";

const WhySthirr = () => {
  const services = [
    {
      // icon: <FaLeaf className="text-3xl text-[#424D31] mb-4" />,
      img: holistic,
      title: 'Holistic Wellness',
      description: 'Nurturing body, mind, and spirit as one integrated whole'
    },
    {
      // icon: <FaHeartbeat className="text-3xl text-[#424D31] mb-4" />,
      img: sust,
      title: 'Practical & Sustainable',
      description: 'Tools and practices that fit naturally into your daily life'
    },
    {
      // icon: <FaBrain className="text-3xl text-[#424D31] mb-4" />,
      img: guidance,
      title: 'Personalized Guidance',
      description: 'Customized approaches that honor your unique journey'
    },
    {
      // icon: <FaHandHoldingHeart className="text-3xl text-[#424D31] mb-4" />,
      img: steadness,
      title: 'Steadiness (Sthirr)',
      description: 'Building lasting stability and balance from within'
    }
  ];

  return (
    <>
      <section className="py-12 md:py-16 bg-[#F9F8F5]" id="why-sthirr">
        <div className="container mx-auto px-4">
          <div className="w-full grid lg:grid-cols-2 justify-between items-center gap-8">
            <div className="relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <Image
                src={img}
                alt="Nishita - Founder of Sthirr Wellness"
                width={200}
                height={200}
                className="w-full lg:w-3/4 h-auto"
                priority
              />
            </div>

            <div className="p-4 lg:p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl lg:text-4xl md:text-5xl font-serif text-[#424D31] mb-4">
                Why Choose Sthirr
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed  mt-12">
                <p className="text-lg">
                  At STHIRR Wellness, we believe there is no single path to good health. True wellness is achieved when different practices come together in harmony — when the body, mind, and spirit are nurtured as one.
                </p>
                <p className="text-lg">
                  My own journey began with the realization that health cannot be built through just one discipline. Over the years, I explored and trained in yoga, naturopathy, sound healing, preventive nutrition, and life skills — not just as theories, but as practices I lived and experienced deeply. What emerged was a simple truth: balance and steadiness come from integration, not isolation.
                </p>
                <p className="text-lg">
                  This is the foundation of STHIRR Wellness. Here, you won&apos;t find quick fixes or rigid routines. Instead, I offer practical tools that are adaptable to your life — whether it&apos;s yoga for strength, meditation for calm, diet for healing, or sound therapy for deep release. Each path is unique, yet together they create a rhythm that supports lasting wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F9F8F5]">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl"
                >
                  <div className="bg-white rounded-md p-3">
                    <div className="inline-block group-hover:text-white text-[#424D31]">
                      <Image src={service.img} alt={service.title} className='w-72 object-cover' width={100} height={100} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white text-[#424D31] px-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-200 p-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySthirr 
