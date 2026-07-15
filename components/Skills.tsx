import { profile } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Skills</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Tools I use to ship reliable interfaces.</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profile.skills.map((group) => (
          <section key={group.category} className="reveal rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.category}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
