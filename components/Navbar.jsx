import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function Navbar() {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <nav className="px-5 md:px-0 border-b-2 border-zinc-800 py-6 bg-[#171717] fixed z-20 w-screen top-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-bold whitespace-nowrap text-white">
            Odessa
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          onClick={() => setMenuActive(!isMenuActive)}
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`${isMenuActive ? 'null' : 'hidden '} w-full md:block md:w-auto`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
            <li>
              <Link href="#">
                <a
                  className="block py-2 pr-4 pl-3 border-b md:hover:bg-transparent md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
                  aria-current="page"
                >
                  Início
                </a>
              </Link>

            </li>
            <li>
              <Link href="#about-us">
                <a
                  className="block py-2 pr-4 pl-3 border-b md:hover:bg-transparent md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
                >
                  Sobre nós
                </a>
              </Link>
            </li>
            <li>
              <Link href="#portfolio">
                <a
                  className="block py-2 pr-4 pl-3 border-b md:hover:bg-transparent md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
                >
                  Nosso portifólio
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a
                  className="block py-2 pr-4 pl-3 border-b md:hover:bg-transparent md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
                >
                  Contato
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar