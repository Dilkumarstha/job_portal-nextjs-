import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-12 sm:gap-16 md:gap-20 bg-black text-white flex-col pt-12 sm:pt-16 md:pt-20 lg:pt-25 pb-8 sm:pb-10 md:pb-12 lg:pb-15'>
      <div className='container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col gap-12 sm:gap-16 md:gap-20'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-8'>
          {/* About Section */}
          <div className='flex gap-3 flex-col'>
            <h1 className='font-bold text-lg sm:text-xl'>Job</h1>
            <p className='max-w-md break-words text-sm sm:text-base text-zinc-300'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolores magni ipsam quam quos ex corporis aliquid autem laboriosam nostrum? Omnis adipisci magni facilis dolores rerum blanditiis consectetur minus delectus?
            </p>
          </div>

          {/* Company Links */}
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-lg sm:text-xl'>Company</h1>
            <ul className='text-sm sm:text-base text-zinc-300 flex flex-col gap-2'>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>About Us</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Our Team</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Careers</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Blog</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Contact</li>
            </ul>
          </div>

          {/* Job Category */}
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-lg sm:text-xl'>Job Category</h1>
            <ul className='text-sm sm:text-base text-zinc-300 flex flex-col gap-2'>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Telecommunication</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Hotel & Tourism</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Construction</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Education</li>
              <li className='hover:text-teal-400 transition-colors duration-300 cursor-pointer'>Financial Services</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='flex flex-col gap-3 sm:col-span-2 lg:col-span-1'>
            <h1 className='font-bold text-lg sm:text-xl'>Newsletter</h1>
            <p className='text-sm sm:text-base text-zinc-300 max-w-md break-words'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <input 
              type="email" 
              placeholder='Email Address' 
              className='font-semibold text-sm sm:text-base py-3 sm:py-4 px-3 sm:px-4 border border-zinc-300 rounded-2xl text-white placeholder:text-zinc-500' 
            />
            <button className='px-3 sm:px-4 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-5 bg-teal-600 hover:bg-teal-500 transition-all duration-300 cursor-pointer'>
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-zinc-400 text-sm sm:text-base border-t border-zinc-800 pt-6'>
          <p className='text-center sm:text-left'>@Copyright Job Portal 2025</p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
            <button className='underline transition-all duration-300 hover:text-teal-400 cursor-pointer'>
              Privacy Policy
            </button>
            <button className='underline transition-all duration-300 hover:text-teal-400 cursor-pointer'>
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer