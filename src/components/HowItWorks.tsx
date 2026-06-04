import { SITE } from "@/config/site";

export function HowItWorks() {
  return (
    <section className="relative bg-navy-900 py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">The Viewer Loop</span>
          <hr className="rule-crimson flex-1 max-w-xs" />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-100 leading-tight mb-4 max-w-2xl">
          You are not just watching.{" "}
          <span className="text-crimson-600">You are solving.</span>
        </h2>
        <p className="text-navy-300 text-lg leading-relaxed max-w-xl mb-20">
          Every episode is a game. Every comment section is a courtroom. Every
          reveal starts a debate.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden md:block absolute left-[1.4rem] top-8 bottom-8 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #C0152A 0%, #1E2D4A 60%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <ol className="space-y-12 md:space-y-10">
            {SITE.steps.map((step, i) => (
              <li key={i} className="flex gap-6 md:gap-8 group relative">
                {/* Step number bubble */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-navy-600 group-hover:border-crimson-700 flex items-center justify-center transition-colors bg-navy-950 z-10">
                  <span className="font-mono text-xs font-bold text-crimson-600 tracking-wider">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 pb-4">
                  <h3 className="font-playfair text-xl font-semibold text-navy-100 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-navy-300 text-sm leading-relaxed max-w-md">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
