import React from 'react';
import image from "../assets/images/line.png";
import ProfileHead from '../components/profileHead';
import Profilecard from '../components/profilecard';


const Home = () => {
  return (
    <div>
        
        <div className=' h-screen w-full bg-cover bg-center bg-slate-800 flex justify-evenly '
          style={{ backgroundImage: `url('${image}')` }}
        >
              <div className='flex items-center justify-center p-0 ' >
                  <ProfileHead/>
              </div>
              <div className=' hidden lg:flex items-center justify-center' >
                  <Profilecard/>
              </div>
        </div>

    </div>
  )
}

export default Home;