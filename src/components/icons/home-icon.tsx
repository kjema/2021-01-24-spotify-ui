interface Props {
  className?: string
}

export function HomeIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <path
        d="M448 463.746H298.667V314.413h-85.334v149.333H64V148.318L256 36.572l192 110.984v316.19z"
        fill="currentColor"
      />
    </svg>
  )
}
