import React from "react";
import Title from "./Title";

function ExclusiveOffers() {
    return(
        <div className="container mx-auto px-4 py-8">
            <div className="">
                <Title title='Exclusive Offers' subtitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />

                <div className="flex justify-center mt-6">
                  <button className='bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-300'>
                      View All
                  </button>
                </div>

            </div>

        </div>

    )

}
export default ExclusiveOffers