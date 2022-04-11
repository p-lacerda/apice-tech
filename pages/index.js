import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar';
import TopContent from '../components/TopContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>QuantumDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen bg-zinc-900'>
        <Navbar />
        <TopContent />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
