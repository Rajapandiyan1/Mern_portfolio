import React from 'react'
import Image from 'next/image'
import Heros from '../Assets/hero.png'
import { RiInstagramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import Link from 'next/link';
import HomeIcons from './HomeIcons';
function Hero() {
  let config={
    Insta:"https://www.instagram.com/raja_pandiyan_444?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    Linked:"https://www.linkedin.com/in/raja-pandiyan-a38146261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    git:"https://github.com/Rajapandiyan1"
}
  return (
 <section style={{position:'relative',minHeight:'90vh',alignItems:'center' ,zIndex:"-1"}} className='flex flex-col md:flex-row px-5 py-10 md:py-1  bg-indigo-600 justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I`m <span className='text-black'>R</span> Rajapandiyan
                <p className='text-2xl'>I`m MERN Stack Developer</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.Insta} className='pr-5 hover:text-white'><RiInstagramLine size={40} /></a>
                <a href={config.Linked} className='pr-5 hover:text-white'><CiLinkedin size={40}/></a>
                <a href={config.git} className='hover:text-white'><FaSquareGithub size={40}/></a>
            </div>
       </div>
       <Image className='md:w-1/3' alt='Hero' src={Heros} />
    </section>
    
  )
}

export default Hero