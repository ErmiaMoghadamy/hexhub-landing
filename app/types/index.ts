export interface NavLink {
  href: string
  label: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  iconColor: string
}

