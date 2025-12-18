import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

// Handle GitHub Pages 404.html redirect
function RedirectHandler() {
  const location = useLocation()

  useEffect(() => {
    // Check if we're in a GitHub Pages redirect (/?/path format)
    const queryString = location.search
    if (queryString.startsWith('?/')) {
      const path = queryString.slice(2).replace(/~and~/g, '&').split('&')[0]
      if (path && path !== location.pathname) {
        window.history.replaceState(null, '', `/Portfolio-Website${path}`)
        window.location.reload()
      }
    }
  }, [location])

  return null
}

function App() {
  return (
    <Router basename="/Portfolio-Website">
      <RedirectHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

