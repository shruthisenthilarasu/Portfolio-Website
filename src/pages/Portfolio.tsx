import SectionHeader from '../components/SectionHeader'
import ArticlePreview from '../components/ArticlePreview'

// Project data - in a real app, this might come from a CMS or API
const projects = [
  {
    id: 'saheli-station-finder',
    title: 'Saheli Station Finder',
    headline: 'Safety Infrastructure Mapping',
    description: 'A comprehensive mapping application designed to help users locate and navigate to safe spaces and safety infrastructure. Built with accessibility and real-world utility as core principles, this project demonstrates thoughtful product design and user-centered engineering.',
    body: `The Saheli Station Finder addresses a critical need: helping people find safe spaces quickly and reliably. The application integrates mapping technologies with safety data to create an intuitive, accessible tool.

Key features include real-time location services, detailed safety infrastructure information, and multiple navigation options. The project required careful consideration of user privacy, data accuracy, and interface design that works for diverse user needs.

Built with modern web technologies, the application demonstrates proficiency in full-stack development, API integration, and user experience design. The focus on accessibility ensures the tool is usable by the widest possible audience.`,
    tags: ['React', 'TypeScript', 'Mapping APIs', 'Tailwind CSS', 'Supabase'],
    githubLink: 'https://github.com/shruthisenthilarasu/Saheli-Navigation',
  },
  {
    id: 'round-robin-scheduler',
    title: 'Round-Robin Scheduler',
    headline: 'Systems Programming in C',
    description: 'A complete implementation of a round-robin CPU scheduler, exploring process management, context switching, and scheduling algorithms at the operating system level.',
    body: `This project delves deep into operating systems concepts, implementing a round-robin scheduler from scratch in C. The scheduler manages process queues, handles context switches, and implements time-slicing to ensure fair CPU allocation.

The implementation required careful attention to memory management, process state transitions, and synchronization. Working at this level provides fundamental understanding of how operating systems manage resources and schedule work.

Key components include process control blocks, ready queues, and the scheduler logic itself. The project demonstrates strong systems programming skills and deep understanding of computer architecture.`,
    tags: ['C', 'Operating Systems', 'Systems Programming', 'Computer Architecture'],
    githubLink: 'https://github.com/shruthisenthilarasu',
  },
  {
    id: 'tinyshell',
    title: 'TinyShell',
    headline: 'Unix Shell Implementation',
    description: 'A custom Unix shell written in C implementing core POSIX shell functionality. Supports process creation and lifecycle management using fork, execvp, and wait, with proper exit status handling and zombie cleanup.',
    body: `TinyShell is a lightweight Unix shell implementation that demonstrates core operating systems concepts including process management, inter-process communication, and system-level programming.

The shell provides a subset of standard Unix shell functionality with robust process lifecycle management, proper file descriptor handling, and memory safety. Key features include command execution via PATH resolution, I/O redirection for input and output, single pipeline support for inter-process communication, and built-in commands for directory navigation and shell termination.

The implementation includes comprehensive error handling with meaningful error messages, automatic cleanup of terminated child processes via signal handlers to prevent zombies, and defensive programming practices ensuring no memory leaks or invalid accesses. The project was validated using Valgrind for memory analysis and GDB for runtime debugging, resulting in a clean, memory-safe implementation.

This project showcases proficiency in low-level systems programming, direct use of Unix system calls for process and I/O management, and serves as a foundation for understanding operating system internals.`,
    tags: ['C', 'Unix', 'Systems Programming', 'Process Management', 'POSIX'],
    githubLink: 'https://github.com/shruthisenthilarasu/TinyShell',
  },
  {
    id: 'userspace-job-scheduler',
    title: 'UserSpace-Job-Scheduler',
    headline: 'User-Space Process Scheduling',
    description: 'Designed and implemented a user-space round-robin process scheduler in C using POSIX signals and timers, enforcing 100ms time slicing and preemptive context switching.',
    body: `The UserSpace-Job-Scheduler project implements a complete round-robin scheduling system at the user-space level, demonstrating advanced systems programming techniques using POSIX APIs.

The scheduler enforces strict 100ms time slicing via setitimer and SIGALRM, ensuring fair CPU allocation across all processes. Preemptive context switching is achieved through SIGSTOP and SIGCONT signals, allowing the scheduler to interrupt running processes and switch to the next in queue.

Process state management and cleanup are handled with waitpid, ensuring proper resource deallocation and preventing zombie processes. The implementation includes timeline instrumentation to visualize context switches and verify fair scheduling behavior, providing insights into the scheduler's operation and performance.

This project showcases deep understanding of Unix process management, signal handling, and real-time scheduling algorithms.`,
    tags: ['C', 'POSIX', 'Signals', 'Process Management', 'Systems Programming'],
    githubLink: 'https://github.com/shruthisenthilarasu/UserSpace-Job-Scheduler',
  },
  {
    id: 'axiom-notes',
    title: 'Axiom Notes',
    headline: 'AI-Powered Study Tools',
    description: 'An intelligent application that converts handwritten notes into interactive flashcards using OCR and NLP. Demonstrates practical application of AI/ML techniques to solve real problems.',
    body: `Axiom Notes bridges the gap between analog note-taking and digital study tools. Users can photograph their handwritten notes, and the application uses OCR to extract text, then NLP to identify key concepts and generate flashcards automatically.

The project involved building OCR pipelines, implementing text processing algorithms, and designing an intuitive interface for reviewing and editing generated flashcards. The challenge was balancing automation with user control—creating useful flashcards without losing the nuance of the original notes.

This project showcases skills in machine learning integration, data processing, and product design. It demonstrates how AI can enhance rather than replace human learning processes.`,
    tags: ['Python', 'OCR', 'NLP', 'Machine Learning', 'React'],
    githubLink: 'https://github.com/shruthisenthilarasu',
  },
]

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 md:py-10">
      <SectionHeader title="Portfolio" />
      
      <div className="space-y-10 md:space-y-12">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-3">
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500 font-medium">
                Feature Article
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              {project.title}
            </h1>
            
            <h2 className="font-sans text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              {project.headline}
            </h2>
            
            <div className="prose prose-lg max-w-none mb-4">
              <p className="font-serif text-gray-700 leading-[1.7] text-lg">
                {project.description}
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-6 mb-6">
              <p className="font-serif text-gray-700 leading-[1.7]">
                {project.body}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="font-sans text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {project.githubLink && (
              <p className="font-serif text-gray-700 leading-[1.7]">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline hover:text-gray-700"
                >
                  Click here to view repository
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

