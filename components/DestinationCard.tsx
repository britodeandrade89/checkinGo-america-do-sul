import React from 'react';
import type { Destination } from '../types';
import { CarIcon, PriceTagIcon } from './icons';

interface DestinationCardProps {
  destination: Destination;
  totalCost: number;
  plannedItemsCount: number;
  onClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, totalCost, plannedItemsCount, onClick }) => {
  const { themeColor, icon } = destination;

  return (
    <div 
      onClick={onClick}
      className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 flex flex-col h-full overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-cyan-500/20 hover:shadow-2xl hover:-translate-y-2"
      style={{ '--theme-color': themeColor } as React.CSSProperties}
    >
      {/* Header with theme color and icon */}
      <div 
        className="p-4 relative text-white" 
        style={{ backgroundColor: themeColor }}
      >
        <div className="absolute top-2 right-2 text-white/20 transform-gpu group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(icon, { className: 'h-20 w-20' })}
        </div>
        <h3 className="text-xl font-bold relative z-10 drop-shadow-sm flex items-baseline">
          <span>{destination.title}</span>
        </h3>
        <p className="text-sm text-white/90 relative z-10 mt-1 drop-shadow-sm">{destination.description}</p>
      </div>

      {/* Body with trip summary */}
      <div className="p-4 flex-grow flex flex-col justify-center">
        {totalCost > 0 ? (
          <div>
            <div className="flex justify-between items-baseline">
                <span className="font-semibold text-slate-800 truncate pr-2">Custo total da rota</span>
                <span className="text-2xl font-bold" style={{color: themeColor}}>
                    R$ {totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
            </div>
            <div className="text-xs text-slate-500 text-right -mt-1">
              Total estimado
            </div>
             <div className="flex items-center text-xs text-slate-600 mt-2">
                <PriceTagIcon className="h-4 w-4 text-slate-500 mr-1" />
                <span className="text-slate-500">
                  {plannedItemsCount} itens planejados
                </span>
            </div>
          </div>
        ) : (
          <div className="text-center text-sm text-slate-500 py-4">
            <p>Nenhum item salvo para este roteiro ainda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;