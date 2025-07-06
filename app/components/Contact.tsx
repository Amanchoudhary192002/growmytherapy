'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  type FormErrors = {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    preferredTime?: string;
    agree?: string;
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors: any = {};

    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (!form.email || !form.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!form.message) newErrors.message = 'Please tell us what brings you here';
    if (!form.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!form.agree) newErrors.agree = 'You must agree to be contacted';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully!");
    // You could send this data to your backend or external service
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>

        {/* Contact Info */}
        <div className="bg-white rounded-xl p-6 mb-10 shadow">
          <p><strong>📞 Phone:</strong> (323) 555-0192</p>
          <p><strong>📧 Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline">serena@blakepsychology.com</a></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-semibold">In-Person Hours</h4>
              <p>Tue & Thu, 10 AM – 6 PM</p>
            </div>
            <div>
              <h4 className="font-semibold">Virtual via Zoom</h4>
              <p>Mon, Wed & Fri, 1 PM – 5 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-6">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold">Phone</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold">What brings you here?</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Preferred time to reach you</label>
            <input
              name="preferredTime"
              type="text"
              value={form.preferredTime}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.preferredTime && <p className="text-red-600 text-sm">{errors.preferredTime}</p>}
          </div>

          <div className="flex items-center">
            <input
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to be contacted</label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm">{errors.agree}</p>}

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
