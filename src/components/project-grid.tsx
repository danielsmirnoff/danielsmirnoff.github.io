import { Link } from 'react-router-dom'
import type { Project } from '../types'
import MediaThumbnail from './media-thumbnail'

interface Props {
  projects: Project[]
}

const MAX_TAGS = 4

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const extraTags = project.tags.length - MAX_TAGS

        return (
          <Link
            to={`/projects/${project.slug}`}
            key={project.slug}
            className="group flex flex-col overflow-hidden rounded-2xl 
                       bg-[#14213d] shadow-lg transition duration-100
                       hover:-translate-y-1 hover:border-[#fca311]/60
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                       focus-visible:outline-[#fca311]"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden bg-black/30">
              <div className="h-full w-full">
                <MediaThumbnail media={project.thumbnail} title={project.title} />
              </div>

              {/* Bottom fade so badges stay readable on any image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-[#fca311]">
                {project.status} | {project.date}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white transition duration-100
                             group-hover:text-[#fca311]">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Tags */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, MAX_TAGS).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-200"
                  >
                    {tag}
                  </li>
                ))}
                {extraTags > 0 && (
                  <li className="rounded-md px-2.5 py-1 text-xs font-medium text-gray-500">
                    +{extraTags}
                  </li>
                )}
              </ul>
            </div>
          </Link>
        )
      })}
    </div>
  )
}