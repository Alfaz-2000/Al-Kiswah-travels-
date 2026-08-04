import React from 'react'

const Visa = () => {
    const visas = [
  "Umrah Visa / Multiple Visa",
  "Dubai 30 Days / 60 Days Visa",
  "Schengen Visa",
  "Turkey Visa",
  "Vietnam Visa",
  "Kenya Visa",
  "Morocco Visa",
  "Armenia Visa",
  "Australia Visa",
  "USA Visa",
  "Saudi Arabia GCC Residence Visa",
  "Bahrain Visa",
  "Uzbekistan Visa",
  "Azerbaijan Visa",
  "Qatar Visa",
  "Russia Visa",
  "India Visa",
  "Zambia Visa",
  "Bangladesh Visa",
  "Djibouti Visa",
  "Egypt Visa",
  "Georgia Visa",
  "Hong Kong Visa",
  "Jordan Visa",
  "Kyrgyzstan Visa",
  "Sri Lanka Visa",
];
    return (
        <div className="min-h-fit ">
            <div className="text-[#dcb657] text-xl md:text-4xl font-bold text-center p-5">We help you with Visa</div>
        <div className='flex flex-col justify-center items-center'>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:gap-5">
              {visas.map((item)=>(
                <span key={item} className='bg-[#10384d] text-white rounded-full text-center text-lg p-2'>{item}</span>
              ))}  
            </div>
        </div>
        </div>
    )
}

export default Visa
