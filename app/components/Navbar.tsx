import Link from 'next/link'
import React from 'react'
import Image from 'next/image'



const Navbar = () => {
  return (
        <nav className='flex justify-around bg-[#09283a] p-6 '>
            <div className="logo"><Image src="/aklogo.png" alt="al-kiswah-logo" width={36} height={36} /></div>
            <ul className='flex gap-4 text-[#dcb657]'>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/service"}><li>Service</li></Link>
                <Link href={"/about"}><li>About Us</li></Link>
                <Link href={"/contact"}><li>Contact Us</li></Link>
            </ul>
            <button className='flex gap-2 items-center'> <Image src="/what'sapp-icon.svg" alt="what'sapp-image" width={24} height={24} /> <span className='text-[#28cc62]'> what'sapp </span></button>
        </nav>
  )
}

export default Navbar
