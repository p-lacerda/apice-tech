import React from 'react'

function Contact() {

  const englishTitle = 'Contact us';
  const englishName = 'Your name';
  return (
<div id="contact" className='text-white scroll-mt-24'>
      <h3 className='text-2xl font-bold mb-4 text-center'>Contato</h3>
      <div className='max-w-lg m-auto'>
      <form className=''>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Seu nome
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu nome..."
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu e-mail..."
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-30"
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Digite o assunto do e-mail..."
            className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-30"
          >
            Conteúdo do e-mail
          </label>
          <textarea
            type="text"
            id="content"
            className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required=""
          />
        </div>
        <button
          type="submit"
          className="text-orange-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-orange-400 hover:bg-orange-300 focus:ring-blue-800 mb-6"
        >
          Enviar
        </button>
      </form>
      </div>
    </div>




  )
}

export default Contact