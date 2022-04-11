import React, { useState } from 'react'
import Card from './Card'

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: 'Recipes App',
      description: 'Esse foi um app de receitas',
      src: 'https://picsum.photos/400/200'
    },
    {
      name: 'Education App',
      description: 'Esse foi um app de educação',
      src: 'https://picsum.photos/400/200'
    },
    {
      name: 'Games App',
      description: 'Esse foi um app de jogos',
      src: 'https://picsum.photos/400/200'
    }
  ]);
  return (
    <div className='text-white'>
      <h3 className='text-2xl font-bold mb-4'>Nosso portifólio</h3>
      <div className="carousel carousel-left max-w-md px-8 py-4 space-x-4 bg-stone-900 rounded-box">
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