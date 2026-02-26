"use client";

import Link from "next/link";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeSolutionsSubmenu, setActiveSolutionsSubmenu] = useState<string>("Capabilities");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "Platform", href: "#", hasPlus: true },
    { name: "Solutions", href: "#", hasPlus: true },
    { name: "Developers", href: "#", hasPlus: true },
    { name: "Documentation", href: "#", hasPlus: true },
    { name: "Enterprise", href: "#", hasPlus: false },
    { name: "Blog", href: "#", hasPlus: false },
  ];

  const megaMenuContent: Record<string, any> = {
    Solutions: {
      leftMenu: [
        { label: "Capabilities", hasArrow: true },
        { label: "Use Cases", hasArrow: true },
        { label: "Project Goals", hasArrow: true },
      ],
      submenus: {
        Capabilities: [
          { text: "Marketplace eCommerce", col: 1, href: "#" },
          { text: "Omnichannel eCommerce", col: 1, href: "#" },
          { text: "Multi-warehouse eCommerce", col: 1, href: "#" },
          { text: "Multi-store eCommerce", col: 1, href: "#" },
          { text: "Multi-tenant eCommerce", col: 1, href: "#" },
          { text: "Multi-region eCommerce", col: 2, href: "#" },
          { text: "Member-only eCommerce", col: 2, href: "#" },
          { text: "Digital product sales", col: 2, href: "#" },
          { text: "Headless eCommerce", col: 2, href: "#" },
        ],
        "Use Cases": [
          { text: "B2B eCommerce", col: 1, href: "#" },
          { text: "B2B & DTC eCommerce", col: 1, href: "#" },
          { text: "DTC eCommerce", col: 1, href: "#" },
          { text: "Wholesale eCommerce", col: 1, href: "#" },
          { text: "Business Equipment or Supplies", col: 1, href: "#" },
          { text: "CBD eCommerce", col: 1, href: "#" },
        ],
        "Project Goals": [
          { text: "Migrating from a SaaS", col: 1, href: "#" },
          { text: "Migrating from legacy eCommerce", col: 1, href: "#" },
          { text: "A new eCommerce project", col: 1, href: "#" },
          { text: "Older Spree version upgrade", col: 1, href: "#" },
        ],
      },
    },
    Platform: {
      sections: [
        {
          items: [
            {
              icon: "/images/features.svg",
              title: "Features",
              subtitle: "Customer- & Admin-facing",
              href: "/platform/features",
            },
            {
              icon: "/images/integrations.svg",
              title: "Integrations",
              subtitle: "Everything your eCommerce needs",
              href: "/platform/integrations",
            },
            {
              icon: "/images/demo.svg",
              title: "Demo",
              subtitle: "Check out a live Super site",
              href: "/platform/demo",
            },
            {
              icon: "/images/success_stories.svg",
              title: "Success Stories",
              subtitle: "5000+ businesses using Super",
              href: "/platform/success-stories",
            },
          ],
        },
      ],
    },
    Developers: {
      sections: [
        {
          items: [
            {
              icon: "/images/developers.svg",
              title: "Super for Developers",
              subtitle: "Quick links to all the resources",
              href: "/developers",
            },
            {
              icon: "/images/github.svg",
              title: "Github",
              subtitle: "Get the source code",
              href: "https://github.com/spree",
            },
            {
              icon: "/images/slack.svg",
              title: "Slack",
              subtitle: "Join the Super community",
              href: "#",
            },
            {
              icon: "/images/releases.svg",
              title: "Changelog",
              subtitle: "Check out the latest",
              href: "/developers/changelog",
            },
          ],
        },
      ],
    },
    Documentation: {
      sections: [
        {
          items: [
            {
              icon: "/images/Dev_Guide.svg",
              title: "Developer docs",
              subtitle: "Everything you need to know",
              href: "/documentation/developer-docs",
            },
            {
              icon: "/images/API.svg",
              title: "Ecommerce API",
              subtitle: "For headless applications or mobile apps",
              href: "/documentation/api",
            },
            {
              icon: "/images/Dev_Guide.svg",
              title: "User docs",
              subtitle: "What is Super Commerce? What editions are there?",
              href: "/documentation/user-docs",
            },
            {
              icon: "/images/integrations.svg",
              title: "Integrations",
              subtitle: "Everything your eCommerce needs",
              href: "/platform/integrations",
            },
            {
              icon: "/images/use-cases.svg",
              title: "Use Cases",
              subtitle: "Marketplace, Multi-tenant, B2B eCommerce",
              href: "#",
            },
          ],
        },
      ],
    },
  };

  const handleNavClick = (itemName: string) => {
    if (megaMenuContent[itemName]) {
      if (activeMegaMenu === itemName) {
        setActiveMegaMenu(null);
        setActiveSolutionsSubmenu("Capabilities");
      } else {
        setActiveMegaMenu(itemName);
        setActiveSolutionsSubmenu("Capabilities");
      }
    } else {
      setActiveMegaMenu(null);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ── Announcement Bar ── */}
      {announcementVisible && (
        <div
          className="relative w-full h-10 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#0d0d0d" }}
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
              <span className="font-bold">Super 5.3:</span>
              <span className="font-normal">
                {" "}
                Price Lists, Customer Groups, Events & Subscribers Engine
              </span>
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
      <div className="w-full bg-[#F7F7F6] border-b border-gray-200 relative">
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
              )}
            </button>

            {/* Logo + Nav */}
            <div className="flex items-center gap-8 lg:flex-1">
              <Link href="/" className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-900"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
                <span className="text-xl md:text-2xl font-bold text-gray-900">
                  super
                </span>
              </Link>

              {/* Desktop Nav - Pill */}
              <nav className="hidden lg:flex items-center bg-[#E8E8E8] rounded-full px-2 py-1.5">
                {navItems.map((item) => {
                  const hasMegaMenu = megaMenuContent[item.name];
                  const isActive = activeMegaMenu === item.name;
                  const className = `px-4 py-2 text-[14px] text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    isActive ? "bg-white" : ""
                  }`;

                  if (hasMegaMenu) {
                    return (
                      <div key={item.name} className="relative">
                        <button
                          onClick={() => handleNavClick(item.name)}
                          className={className}
                        >
                          {item.name}
                          {item.hasPlus && (
                            <span className="text-[16px] font-light">
                              {isActive ? "×" : "+"}
                            </span>
                          )}
                        </button>
                        
                        {/* Mega Menu for this specific item */}
                        {isActive && (
                          <div className="absolute left-0 top-full mt-4 z-50">
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                              <div className="flex">
                                {/* Solutions Menu - with Left Sidebar */}
                                {item.name === "Solutions" && (
                                  <>
                                    {/* Left Menu */}
                                    <div className="w-52 border-r border-gray-200 p-4 bg-gray-50">
                                      {megaMenuContent.Solutions.leftMenu.map(
                                        (menuItem: any) => (
                                          <button
                                            key={menuItem.label}
                                            onClick={() =>
                                              setActiveSolutionsSubmenu(menuItem.label)
                                            }
                                            className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white rounded-lg transition-colors group mb-2 ${
                                              activeSolutionsSubmenu === menuItem.label
                                                ? "bg-white"
                                                : ""
                                            }`}
                                          >
                                            <span className="text-sm font-medium text-gray-900">
                                              {menuItem.label}
                                            </span>
                                            {menuItem.hasArrow && (
                                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                                            )}
                                          </button>
                                        )
                                      )}
                                    </div>

                                    {/* Right Content - Two Columns */}
                                    <div className="w-[500px] p-6">
                                      <div className="grid grid-cols-2 gap-x-8">
                                        {/* Column 1 */}
                                        <div className="space-y-1">
                                          {megaMenuContent.Solutions.submenus[
                                            activeSolutionsSubmenu
                                          ]
                                            ?.filter((subItem: any) => subItem.col === 1)
                                            .map((subItem: any, idx: number) => (
                                              <Link
                                                key={idx}
                                                href={subItem.href}
                                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                                                onClick={() => setActiveMegaMenu(null)}
                                              >
                                                {subItem.text}
                                              </Link>
                                            ))}
                                        </div>

                                        {/* Column 2 */}
                                        <div className="space-y-1">
                                          {megaMenuContent.Solutions.submenus[
                                            activeSolutionsSubmenu
                                          ]
                                            ?.filter((subItem: any) => subItem.col === 2)
                                            .map((subItem: any, idx: number) => (
                                              <Link
                                                key={idx}
                                                href={subItem.href}
                                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                                                onClick={() => setActiveMegaMenu(null)}
                                              >
                                                {subItem.text}
                                              </Link>
                                            ))}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {/* Platform, Developers, Documentation */}
                                {(item.name === "Platform" ||
                                  item.name === "Developers" ||
                                  item.name === "Documentation") && (
                                  <div className="w-[400px] p-6">
                                    {megaMenuContent[item.name].sections.map(
                                      (section: any, idx: number) => (
                                        <div key={idx} className="space-y-1">
                                          {section.items.map((menuItem: any, itemIdx: number) => (
                                            <Link
                                              key={itemIdx}
                                              href={menuItem.href}
                                              onMouseEnter={() => setHoveredItem(menuItem.title)}
                                              onMouseLeave={() => setHoveredItem(null)}
                                              className="group flex items-start gap-3 px-3 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                                              onClick={() => setActiveMegaMenu(null)}
                                            >
                                              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                                                <img
                                                  src={menuItem.icon}
                                                  alt={menuItem.title}
                                                  className="w-5 h-5 object-contain"
                                                />
                                              </div>

                                              <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2">
                                                  <h4 className="font-semibold text-gray-900 text-sm">
                                                    {menuItem.title}
                                                  </h4>
                                                  {hoveredItem === menuItem.title && (
                                                    <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                                                  )}
                                                </div>
                                                <p className="text-xs text-gray-600 mt-0.5">
                                                  {menuItem.subtitle}
                                                </p>
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={className}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })}
              </nav>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-[#E8E8E8] rounded-full text-gray-600 hover:text-gray-900 hover:bg-[#d8d8d8] transition-colors"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
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
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[14px] font-semibold">15k</span>
              </Link>
            </div>

            {/* Tablet Right Side */}
            <div className="hidden md:flex lg:hidden items-center gap-3">
              <button
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <Link
                href="https://github.com/spree"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 bg-white px-3 py-1.5 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
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
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold">15k</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - same as before but with navigation */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-[#E8E8E8] z-40 overflow-y-auto" 
          style={{ top: announcementVisible ? '106px' : '66px' }}
        >
          <div className="px-5 py-6 space-y-3 pb-32">
            {/* Search Bar */}
            <div className="relative mb-4">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-gray-900 placeholder-gray-500 text-base border-0 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Navigation Items */}
            {navItems.map((item) => {
              const hasMegaMenu = megaMenuContent[item.name];
              const isActive = activeMegaMenu === item.name;
              
              return (
                <div key={item.name}>
                  <button
                    className={`w-full flex items-center justify-between px-5 py-4 bg-white rounded-xl text-gray-900 text-left hover:bg-gray-50 transition-colors ${
                      isActive ? 'border-2 border-blue-500' : ''
                    }`}
                    onClick={() => {
                      if (hasMegaMenu) {
                        handleNavClick(item.name);
                      }
                    }}
                  >
                    <span className="text-[17px] font-normal">{item.name}</span>
                    {item.hasPlus && (
                      <span className="text-[24px] font-light text-gray-600">
                        {isActive ? '×' : '+'}
                      </span>
                    )}
                  </button>

                  {/* Mobile Mega Menu Content */}
                  {isActive && hasMegaMenu && (
                    <div className="mt-3 bg-white rounded-xl p-4">
                      {/* Solutions Menu */}
                      {item.name === "Solutions" && (
                        <div className="space-y-4">
                          {megaMenuContent.Solutions.leftMenu.map((menuItem: any) => (
                            <div key={menuItem.label}>
                              <button
                                onClick={() => setActiveSolutionsSubmenu(menuItem.label)}
                                className={`w-full text-left px-3 py-2 rounded-lg font-medium text-sm ${
                                  activeSolutionsSubmenu === menuItem.label
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700'
                                }`}
                              >
                                {menuItem.label}
                              </button>
                              
                              {activeSolutionsSubmenu === menuItem.label && (
                                <div className="mt-2 ml-2 space-y-1">
                                  {megaMenuContent.Solutions.submenus[menuItem.label]?.map(
                                    (subItem: any, idx: number) => (
                                      <Link
                                        key={idx}
                                        href={subItem.href}
                                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setActiveMegaMenu(null);
                                        }}
                                      >
                                        {subItem.text}
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Platform, Developers, Documentation Menus */}
                      {(item.name === "Platform" ||
                        item.name === "Developers" ||
                        item.name === "Documentation") && (
                        <div className="space-y-2">
                          {megaMenuContent[item.name].sections[0].items.map(
                            (menuItem: any, idx: number) => (
                              <Link
                                key={idx}
                                href={menuItem.href}
                                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setActiveMegaMenu(null);
                                }}
                              >
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                                  <img
                                    src={menuItem.icon}
                                    alt={menuItem.title}
                                    className="w-5 h-5 object-contain"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 text-sm">
                                    {menuItem.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-0.5">
                                    {menuItem.subtitle}
                                  </p>
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Get Started Button */}
            <Link
              href="#"
              className="block bg-[#D4E3F3] text-gray-900 text-center py-4 rounded-xl font-semibold hover:bg-[#c5d9ed] transition-colors mt-6 text-[16px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started
            </Link>
          </div>

          {/* Chat Button */}
          <button
            className="fixed bottom-8 right-6 w-16 h-16 bg-[#44566c] rounded-full flex items-center justify-center shadow-lg hover:bg-[#354556] transition-colors z-50"
            aria-label="Chat"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}