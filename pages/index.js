import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from "../components/Card"
import headerbg from '../images/headerbg.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="projects flex flex-col h-screen bg-neutral-200">
        <header style={{backgroundImage:`url(${headerbg.src})`}} className=' bg-innov8DarkGreen text-left'>
          <div className='p-5 pt-10 text-white'>
            <h1 className='font-bold text-4xl'>Innov8 <span className=' text-orange-400'>AR</span></h1>
            <p className='text-sm'>Prototype Web App to showcase innov8 projects in augmented reality</p>
          </div>
        </header>
        <main className='flex flex-col flex-grow box-border m-5 justify-evenly'>
          
          <Link href="/inproject"><Card>g</Card></Link> 
          <Card></Card>
          <Card></Card> 
          <Card></Card> 
        </main>
      </div>
  )
}
