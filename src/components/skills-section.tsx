import { skills } from '../data/skills.ts'
import { asset } from '../utils/asset'


const icons: Record<string, React.JSX.Element> = {
  layers: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  code: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  image: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
  pencil: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
}

export default function SkillsSection() {
  return (

    <section id="skills" className="scroll-mt-32  px-6 py-16" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("${asset("assets/images/code.png")}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">
            What I Work With
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Skills &amp; Tools</h2>
          <div className="mt-3 h-1 w-16 rounded bg-[#fca311]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-xl bg-[#14213d] p-6 shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg
                              bg-[#fca311]/10 text-[#fca311]">
                {icons[skill.icon]}
              </div>

              <h3 className="mb-3 text-lg font-semibold text-white">{skill.title}</h3>

              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}