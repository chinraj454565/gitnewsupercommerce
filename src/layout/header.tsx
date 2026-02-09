"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Fixed: Added 'sticky top-0 z-50 bg-white' to make it static/sticky
    <header className="w-full font-sans sticky top-0 z-50 bg-white shadow-sm">
      {/* 1. Announcement Bar */}
      <div className="w-full bg-black text-white py-2 px-4 flex justify-center items-center text-xs md:text-sm font-medium border-b border-gray-800">
        <Link
          href="#"
          className="flex items-center hover:opacity-80 transition-opacity text-center"
        >
          <span className="font-bold mr-1 whitespace-nowrap">Spree 5.3:</span>
          <span className="truncate">
            Price Lists, Customer Groups & Subscribers
          </span>
          <svg
            className="ml-2 w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="https://spreecommerce.org/wp-content/themes/spree/images/logo.svg"
            alt="Spree Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center bg-gray-100 rounded-full px-6 py-2 space-x-6 text-sm font-medium text-gray-700">
          {["Platform", "Solutions", "Developers", "Documentation"].map(
            (item) => (
              <button
                key={item}
                className="flex items-center hover:text-black whitespace-nowrap"
              >
                {item} <span className="ml-1 text-xs text-gray-400">+</span>
              </button>
            ),
          )}
          <Link href="#" className="hover:text-black">
            Enterprise
          </Link>
          <Link href="#" className="hover:text-black">
            Blog
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Desktop Search */}
          <div className="hidden xl:flex items-center bg-gray-100 rounded-full px-4 py-2 text-gray-400 w-40">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-sm">Search</span>
          </div>

          <Link
            href="#"
            className="hidden sm:block bg-blue-100 text-blue-700 px-5 py-2 rounded-lg font-bold hover:bg-blue-200 transition-colors whitespace-nowrap"
          >
            Get started
          </Link>

          {/* GitHub Stars */}
          <Link
            href="#"
            className="flex items-center space-x-2 border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span className="font-bold text-sm">15k</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-4 text-gray-700 font-medium">
            <button className="text-left py-2 border-b border-gray-50">
              Platform
            </button>
            <button className="text-left py-2 border-b border-gray-50">
              Solutions
            </button>
            <button className="text-left py-2 border-b border-gray-50">
              Developers
            </button>
            <button className="text-left py-2 border-b border-gray-50">
              Documentation
            </button>
            <Link href="#" className="py-2 border-b border-gray-50">
              Enterprise
            </Link>
            <Link href="#" className="py-2 border-b border-gray-50">
              Blog
            </Link>
            <Link
              href="#"
              className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
