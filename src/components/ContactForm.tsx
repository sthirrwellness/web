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
        <div className="bg-[#F9F6F1] p-6 rounded-xl relative">
          <div className="text-2xl mb-2 flex justify-center absolute">
            <svg width="49" height="65" viewBox="0 0 49 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.248 63.4403C33.6987 55.2933 48.4108 35.5476 48.4108 24.4566C48.4108 11.0052 37.5968 0.0917969 24.2679 0.0917969C10.939 0.0917969 0.125 11.0052 0.125 24.4566C0.125 35.5476 14.8371 55.2933 21.2878 63.4403C22.8344 65.3818 25.7014 65.3818 27.248 63.4403ZM24.2679 16.335C26.4023 16.335 28.4492 17.1907 29.9584 18.7138C31.4677 20.2368 32.3155 22.3026 32.3155 24.4566C32.3155 26.6106 31.4677 28.6763 29.9584 30.1994C28.4492 31.7225 26.4023 32.5782 24.2679 32.5782C22.1335 32.5782 20.0866 31.7225 18.5774 30.1994C17.0681 28.6763 16.2203 26.6106 16.2203 24.4566C16.2203 22.3026 17.0681 20.2368 18.5774 18.7138C20.0866 17.1907 22.1335 16.335 24.2679 16.335Z" fill="#424D31" />
            </svg>
          </div>
          <h4 className="font-semibold text-2xl text-[#424D31]">Sthirr Wellness</h4>
          <p className="text-sm text-gray-600 mt-2">
            C 904, Arge Urban Bloom, Yeshwanthpur<br />
            Bangalore, 560022<br />
            Near Taj Vivanta
          </p>
        </div>
        <div className="bg-[#F9F6F1] p-6 rounded-xl relative">
          <div className="text-2xl mb-2 absolute">
            <svg width="47" height="61" viewBox="0 0 47 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6394 3.74028C19.3202 1.64911 17.4969 0.129718 15.3843 0.183985L5.8024 0.425939C3.90642 0.479346 2.27539 1.78818 1.82393 3.625C-4.38112 28.871 11.0579 54.3725 36.3039 60.5776C38.1407 61.0291 40.0565 60.1906 40.9827 58.5354L45.639 50.1573C46.6664 48.3106 46.1653 45.9908 44.4603 44.7385L35.6672 38.2489C34.1745 37.1462 32.1279 37.1518 30.6516 38.2714L25.2925 42.289C18.9437 37.1251 14.5567 29.8789 12.9243 21.8598L18.9659 18.9838C20.6449 18.1845 21.596 16.384 21.3109 14.5501L19.6369 3.75048L19.6394 3.74028Z" fill="#424D31" />
            </svg>
          </div>
          <h4 className="font-semibold text-2xl text-[#424D31]">+91 90196 37045</h4>
          <p className="text-sm text-gray-600">
            Operating hours are from<br />
            9:00 AM to 5:00 PM IST<br />
            (Monday - Saturday)
          </p>
        </div>
        <div className="bg-[#F9F6F1] p-6 rounded-xl relative">
          <div className="text-2xl mb-2 absolute">
            <svg width="65" height="46" viewBox="0 0 65 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M58.9647 0.120117C62.2989 0.120117 65.0039 2.65819 65.0039 5.78651C65.0039 7.56906 64.1106 9.24537 62.5882 10.3196L35.2106 29.5853C33.7763 30.5888 31.8136 30.5888 30.3793 29.5853L3.00167 10.3196C1.47929 9.24537 0.585999 7.56906 0.585999 5.78651C0.585999 2.65819 3.29105 0.120117 6.62518 0.120117H58.9647ZM65.0039 13.3417V37.8961C65.0039 42.0632 61.393 45.4512 56.9517 45.4512H8.63824C4.19693 45.4512 0.585999 42.0632 0.585999 37.8961V13.3417L27.9636 32.6074C30.8322 34.6261 34.7577 34.6261 37.6263 32.6074L65.0039 13.3417Z" fill="#424D31" />
            </svg>
          </div>
          <h4 className="font-semibold text-2xl text-[#424D31]">Email</h4>
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
