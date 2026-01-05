import type { NavLink, Feature } from '../types'
import { ResearchIcon, InfrastructureIcon, CommunityIcon } from '../components/icons'

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#join', label: 'Get Involved' },
  { href: '#contact', label: 'Contact' },
]

export const FOOTER_LINKS: NavLink[] = NAV_LINKS

export const FEATURES: Feature[] = [
  {
    id: 'data-science',
    title: 'Data Science Projects',
    description: 'Hands-on projects in data analysis, visualization, and predictive modeling.',
    icon: ResearchIcon,
    gradient: 'from-indigo-600/20 to-indigo-600/20',
    iconColor: 'text-indigo-300',
  },
  {
    id: 'ml-ai',
    title: 'ML & AI Engineering',
    description: 'Build and deploy machine learning models and AI systems using industry tools.',
    icon: InfrastructureIcon,
    gradient: 'from-sky-600/20 to-sky-600/20',
    iconColor: 'text-sky-300',
  },
  {
    id: 'community',
    title: 'Community of Innovators',
    description: 'Connect with fellow students passionate about AI, ML, and data science innovation.',
    icon: CommunityIcon,
    gradient: 'from-rose-500/20 to-rose-500/20',
    iconColor: 'text-rose-300',
  },
]

export const BRAND = {
  name: 'HexHub',
  initials: 'HH',
  logoGradient: 'from-indigo-500 to-sky-400',
}

export const GRADIENTS = {
  primary: 'from-indigo-600 to-sky-500',
  hero: 'from-sky-300 via-indigo-300 to-purple-400',
  accent: 'from-rose-500 to-indigo-500',
} as const

