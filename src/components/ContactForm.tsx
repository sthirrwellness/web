'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, phone: form.phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
        return;
      }

      setStatus('success');
      setForm({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMsg('Unexpected error. Please try again.');
    }
  };

  return (
    <div className="bg-white py-20 px-4 md:px-10 lg:px-20" id='contact'>
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Contact Form</h2>
        <p className="text-gray-500 text-lg">
        Connect with us today and take the first step towards a healthier, balanced you.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[30%_auto] gap-10 mt-20">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name*"
            className="w-full border border-gray-300 rounded px-4 py-3 bg-[#F9F6F1] outline-none"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone*"
            className="w-full border border-gray-300 rounded px-4 py-3 bg-[#F9F6F1] outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            className="w-full border border-gray-300 rounded px-4 py-3 bg-[#F9F6F1] outline-none"
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-3 bg-[#F9F6F1] outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-3 bg-[#F9F6F1] outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-[#38482A] text-white py-3 rounded hover:opacity-90 transition"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Your Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-2">{errorMsg}</p>
          )}
        </form>

        {/* Placeholder image / visual */}
        <div className="flex-1 bg-gray-100 rounded-lg min-h-[400px] flex items-center justify-center">
          <span className="text-gray-400">[Image or Map Placeholder]</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto grid md:grid-cols-3 gap-4 mt-14 text-center">
        <div className="bg-[#F9F6F1] p-6 rounded-xl">
          <div className="text-2xl mb-2">📍</div>
          <h4 className="font-semibold">Sthirr Wellness</h4>
          <p className="text-sm text-gray-600">
            C 904, Arge Urban Bloom, Yeshwanthpur<br />
            Bangalore, 560022<br />
            Near Taj Vivanta
          </p>
        </div>
        <div className="bg-[#F9F6F1] p-6 rounded-xl">
          <div className="text-2xl mb-2">📞</div>
          <h4 className="font-semibold">+91 90196 37045</h4>
          <p className="text-sm text-gray-600">
            Operating hours are from<br />
            9:00 AM to 5:00 PM IST<br />
            (Monday - Saturday)
          </p>
        </div>
        <div className="bg-[#F9F6F1] p-6 rounded-xl">
          <div className="text-2xl mb-2">📧</div>
          <h4 className="font-semibold">Email</h4>
          <p className="text-sm text-gray-600">
            Have a Question?<br />
            Email Us Your Query!<br />
            Sthirrwellness@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
