import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import NextLink from 'next/link'
import type { AppProps } from 'next/app'

import '../styles/global.css'
import { Link } from '@components/link'
import { HomeIcon } from '@components/icons/home-icon'
import { HomeIconEmpty } from '@components/icons/home-icon-empty'
import { SearchIcon } from '@components/icons/search-icon'
import { SearchIconEmpty } from '@components/icons/search-icon-empty'
import { LibraryIcon } from '@components/icons/library-icon'
import { LibraryIconEmpty } from '@components/icons/library-icon-empty'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Spotify UI</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" sizes="16x16" type="image/png" href="/favicon16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen h-screen text-sm antialiased font-normal leading-5 text-white">
        <nav className="pt-6 bg-black w-60">
          <div className="flex flex-shrink-0">
            <NextLink href="/">
              <a className="flex-1 px-6 mb-6">
                <img src="/spotify.svg" alt="Spotify Logo" />
              </a>
            </NextLink>
          </div>
          <ul>
            <li>
              <div className="px-2">
                <Link
                  href="/"
                  activeClassName="bg-accent-3"
                  inactiveClassName="text-accent-5 hover:text-white"
                  className="flex items-center h-10 px-4 duration-200 ease-linear rounded transition-color"
                >
                  {({ isActive }) => (
                    <>
                      <div className="mr-4">
                        {isActive ? (
                          <HomeIcon className="w-6 h-6" />
                        ) : (
                          <HomeIconEmpty className="w-6 h-6" />
                        )}
                      </div>
                      <span className="font-bold">Home</span>
                    </>
                  )}
                </Link>
              </div>
            </li>
            <li>
              <div className="px-2">
                <Link
                  href="/search"
                  activeClassName="bg-accent-3"
                  inactiveClassName="text-accent-5 hover:text-white"
                  className="flex items-center h-10 px-4 duration-200 ease-linear rounded transition-color"
                >
                  {({ isActive }) => (
                    <>
                      <div className="mr-4 ">
                        {isActive ? (
                          <SearchIcon className="w-6 h-6" />
                        ) : (
                          <SearchIconEmpty className="w-6 h-6" />
                        )}
                      </div>
                      <div className="font-bold">Search</div>
                    </>
                  )}
                </Link>
              </div>
            </li>
            <li>
              <div className="px-2">
                <Link
                  href="/library"
                  activeClassName="bg-accent-3"
                  inactiveClassName="text-accent-5 hover:text-white"
                  className="flex items-center h-10 px-4 duration-200 ease-linear rounded transition-color"
                >
                  {({ isActive }) => (
                    <>
                      <div className="mr-4 ">
                        {isActive ? (
                          <LibraryIcon className="w-6 h-6" />
                        ) : (
                          <LibraryIconEmpty className="w-6 h-6" />
                        )}
                      </div>
                      <div className="font-bold">Your Library</div>
                    </>
                  )}
                </Link>
              </div>
            </li>
          </ul>
          <div className="mt-6">
            <h1 className="mx-6 mb-3 text-xs font-bold leading-4 tracking-widest uppercase select-none text-accent-5">
              Playlists
            </h1>
            <div>
              <button className="flex items-center px-6 py-1 transition-opacity duration-200 ease-linear opacity-70 hover:opacity-100 focus:outline-none focus:opacity-100">
                <svg
                  className="w-8 h-8 p-1 mr-4 text-black bg-white fill-current"
                  shapeRendering="crispEdges"
                  viewBox="0 0 36 36"
                >
                  <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
                </svg>
                <span className="font-bold leading-4">Create Playlist</span>
              </button>
              <button className="flex items-center px-6 py-1 transition-opacity duration-200 ease-linear opacity-70 hover:opacity-100 focus:outline-none focus:opacity-100">
                <div
                  className="flex items-center justify-center flex-shrink-0 w-8 h-8 p-1 mr-4"
                  style={{
                    background: 'linear-gradient(135deg,#450af5,#c4efd9)',
                  }}
                >
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    className="fill-current"
                  >
                    <path fill="none" d="M0 0h16v16H0z"></path>
                    <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
                  </svg>
                </div>
                <span className="font-bold leading-4">Liked Songs</span>
              </button>
              <hr className="h-px mx-6 my-2 border-none bg-accent-3" />
            </div>
          </div>
        </nav>
        <main className="flex-1">
          <div className="sticky top-0" style={{ height: '60px' }}></div>
          <div
            className="absolute w-full"
            style={{
              marginTop: '-60px',
              height: '332px',
              zIndex: -1,
              backgroundColor: 'rgb(83, 83, 83)',
              backgroundImage: 'linear-gradient(rgba(0,0,0,.6),#121212)',
            }}
          ></div>
          <div className="px-8 py-6">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  )
}

export default MyApp
