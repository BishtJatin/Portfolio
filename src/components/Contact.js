import React, { useRef, useState } from 'react';
import { TiArrowRightOutline } from "react-icons/ti";
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fis6wvb', 'template_yjql8p1', form.current, apiKey)
      .then(
        () => {
          setSuccess(true);  // Show success message
          form.current.reset();  // Clear the form
          setTimeout(() => setSuccess(false), 3000);  // Hide success message after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <div className='mt-16 pb-36 relative group'>
    <div className="text-gray-400 text-3xl font-bold flex group border-b-2 shadow-2xl hover:border-[#FF5252] hover:shadow-[#FF5252]">
      <p>Contact Me</p>
      <span className='mt-1 group-hover:text-[#FF5252] ml-2'>
        <TiArrowRightOutline />
      </span>
    </div>
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className='flex w-9/12 mx-auto flex-col border-2 shadow-2xl border-black hover:shadow-[#FF5252] group-hover:border-[#FF5252] px-8 py-10 rounded-lg mt-20'
    >
      <label className='text-gray-400 mt-8 rounded-lg'>Name</label>
      <input className='rounded-md h-8 pl-2 bg-gray-400' type="text" name="from_name" required />
      
      <label className='text-gray-400 mt-8'>Email</label>
      <input className='rounded-md h-8 pl-2 bg-gray-400' type="email" name="from_email" required />
      
      <label className='text-gray-400 mt-8'>Message</label>
      <textarea className='rounded-md h-16 pl-2 bg-gray-400' name="message" required />
      
      <input className='text-gray-400 mt-8 rounded-md border w-fit px-3 py-1 hover:border-[#FF5252]' type="submit" value="Send" />
    </form>
    
    {success && (
      <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
    )}
   </div>
  );
};
