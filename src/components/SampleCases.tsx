import { SITE } from "@/config/site";

export function SampleCases() {
  return (
    <section className="relative bg-navy-950 py-28 md:py-36">
      {/* Faint left-edge accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson-900 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <hr className="rule-crimson flex-1 max-w-xs" />
          <span className="section-label">Case Exhibits</span>
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-100 leading-tight mb-4 max-w-2xl">
          Three cases. Zero titles. You pick a side.
        </h2>
        <p className="text-navy-300 text-base leading-relaxed max-w-xl mb-16">
          These are real movies. Every detail is a clue. Comment your guess before
          you look anything up.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SITE.exhibits.map((ex, i) => (
            <article key={i} className="case-card rounded-sm p-7 flex flex-col gap-5 relative overflow-hidden">

              {/* Corner fold decoration */}
              <div
                className="absolute top-0 right-0 w-10 h-10 bg-navy-950"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-0 right-0 w-10 h-10"
                style={{
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  background: "rgba(192,21,42,0.15)",
                }}
                aria-hidden="true"
              />

              {/* Case number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-gold-500 uppercase">
                  {ex.number}
                </span>
                <span className="stamp text-crimson-700 border-crimson-900 text-[0.55rem]">
                  {ex.classification}
                </span>
              </div>

              {/* Case title */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-navy-100 leading-snug mb-3">
                  {ex.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">{ex.premise}</p>
              </div>

              {/* Divider */}
              <hr className="rule-navy mt-auto" />

              {/* CTA */}
              <div className="flex items-center gap-2 text-crimson-500 hover:text-crimson-400 transition-colors cursor-pointer group">
                <span className="font-mono text-xs font-bold tracking-[0.15em] uppercase">
                  {ex.teaser}
                </span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 font-mono text-[0.65rem] text-navy-600 tracking-widest text-center uppercase">
          All case titles are original. All films are real. All verdicts are yours.
        </p>
      </div>
    </section>
  );
}
