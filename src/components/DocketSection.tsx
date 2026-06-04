import { SITE } from "@/config/site";

export function DocketSection() {
  return (
    <section className="relative bg-navy-900 py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">Season One</span>
          <hr className="rule-crimson flex-1 max-w-xs" />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-100 leading-tight mb-4 max-w-2xl">
          The docket is open.{" "}
          <span className="text-crimson-600">Court convenes soon.</span>
        </h2>
        <p className="text-navy-300 text-lg leading-relaxed max-w-xl mb-16">
          Four cases. Four famous films you think you know. Four verdicts we're
          asking you to reconsider.
        </p>

        {/* Docket table */}
        <div className="border border-navy-700 rounded-sm overflow-hidden">

          {/* Table header */}
          <div className="grid grid-cols-[3rem_1fr_auto] gap-4 px-6 py-3 bg-navy-800 border-b border-navy-700">
            <span className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-navy-500 uppercase">Case</span>
            <span className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-navy-500 uppercase">Title</span>
            <span className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-navy-500 uppercase">Status</span>
          </div>

          {/* Docket rows */}
          {SITE.docket.map((item, i) => (
            <div
              key={i}
              className={`
                grid grid-cols-[3rem_1fr_auto] gap-4 items-center px-6 py-5
                border-b border-navy-800 last:border-b-0
                transition-colors hover:bg-navy-800/40 group
              `}
            >
              {/* Case number */}
              <span className="font-mono text-sm font-bold text-gold-500 tracking-wide">
                {item.number}
              </span>

              {/* Title */}
              <span className="font-playfair text-lg font-semibold text-navy-100 group-hover:text-navy-50 transition-colors">
                {item.title}
              </span>

              {/* Status badge */}
              <span className="stamp text-crimson-700 border-crimson-900 whitespace-nowrap">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-crimson-600 animate-pulse" aria-hidden="true" />
          <p className="font-mono text-[0.65rem] text-navy-500 tracking-widest uppercase">
            Additional cases classified. Suggest a defendant below to influence Season Two.
          </p>
        </div>
      </div>
    </section>
  );
}
