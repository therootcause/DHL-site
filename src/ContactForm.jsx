import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('sending');

      try {
            const res = await fetch('https://f5dco57eqf.execute-api.us-east-1.amazonaws.com/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });

            if (!res.ok) throw new Error('Failed to send');
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
          } catch (err) {
        setStatus('error');
        console.error(err);
      }
    };

  return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-black shadow-md rounded p-6 space-y-4">
        <h2 className="text-xl font-bold">Let’s Talk</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'sent' && <p className="text-green-600">Thanks! We’ll be in touch.</p>}
        {status === 'error' && <p className="text-red-600">Something went wrong. Try again.</p>}
      </form>
    );
}

