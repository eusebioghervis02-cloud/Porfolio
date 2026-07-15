import { ExternalLink, Link, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="reveal max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Contact</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Let&apos;s build something useful.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
          Reach out for frontend engineering roles, product collaborations, or thoughtful web projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950">
            <Mail aria-hidden="true" size={18} />
            {profile.email}
          </a>
          <a href={profile.socials.github.href} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-100">
            <ExternalLink aria-hidden="true" size={18} />
            GitHub
          </a>
          <a href={profile.socials.linkedin.href} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-100">
            <Link aria-hidden="true" size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
