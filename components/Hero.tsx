import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(100vh-4rem)] items-center py-20 sm:py-24">
      <div className="reveal max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">{profile.role}</p>
        <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700 dark:text-slate-300">{profile.tagline}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/cv"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            View My CV
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent-500 hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-offset-slate-950"
          >
            Contact Me
            <Mail aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
