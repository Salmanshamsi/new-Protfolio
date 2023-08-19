import React from 'react'
import image from "../assets/images/profile.png";

const Profilecard = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-center' >
            <div className='border h-52 w-52 transform rotate-45 z-30 shadow-2xl'></div>
            <div className='border h-72 w-72 transform rotate-45 -mx-8 md:-mx-32 z-20 bg-slate-900 shadow-2xl'>
                <div
                    className="bg-cover h-60 w-60 bg-center  border-b-2 shadow-bottom-100 transform -rotate-45 z-40"
                    style={{ backgroundImage: `url('${image}')` }}
                ></div>
            </div>
            <div className='border h-52 w-52  transform rotate-45 z-10 shadow-2xl'></div>
    </div>
  )
}

export default Profilecard
