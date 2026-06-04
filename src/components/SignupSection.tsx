"use client";

import { useState, FormEvent } from "react";
import { SITE } from "@/config/site";

// ─── Email capture form ────────────────────────────────────────────────────────
function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire to Formspree, ConvertKit, or Buttondown
    // e.g. await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify({ email }) })
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 py-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-crimson-600" aria-hidden="true" />
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-crimson-500 uppercase">
            You&apos;re on the case list.
          </span>
        </div>
        <p className="text-navy-300 text-sm leading-relaxed">
          {SITE.cta.formDisclaimer}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-navy-400 uppercase" htmlFor="email">
        {SITE.cta.emailLabel}
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={SITE.cta.emailPlaceholder}
          className="
            flex-1 bg-navy-800 border border-navy-600 focus:border-crimson-700
            text-navy-100 placeholder-navy-600
            px-4 py-3 text-sm outline-none
            rounded-sm transition-colors
          "
        />
        <button type="submit" className="btn-crimson whitespace-nowrap">
          {SITE.cta.primary}
        </button>
      </div>
      <p className="text-navy-600 text-xs">{SITE.cta.formDisclaimer}</p>
    </form>
  );
}

// ─── Movie suggestion form ─────────────────────────────────────────────────────
function SuggestForm() {
  const [movie, setMovie] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!movie.trim()) return;
    // TODO: wire to Formspree or Airtable
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 py-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold-500" aria-hidden="true" />
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            Defendant submitted.
          </span>
        </div>
        <p className="text-navy-300 text-sm leading-relaxed">
          The prosecution will review your submission for Season Two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-navy-400 uppercase" htmlFor="movie">
        {SITE.cta.movieLabel}
      </label>
      <input
        id="movie"
        type="text"
        required
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder={SITE.cta.moviePlaceholder}
        className="
          bg-navy-800 border border-navy-600 focus:border-gold-700
          text-navy-100 placeholder-navy-600
          px-4 py-3 text-sm outline-none
          rounded-sm transition-colors
        "
      />
      <label className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-navy-400 uppercase" htmlFor="notes">
        {SITE.cta.notesLabel}
      </label>
      <textarea
        id="notes"
        rows={3}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder={SITE.cta.notesPlaceholder}
        className="
          bg-navy-800 border border-navy-600 focus:border-gold-700
          text-navy-100 placeholder-navy-600
          px-4 py-3 text-sm outline-none resize-none
          rounded-sm transition-colors
        "
      />
      <button type="submit" className="btn-ghost self-start">
        {SITE.cta.secondary}
      </button>
    </form>
  );
}

// ─── Section wrapper ───────────────────────────────────────────────────────────
export function SignupSection() {
  return (
    <section id="signup" className="relative bg-navy-950 py-28 md:py-36">
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-900 to-transparent" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <hr className="rule-crimson flex-1 max-w-xs" />
          <span className="section-label">Join the Case</span>
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-100 leading-tight mb-4 max-w-2xl">
          The first case file is coming.
          <br />
          <span className="text-crimson-600">Don&apos;t miss the opening statement.</span>
        </h2>
        <p className="text-navy-300 text-lg leading-relaxed max-w-xl mb-16">
          Sign up to receive the first episode the moment it drops. Or submit a
          movie you think deserves a retrial.
        </p>

        {/* Two-form layout */}
        <div id="suggest" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Email signup */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-px h-10 bg-crimson-600" aria-hidden="true" />
              <div>
                <h3 className="font-playfair text-xl font-bold text-navy-100">Join the Case List</h3>
                <p className="text-navy-400 text-sm mt-0.5">Get the first episode on release day.</p>
              </div>
            </div>
            <EmailForm />
          </div>

          {/* Movie suggestion */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-px h-10 bg-gold-500" aria-hidden="true" />
              <div>
                <h3 className="font-playfair text-xl font-bold text-navy-100">Suggest a Defendant</h3>
                <p className="text-navy-400 text-sm mt-0.5">Nominate a movie for Season Two.</p>
              </div>
            </div>
            <SuggestForm />
          </div>
        </div>

        {/* Legal-style disclaimer */}
        <div className="mt-16 pt-8 border-t border-navy-800">
          <p className="font-mono text-[0.6rem] text-navy-600 tracking-widest uppercase leading-relaxed max-w-xl">
            No spam. No marketing fluff. First-episode notification only — unless you
            ask for more. Unsubscribe at any time. Movie submissions may be used for
            content planning. No title will be spoiled without consent.
          </p>
        </div>
      </div>
    </section>
  );
}
