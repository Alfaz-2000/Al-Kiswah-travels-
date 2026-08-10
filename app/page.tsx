import Image from "next/image";
import { flightDeals } from "@/data/flightsdeals";
import Cards from "./components/Cards";
import Visa from "./components/Visa";
import Ticket from "./components/Ticket";
import Partners from "./components/Partners";
import Hero from "./components/Hero";
import Airlines from "./components/Airlines";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>

      <div className="" id="home">
        <Hero />
      </div>

      <div className=" mt-2" id="Services">
        <Cards />
      </div>
      <div className=" mt-2" id="Visa">
        <Visa />
      </div>

      <div className=" mt-2" id="Flights">
        <Airlines />
      </div>
      <div className="mt-2" id="Contact">
        <Contact/>
      </div>

      <div className=" mt-2">
        <Partners />
      </div>






    </>

  );
}
