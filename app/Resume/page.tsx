import Header from '@/Components/Header'
import React from 'react'
import ResumeImg from '../../Assets/resume.jpg'
import Image from 'next/image'


function page() {

  return (
    <>
    <Header/>
    <section id='resume' style={{minHeight:"90vh"}} className='flex flex-col py-10  md:flex-row bg-secondary bg-indigo-600 px-5'>
        <div className=' md:w-1/2 flex justify-center md:justify-end'>
            <Image className='w-[300px]' alt='resume' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center md:mt-0 mt-4'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume </p>
                <button className="bg-yellow-500 hover:bg-yellow-700 transition duration-300 text-white font-bold py-2 px-4 rounded">
  <a download={true} href={'https://i.ibb.co/xggC368/Resume-1.png'}>View Resume</a>
</button>

            </div>
        </div>
    </section>
    </>
  )
}

export default page