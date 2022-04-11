import React from 'react'

function Contact() {
  return (
    <div className='text-white'>
      <form>
        <h3 className='text-2xl font-bold'>Entre em contato</h3>
        <label>
          Seu nome:
          <input type="text" />
        </label>
        <label>
          Seu e-mail:
          <input type="email" />
        </label>
        <label>
          Conteúdo:
          <textarea />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact