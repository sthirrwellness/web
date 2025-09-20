import React from 'react';
// import Image from 'next/image';

const AboutSection = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-16 md:py-24" id="about">
        <div className="container mx-auto px-4">
          <div className="w-full grid lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 rounded-lg">
              <h3 className="text-md md:text-md font-serif text-[#424D31] mb-4">
                Founder, STHIRR Wellness
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-[#424D31] mb-4">
                About Me - Nishita
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed  mt-12">
                <p className="text-lg">
                  Hello, I'm Nishita
                </p>
                <p className="text-lg">
                  My path to wellness has been shaped by both formal study and personal exploration. I formally studied Management Studies and spent a few years in the corporate world, but soon realised my true calling - helping people find harmony, health, and inner steadiness.
                </p>
                <p>
                  This led me to immerse myself in the study and practice of wellness. I began with life skills training and gradually expanded into yoga, naturopathy, dietetics and preventive nutrition, and Tibetan sound healing. Alongside formal training, I have also cultivated deep self-learning through lived experiences, which continue to enrich my practice.
                </p>
                <p>
                  At STHIRR Wellness, I bring all these threads together - offering a space where ancient wisdom meets modern lifestyle needs, where healing feels natural, and where every individual can find their own rhythm of balance.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* <Image
                src="/images/nishita.jpg"
                alt="Nishita - Founder of Sthirr Wellness"
                width={200}
                height={200}
                className="w-full h-auto"
                priority
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
