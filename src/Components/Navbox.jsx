import React, { useRef } from 'react';

const Navbox = ({ onSearch }) => {
  const inputRef = useRef('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <div
      className='w-[17rem] ml-[25rem] mt-[1rem] bg-gradient-to-b from-neon1 via-neon2 to-neon3 outline-1 rounded-3xl shadow-lg shadow-lime-100 h-[15rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
    >
      <div className='font-notable text-purple-500  pl-[1rem] pt-[2rem] text-2xl'>
        Weather
      </div>

      <div className='flex flex-col pl-[1rem] pt-[1rem]'>
        <label htmlFor='search' className='text-blue2 pl-[0.3rem] font-notable text-base'>
          Location:
        </label>
        <input
          ref={inputRef}
          type='text'
          id='search'
          className='ml-0 mt-3 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[13rem]'
        />
        <button
          className='mt-4 p-2 bg-blue-500 font-orbitron ml-[-1.5rem] shadow-2xl shadow-blue-500/20 text-black  rounded-lg'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbox;
