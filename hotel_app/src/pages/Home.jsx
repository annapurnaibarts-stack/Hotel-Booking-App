import React from "react";
import Hero from "../components/Hero";
import HotelCard from "../components/HotelCard";

function Home(){
    return(
        <>
         <Hero />
         {/* Display all 4 dummy hotel cards */}
         <div className="container mx-auto px-4 py-8">
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <HotelCard index={0} />
             <HotelCard index={1} />
             <HotelCard index={2} />
             <HotelCard index={3} />
           </div>
         </div>
        </>
    ) 
}

export default Home