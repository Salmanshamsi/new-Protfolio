import React from 'react';
import image from "../assets/images/shape1.png";
import AboutMeCard from '../components/AboutMeCard';
import image2 from "../assets/images/profile.png"

const About = () => {
  return (

    <div>
        <div className='h-screen w-full'>
          <div className=' bg-cover bg-center h-screen w-full bg-slate-800 flex items-center gap-8 justify-center ' 
          style={{ backgroundImage: `url('${image}')` }}>
                      <div className='h-72 w-64 bg-transparent border flex items-center justify-center shadow-xl'>
                      <div className='h-56 w-52 bg-white border flex items-center justify-center'>
                          <div className='h-48 w-48 bg-cover'
                          style={{ backgroundImage: `url('${image2}')` }}
                          >
                          </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-start text-white gap-5 p-5 ' >
                          <h1 className='text-5xl' >About Me</h1>
                          <p className=''>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam placeat ex non iste nemo labore
                             voluptas magnam est optio vero quod voluptatibus, culpa itaque officiis, nesciunt eaque alias,
                              laboriosam doloribus.
                          </p>
                    </div>
          </div>
        </div>

    </div>

  )
}

export default About