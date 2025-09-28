'use client';

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiHeart, FiTarget, FiUserCheck } from "react-icons/fi";
import RegisterModal from "./RegisterModal";

export default function WellnessPlans() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [wellnessPlan, setWellnessPlan] = useState('Sthir Intro Starter');
    const plans = [
        {
            title: 'Sthir Intro Starter',
            price: '₹6,000',
            originalPrice: '₹7,500',
            duration: '1 month welcome plan',
            features: [
                '4 Group Yoga Sessions',
                '2 Group Sound Healing Circle',
                '1 Diet & Naturopathy Consult (First)',
                '1 Group Pranayama + Meditation Session',
            ],
            button: 'Enroll Now',
            buttonColor: 'bg-[#111827]',
            highlight: false,
        },
        {
            title: 'Hormonal Harmony',
            price: '₹6,000',
            originalPrice: '₹7,500',
            duration: 'Women-Focused — 4 Weeks',
            features: [
                '8 Women\'s Group Yoga',
                '1 Diet & Naturopathy Consult (includes hormonal food mapping)',
                '1 Group Sound Healing',
                '1 Life Coaching (emotional support + rhythm building)',
            ],
            button: 'Enroll Now',
            buttonColor: 'bg-[#424D31]',
            highlight: true, // mark as popular
        },
        {
            title: 'Gut Restore Package',
            price: '₹5,000',
            originalPrice: '₹6,500',
            duration: '4 Weeks',
            features: [
                '1 Diet & Naturopathy Consult',
                '1 Follow-up Consult',
                '2 Group Yoga',
                '2 Group Pranayama + Meditation',
                '1 Herbal Gut Cleanse Protocol',
            ],
            button: 'Enroll Now',
            buttonColor: 'bg-[#111827]',
            highlight: false,
        },
    ];

    return (
        <section className="py-20 bg-[#F9F8F5]" id="plans">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                    Choose Your Wellness Journey
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Discover our introductory wellness packages designed to kickstart your health transformation
                </p>

                {/* Top Info Box */}
                <div className="mt-10 bg-[#424D31] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 text-white text-left relative overflow-hidden">
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-2">
                            <FiTarget className="text-xl text-white" />
                            <span>Personalized Approach</span>
                        </div>
                        <h3 className="text-2xl font-bold mt-4">Customized Wellness Plans</h3>
                        <p className="mt-3 text-white text-sm">
                            We provide fully personalized wellness plans, carefully designed to align
                            with your individual health goals and lifestyle.
                        </p>
                        <button className="mt-5 bg-white text-[#424D31] font-medium px-5 py-2 rounded-full text-sm hover:bg-[#AD8252] hover:text-white transition flex items-center gap-2">
                            <a href="#contact">Get Your Custom Plan →</a>
                        </button>
                    </div>

                    {/* Right side */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-md bg-[#FFFFFF33]">
                                <FiUserCheck className="text-xl text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Individual Assessment</h4>
                                <p className="text-white text-sm">
                                    Comprehensive health evaluation and goal mapping.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-md bg-[#FFFFFF33]">
                                <FiHeart className="text-xl text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Tailored Solutions</h4>
                                <p className="text-white text-sm">
                                    Personalized nutrition, exercise, and wellness protocols.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-md bg-[#FFFFFF33]">
                                <FiTarget className="text-xl text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Ongoing Support</h4>
                                <p className="text-white text-sm">
                                    Regular check-ins and plan adjustments as you progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plans */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md relative ${plan.highlight ? 'border-2 border-[#059669] shadow-lg' : 'border border-gray-200 h-fit'
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#424D31] text-white text-md px-3 py-1 rounded-full flex items-center gap-1 w-24">
                                    <FaStar className="text-white text-md" /> Popular
                                </span>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
                            <div className="flex justify-center items-center gap-2 mt-3">
                                <span className="text-xs font-medium text-[#059669] bg-[#ECFDF5] px-2 py-1 rounded-full" style={{
                                    fontFamily: 'Poppins'
                                }}>
                                    INTRODUCTORY PRICING
                                </span>
                            </div>
                            <p className="mt-1 text-md font-medium text-[#059669]" style={{
                                fontFamily: 'Poppins'
                            }}>{plan.duration}</p>

                            <div className="mt-4 grid">

                                {plan.originalPrice && (
                                    <span className="text-sm text-gray-400 line-through mr-2" style={{
                                        fontFamily: 'Poppins'
                                    }}>
                                        {plan.originalPrice}
                                    </span>
                                )}
                                <span className="text-2xl font-bold text-gray-900" style={{
                                    fontFamily: 'Poppins'
                                }}>
                                    {plan.price}
                                </span>
                            </div>

                            <ul className="mt-4 space-y-2 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                                        <FaCheckCircle className="text-[#D1FAE5] text-xl" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`mt-6 w-full  text-white py-2 px-4 rounded-xl transition ${plan.buttonColor} cursor-pointer`}
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setWellnessPlan(plan.title);
                                }}
                            >
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && <RegisterModal onClose={() => setIsModalOpen(false)} wellnessPlan={wellnessPlan} />}
        </section>
    );
}
