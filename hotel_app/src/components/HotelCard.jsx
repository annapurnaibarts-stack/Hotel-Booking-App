import React from "react";
import { Link } from "react-router-dom";

function HotelCard({ room, index = 0 }) {
    // Array of dummy data for testing
    const dummyRooms = [
        {
            id: 1,
            name: "Luxury Hotel Suite",
            images: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400"
            ],
            price: 299,
            location: "New York, USA",
            rating: 4.8
        },
        {
            id: 2,
            name: "Beachfront Resort",
            images: [
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
                "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400"
            ],
            price: 189,
            location: "Miami, Florida",
            rating: 4.6
        },
        {
            id: 3,
            name: "Mountain Lodge",
            images: [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400"
            ],
            price: 159,
            location: "Aspen, Colorado",
            rating: 4.7
        },
        {
            id: 4,
            name: "City Center Boutique",
            images: [
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400"
            ],
            price: 225,
            location: "San Francisco, CA",
            rating: 4.5
        }
    ];

    // Use provided room data or fallback to dummy data based on index
    const displayRoom = room || dummyRooms[index % dummyRooms.length];

    return (
        <div className="border border-[#D9D9D9] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <Link to={`/rooms/${displayRoom.id}`} onClick={() => scrollTo(0, 0)} key={displayRoom.id}>
                <div className="overflow-hidden">
                    <img
                        src={displayRoom.images?.[0] || '/placeholder-image.jpg'}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        alt={displayRoom.name || 'Hotel'}
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{displayRoom.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{displayRoom.location}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-blue-600 font-bold">${displayRoom.price}/night</p>
                        <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span className="text-sm text-gray-600">{displayRoom.rating}</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Best Sellers</p>
                </div>
            </Link>
        </div>
    );
}

export default HotelCard;