import React from 'react'

const CTACard = () => {
  return (
    <div>
        <div className="rounded-2xl p-5 sm:p-7 mb-10 border border-gray-200"
          style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 30%, #f5f8ff 60%, #ffffff 100%)" }}>
          <div className="mb-4">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path d="M14 2C14 2 4 8 4 18a10 10 0 0016.9 7.2" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M14 2c0 0 10 6 10 16a10 10 0 01-3.1 7.2" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M14 30V14" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M14 20l-5-4" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M14 24l4-4" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <p className="text-gray-800 text-base font-medium leading-snug sm:max-w-xs">
              Let&apos;s use Super to build exactly what your business needs
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-black transition-colors flex-1 sm:flex-none">
                Get started
              </button>
              <button className="bg-white text-gray-800 text-sm font-medium px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
                See demo
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CTACard;