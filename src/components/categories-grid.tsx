import { Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'
import type { Thumbnail } from '../types'

// Helper to extract a static image URL regardless of media type
const getMediaImage = (media: Thumbnail): string => {
  if (media.type === 'image') return media.src
  if (media.type === 'youtube') return `https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg`
  return media.src // Fallback for video files
}

export default function CategoriesGrid() {
  return (
    <section id="projects" className="scroll-mt-32 max-w-6xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">
          Selected Work
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">Projects</h2>
        <div className="mt-3 h-1 w-16 rounded bg-[#fca311]" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {categories.map((cat) => {
          const categoryProjects = projects.filter((p) => p.category === cat.slug)
          const count = categoryProjects.length
          const cover = count > 0 ? getMediaImage(categoryProjects[0].thumbnail) : null

          return (
            <Link
              to={`/projects/category/${cat.slug}`}
              key={cat.slug}
              className="group flex flex-col overflow-hidden rounded-xl
                         bg-[#14213d] shadow-lg transition duration-100
                       hover:-translate-y-1 hover:border-1 hover:border-white"
            >
              {/* Cover image */}
              <div className="aspect-video w-full overflow-hidden">
                {cover && (
                  <img
                    src={cover}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold text-white transition duration-100
                             group-hover:text-[#fca311]">{cat.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">
                  {cat.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                    {count} Project{count !== 1 ? 's' : ''}
                  </span>
                  <div className='flex items-center gap-1'>
                    <span className="text-sm font-semibold text-[#fca311]">
                      View All
                    </span>
                    <img src="/src/assets/icons/down.png" className="w-3 h-3 -rotate-90" alt="" />
                  </div>
                  

                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}