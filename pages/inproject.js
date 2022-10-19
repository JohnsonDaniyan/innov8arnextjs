import logo from '../images/logoPPT.png'
import Image from 'next/image'
import back from '../images/back.svg'
import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'

const Viewer = dynamic(
    () => import('../components/Viewer'),
    { ssr: false }
  )

const Inproject = () => {
    
   const [view, setView] = useState(0)
    return <div className="inProject box-border p-5 h-screen">
    <div style={{background: "linear-gradient(180deg, #FFFFFF 0%, #E2E2E2 80.21%, #6A6A6A 100%)"}} className=' overflow-hidden relative h-[59.4%] w-fill border border-black rounded-2xl flex flex-col items-center justify-center'>
        <div className=" z-10 absolute top-[9.5px] left-[9.5px]">
          <Link  href='/'>
          <Image style={{position:"absolute"}} src={back} className="" alt=''></Image>
          </Link>
          </div> 
        <Suspense fallback={`Loading...`}>
        <Viewer></Viewer> 
        </Suspense>
        <div className='w-full p-5 pt-10 text-white absolute text-left bottom-0'>
          <h1 className='font-bold text-2xl'>~Vaccine Cooling System</h1>
          <p className='text-sm'>(VCS) pharmaceutical cooling solution</p>
      </div>
    </div>
    <div className="info w-fill box-border mt-5">
      <div className="switcher w-fill">
        <div className="text w-fill flex justify-around"> 
          <div className="text1 text-center cursor-pointer font-bold text-gray-500" onClick={()=>{setView(0)}}>Problem Statement</div>
          <div className="text2 text-center cursor-pointer font-bold text-gray-500" onClick={()=>{setView(1)}}>Proposed Solution</div>
        </div> 
        <div className="linecont relative">
          <div className="line h-[1px] w-fill bg-black mt-2"></div>
          <div id="selector" className={`selector w-[31px] h-[7px] bg-green-600 rounded-b-xl absolute left-1/4 transition-all ease-in-out -translate-x-1/2 ${view === 1? " left-3/4" : ""}`}></div>
        </div>
      </div> 
      <div id="text-container" className='relative'>
        <div className={`p-5 pt-10 text-black text-left bottom-0 overflow-hidden transition-all delay-300 duration-500${view===1? " opacity-0":""}`}>
            <small className={` block text-gray-400 text-xs transition-transform duration-1000 translate-x-0 ${view===1? " -translate-x-full":""}`}>Problem Statement</small>
            <h1 className={`font-bold text-2xl transition-all delay-150  duration-500 translate-x-0${view===1? "  -translate-x-full":""}`}>Vaccine Cooling System</h1>
            <p className={`block text-sm transition-transform delay-250  duration-500 translate-x-0${view===1? " -translate-x-full":""}`}>The ever-present issue of cooling and storage of pharmaceutical instruments has taken a toll on the health industry of Nigeria, in this project we aim to aleviate issues through an innovative solution </p>
        </div> 
        <div className={` absolute w-fill top-0 p-5 pt-10 text-black text-left bottom-0 overflow-hidden transition-opacity duration-500 opacity-0${view===1? "delay-1000 opacity-1":""}`}>
            <small className={`block text-gray-400 text-xs  -translate-x-full transition-transform delay-300 ${view!==0? " translate-x-1":""} `}>Proposed Solution</small>
            <h1 className={`font-bold text-2xl -translate-x-full transition-transform delay-500 ${view!==0? " translate-x-1":""} `}>Vaccine Cooling System</h1>
            <p className={`text-sm -translate-x-full transition-transform delay-700 ${view!==0? " translate-x-1":""} `}>Proposed solution here</p>
        </div>
      </div>
    </div>
  </div>
}
export default Inproject