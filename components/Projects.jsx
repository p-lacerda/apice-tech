import React, { useState } from 'react'
import Card from './Card'
import CardEmpty from './CardEmpty';


function Projects() {
  const [projects, setProjects] = useState([
    {
      name: 'Recipes App',
      description: 'Esse foi um app de receitas',
      src: '/TechinApp.png',
      page: 1,
    },
    {
      name: 'Techin App',
      description: 'Estudo de caso no Figma de uma aplicação de Patinetes Elétricos',
      src: '/TechinApp.png'
    },
    {
      name: 'Gaming App',
      description: 'Estudo de caso no Figma de uma aplicação sobre jogos digitais',
      src: '/GamingApp.png',
    }
  ]);
  return (
    <div className='text-white'>
      <h3 className='text-2xl font-bold mb-4 text-center'>Nosso portifólio</h3>
      <div className="carousel carousel-left sm:max-w-2xl md:max-w-none px-8 md:px-0 py-4 md:py-0 space-x-4 bg-stone-900 rounded-box">
      { projects.map((project, i) => (
        <Card
          key={i}
          name={project.name}
          description={project.description}
          img={project.src}
        />
      ))}
      </div>

      {/* <div>
        <img src="" alt="Foto do projeto"/>
        <p>Descrição do projeto</p>
        <button>Acessar o projeto</button>
      </div> */}
      {/* <div>
        <p>Faça parte do nosso portifólio</p>
        <button>Entre em contato</button>
      </div> */}
    </div>
  )
}

export default Projects