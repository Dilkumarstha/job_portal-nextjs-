import React from 'react'
import CategoryCard from './CategoryCard'

const BrowseByCategory = () => {
  return (
    <div className='bg-teal-50 py-8 sm:py-10 md:py-12 lg:py-16'>
      <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center px-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>
          Browse By Category
        </h1>
        <p className='text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-2xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, debitis.
        </p>    
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-15'>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </div>
    </div>
  )
}

export default BrowseByCategory