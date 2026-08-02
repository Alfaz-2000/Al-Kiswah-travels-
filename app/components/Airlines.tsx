import React from 'react'

const Airlines = () => {
    const airlinesList =
        [
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
        <div className='min-h-[50vh] text-white'>
            <div className="">
                <div className="flex justify-center items-center text-[#dcb657]">
                    <h1 className=' text-xl md:text-4xl font-bold'>Best Flight Deal's</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-4 p-4 ">
                    {airlinesList.map((items) => (
                        <div key={items.route} className="flex flex-col justify-center items-center bg-[#0c344b] rounded-4xl gap-2 p-2 ">
                            <div className="flex flex-col justify-center items-center  px-5 pt-5">
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src={items.logo} alt={items.airline} width={64} height={64} />
                                    </div>
                                    <div className="direction">{items.route}</div>
                                </div>
                                <div className="airLineName">{items.airline}</div>
                            </div>
                            <div className="flex gap-4 px-5 pt-2">
                                <div className="duration">03h 45m </div>
                                <div className="type">Non-Stop</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Airlines
