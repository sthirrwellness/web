'use client';

import { useState, FormEvent } from 'react';

interface RegisterModalProps {
  onClose: () => void;
  wellnessPlan?: string;
}

export default function RegisterModal({ onClose, wellnessPlan }: RegisterModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, plan: wellnessPlan }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage({
        text: 'Thank you! We will contact you soon.',
        type: 'success'
      });

      setTimeout(() => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage(null);
        onClose();
      }, 2000);

    } catch (error) {
      setMessage({
        text: error instanceof Error ? error.message : 'Failed to submit. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-serif text-[#424D31] mb-4 text-center">Enroll For <span className='font-semibold'>{wellnessPlan}</span></h2>
        <p className="text-center text-gray-600 mb-6">
          We'll contact you via email or WhatsApp when you signup.
        </p>

        {message && (
          <div className={`mb-4 p-3 rounded-md ${message.type === 'success'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#424D31] focus:border-[#424D31] sm:text-sm" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#424D31] focus:border-[#424D31] sm:text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (WhatsApp)</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#424D31] focus:border-[#424D31] sm:text-sm" placeholder="(+91) 1234567890" />
          </div>
          <div>
            <label htmlFor="plan" className="block text-sm font-medium text-gray-700">Wellness Plan</label>
            <input type="text" disabled value={wellnessPlan} className="mt-1 block w-full px-3 py-2 text-gray-500 border border-gray-300 cursor-not-allowed rounded-md shadow-sm focus:outline-none focus:ring-[#424D31] focus:border-[#424D31] sm:text-sm" />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm cursor-pointer font-medium text-white bg-[#424D31] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#424D31] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Register Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}