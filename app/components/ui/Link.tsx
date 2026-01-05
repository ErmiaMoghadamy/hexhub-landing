import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'button'
  children: ReactNode
}

const Link = forwardRef<HTMLElement, LinkProps>(
  ({ variant = 'default', className = '', children, style, ...props }, ref) => {
    const baseStyles = 'transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900'

    const variants = {
      default: 'text-sm text-slate-300 hover:text-white focus:ring-indigo-500',
      button: 'inline-flex items-center rounded-md px-5 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:ring-indigo-500',
    }

    const buttonStyle =
      variant === 'button'
        ? {
            background: 'linear-gradient(to right, rgb(79 70 229), rgb(14 165 233))',
            ...style,
          }
        : style

    const Component = variant === 'button' ? 'button' : 'a'

    const { href, ...restProps } = props

    return (
      <Component
        ref={ref as any}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        style={buttonStyle}
        {...(variant === 'button' ? {} : { href })}
        {...restProps}
      >
        {children}
      </Component>
    )
  },
)

Link.displayName = 'Link'

export { Link }

