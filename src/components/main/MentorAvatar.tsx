import './MentorAvatar.css'

type MentorAvatarProps = {
  image: string
  name: string
  department: string
  grade: string
}

export default function MentorAvatar({
  image,
  name,
  department,
  grade,
}: MentorAvatarProps) {
  return (
    <article className="mentor-avatar">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p className="mentor-avatar-meta">
        <span className="mentor-avatar-dept">{department}</span>
        <span className="mentor-avatar-sep" aria-hidden>
          |
        </span>
        <span className="mentor-avatar-grade">{grade}</span>
      </p>
    </article>
  )
}
