import React from 'react'
import Image from 'next/image'

const Ticket = () => {
   const ticket = [
  {
    route: "Mangalore → Jeddah",
    airline: "Saudia",
    logo: "/saudi.png",
  },
  {
    route: "Jeddah → Mangalore",
    airline: "Air India Express",
    logo: "/airindiaexp.png",
  },
  {
    route: "Mangalore → Doha",
    airline: "Qatar Airways",
    logo: "/qatar.png",
  },
  {
    route: "Mangalore → Muscat",
    airline: "Air India Express",
    logo: "/airindiaexp.png",
  },
  {
    route: "Mangalore → Dammam",
    airline: "IndiGo",
    logo: "/IndiGo-Logo.jpg",
  },
  {
    route: "Mangalore → Dubai",
    airline: "Emirates",
    logo: "/em.png",
  },
  {
    route: "Mangalore → Abu Dhabi",
    airline: "Etihad Airways",
    logo: "/eithad.png",
  },
  {
    route: "Abu Dhabi → Mangalore",
    airline: "Etihad Airways",
    logo: "/eithad.png",
  },
];
    return (
        <div className=" ">

            <div className="ticketPrice flex flex-col min-h-[250px] gap-5 bg-[#09283a]">
                <div className="flex justify-center items-center px-5">
                    <h2 className="  font-bold text-4xl text-[#dcb657]">Today's Best Flight Price Deals</h2>
                    {/* <span className="text-white">Read more!</span> */}
                </div>
                <div className="grid grid-cols-4 gap-2 ">
                                {ticket.map((place)=>(

                                    <div  key={place.route} className="flex px-5  text-white">
                                 
                        <div className="flex flex-col  gap-10 px-10 bg-[#0c344b] rounded-4xl p-10">
                            <div className="flex gap-2 justify-center items-center ">
                                <Image src={place.logo} alt="Emirates-logo" width={64} height={64} />
                                <h3  className="text-center">{place.route}</h3>

                            </div>
                            <div className="flex gap-4">
                                <span>02h 45m</span>
                                <span>non-stop</span>
                                <span className="text-[#95cd61] font-bold">$25,700</span>
                            </div>
                        </div>
                    </div>
                                ))}
                
                </div>
            </div>





        </div>
    )
}

export default Ticket
