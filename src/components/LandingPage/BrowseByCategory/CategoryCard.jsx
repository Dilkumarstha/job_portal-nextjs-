import React from 'react'

const CategoryCard = () => {
  return (
    <div className='flex flex-col bg-white shadow-xl shadow-black/10 rounded-2xl py-6 px-3 sm:py-8 sm:px-4 md:py-10 md:px-5 gap-6 sm:gap-8 md:gap-10 justify-center items-center transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-black/15'>
        <img 
          src="job.png" 
          alt="Category icon" 
          className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain'
        />
        <h2 className='font-bold text-lg sm:text-xl md:text-2xl text-zinc-500 text-center'>
          Agriculture
        </h2>
        <p className='px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 bg-teal-100 font-semibold text-sm sm:text-base md:text-lg text-teal-500 rounded-2xl whitespace-nowrap'>
          1254 jobs
        </p>
    </div>
  )
}

export default CategoryCard