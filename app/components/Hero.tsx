import React from 'react'
import Logo from './hero_page/Logo'
import Social from './hero_page/Social'
import Videos from './hero_page/Videos'







const Hero = () => {
    return (
         <section className="relative h-screen overflow-hidden">

            <Videos/>

      <div className="relative z-10 flex flex-col justify-between h-full">

        <div className="flex justify-center pt-24">
          <Logo />
        </div>

        <div className="flex justify-center pb-10">
          <Social />
        </div>

      </div>

    </section>
    )
}

export default Hero
