import React from 'react';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    
    <div className='flex justify-center' >
    <div className='md:flex text-white hidden align-content-center -p- z-50 fixed w-9/12 shadow-2xl bg-slate-900 mt-5 rounded-2xl'>
            <img src={logo} alt="" className='h-20 w-24 ml-5' />
        <ul className=' w-full flex justify-end gap-6 mr-24  mt-6' >
                <li
                    className="cursor-pointer border-b border-transparent h-6 hover:border-white transition-all duration-300">
                    Home
                </li>
                <li
                    className="cursor-pointer border-b border-transparent h-6 hover:border-white transition-all duration-300">
                    About
                </li>
                <li
                    className="cursor-pointer border-b border-transparent h-6 hover:border-white transition-all duration-300">
                    Projects
                </li>
                <li
                    className="cursor-pointer border-b border-transparent h-6 hover:border-white transition-all duration-300">
                    Contact
                </li>
        </ul>
    </div>

    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
  <div className="bg-slate-600 p-1 mr-5 rounded-full gap-2 flex flex-col justify-center align-content-center">
    <div className="p-1 bg-white rounded-full hover:p-1.5 "></div>
    <div className="p-1 bg-white rounded-full hover:p-1.5 "></div>
    <div className="p-1 bg-white rounded-full hover:p-1.5 "></div>
    <div className="p-1 bg-white rounded-full hover:p-1.5 "></div>
  </div>
</div>


    <div class="md:hidden fixed bottom-0 w-full p-5 flex justify-center align-content-center z-50 ">
            <div>
                <ul  className='border p-4 w-72 rounded-full bg-slate-950 flex justify-center align-content-center gap-4 ' >
                    <li className='text-white cursor-pointer border-b border-transparent hover:border-white transition-all duration-300 ' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </li>
                    <li className='text-white cursor-pointer border-b border-transparent hover:border-white transition-all duration-300 ' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </li>
                    <li className='text-white cursor-pointer border-b border-transparent hover:border-white transition-all duration-300 ' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                    </li>
                    <li className='text-white cursor-pointer border-b border-transparent hover:border-white transition-all duration-300 ' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </li>
                </ul>
            </div>
    </div>
    
    </div>
    
  )
}

export default Navbar
