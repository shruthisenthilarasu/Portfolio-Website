import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      {/* Masthead */}
      <header className="bg-white border-b-4 border-gray-900 sticky top-0 z-50">
        {/* Top Bar */}
        <div className="border-b-2 border-gray-900">
          <div className="max-w-6xl mx-auto px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 font-sans text-xs text-gray-500">
                <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Volume I, Edition {new Date().getFullYear()}</span>
              </div>
              <div className="font-sans text-xs text-gray-500">
                <span className="hidden sm:inline">San Antonio, Texas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Masthead */}
        <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
          <div className="text-center">
            <Link to="/" className="group block">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight uppercase leading-none mb-2">
                Shruthi Senthilarasu
              </h1>
              <p className="font-serif text-sm md:text-base text-gray-600 italic mt-2">
                Computer Science Student
              </p>
            </Link>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t-2 border-gray-900 relative">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <nav className="flex items-center justify-center gap-8 md:gap-12">
              <Link
                to="/"
                className={`font-serif text-sm md:text-base font-bold uppercase tracking-wide ${
                  isActive('/') 
                    ? 'text-gray-900 border-b-4 border-gray-900 pb-2' 
                    : 'text-gray-700'
                }`}
              >
                Front Page
              </Link>
              <span className="text-gray-400 font-serif">|</span>
              <Link
                to="/portfolio"
                className={`font-serif text-sm md:text-base font-bold uppercase tracking-wide ${
                  isActive('/portfolio') 
                    ? 'text-gray-900 border-b-4 border-gray-900 pb-2' 
                    : 'text-gray-700'
                }`}
              >
                Portfolio
              </Link>
              <span className="text-gray-400 font-serif">|</span>
              <Link
                to="/resume"
                className={`font-serif text-sm md:text-base font-bold uppercase tracking-wide ${
                  isActive('/resume') 
                    ? 'text-gray-900 border-b-4 border-gray-900 pb-2' 
                    : 'text-gray-700'
                }`}
              >
                Resume
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden absolute top-4 right-6 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Shruthi Senthilarasu
            </p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:shruthi.senth@gmail.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/shruthisenthilarasu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shruthi-senthilarasu-8b0255200/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://devpost.com/shruthi-senth?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Devpost
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Building thoughtful, human-centered software
          </p>
        </div>
      </footer>
    </div>
  )
}

