import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from "../components/Card"
import headerbg from '../images/headerbg.png'
import Link from 'next/link'
import {projects} from '../data'


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
);

console.log(projects) 
export default function Home() {
  console.log({projects});
  console.log(projects[0].name)
  return (
    <div className="projects flex flex-col h-screen bg-neutral-200">
        <header style={{backgroundImage:`url(${headerbg.src})`}} className=' bg-innov8DarkGreen text-left md:text-center'>
          <div className='p-5 pt-10 text-white'>
            <h1 className='font-bold text-4xl md:text-7xl'>Innov8 <span className=' text-orange-400'>AR</span></h1>
            <p className='text-sm md:text-xl'>Prototype Web App to showcase innov8 projects in augmented reality</p>
          </div>
        </header>
        <main className='flex flex-col flex-grow box-border m-5 justify-evenly md:px-[10vw]'>
          {projects.map((project)=>{
            return(
            <Card key={project.name} name={project.name} sub={project.sub} desc={project.desc} link={project.link}></Card>
            )
          })}  
        </main>
      </div>
  )
}
