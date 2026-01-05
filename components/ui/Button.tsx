import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 cursor:pointer";

    const variants = {
      primary: `bg-gradient-to-r ${className.includes("from-") ? "" : "from-indigo-600 to-sky-500"} text-white shadow hover:opacity-95 focus:ring-indigo-500`,
      secondary: `bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500`,
      ghost: `text-slate-300 hover:text-white hover:bg-slate-800 focus:ring-slate-500`,
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
