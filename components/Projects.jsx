import React, { useState } from 'react'
import Card from './Card'
import CardEmpty from './CardEmpty';


function Projects() {
  const [projects, setProjects] = useState([
    {
      name: 'Recipes App',
      description: 'Essa foi uma aplicação para ver e salvar receitas.',
      src: '/RecipesApp.png',
      link: 'https://app-de-receitas-ten.vercel.app/recipes-app/comidas'
    },
    {
      name: 'Techin App',
      description: 'Estudo de caso no Figma de uma aplicação de Patinetes Elétricos',
      src: '/TechinApp.png',
      link: 'https://www.figma.com/file/FaMErvVi7SoAjoyFbD3r6D/Techin-App?node-id=118%3A38'
    },
    {
      name: 'Gaming App',
      description: 'Estudo de caso no Figma de uma aplicação sobre jogos digitais',
      src: '/GamingApp.png',
      link: 'https://www.figma.com/file/IVwaYPDMaoB0pMRJjaj84k/Gaming-App?node-id=0%3A1'
    }
  ]);
  return (
    <div className='text-white'>
      <h3 id="portfolio" className='text-2xl font-bold mb-4 text-center'>Nosso portifólio</h3>
      <div className="carousel carousel-left sm:max-w-2xl md:max-w-none px-8 md:px-0 py-4 md:py-0 space-x-4 bg-stone-900 rounded-box m-auto">
      { projects.map((project, i) => (
        <Card
          key={i}
          name={project.name}
          description={project.description}
          img={project.src}
          link={project.link}
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