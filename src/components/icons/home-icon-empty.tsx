interface Props {
  className?: string
}

export function HomeIconEmpty({ className }: Props) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <path
        d="M256.274 60.84L84.324 166.237v276.826H193.27V293.73h126.958v149.333h107.994V165.476L256.274 60.84zm0-24.89l192.178 113.195v315.25H300V315.062h-86.501v149.333H64.095V150.161L256.274 35.95z"
        fill="currentColor"
      />
    </svg>
  )
}
