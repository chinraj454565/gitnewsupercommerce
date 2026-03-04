"use client";

const relatedArticles = [
    { tag: "B2B ECOMMERCE",         date: "FEBRUARY 12, 2026", title: "Super Commerce: The Best Open-Source Shopify Alternative for an Enterprise Business" },
    { tag: "OPEN-SOURCE ECOMMERCE", date: "FEBRUARY 02, 2026", title: "Super Commerce 5.3: Customer Groups — Segmentation for Personalized Commerce" },
    { tag: "OPEN-SOURCE ECOMMERCE", date: "FEBRUARY 02, 2026", title: "Super Commerce 5.3: New Pricing Engine and Price Lists" },
    { tag: "OPEN-SOURCE ECOMMERCE", date: "JANUARY 27, 2026",  title: "Announcing Super Commerce 5.3 with Price Lists, Customer Groups and Events & Subscribers Engine" },
    { tag: "OPEN-SOURCE ECOMMERCE", date: "DECEMBER 19, 2025", title: "Why VC-Funded Startups Need Source-Available, Self-Hosted eCommerce" },
    { tag: "OPEN-SOURCE ECOMMERCE", date: "DECEMBER 16, 2025", title: "Developer Tools — Productivity Boost for eCommerce Engineering" },
  ];

const projectBox = () => {
  return (
    <div>
      {/* RELATED ARTICLES GRID — 1 col mobile, 2 col sm, 3 col md+ */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-t border-gray-200">
            {relatedArticles.map((article, i) => (
              <div key={i} className="border-r border-b border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[340px] md:min-h-[380px] group cursor-pointer hover:bg-white transition-colors">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="text-[9px] tracking-widest font-semibold text-gray-700 uppercase border border-gray-300 bg-white rounded-full px-2.5 py-1">
                      {article.tag}
                    </span>
                    <span className="text-[9px] tracking-widest text-gray-400 uppercase">{article.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">{article.title}</h3>
                </div>
                <div className="mt-6 sm:mt-8">
                  <span className="text-sm text-gray-500 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default projectBox
