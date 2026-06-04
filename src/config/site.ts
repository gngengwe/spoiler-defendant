// ─── Site-wide content constants ─────────────────────────────────────────────
// Edit this file to update all copy, links, and structured data
// without touching individual components.

export const SITE = {
  // ── Brand ──────────────────────────────────────────────────────────────────
  name:        "Spoiler Defendant",
  tagline:     "You know the movie. You don't know whose side you're on.",
  oneLiner:    "Famous movies. Inverted morality. No title until the final reveal.",
  description:
    "A YouTube-first mystery recap brand where every case file makes you question the verdict — before you even know the movie.",
  sub:         "powered by becomiNG",

  // ── URLs ───────────────────────────────────────────────────────────────────
  url:    "https://spoilerdefendant.ngengwe.com",
  github: "https://github.com/gngengwe/spoiler-defendant",

  // ── Social (swap # for real handles when ready) ────────────────────────────
  social: {
    youtube:   "#",
    twitter:   "#",
    instagram: "#",
  },

  // ── SEO ────────────────────────────────────────────────────────────────────
  seo: {
    title:
      "Spoiler Defendant — You know the movie. You don't know whose side you're on.",
    description:
      "Famous movies retold from the villain's legal brief. No movie title until the final reveal. Season One docket opening soon.",
    keywords: [
      "movie recap", "villain perspective", "mystery entertainment",
      "film analysis", "moral inversion", "spoiler defendant",
      "movie mystery", "film retelling",
    ],
  },

  // ── CTAs ───────────────────────────────────────────────────────────────────
  cta: {
    primary:         "Join the Case List",
    secondary:       "Suggest a Movie",
    formDisclaimer:  "The first case file drops soon. You'll be first to know.",
    emailLabel:      "Your email",
    emailPlaceholder:"your@email.com",
    movieLabel:      "Movie title",
    moviePlaceholder:"e.g. The Dark Knight, Cinderella…",
    notesLabel:      "Why does it deserve a retrial? (optional)",
    notesPlaceholder:"The prosecution got it wrong because…",
  },

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    badge:    "Case Files — Season One Incoming",
    eyebrow:  "A YouTube-first mystery recap brand",
    headline: ["Spoiler", "Defendant"],   // rendered on two lines
    subline:
      "A famous film. A morally inverted recap. No title until the final reveal.",
    scroll:   "The case unfolds below",
  },

  // ── Concept steps ──────────────────────────────────────────────────────────
  concept: [
    {
      num:   "I",
      title: "A famous movie — no title given",
      body:
        "Every episode opens on a case file. The movie is real, the recap is complete, but the title is classified until the final moment.",
    },
    {
      num:   "II",
      title: "The moral lens is inverted",
      body:
        "The villain's argument is given its most compelling form. The hero's choices look suspicious. The audience must decide what they actually believe.",
    },
    {
      num:   "III",
      title: "You guess the movie",
      body:
        "Every clue is in the narrative. Genre, arc, moral stakes — the movie hides in plain sight. Pause. Think. Argue.",
    },
    {
      num:   "IV",
      title: "The final reveal starts an argument",
      body:
        "The title drops. The verdict is read. The comment section becomes a courtroom. The debate is the point.",
    },
  ],

  // ── Sample case exhibits ───────────────────────────────────────────────────
  exhibits: [
    {
      number:         "Exhibit A",
      title:          "The Bedroom Regime",
      premise:
        "A uniformed outsider enters a closed bedroom society and threatens the unelected sheriff's control over a community that never asked to be liberated.",
      teaser:         "Guess the Movie",
      classification: "Classified",
    },
    {
      number:         "Exhibit B",
      title:          "The Rightful Heir",
      premise:
        "A young heir abandons his community after a traumatic loss, while an exiled relative argues that succession was never fairly decided.",
      teaser:         "Guess the Movie",
      classification: "Classified",
    },
    {
      number:         "Exhibit C",
      title:          "The Contractor",
      premise:
        "A coastal teenager signs a high-risk transformation contract and later blames the only party who put the terms in writing.",
      teaser:         "Guess the Movie",
      classification: "Classified",
    },
  ],

  // ── How it works ───────────────────────────────────────────────────────────
  steps: [
    {
      num:   "01",
      title: "Watch the Case",
      body:
        "A famous movie retold entirely from the other side's perspective. No title. No spoilers. Just the narrative.",
    },
    {
      num:   "02",
      title: "Guess the Movie",
      body:
        "Every detail is a clue. Genre, arc, moral stakes — the movie hides in plain sight. Pause. Think. Argue.",
    },
    {
      num:   "03",
      title: "Argue the Verdict",
      body:
        "Was the hero actually right? Is the villain actually wrong? The comment section becomes a courtroom.",
    },
    {
      num:   "04",
      title: "Suggest the Next Defendant",
      body:
        "Submit a movie you think deserves a retrial. Season Two starts with your nominations.",
    },
  ],

  // ── Why it works insight ───────────────────────────────────────────────────
  insight: {
    quote:
      "The plot does not determine the morality. The framing does.",
    body:
      "Every movie you think you know was written with a verdict already decided. We re-open the case.",
    callout: "Every hero has a prosecution. Every villain has a defense.",
  },

  // ── Season One docket ──────────────────────────────────────────────────────
  docket: [
    { number: "001", title: "The Bedroom Regime",           status: "Incoming" },
    { number: "002", title: "The Contract Was Clear",       status: "Incoming" },
    { number: "003", title: "The Mentor They Called a Monster", status: "Incoming" },
    { number: "004", title: "The Exile Had a Point",        status: "Incoming" },
  ],

  // ── Footer ─────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Every movie has a prosecution. We write the defense.",
    built:   "Built for mystery movie people, villain apologists, and overthinkers.",
    copy:    `© ${new Date().getFullYear()} Spoiler Defendant / becomiNG. All rights reserved.`,
  },
};
