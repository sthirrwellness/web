"use client"

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#364230] text-gray-100 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            {/* Replace with your logo */}
            <img src="/logo.png" alt="Sthirr Logo" className="h-10 w-10" />
            <span className="text-lg font-semibold tracking-wide">
              STHIRR WELLNESS
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Living with steadiness, awareness, and inner strength through
            holistic wellness practices.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Yoga & Meditation</li>
            <li>Sound Healing</li>
            <li>Holistic Nutrition</li>
            <li>Life Skills Coaching</li>
            <li>Naturopathy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MdPhone /> <span>+91 8628376769</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdLocationOn /> <span>Thane & Mumbai</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail /> <span>hello@sthirr.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 px-6">
        <p>© 2025 Sthirr. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}