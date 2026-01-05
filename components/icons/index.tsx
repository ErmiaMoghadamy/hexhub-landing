export function ResearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  )
}

export function InfrastructureIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

export function CommunityIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2v4m0 12v4m10-10h-4M6 12H2M17.657 6.343l-2.828 2.828M8.172 15.828l-2.828 2.828M17.657 17.657l-2.828-2.828M8.172 8.172L5.344 5.344"
      />
    </svg>
  )
}

export function HexagonalGearIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 120 120"
      stroke="currentColor"
    >
      {/* Outer hexagon */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M60 10 L100 30 L100 70 L60 90 L20 70 L20 30 Z"
      />
      {/* Inner gear circle */}
      <circle cx="60" cy="50" r="25" strokeWidth={2.5} fill="none" />
      {/* Gear teeth - top */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M60 25 L60 15 M60 75 L60 85"
      />
      {/* Gear teeth - sides */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M35 50 L25 50 M95 50 L105 50"
      />
      {/* Gear teeth - diagonal */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M45.5 28.5 L38.5 21.5 M81.5 28.5 L88.5 21.5 M45.5 71.5 L38.5 78.5 M81.5 71.5 L88.5 78.5"
      />
      {/* Center circle */}
      <circle cx="60" cy="50" r="8" strokeWidth={2.5} fill="none" />
    </svg>
  )
}

