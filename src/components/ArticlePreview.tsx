import { Link } from 'react-router-dom'

interface ArticlePreviewProps {
  category?: string
  headline: string
  excerpt: string
  linkTo?: string
  linkText?: string
  large?: boolean
  tags?: string[]
  externalLink?: string
}

export default function ArticlePreview({
  category,
  headline,
  excerpt,
  linkTo,
  linkText = 'Continue Reading',
  large = false,
  tags = [],
  externalLink,
}: ArticlePreviewProps) {
  const content = (
    <article
      className={`fade-in ${
        large
          ? 'md:col-span-2 border-l-2 border-gray-900 pl-6'
          : 'border-l border-gray-300 pl-4'
      }`}
    >
      {category && (
        <span className="font-sans text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold mb-2 block">
          {category}
        </span>
      )}
      <h3
        className={`font-serif font-black text-gray-900 mb-2 tracking-tight ${
          large ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        }`}
      >
        {headline}
      </h3>
      <p
        className={`font-serif text-gray-700 mb-3 leading-[1.75] ${
          large ? 'text-base md:text-lg' : 'text-sm md:text-base'
        }`}
      >
        {excerpt}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="font-sans text-xs text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {linkTo && (
        <Link
          to={linkTo}
          className="font-serif text-xs uppercase tracking-wider text-gray-900 font-medium"
        >
          {linkText}
        </Link>
      )}
      {externalLink && (
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-xs uppercase tracking-wider text-gray-900 font-medium"
        >
          {linkText}
        </a>
      )}
    </article>
  )

  return content
}

