import React from 'react';
import type { CarTripLeg } from '../types';
import { RouteIcon, PriceTagIcon } from './icons';

interface CarTripCardProps {
  trip: CarTripLeg;
}

const CarTripCard: React.FC<CarTripCardProps> = ({ trip }) => {
  const { title, duration, distance, totalCostOneWay, mapUrl } = trip;

  return (
    <div 
      className="group cursor-pointer rounded-lg overflow-hidden bg-[#2f2f2f] transition-all duration-300 transform hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black"
    >
      {/* Thumbnail Container with the SVG map */}
      <div className="aspect-video w-full relative bg-slate-100 p-2">
        {mapUrl ? (
          <img 
            src={mapUrl} 
            alt={`Mapa da rota para ${title}`} 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <RouteIcon className="h-16 w-16" />
          </div>
        )}
      </div>

      {/* Hidden Details revealed on hover */}
      <div className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-screen transition-all duration-300">
        <div className="p-3 space-y-2">
            <h3 className="text-sm font-bold text-white truncate pr-2" title={title}>{title}</h3>
            <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{duration}</span>
                <span>{distance}</span>
            </div>
             <div className="flex items-center space-x-2 text-xs text-green-400 font-semibold pt-1">
                <PriceTagIcon className="h-4 w-4" />
                <span>
                    Custo (ida): R$ {totalCostOneWay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarTripCard;