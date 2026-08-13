import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='Contact' className=" min-h-[40vh] text-white flex flex-col justify-center mt-16">
        <h1 className='font-bold text-xl md:text-4xl text-center text-[#dcb657]'>Contact Us</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center '>
      <div className=" flex flex-col gap-4 p-5">
        <span className='px-5 text-base md:text-lg'>Let's Plan Your Next Journey</span>
        <p className='px-5 text-base'>Have questions about flights, visas, or travel packages? We're here to help. Reach out to us directly through WhatsApp, give us a call, or send us an email. Our team will be happy to assist you with your travel plans.</p>
      </div>
      <div className="second flex flex-col">
        <h2 className='text-center text-2xl p-10 font-bold'>Reach us at</h2>
      <div className="flex gap-8 justify-center items-center">
        <a href="https://wa.me/919876543210" target='_blank' rel="noopener noreferrer" className='flex flex-col justify-center items-center'><FaWhatsapp className="text-green-500 text-3xl" />
        <span className='font-bold'>What'sApp</span>
        </a>
        <div className="flex flex-col justify-center items-center">
            <a href="mailto:alkiswahtravels19@gmail.com">
                <MdEmail className="text-blue-500 text-3xl" />
            <span className='font-bold'>E-mail</span>
            </a>
        </div>
        <div className="flex flex-col justify-center items-center">
            <a href="tel:+919876543210">
                <IoCall className="text-yellow-500 text-3xl" />
            <span className='font-bold'>Phone</span>
            </a>
        </div>
      </div>
       </div>
    </div>
    </div>
  )
}

export default Contact
