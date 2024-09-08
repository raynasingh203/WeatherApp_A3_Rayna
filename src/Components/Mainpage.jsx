import React from 'react';

const Mainpage = ({ children }) => {
  return (
    <div className='bg-gradient-to-b from-blueg via-blue4 to-blue0 min-h-screen relative'>

      <div className='text-white font-notable ml-10 text-[1.75rem]'>
        WEATHER NOW WEATHER NOW WEATHER NOW WEATHER NOW WEATHER 
      </div>

      
      <div className='absolute left-0 top-0 bottom-0 flex items-center'>
        <div className='text-white font-notable text-[1.75rem] rotate-180' style={{ writingMode: 'vertical-rl' }}>
          WEATHER NOW WEATHER NOW WEATHER NOW WEATHER NOW 
        </div>
      </div>


      <div className='absolute right-0 top-0 bottom-0 flex items-center'>
        <div className='text-white font-notable text-[1.75rem]' style={{ writingMode: 'vertical-rl' }}>
          WEATHER NOW WEATHER NOW WEATHER NOW WEATHER NOW WEATHER
        </div>
      </div>

   
      {children}


      <div className='text-white font-notable text-[1.75rem] ml-10 mt-[7rem]'>
        WEATHER NOW WEATHER NOW WEATHER NOW WEATHER NOW WEATHER 
      </div>
    </div>
  );
}

export default Mainpage;
