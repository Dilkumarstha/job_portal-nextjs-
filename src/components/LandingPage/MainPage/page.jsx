import React from 'react'

const MainPage = () => {
  return (
    <div className='pt-20 md:pt-25'>  
      <div className='flex flex-col gap-10 justify-center items-center container mx-auto px-4 md:px-0'>
        
        {/* heading */}
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-4xl sm:text-5xl md:text-[70px] font-bold text-white text-center'>
            Find Your Dream Job Today!
          </h1>
          <p className='text-zinc-200 text-sm sm:text-[16px] md:text-[18px] text-center mt-2'>
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
        </div>

        {/* input  */}
        <div className='flex flex-col sm:flex-row items-center justify-center w-full gap-2 sm:gap-0'>
          <input className='px-5 py-4 sm:py-7 bg-zinc-100 rounded-t-md sm:rounded-l-md sm:rounded-tr-none font-semibold text-center w-full sm:w-auto' placeholder='Job Title or Company'/>
          
          <select name="Location" id="Location" className='px-5 sm:px-10 py-4 sm:py-7 bg-zinc-100 font-semibold text-center text-zinc-500 w-full sm:w-auto'>
            <option value="hidden selected disabled">Select Location</option>
            <option value="KTM">KTM</option>
            <option value="Chitwan">Chitwan</option>
            <option value="Pokhara">Pokhara</option>
          </select>

          <select name="Category" id="Category" className='px-5 sm:px-10 py-4 sm:py-7 bg-zinc-100 font-semibold text-center text-zinc-500 w-full sm:w-auto'>
            <option value="hidden selected disabled">Category</option>
            <option value="Remote">Remote</option>
            <option value="Full-time">Full-time</option>
            <option value="On-site">On-site</option>
          </select>

          <button className='px-5 sm:px-10 py-4 sm:py-7 bg-teal-500 text-zinc-200 font-bold rounded-b-md sm:rounded-r-md sm:rounded-bl-none w-full sm:w-auto mt-2 sm:mt-0'>
            Search Job
          </button>
        </div>

        {/* job , candidate and company */}
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-16 py-10 w-full justify-center items-center'>
          <div className='flex justify-center items-center text-white gap-3'>
            <img src='job.png' className='w-12 h-12 sm:w-16 sm:h-16'/>
            <div className='text-center'>
              <p className='text-lg sm:text-xl font-bold'>25,545</p>
              <p className='text-sm sm:text-base'>Jobs</p>
            </div>
          </div>

          <div className='flex justify-center items-center text-white gap-3'>
            <img src='job.png' className='w-12 h-12 sm:w-16 sm:h-16'/>
            <div className='text-center'>
              <p className='text-lg sm:text-xl font-bold'>25,545</p>
              <p className='text-sm sm:text-base'>Jobs</p>
            </div>
          </div>

          <div className='flex justify-center items-center text-white gap-3'>
            <img src='job.png' className='w-12 h-12 sm:w-16 sm:h-16'/>
            <div className='text-center'>
              <p className='text-lg sm:text-xl font-bold'>25,545</p>
              <p className='text-sm sm:text-base'>Jobs</p>
            </div>
          </div>
        </div>

      </div>

      {/* company logo  */}
      <div className='bg-black py-10 mt-10'>
        <div className='container mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-6 px-4 sm:px-20'>
          <img src='adobe.png' className='h-8 sm:h-10'/>
          <img src='asana.png' className='h-8 sm:h-10'/>
          <img src='slack.png' className='h-8 sm:h-10'/>
          <img src='spotify.png' className='h-8 sm:h-10'/>
          <img src='linear.png' className='h-8 sm:h-10'/>
        </div>
      </div>
    </div>
  )
}

export default MainPage
