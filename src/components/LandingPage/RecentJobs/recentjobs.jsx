import React from 'react'
import JobCard from './JobCard'
import RecentJobCard from './JobCard'

const RecentJob = async () => {
  const jobdata = await fetch('https://remotive.com/api/remote-jobs').then((res) => res.json())
  const job = jobdata.jobs
  return (
    <div className='bg-zinc-100'>
      <div className='py-15 container mx-auto px-20'>
        <div className='flex justify-between items-end'>
          <div className='flex gap-8  flex-col '>
            <h1 className='text-6xl font-bold '>Recent Jobs Available</h1>
            <p className='font-semibold text-xl text-zinc-600 px-1'>Search recent jobs and start building your future today.</p>
          </div>
          <button className='font-semibold text-teal-600 text-2xl underline cursor-pointer hover:text-teal-500 transition-all duration-300'>View all</button>
        </div>
        {/* recent job cards  */}
        <div className='container mx-auto py-15'>
          {
            job.map((job) => (

              <RecentJobCard key={job.id} job={job} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RecentJob