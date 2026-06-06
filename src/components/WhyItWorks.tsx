import { SITE } from "@/config/site";

export function WhyItWorks() {
  return (
    <section className="relative bg-navy-950 py-32 md:py-44 overflow-hidden">

      {/* Crimson radial glow behind the quote */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,26,44,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative film perforations — left edge */}
      <div className="absolute left-6 top-0 bottom-0 hidden lg:flex flex-col justify-center gap-5" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-3 h-5 border border-navy-700 rounded-[2px]" />
        ))}
      </div>
      {/* Right edge */}
      <div className="absolute right-6 top-0 bottom-0 hidden lg:flex flex-col justify-center gap-5" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-3 h-5 border border-navy-700 rounded-[2px]" />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <hr className="rule-crimson w-16" />
          <span className="section-label">The Hidden Insight</span>
          <hr className="rule-crimson w-16" />
        </div>

        {/* Central blockquote */}
        <blockquote className="mb-10">
          <p className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black text-cream-100 leading-tight tracking-tight">
            &ldquo;The plot does not determine{" "}
            <br className="hidden md:block" />
            the morality.{" "}
            <span className="text-crimson-600">The framing does.</span>&rdquo;
          </p>
        </blockquote>

        {/* Supporting body */}
        <p className="text-cream-300 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          {SITE.insight.body}
        </p>

        {/* Callout pill */}
        <div className="inline-block border border-navy-600 px-6 py-3 rounded-sm">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-cream-300 uppercase">
            {SITE.insight.callout}
          </p>
        </div>

        {/* Three proof points */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              label: "Familiar material",
              body:  "You already know these movies. That's the trap. Familiarity makes the inversion hit harder.",
            },
            {
              label: "Active viewing",
              body:  "Guessing the movie turns passive consumption into an active puzzle with real stakes.",
            },
            {
              label: "Built-in debate",
              body:  "Every reveal produces a verdict, and every verdict produces an argument. The format is the engagement loop.",
            },
          ].map((pt) => (
            <div key={pt.label} className="border-t border-navy-700 pt-6">
              <h4 className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-crimson-600 uppercase mb-3">
                {pt.label}
              </h4>
              <p className="text-cream-300 text-sm leading-relaxed">{pt.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
