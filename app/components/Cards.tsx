import React from 'react'
import Image from 'next/image'
import { fontH1,fontH2,fontP } from '../lib/fonts'


const Cards = () => {
    return (
        <div className='min-h-screen bg-[#09283a] text-white flex flex-col justify-center items-center'>
            <div className="p-10">
                <h1 className='text-center font-bold text-5xl text-[#dcb657] {fontH1.className}'>We provide Tourism for Places</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="">
                    <div className="img">
                        <Image className='rounded-full' src="/dubai.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' font-bold text-4xl {fontH2.className}'>DUBAI</h2>
                            <p className='text-lg text-center'>One of the most visted tourist place in world</p>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="img">
                        <Image className='rounded-full' src="/dubai.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' {fontH2.className} font-bold text-4xl'>Thailand</h2>
                            <p className='text-lg text-center'>One of the most visted tourist place in world</p>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="img">
                        <Image className='rounded-full' src="/dubai.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' {fontH2.className} font-bold text-4xl'>Vietnam</h2>
                            <p className='text-lg text-center'>One of the most visted tourist place in world</p>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="img">
                        <Image className='rounded-full' src="/dubai.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' {fontH2.className} font-bold text-4xl'>Kerala</h2>
                            <p className='text-lg text-center'>One of the most visted tourist place in world</p>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="img">
                        <Image className='rounded-full' src="/dubai.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' {fontH2.className} font-bold text-4xl'>Kashmir</h2>
                            <p className='text-lg text-center'>One of the most visted tourist place in world</p>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="img">
                        <Image className='rounded-full' src="/dubai.png" alt='dubai-image' width={350} height={350} loading="eager" />
                    </div>
                    <div className="info">
                        <div className="sub-info flex flex-col gap-4 p-5 justify-center items-center">
                            <h2 className=' {fontH2.className} font-bold text-4xl'>Rajasthan</h2>
                            <p className='text-lg text-center'>One of the most visted tourist place in world</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
