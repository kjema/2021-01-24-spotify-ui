import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = React.PropsWithChildren<LinkProps> & {
  className?: string
  activeClassName: string
  inactiveClassName: string
  children: ({ isActive }: { isActive: boolean }) => React.ReactNode
}

export function Link({
  href,
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...rest
}: Props) {
  const router = useRouter()

  let currentClassName = className ?? ''
  let isActive = router.pathname === href
  if (isActive) {
    currentClassName += ` ${activeClassName}`
  } else {
    currentClassName += ` ${inactiveClassName}`
  }

  return (
    <NextLink href={href} {...rest}>
      <a className={currentClassName}>{children({ isActive })}</a>
    </NextLink>
  )
}
