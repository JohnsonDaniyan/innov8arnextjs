import React from 'react'
import cardimg from '../images/cardimg.png'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    <div className='flex items-center bg-white w-fill p-5 border-black border-solid border rounded-lg relative'>
        <Link href='/inproject'>
        <Image style={{position:"relative"}} className='relative self-center' src={cardimg} alt="" />
        
        </Link>
        <div className='text-right border-black' >
            <h1 className='font-bold text-sm'>
                Vaccine Cooling System
            </h1>
            <p className=' text-xs'>
                (VCS) pharmaceutical cooling solution
            </p>
            <p className=' text-sm'>
                In this project we aim to aleviate issues through an innovative solution 
            </p>
        </div>
    </div>
  )
}

export default Card