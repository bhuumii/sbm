'use client';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const CareerFormClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send application.");
      }

      setResponseMessage(
        "Thank you! Your application has been sent successfully.",
      );
      (event.target as HTMLFormElement).reset();
    } catch (error: any) {
      setResponseMessage(
        error.message || "An error occurred. Please try again.",
      );
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className={`block text-sm font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark 
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className={`block text-sm font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark 
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark 
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className={`block text-sm font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark 
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className={`block text-sm font-medium ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDark 
              ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" 
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="resume"
          className={`block text-sm font-medium ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Upload Resume
        </label>
        <input
          type="file"
          name="resume"
          id="resume"
          required
          accept=".pdf,.doc,.docx"
          className={`mt-1 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold transition-colors ${
            isDark 
              ? "text-gray-400 file:bg-gray-700 file:text-blue-400 hover:file:bg-gray-600" 
              : "text-gray-500 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          }`}
        />
        <p className={`text-xs mt-1 ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}>
          Accepted formats: PDF, DOC, DOCX.
        </p>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto inline-flex justify-center py-3 px-8 border rounded-full shadow-sm text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${
            isDark 
              ? "border-blue-400 text-blue-400 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-800" 
              : "border-blue-800 text-blue-800 bg-white hover:bg-blue-50 disabled:bg-gray-100"
          }`}
        >
          {isSubmitting ? "Submitting..." : "APPLY NOW"}
        </button>
      </div>
      {responseMessage && (
        <p className={`text-center text-sm font-medium mt-4 ${
          responseMessage.includes("successfully") 
            ? isDark ? "text-green-400" : "text-green-600"
            : isDark ? "text-red-400" : "text-red-600"
        }`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
};
