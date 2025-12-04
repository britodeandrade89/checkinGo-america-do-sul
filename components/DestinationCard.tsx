import React from 'react';
import type { Destination } from '../types';
import { PriceTagIcon, ChevronDownIcon } from './icons';

interface DestinationCardProps {
  destination: Destination;
  totalCost: number;
  plannedItemsCount: number;
  onShowInfo: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, totalCost, plannedItemsCount, onShowInfo }) => {
  const { imageUrl } = destination;

  const bgImage = imageUrl || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop';

  return (
    <div 
      onClick={onShowInfo}
      className="group cursor-pointer rounded md:rounded-lg overflow-hidden bg-[#2f2f2f] transition-all duration-300 transform md:hover:scale-105 md:hover:z-20 md:hover:shadow-xl relative w-[160px] md:w-[280px]"
    >
      {/* Thumbnail Container */}
      <div className="aspect-[16/9] w-full relative">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
         <h3 className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white truncate drop-shadow-md md:hidden">{destination.title}</h3>
      </div>

      {/* Hidden Details revealed on hover (Desktop only) */}
      <div className="hidden md:block opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-screen transition-all duration-300 absolute inset-x-0 top-full bg-[#181818] z-30 shadow-2xl rounded-b-lg">
        <div className="p-3 space-y-2">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white truncate pr-2">{destination.title}</h3>
                <div className="flex space-x-1">
                    <button className="border border-gray-400 rounded-full p-1 hover:border-white hover:bg-white/20 transition">
                         <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onShowInfo(); }}
                        className="border border-gray-400 rounded-full p-1 hover:border-white hover:bg-white/20 transition"
                    >
                         <ChevronDownIcon className="w-3 h-3 text-white" />
                    </button>
                </div>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-gray-400">
                <span className="text-green-400 font-semibold">98% Match</span>
                <span>{plannedItemsCount} episódios</span>
                <span className="border border-gray-500 px-1 rounded">HD</span>
            </div>
            <p className="text-[10px] text-gray-300 line-clamp-2">
                {destination.description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
