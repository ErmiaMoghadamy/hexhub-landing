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

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
}

export interface Post {
  id: string
  title: string
  author: string
  date: string
  excerpt: string
  image?: string
}

export interface NewsItem {
  id: string
  title: string
  date: string
  excerpt: string
  source: string
  link?: string
  image?: string
}

