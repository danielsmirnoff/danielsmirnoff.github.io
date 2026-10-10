import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import ProjectDetail from './pages/project-detail'
import CategoryPage from './pages/category-page'
import ScrollToTop from './components/scroll-to-top'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}