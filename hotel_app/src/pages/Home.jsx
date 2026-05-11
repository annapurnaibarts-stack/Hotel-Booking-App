import React from "react";
import Hero from "../components/Hero";
import HotelCard from "../components/HotelCard";
import Title from "../components/Title";
import {useNavigate} from 'react-router-dom'
import ExclusiveOffers from "../components/ExclusiveOffers";
function Home(){
    const navigate = useNavigate();

    return(
        <>
         <Hero />
         {/* Display all 4 dummy hotel cards */}
         <div className="container align-center mx-auto px-4 py-8">
           <Title title='Featured Hotels' subtitle='Welcome to our hotel booking app' />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <HotelCard index={0} />
             <HotelCard index={1} />
             <HotelCard index={2} />
             <HotelCard index={3} />
           </div>
           <div className="flex justify-center mt-6">
             <button onClick={() => {navigate('/rooms'); scrollTo(0, 0);}} className='border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-300'>
               View All
             </button>
           </div>
         </div>

         <ExclusiveOffers />
        </>
    ) 
}

export default Home