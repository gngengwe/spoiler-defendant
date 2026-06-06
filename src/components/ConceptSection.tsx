import { SITE } from "@/config/site";

export function ConceptSection() {
  return (
    <section className="relative bg-navy-900 py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-section-glow pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">The Format</span>
          <hr className="rule-crimson flex-1 max-w-xs" />
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream-100 leading-tight mb-5 max-w-2xl">
          Every case is a{" "}
          <em className="not-italic text-crimson-600">closed verdict</em>{" "}
          we re-open.
        </h2>
        <p className="text-cream-300 text-lg leading-relaxed max-w-xl mb-20">
          You already watched the movie. You voted for the hero. We wrote the
          brief for the other side.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {SITE.concept.map((step) => (
            <div key={step.num} className="flex gap-6 group">
              {/* Roman numeral */}
              <div className="flex-shrink-0 w-10 text-right">
                <span className="font-mono text-xs font-bold text-crimson-700 group-hover:text-crimson-600 transition-colors tracking-widest">
                  {step.num}
                </span>
              </div>

              {/* Divider */}
              <div className="flex-shrink-0 w-px bg-navy-700 group-hover:bg-crimson-800 transition-colors" aria-hidden="true" />

              {/* Content */}
              <div>
                <h3 className="font-playfair text-lg font-semibold text-cream-100 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-cream-300 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull-quote */}
        <div className="mt-20 pt-10 border-t border-navy-700">
          <blockquote className="font-playfair text-xl md:text-2xl italic text-cream-200 max-w-2xl leading-relaxed">
            &ldquo;Every movie has a prosecution.{" "}
            <span className="text-crimson-500 not-italic font-semibold">We write the defense.</span>
            &rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
