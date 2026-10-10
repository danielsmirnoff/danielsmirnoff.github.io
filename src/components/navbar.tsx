import { NavLink, Link } from 'react-router-dom'
import { categories } from '../data/projects'
import { asset } from '../utils/asset';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#14213d] border-[#fca311] border-b-2">
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-2">

        {/* Top row: name / tagline / social icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono">
            <Link to="/" className="text-2xl font-bold tracking-wide text-white">
              DANIEL SMIRNOFF
            </Link>
            <span className="text-sm tracking-widest text-white uppercase">
              Game Developer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://drive.google.com/file/d/1AbYMDXi9CWz3XRJSYbN4eWivpMFqRPMj/view?usp=sharing" target="_blank" rel="noreferrer"
               className="w-10 h-10 flex items-center justify-center text-white rounded-xl hover:border-2 hover:border-black">
              <img src={asset("assets/icons/resume.png")}></img>
            </a>
            <a href="https://github.com/danielsmirnoff" target="_blank" rel="noreferrer"
               className="w-10 h-10 flex items-center justify-center text-white rounded-xl hover:border-2 hover:border-black">
              <img src={asset("assets/icons/github.png")}></img>
            </a>
            <a href="https://www.linkedin.com/in/daniel-smirnoff-8132ba211/" target="_blank" rel="noreferrer"
               className="w-10 h-10 flex items-center justify-center text-white rounded-xl hover:border-2 hover:border-black">
              <img src={asset("assets/icons/linkedin.png")}></img>
            </a>
          </div>
        </div>

        {/* Bottom row: nav links */}
        <ul className="flex gap-6 mt-3 text-sm font-semibold text-white">
          <li>
            <NavLink to="/#about" className='pb-1 hover:text-[#fca311]'>
              Home
            </NavLink>
          </li>

          <li className="relative group">
            <a
              href="/#projects"
              className="inline-flex items-center gap-1 pb-1 hover:text-[#fca311]"
            >
              Projects
              <img src={asset("assets/icons/down.png")} className="w-3 h-3 transition-transform duration-50 group-hover:rotate-180 group-focus-within:rotate-180" alt="" />
            </a>

            {/* Outer wrapper: pt-2 bridges the gap so hover never breaks */}
            <div
              className="invisible absolute left-0 top-full z-10 translate-y-1 pt-2 opacity-0
                        transition duration-50
                        group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                        group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
            >
              <ul className="min-w-[12rem] overflow-hidden rounded-xl bg-[#14213d] p-1.5 shadow-2xl">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/projects/category/${cat.slug}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium
                                text-gray-200 transition hover:bg-[#fca311]/10 hover:text-[#fca311]"
                    >
                      {cat.title}
                      <span className="text-xs opacity-0 transition group-hover/item:opacity-100">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <NavLink to="/#education" className='pb-1 hover:text-[#fca311]'>
              Education
            </NavLink>
          </li>

          <li>
            <NavLink to="/#contact" className='pb-1 hover:text-[#fca311]'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}