import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar';
import TopContent from '../components/TopContent';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className='bg-stone-900'>
      <Head>
        <title>Odessa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='h-100 bg-stone-900 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto'>
        <div className='px-5 space-y-6'>
          <TopContent />
          <AboutUs />
          <Projects />
          <Contact />
        </div>
      </main>

      <footer className='bg-zinc-900 text-center text-white p-4 border-t-2 border-zinc-800'>
        Feito com ReactJS e TailwindCSS
      </footer>
    </div>
  )
}
