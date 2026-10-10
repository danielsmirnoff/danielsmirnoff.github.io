import { useParams, Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'
import type { ProjectSection, SectionBlock, Thumbnail } from '../types'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MediaThumbnail from '../components/media-thumbnail'

// Makes any media inside the frame fill it
const MEDIA_FILL = `[&_img]:h-full [&_img]:w-full [&_img]:object-cover
                    [&_video]:h-full [&_video]:w-full [&_video]:object-cover
                    [&_iframe]:h-full [&_iframe]:w-full`

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

/** A single piece of media with an optional caption underneath. */
const MediaFigure = ({ media, title }: { media: Thumbnail; title: string }) => (
  <figure className="w-full">
    <div className={`aspect-video overflow-hidden rounded-xl bg-[#0b1530] ${MEDIA_FILL}`}>
      <MediaThumbnail media={media} title={media.label ?? title} autoPlay={true} />
    </div>
    {media.label && (
      <figcaption className="mt-2 text-center text-sm text-gray-400">{media.label}</figcaption>
    )}
  </figure>
)

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-2 text-gray-300">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fca311]" />
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
)

/** Paragraphs and bullet list for a section. */
const SectionText = ({ section }: { section: ProjectSection }) => (
  <>
    {section.paragraphs?.map((p) => (
      <p key={p} className="mt-4 leading-relaxed text-gray-300">
        {p}
      </p>
    ))}

    {section.list && <BulletList items={section.list} />}
  </>
)

/** Ordered blocks: text, lists and media in whatever order they are defined. */
const SectionBlocks = ({
  blocks,
  projectTitle,
  sectionTitle,
}: {
  blocks: SectionBlock[]
  projectTitle: string
  sectionTitle: string
}) => (
  // flow-root contains floated media so it never spills out of the card
  <div className="flow-root">
    {blocks.map((block, i) => {
      switch (block.type) {
        case 'text':
          return (
            <p key={i} className="mt-4 leading-relaxed text-gray-300">
              {block.text}
            </p>
          )

        case 'list':
          return <BulletList key={i} items={block.items} />

        case 'media': {
          const layout = block.layout ?? 'center'
          const figures = block.images.map((media, j) => (
            <MediaFigure
              key={j}
              media={media}
              title={`${projectTitle} - ${sectionTitle} ${i + 1}.${j + 1}`}
            />
          ))

          if (layout === 'center') {
            return (
              <div
                key={i}
                className={`clear-both mx-auto mt-6 grid gap-4 ${
                  block.images.length === 1 ? 'max-w-2xl grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
                }`}
              >
                {figures}
              </div>
            )
          }

          // left / right: float beside the following text on md+, stacked on mobile
          return (
            <div
              key={i}
              className={`mt-4 flex w-full flex-col gap-4 md:mb-2 md:w-2/5 ${
                layout === 'left' ? 'md:float-left md:mr-6' : 'md:float-right md:ml-6'
              }`}
            >
              {figures}
            </div>
          )
        }
      }
    })}
  </div>
)

/** A section card: heading, text, and optional media laid out left, right or centered. */
const SectionCard = ({ section, projectTitle }: { section: ProjectSection; projectTitle: string }) => {
  const images = section.images ?? []
  const layout = section.imageLayout ?? 'center'

  // Ordered content takes over the whole section body
  if (section.content) {
    return (
      <section className="rounded-xl bg-[#14213d] p-6 shadow-lg md:p-8">
        <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
        <SectionBlocks
          blocks={section.content}
          projectTitle={projectTitle}
          sectionTitle={section.title}
        />
      </section>
    )
  }

  const renderMedia = (media: Thumbnail, i: number) => (
    <MediaFigure
      key={i}
      media={media}
      title={`${projectTitle} - ${section.title} ${i + 1}`}
    />
  )

  return (
    <section className="rounded-xl bg-[#14213d] p-6 shadow-lg md:p-8">
      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>

      {images.length === 0 && <SectionText section={section} />}

      {images.length > 0 && layout === 'center' && (
        <>
          <SectionText section={section} />
          <div
            className={`mx-auto mt-6 grid gap-4 ${
              images.length === 1 ? 'max-w-2xl grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
            }`}
          >
            {images.map(renderMedia)}
          </div>
        </>
      )}

      {images.length > 0 && layout !== 'center' && (
        <div
          className={`mt-4 flex flex-col gap-6 md:items-start ${
            layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Media comes first in the DOM so it stacks above the text on mobile */}
          <div className="flex w-full flex-col gap-4 md:w-2/5 md:shrink-0">
            {images.map(renderMedia)}
          </div>
          <div className="min-w-0 flex-1 [&>:first-child]:mt-0">
            <SectionText section={section} />
          </div>
        </div>
      )}
    </section>
  )
}

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
        <div className={`mt-6 aspect-video w-full overflow-hidden rounded-2xl
                        bg-[#14213d] shadow-xl ${MEDIA_FILL}`}>
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
            <span className="text-white/20">/</span>
            <span className="text-gray-400">{project.status}</span>
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
            <SectionCard key={section.title} section={section} projectTitle={project.title} />
          ))}
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Gallery</h2>
            <div className="mt-2 h-1 w-12 rounded bg-[#fca311]" />

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((media, i) => (
                <MediaFigure
                  key={i}
                  media={media}
                  title={`${project.title} gallery ${i + 1}`}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}