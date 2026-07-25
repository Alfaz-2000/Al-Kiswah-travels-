import Image from "next/image";
import { flightDeals } from "@/data/flightsdeals";

export default function Home() {
  return (
    <div className=" ">

      <div className="ticketPrice flex flex-col min-h-[250px] gap-5 bg-[#09283a]">
        <div className="flex justify-between px-5">
          <h2 className="text-white font-bold">Today's Best Flight Price Deals</h2>
          {/* <span className="text-white">Read more!</span> */}
        </div>
        <div className=" flex flex-col gap-2 md:flex ">
          <div className="flex px-5  text-white">
            <div className="flex flex-col  gap-10 px-10 bg-[#0c344b] rounded-4xl p-10">
              <div className="flex gap-2 justify-center items-center ">
                <Image src="/em.png" alt="Emirates-logo" width={64} height={64} />
                <h3 className="text-center">MANGALORE TO DAMMAM IX973</h3>
              </div>
                <div className="flex gap-4">
                  <span>02h 45m</span>
                  <span>non-stop</span>
                  <span className="text-[#95cd61] font-bold">$25,700</span>
                </div>
            </div>
          </div>
          <div className="flex px-5  text-white">
            <div className="flex flex-col  gap-10 px-10 bg-[#0c344b] rounded-4xl p-10">
               <div className="flex gap-2 justify-center items-center ">
                <Image src="/em.png" alt="Emirates-logo" width={64} height={64} />
                <h3 className="text-center">MANGALORE TO JEDDAH IX796</h3>
              </div>
              <div className="flex gap-4">
                <span>02h 45m</span>
                <span>non-stop</span>
                <span className="text-[#95cd61] font-bold">$35,500</span>
              </div>
            </div>
          </div>
          <div className="flex px-5  text-white">
            <div className="flex flex-col  gap-10 px-10 bg-[#0c344b] rounded-4xl p-10">
               <div className="flex gap-2 justify-center items-center ">
                <Image src="/em.png" alt="Emirates-logo" width={64} height={64} />
                <h3 className="text-center">JEDDAH TO MANGALORE IX796</h3>
              </div>
              <div className="flex gap-4">
                <span>02h 45m</span>
                <span>non-stop</span>
                <span className="text-[#95cd61] font-bold">$15,999</span>
              </div>
            </div>
          </div>
          <div className="flex px-5  text-white">
            <div className="flex flex-col  gap-10 px-10 bg-[#0c344b] rounded-4xl p-10">
              <div className="flex gap-2 justify-center items-center ">
                <Image src="/em.png" alt="Emirates-logo" width={64} height={64} />
                <h3 className="text-center">MANGALORE TO DUBAI IX831</h3>
              </div>
              <div className="flex gap-4">
                <span>02h 45m</span>
                <span>non-stop</span>
                <span className="text-[#95cd61] font-bold">$20,700</span>
              </div>
            </div>
          </div>
          <div className="flex px-5  text-white">
            <div className="flex flex-col  gap-10 px-10 bg-[#0c344b] rounded-4xl p-10">
              <div className="flex gap-2 justify-center items-center ">
                <Image src="/em.png" alt="Emirates-logo" width={64} height={64} />
                <h3 className="text-center">MANGALORE TO DUBAI IX813</h3>
              </div>
              <div className="flex gap-4">
                <span>02h 45m</span>
                <span>non-stop</span>
                <span className="text-[#95cd61] font-bold">$25,700</span>
              </div>
            </div>
          </div>
        </div>
      </div>



<div className="flex flex-col gap-2">
  {flightDeals.map((deal) => (
    <div key={deal.id} className="flex px-5 text-white">
      <div className="flex flex-col gap-10 px-10 bg-[#0c344b] rounded-4xl p-10 w-full">
        <div className="flex gap-2 justify-center items-center">
          <Image
            src={deal.airlineLogo}
            alt={deal.airlineName}
            width={64}
            height={64}
          />

          <h3 className="text-center">
            {deal.from.toUpperCase()} TO {deal.to.toUpperCase()} {deal.flightNo}
          </h3>
        </div>

        <div className="flex gap-4">
          <span>{deal.duration}</span>
          <span>{deal.stop}</span>
          <span className="text-[#95cd61] font-bold">
            {deal.price}
          </span>
        </div>
      </div>
    </div>
  ))}
  {flightDeals.map((deal) => (
    <div key={deal.id} className="flex px-5 text-white">
      <div className="flex flex-col gap-10 px-10 bg-[#0c344b] rounded-4xl p-10 w-full">
        <div className="flex gap-2 justify-center items-center">
          <Image
            src={deal.airlineLogo}
            alt={deal.airlineName}
            width={64}
            height={64}
          />

          <h3 className="text-center">
            {deal.from.toUpperCase()} TO {deal.to.toUpperCase()} {deal.flightNo}
          </h3>
        </div>

        <div className="flex gap-4">
          <span>{deal.duration}</span>
          <span>{deal.stop}</span>
          <span className="text-[#95cd61] font-bold">
            {deal.price}
          </span>
        </div>
      </div>
    </div>
  ))}
  {flightDeals.map((deal) => (
    <div key={deal.id} className="flex px-5 text-white">
      <div className="flex flex-col gap-10 px-10 bg-[#0c344b] rounded-4xl p-10 w-full">
        <div className="flex gap-2 justify-center items-center">
          <Image
            src={deal.airlineLogo}
            alt={deal.airlineName}
            width={64}
            height={64}
          />

          <h3 className="text-center">
            {deal.from.toUpperCase()} TO {deal.to.toUpperCase()} {deal.flightNo}
          </h3>
        </div>

        <div className="flex gap-4">
          <span>{deal.duration}</span>
          <span>{deal.stop}</span>
          <span className="text-[#95cd61] font-bold">
            {deal.price}
          </span>
        </div>
      </div>
    </div>
  ))}
  {flightDeals.map((deal) => (
    <div key={deal.id} className="flex px-5 text-white">
      <div className="flex flex-col gap-10 px-10 bg-[#0c344b] rounded-4xl p-10 w-full">
        <div className="flex gap-2 justify-center items-center">
          <Image
            src={deal.airlineLogo}
            alt={deal.airlineName}
            width={64}
            height={64}
          />

          <h3 className="text-center">
            {deal.from.toUpperCase()} TO {deal.to.toUpperCase()} {deal.flightNo}
          </h3>
        </div>

        <div className="flex gap-4">
          <span>{deal.duration}</span>
          <span>{deal.stop}</span>
          <span className="text-[#95cd61] font-bold">
            {deal.price}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>

  );
}
