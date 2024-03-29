import Image from 'next/image';
import React from 'react';

function Card({ name, description, img, link}) {
  return (
    <div className="flex-col max-w-xs rounded-lg border shadow-md bg-zinc-800 border-gray-700 carousel-item w-full">
  <a href="#">
    <Image className="rounded-t-lg w-full overflow-hidden scale-150 opacity-10 hover:opacity-30 hover:scale-145 duration-300 ease-in-out hover:scale-[1.7] rotate-45 2s cubic-bezier(0.4, 0, 0.6, 1)" width={400} height={350} src={ img } alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        { name }
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-400">
      { description }
    </p>
    <a
      href={ link }
      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-transparent border hover:bg-zinc-900 focus:ring-blue-800 duration-300 ease-in-out"
    >
      Acesse o projeto
      <svg
        className="ml-2 -mr-1 w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </div>
</div>

  )
}

export default Card