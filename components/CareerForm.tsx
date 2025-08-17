"use client";
import { useState } from "react";

export const CareerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

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
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="text-gray-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="text-gray-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="text-gray-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="text-gray-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="text-gray-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Resume
        </label>
        <input
          type="file"
          name="resume"
          id="resume"
          required
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <p className="text-xs text-gray-500 mt-1">
          Accepted formats: PDF, DOC, DOCX.
        </p>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto inline-flex justify-center py-3 px-8 border border-blue-800 rounded-full shadow-sm text-sm font-medium text-blue-800 bg-white hover:bg-blue-50 disabled:bg-gray-100"
        >
          {isSubmitting ? "Submitting..." : "APPLY NOW"}
        </button>
      </div>
      {responseMessage && (
        <p className="text-center text-sm font-medium text-black mt-4">
          {responseMessage}
        </p>
      )}
    </form>
  );
};
