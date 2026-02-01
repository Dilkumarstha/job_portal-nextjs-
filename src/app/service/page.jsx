import React from 'react';

const Services = () => {
  return (
    <div className='pt-25 bg-black text-white'>
      <div className='container mx-auto px-10 flex flex-col gap-12'>
        {/* heading */}
        <div className='text-center'>
          <h1 className='text-[60px] font-bold'>Our Services</h1>
          <p className='text-zinc-300 text-[18px] mt-4'>
            We offer a variety of services to help job seekers and companies achieve their goals.
          </p>
        </div>

        {/* service cards */}
        <div className='flex flex-wrap justify-center gap-10 mt-10'>
          <div className='bg-zinc-800 p-8 rounded-xl w-80 text-center'>
            <img src='service1.png' className='mx-auto mb-4' />
            <h3 className='font-bold text-2xl mb-2'>Job Listings</h3>
            <p className='text-zinc-300'>
              Access thousands of job opportunities in various industries.
            </p>
          </div>
          <div className='bg-zinc-800 p-8 rounded-xl w-80 text-center'>
            <img src='service2.png' className='mx-auto mb-4' />
            <h3 className='font-bold text-2xl mb-2'>Candidate Sourcing</h3>
            <p className='text-zinc-300'>
              Helping companies find the perfect candidate quickly and efficiently.
            </p>
          </div>
          <div className='bg-zinc-800 p-8 rounded-xl w-80 text-center'>
            <img src='service3.png' className='mx-auto mb-4' />
            <h3 className='font-bold text-2xl mb-2'>Career Guidance</h3>
            <p className='text-zinc-300'>
              Providing advice and tips to help job seekers succeed in their careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
