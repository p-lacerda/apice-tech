import React from 'react';

function TopContent() {

const englishText = <h3>We are developers for innovative solutions</h3>
  return (
    <div className='text-white'>
      <div className='flex items-center text-center justify-center mb-12 h-screen'>
        
        {/* <h3 className='text-5xl font-[200]'>Somos desenvolvedores para soluções inovadoras</h3> */}
        <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Fazemos uma jornada para sua aplicação</h1>
      <p className="py-6">
        Nosso time é preparado para fazer com que sua aplicação seja uma ótima experiência para os seus usuários e que seja eficiente.
      </p>
      <button className="btn bg-orange-400 text-orange-900 hover:bg-orange-300">Descubra mais</button>
    </div>
  </div>
      </div>


    </div>
  )
}

export default TopContent