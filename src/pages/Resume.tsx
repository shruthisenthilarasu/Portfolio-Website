import SectionHeader from '../components/SectionHeader'

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 md:py-10">
      <SectionHeader title="Resume" />
      
      <div className="space-y-8 md:space-y-10">
        {/* Education */}
        <section className="fade-in">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Education
          </h2>
          <div className="border-l-4 border-accent pl-6">
            <h3 className="font-sans text-xl font-semibold text-gray-900 mb-1">
              University of Texas at San Antonio
            </h3>
            <p className="font-serif text-gray-600 mb-1">Bachelor of Science, Computer Science</p>
            <p className="font-sans text-sm text-gray-500 mb-3">Expected Graduation: December 2026</p>
            <p className="font-serif text-gray-700 leading-[1.7]">
              Coursework: Systems Programming (C/Unix), Data Structures, Discrete Math, Application Programming
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="fade-in">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Skills
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-sans text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Languages
              </h3>
              <p className="font-serif text-gray-700 leading-[1.7]">
                Python, Java, JavaScript, C
              </p>
            </div>
            
            <div>
              <h3 className="font-sans text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Frontend & Web
              </h3>
              <p className="font-serif text-gray-700 leading-[1.7]">
                React, HTML, CSS, Tailwind
              </p>
            </div>
            
            <div>
              <h3 className="font-sans text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Backend & Data
              </h3>
              <p className="font-serif text-gray-700 leading-[1.7]">
                Supabase, Firebase, SQL
              </p>
            </div>
            
            <div>
              <h3 className="font-sans text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Tools & Platforms
              </h3>
              <p className="font-serif text-gray-700 leading-[1.7]">
                Git, Unix/Linux, GDB, Valgrind, Figma, Airtable
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="fade-in">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="font-sans text-xl font-semibold text-gray-900 mb-1">
                Axiom Labs
              </h3>
              <p className="font-sans text-sm text-gray-500 mb-2">Founder • May 2025 - Present</p>
              <ul className="font-serif text-gray-700 leading-[1.7] space-y-2 list-none pl-0">
                <li>• Founded Axiom Labs, a student-led ed-tech initiative focused on building accessible, AI-powered learning tools for students across multiple majors.</li>
                <li>• Designed and developed Axiom Notes, an OCR + NLP-based study platform serving 15-20 active users with automated flashcard generation and note processing.</li>
                <li>• Built OCR and text preprocessing pipelines in Python to extract and structure handwritten input, implementing error handling for edge cases in degraded or low-contrast images.</li>
                <li>• Optimized processing workflows by profiling memory usage and reducing computational overhead, improving system responsiveness under concurrent user requests.</li>
                <li>• Conducted UX research with 30+ testers, incorporating feedback to refine user flows and reduce friction in core study features.</li>
                <li>• Led a three-person development team using Git-based workflows, managing feature development, code reviews, and deployment processes.</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="font-sans text-xl font-semibold text-gray-900 mb-1">
                Cyber Collective
              </h3>
              <p className="font-sans text-sm text-gray-500 mb-2">UX Intern • June 2024 - August 2024</p>
              <ul className="font-serif text-gray-700 leading-[1.7] space-y-2 list-none pl-0">
                <li>• Conducted UX research and accessibility audits for privacy-focused digital campaigns reaching over 5,000 users.</li>
                <li>• Collaborated with cross-functional teams of designers, developers, and policy advocates to translate research findings into actionable design improvements.</li>
                <li>• Built and iterated on Figma prototypes to improve usability and engagement, measurably increasing user interaction across campaigns.</li>
                <li>• Supported accessibility-first design practices across campaigns, emphasizing inclusive experiences for diverse and marginalized user groups.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="fade-in">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Projects
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2">
                Tiny Shell (myshell) — Unix Shell Implementation
              </h3>
              <ul className="font-serif text-gray-700 leading-[1.7] space-y-2 list-none pl-0">
                <li>• Implemented a Unix shell in C with process management using fork(), execvp(), and wait(), handling child process lifecycle, exit status propagation, and zombie process cleanup.</li>
                <li>• Built command parsing and PATH resolution to execute standard Unix utilities including ls, pwd, cat, and custom executables.</li>
                <li>• Added support for input/output redirection (&lt;, &gt;) and command pipelines (|) using Unix file descriptors and inter-process communication.</li>
                <li>• Debugged memory leaks and segmentation faults using Valgrind and GDB to ensure reliable shell operation across edge cases.</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2">
                SAHELI Station Finder — Safety Infrastructure Mapping App
              </h3>
              <ul className="font-serif text-gray-700 leading-[1.7] space-y-2 list-none pl-0">
                <li>• Architected a location-based mobile application to map women-safe sanitation infrastructure using GPS, user-generated data, and real-time status updates.</li>
                <li>• Designed data models for station metadata, crowdsourced safety scores, and time-bound alert states (unsafe, under repair, verified clean).</li>
                <li>• Outlined offline-first architecture with cached map tiles, offline reporting capabilities, and background synchronization for low-connectivity environments.</li>
                <li>• Designed emergency SOS workflows with live location sharing, emergency contact messaging, and audible alerts to support personal safety.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="fade-in pt-6 border-t border-gray-200">
          <p className="font-serif text-gray-700 mb-3 leading-[1.7]">
            For a detailed resume or to discuss opportunities, please reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:shruthi.senth@gmail.com"
              className="px-6 py-3 bg-accent-dark text-white font-sans font-medium text-sm hover:bg-accent transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/shruthi-senthilarasu-8b0255200/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-sans font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

