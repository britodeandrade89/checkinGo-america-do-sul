import React from 'react';
import type { Itinerary, GroupedTrip } from '../types';
import { 
    StarIcon,
    ChevronDownIcon,
} from './icons';

interface DestinationTripCardProps {
    trip: GroupedTrip;
    onShowInfo: () => void;
    onToggleFavorite?: () => void;
}

const DestinationTripCard: React.FC<DestinationTripCardProps> = ({ trip, onShowInfo, onToggleFavorite }) => {
    const { destination } = trip;
    const isFavorite = 'isFavorite' in destination ? destination.isFavorite : false;
    const imageUrl = 'imageUrl' in destination ? destination.imageUrl : undefined;

    const bgImage = imageUrl || 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=800&auto=format&fit=crop';
    
    return (
        <div 
            onClick={onShowInfo}
            className="group cursor-pointer rounded-lg overflow-hidden bg-[#2f2f2f] transition-all duration-300 transform hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black"
        >
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
                <div className="p-3 space-y-2 bg-[#181818]">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-white truncate pr-2">{destination.title}</h3>
                        <div className="flex space-x-1">
                            <button 
                                onClick={(e) => { e.stopPropagation(); onShowInfo(); }}
                                className="border-2 border-gray-400 rounded-full p-1 hover:border-white hover:bg-white/20 transition"
                            >
                                <ChevronDownIcon className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationTripCard;
