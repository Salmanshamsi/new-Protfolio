import React from 'react'


const ProfileHead = () => {
  return (
            <div className='flex flex-col gap-5 md:item-left item-center p-10'>
                <h1 className='text-3xl md:text-5xl font-bold'></h1>
                <h1 className='font-medium  text-3xl  md:text-xl text-white'>
                    <span className='text-yellow-300 font-bold text-4xl md:text-2xl'>Salman Shamsi</span> A Frontend Developer
                    <br />
                    with Expertise in <span className='text-yellow-300 font-bold text-4xl md:text-2xl'>React.js</span> and HTML, CSS, &amp; JS
                    <span className='text-yellow-300 font-bold text-4xl md:text-2xl'> .</span>
                </h1>
                <button className='text-white rounded-md flex items-center justify-center gap-3 md:gap-6 w-28 md:w-36 hover:w-36 shadow-xl transition-all duration-300 p-2 bg-slate-900'>
                    <h1>Hire Me</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </button>
            </div>
  )
}

export default ProfileHead
