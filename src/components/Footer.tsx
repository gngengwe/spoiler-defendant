import { SITE } from "@/config/site";

// Simple SVG icon placeholders for social links
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-navy-800">

      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-crimson-900 to-transparent" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-1">
            <h2 className="font-playfair text-2xl font-black text-navy-100 mb-2">
              Spoiler<br />
              <span className="text-crimson-600">Defendant</span>
            </h2>
            <p className="text-navy-400 text-sm leading-relaxed mt-3 max-w-xs">
              {SITE.footer.tagline}
            </p>
            <p className="font-mono text-[0.6rem] text-navy-700 tracking-widest uppercase mt-4">
              {SITE.sub}
            </p>
          </div>

          {/* Links column */}
          <div>
            <h3 className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-navy-500 uppercase mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: "The Format",       href: "#concept" },
                { label: "Case Exhibits",    href: "#exhibits" },
                { label: "Season One Docket",href: "#docket" },
                { label: "Join the Case List",href: "#signup" },
                { label: "Suggest a Movie",  href: "#suggest" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-navy-100 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + tagline column */}
          <div>
            <h3 className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-navy-500 uppercase mb-5">
              Follow the Case
            </h3>
            <div className="flex gap-4 mb-8">
              <a
                href={SITE.social.youtube}
                aria-label="YouTube"
                className="w-9 h-9 border border-navy-700 hover:border-crimson-800 flex items-center justify-center text-navy-500 hover:text-crimson-500 transition-colors rounded-sm"
              >
                <YoutubeIcon />
              </a>
              <a
                href={SITE.social.twitter}
                aria-label="Twitter / X"
                className="w-9 h-9 border border-navy-700 hover:border-navy-500 flex items-center justify-center text-navy-500 hover:text-navy-200 transition-colors rounded-sm"
              >
                <TwitterIcon />
              </a>
              <a
                href={SITE.social.instagram}
                aria-label="Instagram"
                className="w-9 h-9 border border-navy-700 hover:border-navy-500 flex items-center justify-center text-navy-500 hover:text-navy-200 transition-colors rounded-sm"
              >
                <InstagramIcon />
              </a>
            </div>

            <p className="text-navy-500 text-xs leading-relaxed italic max-w-xs">
              {SITE.footer.built}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[0.6rem] text-navy-700 tracking-widest uppercase">
            {SITE.footer.copy}
          </p>
          <p className="font-mono text-[0.6rem] text-navy-700 tracking-widest uppercase">
            All verdicts are final. Most movies are not.
          </p>
        </div>
      </div>
    </footer>
  );
}
