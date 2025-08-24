// app/components/NotificationModal.tsx

'use client';

import { useState, FormEvent } from 'react';

interface NotificationModalProps {
  onClose: () => void;
}

export default function NotificationModal({ onClose }: NotificationModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{text: string; type: 'success' | 'error'} | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage({
        text: 'Thank you! We will notify you soon.',
        type: 'success'
      });
      
      // Clear form and close modal after 2 seconds
      setTimeout(() => {
        setEmail('');
        setPhone('');
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
        <h2 className="text-2xl font-serif text-[#424D31] mb-4 text-center">Get Notified</h2>
        <p className="text-center text-gray-600 mb-6">
          Be the first to know when we go live.
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#424D31] focus:border-[#424D31] sm:text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#424D31] focus:border-[#424D31] sm:text-sm" placeholder="(+91) 1234567890" />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#424D31] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#424D31] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Notify Me'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}