import React from 'react'
import Logo from './hero_page/Logo'
import Social from './hero_page/Social'


const Hero = () => {
    return (
        <div className='min-h-screen'>
            <div className=" flex-col justify-center items-center">
                <div className="">
                    <Logo />
                </div>
                <div className="">
                    <video loop autoPlay muted src="/hero.mp4" className='min-h-screen'></video>
                {/* <div className="absolute top-23 h-[98.5vh] inset-0 bg-black/40"></div> */}
                </div>
                <div className=" text-lg ">
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Hero
