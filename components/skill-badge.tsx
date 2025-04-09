interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="flex items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors">
      <span className="font-medium">{name}</span>
    </div>
  )
}
