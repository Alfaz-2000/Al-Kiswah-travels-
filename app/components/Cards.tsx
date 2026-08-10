import React from 'react'
import Image from 'next/image'
import { fontH1,fontH2,fontP } from '../lib/fonts'


const Cards = () => {
    return (
        <div className='min-h-screen bg-[#09283a] text-white flex flex-col justify-center items-center'>
            <div className="p-10">
                <h1 className='text-center font-bold text-xl md:text-5xl text-[#dcb657] {fontH1.className}'>We provide Tourism for Places</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className=" flex flex-col  items-center">
                    <div className="img">
                        <Image className='rounded-full' src="/dubai1.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' font-bold text-xl md:text-4xl'>DUBAI</h2>
                            <p className=' text-base md:text-lg text-center'>Experience world-class shopping, iconic landmarks, luxury, and unforgettable desert adventures.</p>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col  items-center">
                    <div className="img">
                        <Image className='rounded-full' src="/thai.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' font-bold text-xl md:text-4xl'>Thailand</h2>
                            <p className=' text-base md:text-lg text-center'>Discover beautiful beaches, vibrant nightlife, rich culture, and delicious local cuisine.</p>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col  items-center">
                    <div className="img">
                        <Image className='rounded-full' src="/viet.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' font-bold text-xl md:text-4xl'>Vietnam</h2>
                            <p className=' text-base md:text-lg text-center'>Explore breathtaking landscapes, historic cities, scenic cruises, and authentic street food.</p>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col  items-center">
                    <div className="img">
                        <Image className='rounded-full' src="/kerala.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' font-bold text-xl md:text-4xl'>Kerala</h2>
                            <p className=' text-base md:text-lg text-center'>Relax in serene backwaters, lush greenery, hill stations, and peaceful beaches.</p>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col  items-center">
                    <div className="img">
                        <Image className='rounded-full' src="/kash.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' font-bold text-xl md:text-4xl'>Kashmir</h2>
                            <p className=' text-base md:text-lg text-center'>Experience snow-capped mountains, tranquil valleys, pristine lakes, and unforgettable natural beauty.</p>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col  items-center">
                    <div className="img">
                        <Image className='rounded-full' src="/raj.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' font-bold text-xl md:text-4xl'>Rajasthan</h2>
                            <p className=' text-base md:text-lg text-center'>Discover majestic forts, royal palaces, colorful culture, and timeless desert landscapes.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
