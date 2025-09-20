'use client';

import Image from 'next/image';

const offerings = [
  {
    title: 'Yoga & Meditation',
    description:
      'Traditional asana practice combined with mindfulness techniques to cultivate physical strength and mental clarity.',
    image: 'https://source.unsplash.com/400x300/?yoga,meditation',
  },
  {
    title: 'Sound Healing',
    description:
      'Therapeutic sound frequencies using singing bowls, gongs, and other instruments to promote deep relaxation and healing.',
    image: 'https://source.unsplash.com/400x300/?sound,bowl',
  },
  {
    title: 'Holistic Nutrition',
    description:
      'Personalized nutrition guidance that considers your unique constitution, lifestyle, and wellness goals.',
    image: 'https://source.unsplash.com/400x300/?nutrition,green',
  },
  {
    title: 'Life Skills Coaching',
    description:
      'Practical guidance for developing resilience, emotional intelligence, and sustainable lifestyle practices.',
    image: 'https://source.unsplash.com/400x300/?coaching,health',
  },
  {
    title: 'Naturopathy',
    description:
      'Natural healing approaches that support your body’s innate ability to heal and maintain optimal health.',
    image: 'https://source.unsplash.com/400x300/?naturopathy,nature',
  },
  {
    title: 'Mindfulness Training',
    description:
      'Learn to cultivate present moment awareness and develop a deeper connection with yourself and your surroundings.',
    image: 'https://source.unsplash.com/400x300/?mindfulness,meditation',
  },
];

export default function OurOfferings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Offerings</h2>
        <p className="mt-4 text-lg not-only:w-1/2 text-[#ACACAC] mx-auto">
          We offer curated services designed to bring overall improvement in health — nurturing the body, calming the mind,
          and creating balance in everyday life.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 text-left"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {offering.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
