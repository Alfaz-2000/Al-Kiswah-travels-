import React from 'react'

const Partners = () => {
    const partnersNames=[
"Travunited Pvt ltd",
"Flytech holidays",
"Sayyed enterprises",
"Riya travels"
    ];
  return (
    
    <div className=' flex flex-col min-h-fit p-5 justify-center'>
        <h2 className='font-bold text-xl md:text-4xl text-[#dcb657] text-center'>Partnered with</h2>
        <div className="names flex justify-around items-center text-gray-500 text-base md:text-lg p-5 gap-4">
            {partnersNames.map((item)=>(
                <span key={item}>{item}</span>
            ))
            }
        </div>
      
    </div>
  )
}

export default Partners
