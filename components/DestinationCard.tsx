
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
  const { themeColor, imageUrl } = destination;

  // Fallback image if none provided (embora tenhamos adicionado no ts)
  const bgImage = imageUrl || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop';

  return (
    <div 
      onClick={onClick}
      className="relative group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:z-20"
    >
      {/* Thumbnail Container (Ratio 16:9 like streaming thumbnails) */}
      <div className="aspect-video w-full rounded overflow-hidden shadow-md relative">
        <img 
            src={bgImage} 
            alt={destination.title} 
            className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
        />
        
        {/* Progress Bar Simulation (Netflix style red bar at bottom) */}
        {plannedItemsCount > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                <div className="h-full bg-red-600 w-1/3"></div>
            </div>
        )}

        {/* Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
             {/* This content appears only on hover/focus in the overlay */}
        </div>
      </div>

      {/* Metadata Below (Netflix Style) */}
      <div className="mt-2 px-1 opacity-80 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white truncate pr-2">{destination.title}</h3>
            <div className="flex space-x-2">
                <div className="border border-gray-500 rounded-full p-1 hover:border-white hover:bg-gray-800">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
            <span className="text-green-400 font-semibold">98% Match</span>
            <span className="border border-gray-500 px-1 rounded text-[10px]">12+</span>
            <span>{plannedItemsCount} episódios (itens)</span>
        </div>
        {totalCost > 0 && (
             <div className="flex items-center space-x-1 text-xs text-gray-300 mt-1">
                <PriceTagIcon className="h-3 w-3" />
                <span>R$ {totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;
