import { useParams, Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectsGrid from '../components/project-grid'
import { asset } from '../utils/asset'

const BackLink = () => (
  <Link
    to="/#projects"
    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300
               transition hover:text-[#fca311]"
  >
    <img src={asset("assets/icons/down.png")} className="w-3 h-3 rotate-90" alt="" />
    {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg> */}
    Back to Projects
  </Link>
)

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()

  const category = categories.find((c) => c.slug === categorySlug)
  const filteredProjects = projects.filter((p) => p.category === categorySlug)
  const count = filteredProjects.length

  if (!category) {
    return (
      <>
        <Navbar />
        <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center
                         px-6 py-24 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">404</p>
          <h1 className="mt-2 text-4xl font-bold text-white">Category Not Found</h1>
          <p className="mt-3 text-gray-400">
            That category doesn't exist, or it may have been moved.
          </p>
          <Link
            to="/#projects"
            className="mt-8 rounded-lg border border-[#fca311] px-5 py-2.5 text-sm font-semibold
                       text-[#fca311] transition hover:bg-[#fca311]/10"
          >
            Back to Home
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main>
        {/* Header banner */}
        <header className="">
          <div className="mx-auto max-w-6xl px-6 pb-12 pt-10">
            <BackLink />

            <p className="mt-8 font-mono text-sm uppercase tracking-widest text-[#fca311]">
              Category
            </p>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
              {category.title}
            </h1>
            <div className="mt-4 h-1 w-16 rounded bg-[#fca311]" />

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              {category.description}
            </p>

            <span className="mt-6 inline-block rounded-full bg-[#fca311]/10 px-3 py-1
                             font-mono text-xs font-medium text-[#fca311]">
              {count} Project{count !== 1 ? 's' : ''}
            </span>
          </div>
        </header>

        {/* Projects */}
        <section className="py-12">
          {count > 0 ? (
            <ProjectsGrid projects={filteredProjects} />
          ) : (
            <div className="mx-auto max-w-6xl px-6">
              <div className="rounded-xl p-12 text-center">
                <p className="text-lg font-semibold text-white">Nothing here yet</p>
                <p className="mt-2 text-sm text-gray-400">
                  Projects in this category are coming soon.
                </p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}