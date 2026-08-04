import React from 'react'
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Social = () => {
    return (
        <div className=' absolute bottom-0 sm:-bottom-40 '>


            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-6 text-white">
                <a
                    href="tel:+917090983299"
                    className="flex items-center gap-2 hover:text-[#dcb657] transition bg-[#09283a] rounded-full px-4 py-2"
                >
                    <FaPhoneAlt />
                    <span>+91 70909 83299</span>
                </a>

                <a
                    href="mailto:alkiswahtravels19@gmail.com"
                    className="flex items-center gap-2 hover:text-[#dcb657] transition bg-[#09283a] rounded-full px-4 py-2"
                >
                    <MdEmail />
                    <span>alkiswahtravels19@gmail.com</span>
                </a>

                <a
                    href="https://www.instagram.com/alkiswahtravels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#dcb657] transition bg-[#09283a] rounded-full px-4 py-2"
                >
                    <FaInstagram />
                    <span>@alkiswahtravels</span>
                </a>
            </div>
        </div>
    )
}

export default Social
