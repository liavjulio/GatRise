'use client';

import { useState } from 'react';

interface ContactFormProps {
  readonly className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    
    if (!name || !phone) {
      setMessage('אנא מלא את כל השדות');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('תודה רבה! הפרטים שלך נשלחו למערכת. נחזור אליך בהקדם.');
        (e.target as HTMLFormElement).reset();
        
        // Details are sent directly to business owner's WhatsApp via API
        // Customer stays on the page, no redirect needed
      } else {
        setMessage(data.error || 'שגיאה בשליחת הפרטים');
      }
    } catch (error) {
      setMessage('שגיאה בשליחת הפרטים. אנא נסה שוב.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      {message && (
        <div className={`mb-4 p-4 rounded-lg text-center ${
          isSuccess 
            ? 'bg-green-100 border border-green-300 text-green-800' 
            : 'bg-red-100 border border-red-300 text-red-800'
        }`}>
          {message}
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="שם מלא"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-900 text-base md:text-lg text-right placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="טלפון"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-900 text-base md:text-lg text-right placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '🔄 שולח פרטים...' : '� השאר פרטים'}
        </button>
      </form>
    </div>
  );
}
