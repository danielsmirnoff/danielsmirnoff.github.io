import Navbar from '../components/navbar'
import Hero from '../components/hero'
import SkillsSection from '../components/skills-section'
import CategoriesGrid from '../components/categories-grid'
import EducationSection from '../components/education-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'
import AboutMe from '../components/about-me'
import CategoryPage from './category-page'
import ProjectsGrid from '../components/project-grid'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillsSection />
      <CategoriesGrid />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  )
}