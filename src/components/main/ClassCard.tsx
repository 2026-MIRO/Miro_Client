import './ClassCard.css'

type ClassCardProps = {
  category: string
  title: string
  points: string
  progress: number
  highlighted?: boolean
}

export default function ClassCard({
  category,
  title,
  points,
  progress,
  highlighted = false,
}: ClassCardProps) {
  return (
    <article className={`class-card ${highlighted ? 'is-highlighted' : ''}`}>
      <p className="class-category">
        <span>{category}</span>
      </p>
      <h3 className="class-title">{title}</h3>
      <p className="class-points">멘토: {points} 김미림</p>
      <div className="class-progress-box">
        <p className="class-progress-label">{progress}% 완료</p>
        <div className="class-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </article>
  )
}
