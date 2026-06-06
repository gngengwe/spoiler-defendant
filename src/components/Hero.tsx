"use client";

import { SITE } from "@/config/site";

export function Hero() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSuggest = () => {
    document.getElementById("suggest")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950">

      {/* Spotlight gradient */}
      <div className="absolute inset-0 bg-hero-spotlight pointer-events-none" aria-hidden="true" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-600 to-transparent" aria-hidden="true" />

      {/* Nav-bar height spacer — no nav in phase one, just breathing room */}
      <div className="h-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-10 bg-crimson-600" aria-hidden="true" />
          <span className="section-label">{SITE.hero.badge}</span>
          <div className="h-px w-10 bg-crimson-600" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1 className="font-playfair leading-none tracking-tight select-none mb-6">
          <span className="block text-[clamp(4rem,12vw,9rem)] font-black text-cream-100 leading-none">
            {SITE.hero.headline[0]}
          </span>
          <span className="block text-[clamp(4rem,12vw,9rem)] font-black text-crimson-600 leading-none">
            {SITE.hero.headline[1]}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-[clamp(1rem,2.2vw,1.35rem)] text-cream-200 font-medium leading-relaxed max-w-xl mx-auto mb-3">
          {SITE.tagline}
        </p>

        {/* Sub-tagline */}
        <p className="font-mono text-xs tracking-[0.22em] text-cream-400 uppercase mb-12 max-w-sm mx-auto">
          {SITE.hero.subline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-24">
          <button onClick={scrollToSignup} className="btn-crimson cursor-pointer">
            {SITE.cta.primary}
          </button>
          <button onClick={scrollToSuggest} className="btn-ghost cursor-pointer">
            {SITE.cta.secondary}
          </button>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-navy-600 uppercase">
            {SITE.hero.scroll}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-navy-600 to-transparent" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" aria-hidden="true" />
    </section>
  );
}
