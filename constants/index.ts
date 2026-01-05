import type { NavLink, Feature } from '../types'
import { ResearchIcon, InfrastructureIcon, CommunityIcon } from '../components/icons'

// Navigation
export const NAV_LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/community', label: 'Community' },
  { href: '/contributors', label: 'Contributors' },
  { href: '/contact', label: 'Contact' },
]

export const FOOTER_LINKS: NavLink[] = NAV_LINKS

// Brand
export const BRAND = {
  name: 'HexHub',
  initials: 'HH',
  logoGradient: 'from-indigo-500 to-sky-400',
}

// Gradients
export const GRADIENTS = {
  primary: 'from-indigo-600 to-sky-500',
  hero: 'from-sky-300 via-indigo-300 to-purple-400',
  accent: 'from-rose-500 to-indigo-500',
} as const

// Features
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

// Hero Section
export const HERO = {
  title: 'HexHub',
  subtitle: 'A community of students mastering Data Science, Machine Learning, and AI Engineering',
  description: 'We bridge the gap between academic theory and real-world AI applications. Join us to build cutting-edge ML models, collaborate on data-driven projects, and grow alongside a community of passionate AI enthusiasts.',
  ctaPrimary: 'Join Our Community',
  ctaSecondary: 'Discover More',
  stats: {
    learners: { value: '50+', label: 'Active Learners' },
    projects: { value: '10+', label: 'Projects' },
    learning: { value: '24/7', label: 'Learning' },
  },
}

// Features Section
export const FEATURES_SECTION = {
  title: 'What we do',
  description: 'We bring together students to learn collaboratively, apply industrial methodologies, and build a supportive community focused on growth.',
}

// Join Section
export const JOIN_SECTION = {
  title: 'Join HexHub',
  description: 'Ready to master AI? Join our community of students and start your journey with hands-on data science, ML engineering, and AI projects.',
  ctaTitle: 'Start Your Journey Today',
  ctaDescription: 'Join hundreds of students building AI solutions and deploying ML models in a supportive community.',
  ctaButton: "Join Now - It's Free",
  ctaLink: 'Learn More',
  ctaFooter: 'No credit card required • Free forever • Join 100+ AI students',
  steps: [
    {
      number: '1',
      title: 'Pick a track',
      description: 'Data Science · ML Engineering · AI Applications',
    },
    {
      number: '2',
      title: 'Collaborate on projects',
      description: 'Team up on ML models, data analysis, and AI apps',
    },
    {
      number: '3',
      title: 'Learn from experts',
      description: 'Weekly sessions, model reviews, and AI insights',
    },
  ],
}

// Contributors Section
export const CONTRIBUTORS = {
  title: 'Meet Our Contributors',
  description: 'The talented individuals behind HexHub, dedicated to building the best AI learning community. Each contributor brings unique expertise and passion to our mission.',
  cta: 'Want to join our team? We\'re always looking for passionate individuals to contribute to HexHub.',
  ctaButton: 'Contribute on GitHub',
  githubUrl: 'https://github.com/hexhub',
}

// About Page
export const ABOUT = {
  community: {
    title: 'About HexHub Community',
    description: 'HexHub is a vibrant community of students passionate about Data Science, Machine Learning, and AI Engineering. We bridge the gap between academic theory and real-world applications, providing a platform for collaborative learning and innovation.',
    mission: 'Our Mission',
    missionText: 'To empower students with hands-on experience in AI technologies, foster collaboration, and build a supportive learning environment where everyone can grow and contribute to cutting-edge projects.',
    values: [
      {
        title: 'Collaboration',
        description: 'We believe in the power of working together to solve complex problems.',
      },
      {
        title: 'Innovation',
        description: 'We encourage creative thinking and experimentation with new technologies.',
      },
      {
        title: 'Learning',
        description: 'We provide resources and mentorship to help everyone grow their skills.',
      },
      {
        title: 'Community',
        description: 'We build lasting connections and support each other\'s journey.',
      },
    ],
  },
  founder: {
    name: 'Ermia Moghadamy',
    role: 'Founder & Leader',
    bio: 'Ermia Moghadamy is the visionary founder and leader of HexHub. With a deep passion for AI and machine learning, Ermia established HexHub to create a space where students can learn, collaborate, and innovate together.',
    achievements: [
      'Led the development of multiple successful AI projects',
      'Mentored dozens of students in data science and ML',
      'Built a thriving community of 50+ active learners',
      'Established partnerships with industry leaders',
    ],
    vision: 'My vision for HexHub is to create the most supportive and innovative AI learning community, where every student can realize their potential and contribute to the future of technology.',
  },
}

// Contact Page
export const CONTACT = {
  title: 'Get in Touch',
  description: 'Have questions or want to collaborate? We\'d love to hear from you!',
  form: {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Thank you! Your message has been sent.',
    error: 'Something went wrong. Please try again.',
  },
  info: {
    email: 'contact@hexhub.io',
    github: 'https://github.com/hexhub',
    linkedin: 'https://linkedin.com/company/hexhub',
  },
}

// Blog Page
export const BLOG = {
  title: 'Blog',
  description: 'Explore our community\'s latest projects, news, and events.',
  tabs: {
    posts: 'Posts',
    news: 'News',
    events: 'Events',
  },
}

// Signup Modal
export const SIGNUP_MODAL = {
  title: 'Join HexHub',
  steps: [
    {
      title: 'Join HexHub',
      description: 'Let\'s get started with your basic information.',
      fields: {
        name: 'Full Name',
        email: 'Email Address',
      },
    },
    {
      title: 'Your Interests',
      description: 'Select the areas you\'re most interested in.',
      interests: ['Data Science', 'Machine Learning', 'AI Engineering', 'All of the above'],
    },
    {
      title: 'Almost Done!',
      description: 'Review your information and join the community.',
    },
  ],
  buttons: {
    back: 'Back',
    next: 'Next',
    join: 'Join Now',
  },
}

// Upcoming Events
export const UPCOMING_EVENTS = {
  title: 'Upcoming Events',
  empty: 'No upcoming events at the moment. Check back soon!',
  events: [
    {
      id: '1',
      title: 'AI Workshop Series',
      date: '2024-02-15',
      time: '18:00',
      location: 'Online',
      description: 'Join us for an interactive workshop on building your first ML model.',
    },
    {
      id: '2',
      title: 'Community Meetup',
      date: '2024-02-22',
      time: '19:00',
      location: 'Virtual',
      description: 'Monthly community meetup to discuss projects and share knowledge.',
    },
  ],
}

// Navbar
export const NAVBAR = {
  login: 'Login',
}

