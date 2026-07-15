import { ExternalLink, GitBranch } from "lucide-react";
import { profile } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
      <div className="section-shell">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Selected work and experiments.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {profile.projects.map((project) => (
            <article key={project.title} className="reveal flex min-h-72 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology} className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-slate-800 dark:text-accent-100">
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.liveUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700">
                  <ExternalLink aria-hidden="true" size={16} />
                  Live Demo
                </a>
                <a href={project.githubUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                  <GitBranch aria-hidden="true" size={16} />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
