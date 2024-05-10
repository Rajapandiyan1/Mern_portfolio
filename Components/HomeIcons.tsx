import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaSquareGithub } from 'react-icons/fa6'
import { RiInstagramLine } from 'react-icons/ri'

function HomeIcons() {
    let confid={
        Insta:"https://www.instagram.com/raja_pandiyan_444?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        Linked:"https://www.linkedin.com/in/raja-pandiyan-a38146261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        git:"https://github.com/Rajapandiyan1"
    }
  return (
    
    <div className='flex py-10'>
          
            <a href={confid.Insta} className='hover:text-white pr-5'><RiInstagramLine size={40}/></a>
            <a href={confid.Linked} className='hover:text-white pr-5'><CiLinkedin  size={40}/></a>
            <a href={confid.git} className='hover:text-white '><FaSquareGithub size={40}/></a>
        </div> 
  )
}

export default HomeIcons