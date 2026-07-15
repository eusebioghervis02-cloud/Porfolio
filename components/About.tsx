import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
      <div className="section-shell grid items-center gap-12 md:grid-cols-[1fr_320px]">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Practical product engineering with a design-aware eye.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">{profile.bio}</p>
        </div>
        <div className="reveal justify-self-center">
          <div className="relative aspect-square w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:w-80">
            <Image src={profile.profileImage.src} alt={profile.profileImage.alt} fill className="object-cover" sizes="(min-width: 768px) 320px, 256px" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
