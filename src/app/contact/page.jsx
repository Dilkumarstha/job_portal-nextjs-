import React from 'react';

const ContactUs = () => {
  return (
    <div className='pt-25 bg-black text-white'>
      <div className='container mx-auto px-10 flex flex-col gap-12'>
        {/* heading */}
        <div className='text-center'>
          <h1 className='text-[60px] font-bold'>Contact Us</h1>
          <p className='text-zinc-300 text-[18px] mt-4'>
            Have questions? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* contact form */}
        <div className='flex justify-center'>
          <form className='flex flex-col gap-6 w-full max-w-2xl'>
            <input 
              type='text' 
              placeholder='Your Name' 
              className='px-5 py-4 rounded-md bg-zinc-100 text-black font-semibold'
            />
            <input 
              type='email' 
              placeholder='Your Email' 
              className='px-5 py-4 rounded-md bg-zinc-100 text-black font-semibold'
            />
            <textarea 
              placeholder='Your Message' 
              rows={6} 
              className='px-5 py-4 rounded-md bg-zinc-100 text-black font-semibold'
            />
            <button type='submit' className='py-4 bg-teal-500 rounded-md font-bold text-white'>
              Send Message
            </button>
          </form>
        </div>

        {/* contact info */}
        <div className='flex flex-col md:flex-row justify-center gap-16 text-center mt-12'>
          <div>
            <h3 className='font-bold text-xl mb-2'>Email</h3>
            <p className='text-zinc-300'>dilanshrestha@gmail.com</p>
          </div>
          <div>
            <h3 className='font-bold text-xl mb-2'>Phone</h3>
            <p className='text-zinc-300'>+977 9800000000</p>
          </div>
          <div>
            <h3 className='font-bold text-xl mb-2'>Address</h3>
            <p className='text-zinc-300'>Bharatpur, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
