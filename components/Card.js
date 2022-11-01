import React from 'react'
import cardimg from '../images/cardimg.png'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    <Link href='/inproject'>
        <div className='flex items-center bg-white w-fill p-5 border-black border-solid border rounded-lg relative'>
            
            <Image style={{position:"relative",height:"100%"}} className='relative self-center' src={cardimg} alt="" />
            
            <div className='text-right border-black md:text-left' >
                <h1 className='font-bold text-sm'>
                    Vaccine Cooling System
                </h1>
                <p className=' text-xs'>
                    (VCS) pharmaceutical cooling solution
                </p>
                <p className=' text-sm mt-2'>
                    In this project we aim to aleviate issues through an innovative solution 
                </p>
            </div>
        </div>
    </Link>
  )
}

export default Card