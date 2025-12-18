import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ArticlePreview from '../components/ArticlePreview'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
      {/* Hero Section - Cover Story */}
      <section className="mb-8 md:mb-10 fade-in">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 leading-[1.1] tracking-tight">
            Computer Science student building thoughtful, human-centered software.
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gray-700 mb-6 leading-[1.6] italic">
            Exploring AI, systems, and product-driven engineering. Building tools with real-world impact.
          </p>
          <div className="flex flex-wrap gap-6 font-serif">
            <Link
              to="/portfolio"
              className="text-gray-900 font-medium uppercase tracking-wide text-sm flex items-center gap-2"
            >
              Continue Reading
              <span className="text-gray-600">→</span>
            </Link>
            <Link
              to="/resume"
              className="text-gray-900 font-medium uppercase tracking-wide text-sm flex items-center gap-2"
            >
              View Resume
              <span className="text-gray-600">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <SectionHeader title="Featured Work" />
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
        <ArticlePreview
          category="COVER STORY"
          headline="Saheli Station Finder"
          excerpt="Safety infrastructure mapping application that helps users locate and navigate to safe spaces. Built with a focus on accessibility and real-world utility."
          linkTo="/portfolio/saheli-station-finder"
          tags={['React', 'Mapping', 'Safety']}
          large={true}
        />
        <ArticlePreview
          category="FEATURE"
          headline="Round-Robin Scheduler"
          excerpt="Systems programming project implementing a round-robin CPU scheduler in C. Explores process management, context switching, and scheduling algorithms."
          linkTo="/portfolio/round-robin-scheduler"
          tags={['C', 'Systems', 'OS']}
        />
        <ArticlePreview
          category="FEATURE"
          headline="Axiom Notes"
          excerpt="AI-powered tool that converts handwritten notes into interactive flashcards. Uses OCR pipelines and NLP to create study materials from physical notes."
          linkTo="/portfolio/axiom-notes"
          tags={['AI/ML', 'OCR', 'NLP']}
        />
      </div>

      {/* About Preview */}
      <SectionHeader title="About" />
      <div className="max-w-3xl mb-10 fade-in">
        <p className="font-serif text-gray-700 leading-[1.7] mb-3">
          I'm a Computer Science student at the University of Texas at San Antonio, 
          focused on AI, systems programming, and building products that matter.
        </p>
        <p className="font-serif text-gray-700 leading-[1.7] mb-3">
          My work sits at the intersection of technical depth and human impact—whether 
          that's implementing low-level systems, designing AI pipelines, or creating 
          tools that solve real problems for real people.
        </p>
        <p className="font-serif text-gray-700 leading-[1.7]">
          I believe in thoughtful engineering: code that's clean, systems that are 
          well-architected, and products that are genuinely useful.
        </p>
      </div>

      {/* Contact CTA */}
      <SectionHeader title="Contact" />
      <div className="max-w-2xl mb-10 fade-in">
        <p className="text-xl text-gray-700 mb-4 font-serif leading-[1.6]">
          Let's build something meaningful.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:shruthi.senth@gmail.com"
            className="text-gray-700 hover:text-accent-dark transition-colors underline"
          >
            Email
          </a>
          <a
            href="https://github.com/shruthisenthilarasu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-accent-dark transition-colors underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shruthi-senthilarasu-8b0255200/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-accent-dark transition-colors underline"
          >
            LinkedIn
          </a>
          <a
            href="https://devpost.com/shruthi-senth?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-accent-dark transition-colors underline"
          >
            Devpost
          </a>
        </div>
      </div>
    </div>
  )
}

