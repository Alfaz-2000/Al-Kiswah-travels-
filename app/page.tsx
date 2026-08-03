import Image from "next/image";
import { flightDeals } from "@/data/flightsdeals";
import Cards from "./components/Cards";
import Visa from "./components/Visa";
import Ticket from "./components/Ticket";
import Partners from "./components/Partners";
import Hero from "./components/Hero";
import Airlines from "./components/Airlines";

export default function Home() {
  return (
    <>

      <div className="">
        <Hero />
      </div>

      <div className=" mt-2">
        <Cards />
      </div>
      <div className=" mt-2">
        <Visa />
      </div>

      <div className=" mt-2">
        <Airlines />
      </div>

      <div className=" mt-2">
        <Partners />
      </div>






    </>

  );
}
