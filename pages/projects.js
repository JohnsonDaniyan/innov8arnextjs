import Card from "../components/Card"
import headerbg from '../images/headerbg.png'

const projects = () =>{

    return (
        <div className="projects flex flex-col h-screen bg-neutral-200">
        <header style={{backgroundImage:`url(${headerbg.src})`}} className=' bg-innov8DarkGreen text-left md:text-center'>
          <div className='p-10 pt-10 text-white'>
            <h1 className='font-bold text-4xl md:text-7xl'>Innov8 <span className=' text-orange-400'>AR</span></h1>
            <p className='text-sm md:text-xl'>Prototype Web App to showcase innov8 projects in augmented reality</p>
          </div>
        </header>
        <main className='flex flex-col flex-grow box-border m-5 justify-evenly md:px-[10vw]'>
          <Card></Card> 
          <Card></Card>
          <Card></Card> 
          <Card></Card> 
        </main>
      </div>
    )
}
export default projects