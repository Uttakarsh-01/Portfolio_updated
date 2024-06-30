import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/hero-1.JPG";
const Hero = () => {
  return (
    <div>
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-14 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl '>👋 Hello, I'm Priyanshu Panda!</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent px-20'>Software Developer</span>
                        <p className='my-2 max-w-xl px-20 py-6 font-light tracking-tighter justify-around'>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={profilePic} alt="Priyanshu Panda"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero