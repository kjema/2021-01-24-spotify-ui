interface Props {
  className?: string
}

export function LibraryIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <path
        d="M311.873 77.46l166.349 373.587-39.111 17.27L272.762 94.73zM64 463.746v-384h42.666v384H64zm106.667 0v-384h42.667v384h-42.666z"
        fill="currentColor"
      />
    </svg>
  )
}
