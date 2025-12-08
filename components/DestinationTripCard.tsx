
import React from 'react';
import type { GroupedTrip } from '../types';

interface DestinationTripCardProps {
    trip: GroupedTrip;
    onShowInfo: () => void;
    onToggleFavorite?: () => void;
}

const DestinationTripCard: React.FC<DestinationTripCardProps> = ({ trip, onShowInfo }) => {
    const { destination } = trip;
    const imageUrl = 'imageUrl' in destination ? destination.imageUrl : undefined;
    const bgImage = imageUrl || 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=800&auto=format&fit=crop';
    
    return (
        <div 
            onClick={onShowInfo}
            className="group cursor-pointer relative w-[110px] md:w-[180px] aspect-[2/3] rounded-sm overflow-hidden transition-transform duration-300 md:hover:scale-110 md:hover:z-50"
        >
            <img 
                src={bgImage} 
                alt={destination.title} 
                className="w-full h-full object-cover"
            />
             {/* "Top 10" Badge Simulation */}
             <div className="absolute top-0 right-0 bg-[#E50914] text-white text-[8px] font-bold px-1 rounded-bl-sm">
                TOP 10
             </div>

             <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-80"></div>
             
             {/* Simple Logo/Title Centered */}
             <div className="absolute bottom-2 left-0 right-0 text-center px-1">
                 <h3 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider drop-shadow-md truncate">{destination.title}</h3>
             </div>
        </div>
    );
};

export default DestinationTripCard;
