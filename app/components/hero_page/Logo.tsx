import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='h-[40vh] w-full absolute flex justify-center'>
      <div className="">
        <Image src="/ak-transferent.png" alt='ak-logo' width={700} height={700}/>
      </div>
    </div>
  )
}

export default Logo
