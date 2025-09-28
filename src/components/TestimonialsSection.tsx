'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "STHIRR Wellness has transformed my approach to health. The instructors are knowledgeable and supportive, creating a welcoming environment for all levels.",
      author: "Sarah Johnson",
      role: "Yoga Enthusiast",
      rating: 5
    },
    {
      quote: "The meditation sessions have been life-changing for me. I've learned techniques that help me manage stress and find inner peace in my daily life.",
      author: "Michael Chen",
      role: "Corporate Professional",
      rating: 5
    },
    {
      quote: "As a beginner, I was nervous about starting yoga, but the team at STHIRR made me feel comfortable right away. I can already feel the difference in my flexibility and strength.",
      author: "Emma Rodriguez",
      role: "Yoga Beginner",
      rating: 5
    },
    {
      quote: "The holistic approach to wellness at STHIRR is exactly what I was looking for. The combination of yoga, meditation, and nutrition guidance has been transformative.",
      author: "David Kim",
      role: "Health Enthusiast",
      rating: 5
    },
    {
      quote: "I've tried many studios, but STHIRR stands out for its authentic approach to yoga and wellness. The community is supportive, and the instructors are exceptional.",
      author: "Priya Patel",
      role: "Yoga Practitioner",
      rating: 5
    },
    {
      quote: "The prenatal yoga classes were a blessing during my pregnancy. The instructor was incredibly knowledgeable and helped me stay active and comfortable.",
      author: "Jessica Williams",
      role: "Expectant Mother",
      rating: 5
    }
  ];

  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-[#F8F6F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="text-primary">Clients</span> Say
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don&apos;t just take our word for it. Here&apos;s what our community members have to say about their STHIRR experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 text-primary text-4xl opacity-20">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-auto">
                <div className="flex items-center mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the STHIRR difference for yourself?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
