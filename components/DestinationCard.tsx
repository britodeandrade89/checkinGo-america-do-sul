
import React, { useState } from 'react';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  totalCost: number;
  plannedItemsCount: number;
  onShowInfo: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onShowInfo }) => {
  const { imageUrl } = destination;
  
  // Default fallback if initial URL is missing
  const defaultImage = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop';
  const [imgSrc, setImgSrc] = useState(imageUrl || defaultImage);

  const handleError = () => {
    setImgSrc(defaultImage);
  };

  return (
    <div 
      onClick={onShowInfo}
      className="group cursor-pointer relative w-[110px] md:w-[180px] aspect-[2/3] rounded-sm overflow-hidden transition-transform duration-300 md:hover:scale-110 md:hover:z-50"
    >
      <img 
        src={imgSrc} 
        alt={destination.title} 
        className="w-full h-full object-cover"
        onError={handleError}
      />
      
      {/* Netflix N Logo Overlay on top left */}
      <div className="absolute top-1 left-1">
         <span className="text-[#E50914] font-black text-xs md:text-sm drop-shadow-md">N</span>
      </div>

      {/* "New Episodes" Badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 bg-red-600 text-white text-[8px] md:text-[10px] font-bold px-1 py-0.5 rounded-sm text-center shadow-md">
        NOVOS EPISÓDIOS
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-2 left-2 right-2 h-1 bg-gray-600/50 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 w-1/4"></div>
      </div>

      {/* Gradient for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-2 right-2 text-center">
              <p className="text-white text-xs font-bold drop-shadow-md line-clamp-2">{destination.title}</p>
          </div>
      </div>
    </div>
  );
};

export default DestinationCard;
