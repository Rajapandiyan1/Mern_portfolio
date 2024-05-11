import Image from 'next/image'
import React from 'react'
import About from '../../Assets/about.png'
import Header from '@/Components/Header'
function page() {
  return (
    <>
    <section  className='flex md:flex-row flex-col bg-indigo-600'>
        <div  style={{position:"relative",alignItems:'center'}} className='md:w-1/2 px-5 flex'>
            <Image src={About} alt='About'/>
        </div>
        <div className='md:w-1/2 flex justify-center my-10 md:my-1 px-10'>
            <div className='flex flex-col justify-center'>

            <h1 className='text-3xl font-bold text-white border-b-4 mb-5 w-[150px]'>About Me</h1>
            <p className='text-2xl text-white'>My name is Rajapandiyan</p>
            <p className='text-2xl text-white'>I`m MERN Stack Developer</p>
            <p className='text-2xl text-white'>Fresher</p>
            <p className='text-2xl text-white'>Degree in BBA</p>
            <p className='text-2xl text-white'>Pass out : 2023</p>
            <p className='text-2xl text-white'>I am proficient in Frontend Skills like React js ,Next js ,Redux tool kit,Axois,Bootstrap and Sass . </p>
            <p className='text-2xl text-white'>In Backend I know Node.js , Express js , MondoDb and Mongoose .</p>
            <p className='text-2xl text-white'>version control : Git and Git Hub</p>


            </div>
        </div>
    </section>
    </>
  )
}

export default page