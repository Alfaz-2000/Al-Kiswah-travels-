import React from 'react'

const Partners = () => {
    const partnersNames=[
"Travunited Pvt ltd",
"Flytech holidays",
"Sayyed enterprises",
"Riya travels"
    ];
  return (
    
    <div className=' flex flex-col min-h-[40vh] p-5 justify-center'>
        <h2 className='font-bold text-4xl text-[#dcb657] text-center'>Partnered with</h2>
        <div className="names flex justify-between items-center text-gray-500 text-2xl p-5 gap-4">
            {partnersNames.map((item)=>(
                <span key={item}>{item}</span>
            ))
            }
        </div>
      
    </div>
  )
}

export default Partners
