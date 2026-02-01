import React from 'react';

const AboutUs = () => {
  return (
    <div className='pt-25 bg-black text-white'>
      <div className='flex flex-col gap-12 container mx-auto px-10'>
        {/* Heading */}
        <div className='text-center'>
          <h1 className='text-[60px] font-bold'>About Us</h1>
          <p className='text-zinc-300 text-[18px] mt-4'>
            We are passionate about connecting talent with opportunity. Our platform helps individuals discover their dream careers while assisting companies in finding the perfect candidates.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className='flex flex-col md:flex-row gap-12 justify-center items-start mt-10'>
          <div className='flex-1'>
            <h2 className='text-3xl font-bold mb-3'>Our Mission</h2>
            <p className='text-zinc-300'>
              Our mission is to empower job seekers and businesses by providing a seamless platform that bridges the gap between talent and opportunity. We strive to make career growth and recruitment effortless and efficient.
            </p>
          </div>
          <div className='flex-1'>
            <h2 className='text-3xl font-bold mb-3'>Our Vision</h2>
            <p className='text-zinc-300'>
              We envision a world where every individual finds meaningful work and every company finds the right talent. We aim to be the go-to platform for career growth and professional success.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className='mt-12 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Our Core Values</h2>
          <div className='flex flex-col md:flex-row justify-center gap-8'>
            <div className='bg-zinc-800 p-6 rounded-xl flex-1'>
              <h3 className='font-bold text-xl mb-2'>Integrity</h3>
              <p className='text-zinc-300'>We operate transparently and ethically in all our interactions.</p>
            </div>
            <div className='bg-zinc-800 p-6 rounded-xl flex-1'>
              <h3 className='font-bold text-xl mb-2'>Innovation</h3>
              <p className='text-zinc-300'>We continuously improve our platform to meet evolving needs.</p>
            </div>
            <div className='bg-zinc-800 p-6 rounded-xl flex-1'>
              <h3 className='font-bold text-xl mb-2'>Collaboration</h3>
              <p className='text-zinc-300'>We foster strong relationships with both job seekers and employers.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Meet Our Team</h2>
          <div className='flex flex-wrap justify-center gap-10'>
            <div className='bg-teal-800 p-6 rounded-xl w-60'>
              <img src='recent_job/category.png' className='mx-auto mb-4 rounded-full' />
              <h3 className='font-bold text-xl'>Dilan</h3>
              <p className='text-zinc-300'>CEO & Founder</p>
              <p className='text-zinc-400 text-sm mt-2'>Visionary leader with 10+ years in HR and recruitment industry.</p>
            </div>
            <div className='bg-teal-800 p-6 rounded-xl w-60'>
              <img src='recent_job/category.png' className='mx-auto mb-4 rounded-full' />
              <h3 className='font-bold text-xl'>Dilan</h3>
              <p className='text-zinc-300'>CTO</p>
              <p className='text-zinc-400 text-sm mt-2'>Responsible for platform architecture, security, and innovation.</p>
            </div>
            <div className='bg-teal-800 p-6 rounded-xl w-60'>
              <img src='recent_job/category.png' className='mx-auto mb-4 rounded-full' />
              <h3 className='font-bold text-xl'>Dilan</h3>
              <p className='text-zinc-300'>Head of Operations</p>
              <p className='text-zinc-400 text-sm mt-2'>Ensures smooth operation of our platform and user satisfaction.</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Our Story</h2>
          <p className='text-zinc-300 max-w-4xl mx-auto'>
            Founded in 2020, we noticed a growing need for a smarter job platform. We combined technology, data, and human insight to build a place where individuals and companies thrive together. Over the years, we've helped thousands of users land their dream jobs and assisted companies in hiring top talent.
          </p>
          <p className='text-zinc-300 max-w-4xl mx-auto mt-4'>
            Our journey continues as we aim to expand globally, integrating AI-driven job matching, personalized career guidance, and community support to redefine the job search experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
