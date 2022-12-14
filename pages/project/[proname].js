import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import back from '../../images/back.svg'
import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'
import {AiFillYoutube} from 'react-icons/ai'
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed'
// import projects from '../../data'

const Viewer = dynamic(
    () => import('../../components/Viewer'),
    { ssr: false }
  )

const projects = {
  "Vaccine Cooling System":{
      "sub":"(vcs)",
      "desc":"",
      "link":"https://d2zes9ifb0ot5n.cloudfront.net/vcs.glb",
      "img":"https://innov8-ar-bucket.s3.amazonaws.com/Images/Egg+Incubator.png",
      "ytemb":"dH3ndOco4kc"
    },
    "People's Mobility":{
        "sub":"Electric solution",
        "desc":"",
        "link":"https://d2zes9ifb0ot5n.cloudfront.net/Mobility.glb",
        "img":"https://d2zes9ifb0ot5n.cloudfront.net/Mobility.png",
        "ytemb":"ASh1Pm8SJ-s"
    },
    "Egg Incubator":{
        "sub":"Egg Incubator",
        "desc":"Description here for EI",
        "link":"https://d2zes9ifb0ot5n.cloudfront.net/Egg+incubator1.glb",
        "img":"https://d2zes9ifb0ot5n.cloudfront.net/Egg+incubator.png",
        "ytemb":"OpOXeJAHI1I"
    },
    "Walking Aid":{
        "sub":"Egg Incubator",
        "desc":"Description here for EI",
        "link":"https://d2zes9ifb0ot5n.cloudfront.net/Walking+Aid/walking+aid2.glb",
        "img":"https://d2zes9ifb0ot5n.cloudfront.net/Walking+Aid/walking+aid2.66.34.png",
        "ytemb":"Fdz6zrMmlfc"
    },
    "Soiless Farm":{
        "sub":"Egg Incubator",
        "desc":"Description here for EI",
        "link":"https://d2zes9ifb0ot5n.cloudfront.net/Soiless+Farm/Flooding.glb",
        "img":"https://d2zes9ifb0ot5n.cloudfront.net/Walking+Aid/walking+aid2.66.34.png",
        "ytemb":"none"
    },
    "Soil Intelligence":{
        "sub":"Soil Monitoring System",
        "desc":"Used for measuring soil nutrient content",
        "link":"https://d2zes9ifb0ot5n.cloudfront.net/Soil-intelligence/soil-intelligence.glb",
        "img":"https://d2zes9ifb0ot5n.cloudfront.net/Walking+Aid/walking+aid2.66.34.png",
        "ytemb":"_FZsg3gQvx0"
    },
    "Mushroom Farm":{
      "sub":"Mushroom Farm",
      "desc":"Description here for MF",
      "link":"https://d2zes9ifb0ot5n.cloudfront.net/mushroom+farm4.glb",
      "img":"https://d2zes9ifb0ot5n.cloudfront.net/Mushroom+Farm.png",
      "ytemb":"dH3ndOco4kc"
    },
    "Farmisphere":{
      "sub":"Fresh Produce",
        "desc":"Keep Seafood Fresh During Transpotration",
      "link":"https://d2zes9ifb0ot5n.cloudfront.net/farmsphere+low-end2.glb",
      "img":"https://d2zes9ifb0ot5n.cloudfront.net/Mushroom+Farm.png",
      "ytemb":"MQAAZGhIE2A"
    },
}
  // export const projects = [
  //   {
  //     "name":"Vaccine Cooling System",
  //     "sub":"(vcs)",
  //     "desc":"",
  //     "link":"https://d2zes9ifb0ot5n.cloudfront.net/vcs.glb"
  //   },
  //   {
  //       "name":"Mobility",
  //       "sub":"Mobility",
  //       "desc":"Description here for Mob",
  //       "link":"https://d2zes9ifb0ot5n.cloudfront.net/Mobility.glb",
  //   },
  //   {
  //       "name":"Egg Incubator",
  //       "sub":"Egg Incubator",
  //       "desc":"Description here for EI",
  //       "link":"https://d2zes9ifb0ot5n.cloudfront.net/Egg+incubator1.glb",
  //   },
  //   {
  //     "name":"Mushroom Farm",
  //     "sub":"Mushroom Farm",
  //     "desc":"Description here for MF",
  //     "link":"https://d2zes9ifb0ot5n.cloudfront.net/mushroom+farm4.glb",
  //   },
  // ]

function Project() {
    const router = useRouter()
    const {proname} = router.query;
    const [currProj, setCurrProj] = useState({})
    const [view, setView] = useState(0);

    useEffect(() =>{
      setCurrProj(projects[proname])
    },[proname])
    console.log(currProj)
    if (JSON.stringify(currProj) === '{}'){return(<div>loading</div>)}
    return (
        <div className="inProject box-border p-5 h-screen  bg-gray-100 flex flex-col md:flex-row">
        <div className=' bg-inherit md:bg-gray-100 overflow-hidden relative md:w-1/2 md:h-full h-[59.4%] w-fill rounded-2xl flex flex-col items-center justify-center'>
            <div className=" z-20 absolute top-[9.5px] left-[9.5px]">
              <Link  href='/'>
              <Image style={{position:"absolute"}} src={back} className="" alt=''></Image>
              </Link>
              </div> 
            <Suspense fallback={`Loading...`}>
            <Viewer link={projects[proname].link}></Viewer> 
            </Suspense>
            <div style={{zIndex:"-1"}} className='w-full p-5 pt-10 text-black absolute text-left bottom-0 '>
              <h1 className='font-bold text-2xl'> {proname} </h1>
              <p className='text-sm'>{projects[proname].sub}</p>
          </div>
        </div>
        <div className="info w-fill md:w-1/2 box-border mt-5 flex-grow">
          <div className="switcher w-fill">
            <div className="text w-fill flex justify-around"> 
              <div className="text1 text-center cursor-pointer font-bold w-1/2 text-gray-500" onClick={()=>{setView(0)}}>Problem Statement</div>
              <div className="text2 text-center cursor-pointer font-bold w-1/2 flex items-center justify-center gap-2 text-gray-500" onClick={()=>{setView(1)}}>Proposed Solution <AiFillYoutube className=' text-red-600'/></div>
            </div> 
            <div className="linecont relative">
              <div className="line h-[1px] w-fill bg-black mt-2"></div>
              <div id="selector" className={`selector w-[45px] h-[7px] bg-green-600 rounded-b-xl absolute left-1/4 transition-all ease-in-out -translate-x-1/2 ${view === 1? " left-3/4" : ""}`}></div>
            </div>
          </div> 
          <div id="text-container" className='relative h-full'>
            <div className={` py-2 text-black text-left bottom-0 overflow-hidden transition-all delay-300 duration-500${view===1? " opacity-0":""}`}>
                <small className={` block text-gray-400 text-xs transition-transform duration-1000 translate-x-0 ${view===1? " -translate-x-full":""}`}>Problem Statement</small>
                <h1 className={`font-bold text-2xl transition-all delay-150  duration-500 translate-x-0${view===1? "  -translate-x-full":""}`}>{proname}</h1>
                <p className={`block text-sm transition-transform delay-250  duration-500 translate-x-0${view===1? " -translate-x-full":""}`}>{projects[proname].desc}</p>
            </div> 
            <div className={` absolute w-full h-full top-0 py-1 text-black text-left bottom-0 overflow-hidden transition-opacity duration-500 opacity-0 pointer-events-none ${view!==0? "delay-500 opacity-100 pointer-events-auto":""}`}>
                
                <YoutubeEmbed className="aspect-video" embedId={projects[proname].ytemb}/>
            </div>
          </div>
        </div>
      </div>
    )
}

//https://d2zes9ifb0ot5n.cloudfront.net/Egg+incubator1.glb

export default Project