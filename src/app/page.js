import React from 'react'

const HomePage = () => {
  return (
    <div className='container mx-auto py-25'>
      <div className='flex gap-10  justify-center items-center flex-col '>
        <div className='flex flex-col justify-center items-center '>
        <h1 className='text-[70px] font-bold text-white'>Find Your Dream Job Today!</h1>
        <p className='text-zinc-200 text-[18px]'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
        </div>
        <div className='flex items-center justify-center'>
          <input className='px-5 py-7 bg-zinc-100 rounded-l-md font-semibold text-center' placeholder='Job Title or Company'/>

       <select name="Location" id="Location " className='px-10 py-7 bg-zinc-100  font-semibold text-center text-zinc-500'>
  <option value="hidden selected disabled">Select Location</option>
  <option value="KTM">KTM</option>
  <option value="Chitwan">Chitwan</option>
  <option value="Pokhara">Pokhara</option>
</select>

   <select name="Category" id="Category " className='px-10 py-7 bg-zinc-100  font-semibold text-center text-zinc-500'>
  <option value="hidden selected disabled">Category</option>
  <option value="Remote">Remote</option>
  <option value="Full-time">Full-time</option>
  <option value="On-site">On-site</option>
</select>
        <button className='px-10 text-zinc-200 rounded-r-md py-7 bg-teal-500 font-bold'>Search Job</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage