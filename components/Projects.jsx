import React, { useState } from 'react'
import Card from './Card'

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: 'Recipes App',
      description: 'Esse foi um app de receitas',
      src: 'https://picsum.photos/400/200'
    }
  ]);
  return (
    <div className='text-white'>
      <h3 className='text-2xl font-bold'>Nosso portifólio</h3>
      { projects.map((project, i) => (
        <Card
          key={i}
          name={project.name}
          description={project.description}
          img={project.src}
        />
      ))}
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