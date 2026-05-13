"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, send to an API endpoint
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
          Thank you! We've received your enquiry. Someone from our team will
          be in touch within 24 hours.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="enquiry-type" className="block text-sm font-semibold text-text-primary mb-2">
          I'm enquiring about... *
        </label>
        <select
          id="enquiry-type"
          name="enquiry-type"
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option value="">Select an option</option>
          <option value="rental">Rental Home</option>
          <option value="renovation">Renovation Services</option>
          <option value="property-management">Property Management</option>
          <option value="property-owner">Property Owner Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us more about your needs..."
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
        />
      </div>

      <div>
        <label htmlFor="contact-preference" className="block text-sm font-semibold text-text-primary mb-2">
          Preferred contact method *
        </label>
        <select
          id="contact-preference"
          name="contact-preference"
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option value="">Select an option</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="both">Both</option>
        </select>
      </div>

      <Button type="submit" variant="primary" fullWidth size="lg">
        Send Enquiry
      </Button>
    </form>
  );
}
