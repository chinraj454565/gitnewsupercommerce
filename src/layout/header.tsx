"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const navItems = [
    { name: "Platform", href: "#", hasPlus: true },
    { name: "Solutions", href: "#", hasPlus: true },
    { name: "Developers", href: "#", hasPlus: true },
    { name: "Documentation", href: "#", hasPlus: true },
    { name: "Enterprise", href: "#", hasPlus: false },
    { name: "Blog", href: "#", hasPlus: false },
  ];

  return (
    <header className="w-full sticky top-0 z-50">

      {/* ── Announcement Bar ── */}
      {announcementVisible && (
        <div
          className="relative w-full h-10 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#0d0d0d' }}
        >
          {/* Diagonal stripe pattern - left side */}
          <div
            className="absolute left-0 top-0 h-full w-64 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 4px,
                rgba(255,255,255,0.3) 4px,
                rgba(255,255,255,0.3) 6px
              )`,
            }}
          />

          {/* Diagonal stripe pattern - right side */}
          <div
            className="absolute right-0 top-0 h-full w-64 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 4px,
                rgba(255,255,255,0.3) 4px,
                rgba(255,255,255,0.3) 6px
              )`,
            }}
          />

          {/* Announcement Text */}
          <Link
            href="#"
            className="relative z-10 flex items-center gap-2 text-white text-[13px] hover:opacity-80 transition-opacity"
          >
            <span>
              <span className="font-bold">Spree 5.3:</span>
              <span className="font-normal"> Price Lists, Customer Groups, Events & Subscribers Engine</span>
            </span>
            {/* Arrow icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* ── Main Nav ── */}
      <div className="w-full bg-[#F7F7F6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-900 hover:text-gray-700 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={32} strokeWidth={2.5} />
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
              )}
            </button>

            {/* Logo + Nav */}
            <div className="flex items-center gap-8 lg:flex-1">
              <Link href="/" className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
                <span className="text-xl md:text-2xl font-bold text-gray-900">super</span>
              </Link>

              {/* Desktop Nav - Pill */}
              <nav className="hidden lg:flex items-center bg-[#E8E8E8] rounded-full px-2 py-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-[14px] text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-colors flex items-center gap-1.5 whitespace-nowrap"
                  >
                    {item.name}
                    {item.hasPlus && <span className="text-[14px]">+</span>}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-[#E8E8E8] rounded-full text-gray-600 hover:text-gray-900 hover:bg-[#d8d8d8] transition-colors"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <span className="text-[14px] text-gray-600">Search</span>
              </button>

              <Link
                href="#"
                className="px-6 py-2 bg-[#D4E3F3] text-gray-900 rounded-full font-semibold hover:bg-[#c5d9ed] transition-colors text-[14px] whitespace-nowrap"
              >
                Get started
              </Link>

              <Link
                href="https://github.com/spree"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-[14px] font-semibold">15k</span>
              </Link>
            </div>

            {/* Tablet Right Side */}
            <div className="hidden md:flex lg:hidden items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-gray-900" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <Link
                href="https://github.com/spree"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 bg-white px-3 py-1.5 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">15k</span>
              </Link>
            </div>

            {/* Mobile Right Side */}
            <Link
              href="https://github.com/spree"
              className="md:hidden flex items-center gap-2 text-gray-700 bg-white px-3 py-1.5 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">15k</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#f5f5f5] z-40 overflow-y-auto">
          <div className="px-5 py-6 space-y-3 pb-32 max-w-2xl mx-auto">
            <div className="relative mb-4">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-14 pr-4 py-4 bg-[#e8e8e8] rounded-xl text-gray-900 placeholder-gray-500 text-base border-0 focus:outline-none focus:ring-0"
              />
            </div>

            {navItems.map((item) => (
              <button
                key={item.name}
                className="w-full flex items-center justify-between px-4 py-4 bg-[#e8e8e8] rounded-xl text-gray-900 font-normal text-left hover:bg-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-lg">{item.name}</span>
                {item.hasPlus && <span className="text-2xl font-light">+</span>}
              </button>
            ))}

            <Link
              href="#"
              className="block bg-[#d4e3f3] text-gray-900 text-center py-4 rounded-xl font-semibold hover:bg-[#c5d9ed] transition-colors mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started
            </Link>
          </div>

          <button
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#44566c] rounded-full flex items-center justify-center shadow-lg hover:bg-[#354556] transition-colors z-50"
            aria-label="Chat"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}