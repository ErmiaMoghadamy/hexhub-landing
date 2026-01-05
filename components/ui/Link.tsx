import type { AnchorHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import NextLink from "next/link";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: "default" | "button";
  children: ReactNode;
  href: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = "default", className = "", children, style, href, onClick, ...props }, ref) => {
    const baseStyles =
      "transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";

    const variants = {
      default: "text-sm text-slate-300 hover:text-white focus:ring-indigo-500",
      button:
        "inline-flex items-center rounded-md px-5 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:ring-indigo-500",
    };

    const buttonStyle =
      variant === "button"
        ? {
            background:
              "linear-gradient(to right, rgb(79 70 229), rgb(14 165 233))",
            ...style,
          }
        : style;

    // Use Next.js Link for internal routes, regular anchor for external/hash links
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#');
    
    if (variant === "button" && onClick) {
      return (
        <button
          className={`${baseStyles} ${variants[variant]} ${className}`}
          style={buttonStyle}
          onClick={onClick}
          type="button"
        >
          {children}
        </button>
      );
    }

    if (isExternal || variant === "button") {
      return (
        <a
          ref={ref}
          href={href}
          className={`${baseStyles} ${variants[variant]} ${className}`}
          style={buttonStyle}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        style={buttonStyle}
        onClick={onClick}
        {...props}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";

export { Link };
