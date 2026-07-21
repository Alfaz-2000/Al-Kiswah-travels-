import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='grid grid-cols-2 min-h-screen justify-center items-center'>
      <div className=" flex flex-col gap-4 p-5">
        <h1 className='font-bold text-6xl'>Contact Us</h1>
        <span className='px-5 text-lg'>Let's Plan Your Next Journey</span>
        <p className='px-5 text-lg'>Have questions about flights, visas, or travel packages? We're here to help. Reach out to us directly through WhatsApp, give us a call, or send us an email. Our team will be happy to assist you with your travel plans.</p>
      </div>
      <div className="second flex flex-col">
        <h2 className='text-center text-2xl p-10'>Reach us at</h2>
      <div className="flex gap-8 justify-center items-center">
        <a href="https://wa.me/919876543210" target='_blank' rel="noopener noreferrer" className='flex flex-col justify-center items-center'><FaWhatsapp className="text-green-500 text-3xl" />
        <span>What'sApp</span>
        </a>
        <div className="flex flex-col justify-center items-center">
                <MdEmail className="text-blue-500 text-3xl" />
            <a href="mailto:info@alkiswahtravels.com"/>
            <span>E-mail</span>
        </div>
        <div className="flex flex-col justify-center items-center">
                <IoCall className="text-yellow-500 text-3xl" />
            <a href="tel:+919876543210"/>
            <span>Phone</span>
        </div>
      </div>
       </div>
    </div>
  )
}

export default Contact
