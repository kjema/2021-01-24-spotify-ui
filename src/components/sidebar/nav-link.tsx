import { Link } from '@components/link'
import { HomeIcon } from '@components/icons/home-icon'

export function NavLink() {
  return (
    <Link
      href="/"
      activeClassName="flex items-center h-10 px-4 rounded bg-accent-3"
      inactiveClassName="flex items-center h-10 px-4 rounded text-accent-5 hover:text-white transition duration-200 ease-linear"
    >
      {({ isActive }) => (
        <>
          <div className="mr-4 ">
            <HomeIcon className="w-6 h-6" />
          </div>
          <div className="font-bold">Home</div>
        </>
      )}
    </Link>
  )
}
