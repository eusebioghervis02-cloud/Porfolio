import { ExternalLink, Link, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="section-shell flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-800 dark:text-slate-300">
            <Mail aria-hidden="true" size={18} />
          </a>
          <a href={profile.socials.github.href} aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-800 dark:text-slate-300">
            <ExternalLink aria-hidden="true" size={18} />
          </a>
          <a href={profile.socials.linkedin.href} aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-800 dark:text-slate-300">
            <Link aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
