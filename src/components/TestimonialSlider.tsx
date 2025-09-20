'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        quote: `Hi Nishita\n
The sound bath was an amazing experience something I didnt realise would release so much stress and make me this light. Had sound sleep and felt calm throughout the day.`,
        name: "Rekha Vinay",
        title: "",
    },
    {
        quote: `I had a wonderful experience with the sound healing session. The next day, I felt very relaxed and calm. My mind was clear, and I noticed more positive thoughts flowing. The overall feeling was very peaceful and Uplifting.`,
        name: "Priya",
        title: "",
    }
];

export default function TestimonialSlider() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-[#F2F6F1] py-16 px-4 md:px-8 lg:px-20 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                What Our Community Says
            </h2>
            <p className="text-gray-600 mb-10">
                Hear from those who have embarked on their wellness journey with Sthirr.
            </p>

            <div className="max-w-3xl mx-auto p-2">
                <Slider {...settings}>
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white rounded-4xl shadow p-8 relative text-center">
                            <div className="text-9xl text-gray-300 absolute left-6 top-4">“</div>
                            <p className="text-gray-700 text-lg mb-6 z-10 relative p-10">
                                {t.quote}
                            </p>
                            <div className="text-9xl text-gray-300 absolute right-6 bottom-4">”</div>
                            <div className="z-10 relative">
                                <h4 className="font-semibold text-black">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.title}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
