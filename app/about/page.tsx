import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='grid grid-cols-2 min-h-screen'>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className='font-bold text-7xl p-5'>About Us</h1>
        <p className='text-lg p-5 px-10'>Welcome to Al Kiswah Travels, your trusted travel partner for seamless journeys around the world. We are committed to making travel simple, convenient, and hassle-free by providing personalized travel solutions tailored to your needs. Whether you're planning a family vacation, a business trip, a honeymoon, or a religious journey, our team helps you every step of the way. We offer complete travel planning, including customized itineraries based on your preferred destination, ensuring every detail of your trip is carefully organized. We also assist with GCC visit visas and employment visas, guiding our clients through the application process with reliable support and up-to-date information. To keep things quick and convenient, we regularly share the latest flight ticket offers, travel updates, and special deals through our WhatsApp service, making it easy for clients to stay informed and book their journeys. At Al Kiswah Travels, our goal is to provide dependable service, transparent guidance, and memorable travel experiences. Wherever you dream of going, we're here to help you get there with confidence.</p>
      </div>
      <div className="logo flex justify-center items-center">
        <Image src="/aklogo.png" alt='al-kiswah-logo-image' width={500} height={500}/>
      </div>
    </div>
  )
}

export default About
