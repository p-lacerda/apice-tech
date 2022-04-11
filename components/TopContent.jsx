import React from 'react';

function TopContent() {
  return (
    <div className='text-white'>
      <div className='flex items-center text-center justify-center mb-12 overflow-hidden'>
        <h3 className='text-5xl font-[200] absolute z-10'>Somos desenvolvedores para soluções inovadoras</h3>
        <video
          autoPlay
          loop
          muted
          className="w-auto max-w-none opacity-20 max-h-screen"
        >
          <source
            src="https://raw.githubusercontent.com/p-lacerda/odessa/main/pexels-pavel-danilyuk-5495781(2).mp4?token=GHSAT0AAAAAABSCTESCE4HN7B7SK6LOPFVCYSURRFA"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default TopContent