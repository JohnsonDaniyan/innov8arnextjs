import React from 'react'
import cardimg from '../images/cardimg.png'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data'

function Card(props) {
    console.log(props)
  return (
    <Link href={`/project/${props.name}`} >
        <div className='cursor-pointer mb-10 flex items-center bg-white w-fill p-5 border-black border-solid border rounded-lg relative'>
            
            <Image width={100} height={100} style={{position:"relative",height:"100%"}} className='relative self-center object-cover' src={props.img} alt="" />
            
            <div className='border-black ml-5 pl-3 border-l-2 text-left' >
                <h1 className='font-bold text-sm'>
                    {props.name}
                </h1>
                <p className=' text-xs'>
                    {props.sub}
                </p>
                <p className=' text-sm mt-2'>
                    {props.desc}
                </p>
            </div>
        </div>
    </Link>
  )
}

export default Card