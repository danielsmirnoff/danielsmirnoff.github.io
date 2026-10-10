import { education } from '../data/education.ts'

import bg from '../assets/images/school.jpg'

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-32 px-6 py-16" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='max-w-6xl mx-auto'>
        <div className="mb-10">
          <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">
            Background
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Education</h2>
          <div className="mt-3 h-1 w-16 rounded bg-[#fca311]" />
        </div>

        <div className="relative ml-3 border-l-2 border-[#fca311]/40">
          {education.map((item) => (
            <div key={`${item.title}-${item.date}`} className="relative pb-10 pl-8 last:pb-0">
              {/* Marker */}
              <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full
                              border-2 border-[#fca311] bg-[#14213d]" />

              {/* Card */}
              <div className="rounded-xl bg-[#14213d] p-6 shadow-lg">
                <span className="inline-block rounded-full bg-[#fca311]/10 px-3 py-1
                                font-mono text-xs font-medium text-[#fca311]">
                  {item.date}
                </span>

                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm font-medium text-gray-400">{item.place}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fca311]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}