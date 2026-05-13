"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Open chat"
      >
        💬
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-h-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-brand-900 text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-semibold">Mathias Rentals</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors text-2xl leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-white">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="bg-brand-100 text-text-primary rounded-lg p-3 max-w-xs text-sm">
                  Hi, welcome to Mathias Rentals LLC. Are you looking for a
                  rental, renovation support, or something else?
                </div>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="p-4 border-t border-border space-y-2 bg-white">
            <button className="w-full text-left border border-border rounded-lg p-3 text-sm hover:bg-brand-50 transition-colors">
              Looking for a rental home
            </button>
            <button className="w-full text-left border border-border rounded-lg p-3 text-sm hover:bg-brand-50 transition-colors">
              Need renovation work
            </button>
            <button className="w-full text-left border border-border rounded-lg p-3 text-sm hover:bg-brand-50 transition-colors">
              Property owner services
            </button>
            <button className="w-full text-left border border-border rounded-lg p-3 text-sm hover:bg-brand-50 transition-colors">
              Just exploring
            </button>
          </div>
        </div>
      )}
    </>
  );
}
