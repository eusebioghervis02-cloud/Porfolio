import { profile } from "@/data/profile";

export function Certifications() {
  return (
    <section id="certifications" className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950/40 sm:py-24">
      <div className="section-shell">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Certifications</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Certifications and completed training.</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {profile.resume.certifications.map((certification) => {
            const content = (
              <article className="reveal rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-accent-500 hover:ring-1 hover:ring-accent-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-400">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{certification.name}</h3>
                <p className="mt-3 text-slate-700 dark:text-slate-300">{certification.issuer}</p>
                <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">{certification.date}</p>
                {certification.url ? (
                  <p className="mt-4 text-sm font-semibold text-accent-600 dark:text-accent-400">View certificate</p>
                ) : null}
              </article>
            );

            return certification.url ? (
              <a key={certification.name} href={certification.url} target="_blank" rel="noreferrer noopener" className="group">
                {content}
              </a>
            ) : (
              <div key={certification.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
