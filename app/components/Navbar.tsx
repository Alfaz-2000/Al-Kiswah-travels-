"use client"

import Image from 'next/image'



import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [open, setopen] = useState(false)

    const handleClick=()=>{
        setopen(false)
    }
  return (
    <>
    
    <nav className='sm:hidden flex min-h-[10vh] bg-[#09283a] justify-between items-center md:m-4 p-2 sticky top-0  z-[9999]'>

        <div className="logo px-5"><Image src="/aklogo.png" alt="al-kiswah-logo" width={50} height={50} /></div>
        <div className="text-2xl px-2">
            <a  href="https://wa.me/917090983299" target="_blank" rel="noopener noreferrer" onClick={()=>setopen(!open)}><GiHamburgerMenu /></a>
        </div>
    </nav>
    {open &&(
        <div className=" flex flex-col p-4 space-y-5 items-center min-h-screen bg-[#09283a] text-[#dcb657] font-bold sticky top-0 z-9999">
        <a onClick={handleClick} href="#Home">Home</a>
        <a onClick={handleClick} href="#Visa">Visa</a>
        <a onClick={handleClick} href="#Flights">Flights</a>
        <a onClick={handleClick} href="#Services">Services</a>
        {/* <a onClick={handleClick} href='/Alfaz_resume.pdf' className='bg-[#34C759] rounded-full px-5 py-2'>Download Resume</a> */}
        <a  href="https://wa.me/917090983299" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center'> <Image src="/what'sapp-icon.svg" alt="what'sapp-image" width={24} height={24} /> <span className='text-[#28cc62]'> what'sapp </span></a>
      </div>
    )}

    <nav className='hidden sm:flex justify-around bg-[#09283a]  items-center h-16 sticky top-0 z-[9999]'>
        <div className="logo"><Image src="/aklogo.png" alt="al-kiswah-logo" width={36} height={36} /></div>

      <div className=" flex gap-5 text-white ">
        <a onClick={handleClick} href="#Home">Home</a>
        <a onClick={handleClick} href="#Visa">Visa</a>
        <a onClick={handleClick} href="#Flights">Flights</a>
        <a onClick={handleClick} href="#Services">Services</a>
      </div>
      <div className="">
        {/* <a onClick={handleClick} href='/Alfaz_resume.pdf' className='border border-[#34C759] rounded-full px-5 py-2'>Download Resume</a> */}
        <a  href="https://wa.me/917090983299" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center'> <Image src="/what'sapp-icon.svg" alt="what'sapp-image" width={24} height={24} /> <span className='text-[#28cc62]'> what'sapp </span></a>
      </div>
    </nav>
    </>
  )
}

export default Navbar