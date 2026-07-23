import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">

      <div className="ticketPrice flex flex-col min-h-[500px] gap-5 bg-[#09283a]">
        <div className="flex justify-between px-5">
          <h2 className="text-white">Today's Best Flight Price Deals</h2>
          <span className="text-white">Read more!</span>
        </div>
        <div className="flex px-5  text-white">
          <div className="flex flex-col  gap-10 px-10 bg-[#0c344b] rounded-full p-10">
            <h3 className="text-center">Mumbai to Dubai</h3>
            <div className="flex gap-4">
              <span>02h 45m</span>
              <span>non-stop</span>
              <span className="text-[#95cd61] font-bold">$13,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
