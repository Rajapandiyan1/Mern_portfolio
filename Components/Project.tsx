import websiteImg1 from '../Assets/BusTicket.webp'
import websiteImg2 from '../Assets/bookShop.jpg'
import websiteImg3 from '../Assets/Todo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import HomeIcons from './HomeIcons'
export default function Project() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Bus Ticket Website. Built with MERN Stack.',
                link: 'https://github.com/Rajapandiyan1/Bus_Ticket_Book'
            },
            {
                image: websiteImg2,
                description: 'Book Shop website, Built with MERN Stack',
                link: 'https://github.com/Rajapandiyan1/Book_shop'
            },
            {
                image: websiteImg3,
                description: 'Todo Website .Built Next JS and MongoDB',
                link: 'https://github.com/Rajapandiyan1/Todo-List-App'
            }
        ]
    }

    return <section id='projects' style={{minHeight:'90vh'}} className="flex bg-indigo-light py-10 md:py-1  flex-col  px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-1">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold pb-2">Projects</h1>
                <p className='mb-2'>These are some of my best projects. I have built these with React with Node.js</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project,arr) => {
                    return <div key={arr} className='relative'>
                        <Image  className='h-[200px] w-[500px]' alt='projects' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                            <button className="bg-yellow-500 hover:bg-yellow-700 transition duration-300 text-white font-bold py-2 px-4 rounded">
                            <Link className='btn' target='_blank' href={project.link}>View Project</Link>
  
</button>

                            </div>
                        </div>
                    </div>
})}
               
               
            </div>
        </div>
        
    </section>
}