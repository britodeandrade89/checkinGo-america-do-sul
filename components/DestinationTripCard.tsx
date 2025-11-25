
import React from 'react';
import type { Itinerary, GroupedTrip } from '../types';
import { 
    StarIcon,
    HomeIcon,
} from './icons';

interface DestinationTripCardProps {
    trip: GroupedTrip;
    onSelectItinerary: (itinerary: Itinerary) => void;
    onToggleFavorite?: () => void;
}

const ItineraryRow: React.FC<{ itinerary: Itinerary, onClick: () => void }> = ({ itinerary, onClick }) => {
    const firstEvent = itinerary.events[0];
    const displayPrice = itinerary.totalPrice;
    const displayTitle = itinerary.title.replace(/ \(\d{1,2}\/\d{1,2}\)$/, '');

    return (
        <div onClick={onClick} className="p-2 -mx-2 rounded-lg flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 border border-gray-500">
                    {React.cloneElement(firstEvent.company.logo as React.ReactElement, { className: "h-5 w-auto" })}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs text-gray-200 truncate" title={itinerary.title}>{displayTitle}</p>
                    <p className="text-[10px] text-gray-400">{firstEvent.startDate}</p>
                </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
                <p className="font-bold text-xs text-cyan-400">R$ {displayPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
        </div>
    );
};


const DestinationTripCard: React.FC<DestinationTripCardProps> = ({ trip, onSelectItinerary, onToggleFavorite }) => {
    const { destination, itineraries } = trip;
    const isFavorite = 'isFavorite' in destination ? destination.isFavorite : false;
    const imageUrl = 'imageUrl' in destination ? destination.imageUrl : undefined;

    const bgImage = imageUrl || 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=800&auto=format&fit=crop';
    
    return (
        <div className="group cursor-pointer rounded-lg overflow-hidden bg-[#2f2f2f] transition-all duration-300 transform hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black">
            {/* Thumbnail Container */}
            <div className="aspect-video w-full relative">
                <img 
                    src={bgImage} 
                    alt={destination.title} 
                    className="w-full h-full object-cover"
                />
                 {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                 {/* Title on bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-bold text-white truncate drop-shadow-md">{destination.title}</h3>
                </div>
                {onToggleFavorite && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite();
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
                        title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    >
                        <StarIcon 
                            className={`h-5 w-5 transition-colors ${isFavorite ? 'text-yellow-400' : 'text-white/70 hover:text-white'}`} 
                            fill={isFavorite ? "currentColor" : "none"}
                        />
                    </button>
                )}
            </div>
             {/* Hidden Details revealed on hover */}
            <div className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-screen transition-all duration-300">
                <div className="p-3 space-y-2">
                    {itineraries.map(itinerary => (
                        <ItineraryRow 
                            key={itinerary.id} 
                            itinerary={itinerary} 
                            onClick={() => onSelectItinerary(itinerary)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationTripCard;
