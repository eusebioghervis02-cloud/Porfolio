import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "CV",
  description: `Public resume and CV for ${profile.name}, ${profile.role}.`,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${profile.name} CV`,
    description: `Public resume and CV for ${profile.name}, ${profile.role}.`,
    type: "profile",
  },
};

export default function CvPage() {
  const { resume } = profile;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <header className="no-print border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="section-shell flex min-h-16 flex-wrap items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-200 dark:focus:ring-offset-slate-950"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/Eusebio_Ghervis_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              <Download aria-hidden="true" size={18} />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="print-page section-shell py-10 sm:py-14">
        <article className="mx-auto max-w-4xl rounded-none bg-white p-6 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 sm:p-10">
          <header className="border-b border-slate-200 pb-8 dark:border-slate-800">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Curriculum Vitae</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-slate-700 dark:text-slate-300">{profile.role}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" size={16} />
                {profile.location}
              </span>
              <a className="inline-flex items-center gap-2" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={16} />
                {profile.email}
              </a>
            </div>
          </header>

          <section aria-labelledby="summary" className="print-section border-b border-slate-200 py-8 dark:border-slate-800">
            <h2 id="summary" className="text-xl font-bold text-slate-950 dark:text-white">
              Summary
            </h2>
            <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">{resume.summary}</p>
          </section>

          <section aria-labelledby="experience" className="print-section border-b border-slate-200 py-8 dark:border-slate-800">
            <h2 id="experience" className="text-xl font-bold text-slate-950 dark:text-white">
              Experience
            </h2>
            <div className="mt-5 space-y-7">
              {resume.experience.map((job) => (
                <section key={`${job.company}-${job.role}`} aria-labelledby={`${job.company}-${job.role}`.replaceAll(" ", "-")}>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 id={`${job.company}-${job.role}`.replaceAll(" ", "-")} className="text-lg font-semibold text-slate-950 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        {job.company} | {job.location}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {job.startDate} - {job.endDate}
                    </p>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
                    {job.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="education" className="print-section border-b border-slate-200 py-8 dark:border-slate-800">
            <h2 id="education" className="text-xl font-bold text-slate-950 dark:text-white">
              Education
            </h2>
            <div className="mt-5 space-y-5">
              {resume.education.map((school) => (
                <section key={school.institution}>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{school.degree}</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        {school.institution} | {school.location}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{school.dates}</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
                    {school.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="cv-skills" className="print-section border-b border-slate-200 py-8 dark:border-slate-800">
            <h2 id="cv-skills" className="text-xl font-bold text-slate-950 dark:text-white">
              Skills
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {resume.skills.map((group) => (
                <section key={group.category}>
                  <h3 className="font-semibold text-slate-950 dark:text-white">{group.category}</h3>
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{group.items.join(", ")}</p>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="certifications" className="print-section pt-8">
            <h2 id="certifications" className="text-xl font-bold text-slate-950 dark:text-white">
              Certifications
            </h2>
            <ul className="mt-5 space-y-3">
              {resume.certifications.map((certification) => (
                <li key={certification.name} className="flex flex-col justify-between gap-1 sm:flex-row">
                  <span className="font-medium text-slate-950 dark:text-white">
                    {certification.name}, {certification.issuer}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{certification.date}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}
