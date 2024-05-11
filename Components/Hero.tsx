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
  //  <div className='bg-indigo row me-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, itaque tempore voluptatem libero, natus maiores fugit sed nemo ut harum temporibus consectetur, quaerat quam culpa ducimus. Deleniti dolores iste inventore.</div>

    <section style={{minHeight:'90vh'}} className='row me-0 bg-indigo-light'>
    <div className='col-12 col-md-6'>
         <h1 className=''>Hi, <br/> Im <span className=''>R</span> Rajapandiyan 
             <p className='text-2xl'>I`m MERN STACK DEVELOPER</p>
         </h1>
         <div className='flex py-10'>
             <a href={config.Insta} className=' hover:text-white'><RiInstagramLine size={40} /></a>
             <a href={config.Linked} className=' hover:text-white'><CiLinkedin size={40}/></a>
             <a href={config.git} className='hover:text-white'><FaSquareGithub size={40}/></a>
         </div>
    </div>
    <div className="col-12 col-md-6">

    <Image alt='Hero' className='img-fluidS' src={Heros} />
    </div>
 </section>
    
  )
}

export default Hero