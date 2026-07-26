import Image from "next/image";
import { flightDeals } from "@/data/flightsdeals";
import Cards from "./components/Cards";
import Visa from "./components/Visa";
import Ticket from "./components/Ticket";

export default function Home() {
  return (
<>

     
      <Cards />

<Visa/>

<Ticket/>





    
    </>

  );
}
