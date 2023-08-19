import React from 'react'
import ProgressSection from '../components/ProgressSection'


const Mywork = () => {
  return (
    <div>
        <div className='h-screen w-full bg-slate-800 flex flex-col items-center' >
            <h1 className='text-white font-bold text-4xl mt-5 ' >My Skills</h1>
            <div className='flex items-center justify-evenly' >
                <ProgressSection percent={50} skill={"CSS"} />
                <ProgressSection percent={92} skill={"JS"} />
                <ProgressSection percent={92} skill={"JS"} />
            </div>
        </div>
    </div>
  )
}

export default Mywork