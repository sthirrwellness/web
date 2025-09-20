'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
    // const handleScroll = () => {
    //   const offset = window.scrollY;
    //   if (offset > 50) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };

    // window.addEventListener('scroll', handleScroll);
    // return () => {
      // window.removeEventListener('scroll', handleScroll);
    // };
  // }, []);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside or pressing Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#424D31] py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-20">
            <div className="h-12 w-32 relative">
              <Image 
                src="/images/logo.svg"
                alt="Sthirr Wellness Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-[#CEC2AE] hover:text-[#AD8252] transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-[#CEC2AE] hover:text-[#AD8252] transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-[#CEC2AE] hover:text-[#AD8252] transition-colors font-medium">
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="bg-[#424D31] text-[#CEC2AE] px-6 py-2 border-1 border-[#AD8252] rounded-full hover:bg-[#AD8252] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#CEC2AE] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div 
              ref={menuRef}
              className="mobile-menu-container fixed inset-0 bg-[#424D31] z-10 flex flex-col items-center justify-center space-y-8 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <Link 
                href="/about" 
                className="text-2xl text-[#CEC2AE] hover:text-[#AD8252] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-2xl text-[#CEC2AE] hover:text-[#AD8252] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-2xl text-[#CEC2AE] hover:text-[#AD8252] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/book-now" 
                className="bg-[#424D31] text-[#CEC2AE] px-8 py-3 border-1 border-[#AD8252] rounded-full hover:bg-[#AD8252] transition-colors font-medium text-lg mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
