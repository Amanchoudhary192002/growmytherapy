'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom."
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <button
              className="w-full text-left font-medium"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}