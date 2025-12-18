interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-6 fade-in">
      <div className="h-[2px] bg-gray-900 flex-1" />
      <h2 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-gray-900 whitespace-nowrap">
        {title}
      </h2>
      <div className="h-[2px] bg-gray-900 flex-1" />
    </div>
  )
}

