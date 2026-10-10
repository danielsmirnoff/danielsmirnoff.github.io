import { useParams, Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MediaThumbnail from '../components/media-thumbnail'

const BackLink = () => (
  <Link
    to="/#projects"
    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300
               transition hover:text-[#fca311]"
  >
    <img className='w-4 h-4 rotate-90' src='/src/assets/icons/down.png'></img>
    Back to Projects
  </Link>
)

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center
                         px-6 py-24 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">404</p>
          <h1 className="mt-2 text-4xl font-bold text-white">Project Not Found</h1>
          <p className="mt-3 text-gray-400">
            That project doesn't exist, or it may have been moved.
          </p>
          <Link
            to="/#projects"
            className="mt-8 rounded-lg border border-[#fca311] px-5 py-2.5 text-sm font-semibold
                       text-[#fca311] transition hover:bg-[#fca311]/10"
          >
            Back to Projects
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  const category = categories.find((c) => c.slug === project.category)

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <BackLink />

        {/* Hero media */}
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl
                        bg-[#14213d] shadow-xl
                        [&_img]:h-full [&_img]:w-full [&_img]:object-cover
                        [&_video]:h-full [&_video]:w-full [&_video]:object-cover
                        [&_iframe]:h-full [&_iframe]:w-full">
          <MediaThumbnail
            media={project.heroImage}
            title={project.title}
            autoPlay={true}
          />
        </div>

        {/* Title block */}
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
            <span className="text-[#fca311]">{project.date}</span>
            {category && (
              <>
                <span className="text-white/20">/</span>
                <Link
                  to={`/projects/category/${category.slug}`}
                  className="text-gray-400 transition hover:text-[#fca311]"
                >
                  {category.title}
                </Link>
              </>
            )}
          </div>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
          <div className="mt-4 h-1 w-16 rounded bg-[#fca311]" />

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">{project.lead}</p>
        </header>

        {/* Tags + links */}
        <div className="flex flex-col gap-4 py-6
                        sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-gray-200"
              >
                {tag}
              </li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    link.type === 'primary'
                      ? 'rounded-lg bg-[#fca311] px-4 py-2 text-sm font-semibold text-[#14213d] transition hover:bg-[#ffb733]'
                      : 'rounded-lg border border-[#fca311] px-4 py-2 text-sm font-semibold text-[#fca311] transition hover:bg-[#fca311]/10'
                  }
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="mt-10 space-y-6">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-xl bg-[#14213d] p-6 shadow-lg md:p-8"
            >
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>

              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-gray-300">
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="mt-4 space-y-2 text-gray-300">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fca311]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Gallery</h2>
            <div className="mt-2 h-1 w-12 rounded bg-[#fca311]" />

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((media, i) => (
                <div
                  key={i}
                  className="aspect-video overflow-hidden rounded-xl bg-[#14213d]
                             [&_img]:h-full [&_img]:w-full [&_img]:object-cover
                             [&_video]:h-full [&_video]:w-full [&_video]:object-cover
                             [&_iframe]:h-full [&_iframe]:w-full"
                >
                  <MediaThumbnail media={media} title={`${project.title} gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}