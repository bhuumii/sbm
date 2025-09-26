"use client";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed! Check your email for confirmation.');
        setEmail(''); 
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
        isDark ? "text-white" : "text-gray-900"
      }`}>
        Stay Updated
      </h2>
      <p className={`text-xl mb-8 font-light ${
        isDark ? "text-gray-300" : "text-gray-600"
      }`}>
        Get the latest insights and industry updates delivered to your inbox
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className={`flex-1 px-6 py-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 ${
              isDark 
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
            }`}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-900 transition-colors duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {message && (
          <div className={`text-center p-3 rounded-lg ${
            status === 'success' 
              ? isDark
                ? 'bg-green-900 text-green-300 border border-green-700'
                : 'bg-green-100 text-green-800'
              : isDark
                ? 'bg-red-900 text-red-300 border border-red-700'
                : 'bg-red-100 text-red-800'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
