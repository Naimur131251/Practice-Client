
"use client";

import { Suspense } from "react";
import Link from "next/link";
import {
  Aperture,
  ArrowRight,
//   Instagram,
//   Facebook,
//   Linkedin,
//   Mail,
  MapPin,
//   CheckCircle2,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/studios" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Us", href: "/#about" },
];

const studioCategories = [
  { label: "Photography Studios", href: "/studios" },
  { label: "Film & Video Studios", href: "/studios" },
  { label: "Podcast Studios", href: "/studios" },
  { label: "Creative Workspaces", href: "/studios" },
];

function XLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={size}
      height={size}
      className="fill-current"
    >
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.62L5.38 22H2.25l7.25-8.29L1.8 2h6.4l4.43 6.96L18.9 2Zm-1.1 17.86h1.73L7.27 4.03H5.42L17.8 19.86Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    // icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    // icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    // icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: XLogo,
  },
];

export function Footerrr () {
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [submitting, setSubmitting] = React.useState(false);

//   async function handleSubscribe(
//     event: React.FormEvent<HTMLFormElement>
//   ) {
//     event.preventDefault();

//     if (!email.trim()) {
//       setMessage("Please enter your email address.");
//       return;
//     }

//     setSubmitting(true);
//     setMessage(
//       "Newsletter subscription is not connected yet. Please try again later."
//     );
//     setSubmitting(false);
//   }

  return (
    <footer className="border-t border-studio-elevated bg-studio-bg">
      {/* Newsletter banner */}
      {/* <div className="border-b border-studio-elevated">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-studio-orange">
              Stay in the creative loop
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-studio-text sm:text-3xl">
              Inspiration, delivered to your inbox.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-studio-muted">
              Get studio spotlights, creative tips, and updates on
              spaces worth discovering.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Your email address
              </label>

              <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-studio-elevated bg-studio-surface px-4 transition-colors focus-within:border-studio-orange/60">
                <Mail
                  size={18}
                  className="shrink-0 text-studio-muted"
                />

                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  className="min-h-14 min-w-0 flex-1 bg-transparent text-sm text-studio-text outline-none placeholder:text-studio-muted"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-studio-orange px-6 text-sm font-bold text-studio-bg transition-colors hover:bg-studio-orange-hover disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Subscribe"}
                <ArrowRight size={17} />
              </button>
            </form>

            {message && (
              <p
                role="status"
                className="mt-3 text-xs leading-5 text-studio-muted"
              >
                {message}
              </p>
            )}

            <p className="mt-3 text-xs text-studio-muted">
              By subscribing, you agree to receive StudioSpace
              updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div> */}

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-10">
            <Link
              href="/"
              aria-label="StudioSpace home"
              className="group inline-flex items-center gap-2.5"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-studio-orange text-studio-bg transition-transform duration-300 group-hover:rotate-12">
                <Aperture size={25} strokeWidth={2.2} />
              </span>

              <span className="text-2xl font-bold tracking-tight text-studio-text">
                Studio<span className="text-studio-orange">Space</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-studio-muted">
              A space for every vision. We connect creators with
              inspiring studios where ideas take shape, stories
              come alive, and great work begins.
            </p>

            <div className="mt-5 flex items-start gap-2 text-sm text-studio-muted">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-studio-orange"
              />
              <span>Connecting creative spaces and creators worldwide.</span>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`StudioSpace on ${label}`}
                  className="flex size-10 items-center justify-center rounded-xl border border-studio-elevated bg-studio-surface text-studio-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-studio-orange/50 hover:bg-studio-orange/10 hover:text-studio-orange"
                >
                  {Icon && <Icon size={18} />}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-studio-text">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-studio-muted transition-colors hover:text-studio-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-studio-text">
              Popular Categories
            </h3>

            <ul className="mt-5 space-y-4">
              {studioCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-sm text-studio-muted transition-colors hover:text-studio-orange"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / host CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-studio-text">
              Have a Studio?
            </h3>

            <p className="mt-5 text-sm leading-6 text-studio-muted">
              Your creative space could be someone&apos;s next
              favorite place to create.
            </p>

            <Link
              href="/studios"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-studio-orange transition-colors hover:text-studio-text"
            >
              Host Your Space
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-studio-elevated pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-studio-muted">
            © {new Date().getFullYear()} StudioSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="/terms"
              className="text-xs text-studio-muted transition-colors hover:text-studio-orange"
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy"
              className="text-xs text-studio-muted transition-colors hover:text-studio-orange"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


function FooterSkeleton() {
  return (
    <footer className="border-t border-studio-elevated bg-studio-bg">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <div className="h-10 w-40 animate-pulse rounded-xl bg-studio-surface" />
            <div className="h-16 w-full max-w-sm animate-pulse rounded-xl bg-studio-surface" />
            <div className="h-5 w-64 animate-pulse rounded bg-studio-surface" />
          </div>

          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-5 lg:col-span-2">
              <div className="h-5 w-32 animate-pulse rounded bg-studio-surface" />
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 w-28 animate-pulse rounded bg-studio-surface"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={<FooterSkeleton />}>
      <Footerrr />
    </Suspense>
  );
}