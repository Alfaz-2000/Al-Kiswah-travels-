import Image from "next/image";
import { flightDeals } from "@/data/flightsdeals";
import Cards from "./components/Cards";
import Visa from "./components/Visa";
import Ticket from "./components/Ticket";
import Partners from "./components/Partners";
import Hero from "./components/Hero";

export default function Home() {
  return (
<>

<Hero/>

     
      <Cards />

<Visa/>

<Ticket/>

<Partners/>




    
    </>

  );
}
