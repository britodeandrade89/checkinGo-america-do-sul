
import React from 'react';
import type { Destination } from '../types';
import { PriceTagIcon } from './icons';

interface DestinationCardProps {
  destination: Destination;
  totalCost: number;
  plannedItemsCount: number;
  onClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, totalCost, plannedItemsCount, onClick }) => {
  const { imageUrl } = destination;

  const bgImage = imageUrl || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop';

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer rounded-lg overflow-hidden bg-[#2f2f2f] transition-all duration-300 transform hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black"
    >
      {/* Thumbnail Container */}
      <div className="aspect-video w-full relative">
        <img 
            src={bgImage} 
            alt={destination.title} 
            className="w-full h-full object-cover"
        />
        {/* Progress Bar Simulation */}
        {plannedItemsCount > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/50">
                <div className="h-full bg-red-600 w-1/3"></div>
            </div>
        )}
      </div>

      {/* Hidden Details revealed on hover */}
      <div className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-screen transition-all duration-300">
        <div className="p-3 space-y-2">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white truncate pr-2">{destination.title}</h3>
                <div className="flex space-x-1">
                    <button className="border-2 border-gray-400 rounded-full p-1 hover:border-white hover:bg-white/20 transition">
                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
                <span className="text-green-400 font-semibold">98% Match</span>
                <span>{plannedItemsCount} episódios</span>
                <span className="border border-gray-500 px-1 rounded text-[10px]">HD</span>
            </div>
            <p className="text-xs text-gray-300 line-clamp-2">
                {destination.description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
