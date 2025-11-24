
import React from 'react';
import type { Flight } from '../types';
import { CalendarIcon, BaggageIcon, RefreshIcon, PlaneTakeoffIcon, ExternalLinkIcon } from './icons';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const isCheap = flight.price < 1000;
  const cardBorderColor = isCheap ? 'border-green-500/80' : 'border-gray-700';

  const routeTypeDisplay = {
    round_trip: 'Ida e Volta',
    circular: 'Circular'
  };

  const generateGoogleFlightsUrl = (flight: Flight): string => {
    // CORREÇÃO: O formato da URL foi atualizado para o novo padrão do Google Flights,
    // que usa /travel/flights/search e um ponto e vírgula antes do parâmetro 'flt'.
    const baseUrl = 'https://www.google.com/travel/flights/search;flt=';
    
    if (flight.route_type === 'circular' && flight.return_city) {
        // Multi-cidade para rotas circulares: GRU.LIM.2025-12-20;BOG.GRU.2026-01-05
        const leg1 = `${flight.origin}.${flight.destination}.${flight.departure_date}`;
        const leg2 = `${flight.return_city}.${flight.origin}.${flight.return_date}`;
        return `${baseUrl}${leg1};${leg2}`;
    } else {
        // Viagem de ida e volta padrão: GRU.LIM.2025-12-20*LIM.GRU.2026-01-05
        const leg1 = `${flight.origin}.${flight.destination}.${flight.departure_date}`;
        const leg2 = `${flight.destination}.${flight.origin}.${flight.return_date}`;
        return `${baseUrl}${leg1}*${leg2}`;
    }
  };


  return (
    <div className={`bg-gray-800/60 rounded-lg overflow-hidden border ${cardBorderColor} flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10`}>
      <div className="flex-grow">
          <div className={`p-4 border-b ${cardBorderColor} flex justify-between items-center`}>
            <div className="font-bold text-lg text-white flex items-center">
                <PlaneTakeoffIcon className="h-5 w-5 mr-2 text-cyan-400" />
                <span>{flight.origin} → {flight.destination}</span>
            </div>
            <div className={`font-bold text-xl ${isCheap ? 'text-green-400' : 'text-white'}`}>
              R$ {flight.price}
            </div>
          </div>
          <div className="p-4 space-y-3 text-gray-300">
            <div className="flex items-center text-sm">
                <span className="w-24 text-gray-400 inline-flex items-center"><PlaneTakeoffIcon className="h-4 w-4 mr-2" /> Companhia</span>
                <span className="font-medium text-white">{flight.airline}</span>
            </div>
            <div className="flex items-center text-sm">
                <span className="w-24 text-gray-400 inline-flex items-center"><BaggageIcon className="h-4 w-4 mr-2" /> Bagagem</span>
                <span className="font-medium text-white">{flight.baggage}</span>
            </div>
            <div className="flex items-center text-sm">
                <span className="w-24 text-gray-400 inline-flex items-center"><CalendarIcon className="h-4 w-4 mr-2" /> Datas</span>
                <span className="font-medium text-white">{flight.departure_date} a {flight.return_date}</span>
            </div>
            <div className="flex items-center text-sm">
                <span className="w-24 text-gray-400 inline-flex items-center"><RefreshIcon className="h-4 w-4 mr-2" /> Tipo</span>
                <span className={`capitalize px-2 py-0.5 rounded text-xs font-semibold ${flight.route_type === 'circular' ? 'bg-purple-800 text-purple-200' : 'bg-blue-800 text-blue-200'}`}>
                    {routeTypeDisplay[flight.route_type]}
                </span>
            </div>
            {flight.route_type === 'circular' && flight.return_city && (
                 <div className="flex items-center text-sm">
                    <span className="w-24 text-gray-400 inline-flex items-center"><PlaneTakeoffIcon className="h-4 w-4 mr-2 rotate-180" /> Retorno Via</span>
                    <span className="font-medium text-white">{flight.return_city} → {flight.origin}</span>
                </div>
            )}
          </div>
      </div>
       <div className="p-4 pt-0">
        <a
          href={generateGoogleFlightsUrl(flight)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center justify-center transition-colors duration-300 text-center"
        >
          <span className="mr-2">Ver Oferta</span>
          <ExternalLinkIcon className="h-5 w-5" />
        </a>
      </div>
      {isCheap && (
        <div className="bg-green-500/20 text-green-300 text-xs font-bold text-center py-1">
          OFERTA EXCELENTE!
        </div>
      )}
    </div>
  );
};

export default FlightCard;
