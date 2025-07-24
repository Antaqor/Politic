interface IssueCardProps {
  emoji: string
  summary: string
}

export default function IssueCard({ emoji, summary }: IssueCardProps) {
  return (
    <div className="p-4 border rounded space-y-2">
      <div className="text-3xl" role="img" aria-label="Issue icon">{emoji}</div>
      <p className="text-sm leading-relaxed">{summary}</p>
      <a href="#" className="text-brand-accent underline">Learn More</a>
    </div>
  )
}
