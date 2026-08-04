import React from 'react'
import Logo from './hero_page/Logo'
import Social from './hero_page/Social'
import Videos from './hero_page/Videos'
import Image from 'next/image'







const Hero = () => {
    return (
    //      <section className="relative h-screen overflow-hidden">

    //         <Videos/>

    //   <div className="relative z-10 flex flex-col justify-between h-full">

    //     <div className="flex justify-center pt-24">
    //       <Logo />
    //     </div>

    //     <div className="flex justify-center pb-10">
    //       <Social />
    //     </div>

    //   </div>

    // </section>
    <div className="min-h-screen ">
      <div className="min-h-screen relative overflow-hidden">
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      </div>
      <div className="flex justify-center">
        <Image className=' absolute top-30 md:top-50 sm:[250px] h-auto' src="/ak-transferent.png" alt='aklogo' width={500} height={500}/>
      </div>

        <div className="flex justify-center">
          <Social/>
        </div>


    </div>
    )
}

export default Hero
