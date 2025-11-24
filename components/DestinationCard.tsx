import React from 'react';
// FIX: Changed import to pull TripOption and BestTripCombination from the centralized types file, resolving the module export error.
import type { Destination, Itinerary, AccommodationOption, TripOption, BestTripCombination } from '../types';
import { MapPinIcon, StarIcon, CarIcon, HomeIcon, PlaneTakeoffIcon, PriceTagIcon, CheckShieldIcon } from './icons';

interface DestinationCardProps {
  destination: Destination;
  tripOptions: TripOption[];
  accommodationPreview?: AccommodationOption;
  bestCombinations?: BestTripCombination[];
  onClick: () => void;
}

const BestCombinationDisplay: React.FC<{ combination: BestTripCombination }> = ({ combination }) => {
    const Icon = combination.type === 'Menor Preço' ? PriceTagIcon : CheckShieldIcon;
    const bgColor = combination.type === 'Menor Preço' ? 'bg-emerald-100' : 'bg-sky-100';
    const textColor = combination.type === 'Menor Preço' ? 'text-emerald-700' : 'text-sky-700';

    return (
        <div className={`p-3 rounded-lg ${bgColor}`}>
            <h4 className={`flex items-center text-sm font-bold ${textColor}`}>
                <Icon className="h-5 w-5 mr-2" />
                {combination.type}
            </h4>
            
            <div className="mt-2 flex justify-between items-baseline">
                <span className="text-xs font-semibold text-slate-600">Total Viagem</span>
                <span className="text-lg font-extrabold text-slate-800">
                    R$ {combination.totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
            </div>
            
            <div className="mt-2 text-xs text-slate-600 space-y-1">
                <div className="flex items-center justify-between">
                    <span className="flex items-center"><PlaneTakeoffIcon className="h-4 w-4 mr-1"/> Ida</span>
                    <span>R$ {combination.departureFlight.totalPrice.toFixed(2)}</span>
                </div>
                 <div className="flex items-center justify-between">
                    <span className="flex items-center"><PlaneTakeoffIcon className="h-4 w-4 mr-1 rotate-180"/> Volta</span>
                    <span>R$ {combination.returnFlight.totalPrice.toFixed(2)}</span>
                </div>
                 <div className="flex items-center justify-between">
                    <span className="flex items-center"><HomeIcon className="h-4 w-4 mr-1"/> Estadia</span>
                    <span>a partir de R$ {combination.accommodation.pricePerNight.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};


const DestinationCard: React.FC<DestinationCardProps> = ({ destination, tripOptions, accommodationPreview, bestCombinations, onClick }) => {
  const { themeColor, icon, carTrips } = destination;
  const departureFlight = tripOptions[0]?.departureFlight;
  const totalCarTripCost = carTrips
    ? carTrips.reduce((total, trip) => {
        const isRoundTrip = trip.title.includes("↔");
        return total + (isRoundTrip ? trip.totalCostOneWay * 2 : trip.totalCostOneWay);
      }, 0)
    : 0;


  return (
    <div 
      onClick={onClick}
      className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 flex flex-col h-full overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-cyan-500/20 hover:shadow-2xl hover:-translate-y-2"
      style={{ '--theme-color': themeColor } as React.CSSProperties}
    >
      {/* Header with theme color and icon */}
      <div 
        className="p-5 relative text-white" 
        style={{ backgroundColor: themeColor }}
      >
        <div className="absolute top-2 right-2 text-white/20 transform-gpu group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(icon, { className: 'h-24 w-24' })}
        </div>
        <h3 className="text-xl font-bold relative z-10 drop-shadow-sm flex items-baseline">
          <span>{destination.title}</span>
        </h3>
        <p className="text-sm text-white/90 relative z-10 mt-1 h-10 drop-shadow-sm">{destination.description}</p>
      </div>

      {/* Body with trip options */}
      <div className="p-5 flex-grow flex flex-col">
         {bestCombinations && bestCombinations.length > 0 ? (
            <div className="space-y-3">
              {bestCombinations.map(combo => <BestCombinationDisplay key={combo.type} combination={combo} />)}
            </div>
         ) : departureFlight ? (
            <div className="mb-4 text-sm">
                <div className="flex justify-between items-center text-slate-700">
                    <div className="flex items-center truncate pr-2">
                        <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0 text-[var(--theme-color)]" />
                        <span className="font-semibold">Voo de Ida ({departureFlight.events[0].startDate})</span>
                    </div>
                    <span 
                        className="font-semibold text-slate-800 px-2 py-0.5 rounded"
                        style={{ backgroundColor: `${themeColor}20`}}
                    >
                        a partir de R$ {departureFlight.totalPrice.toLocaleString('pt-BR')}
                    </span>
                </div>
            </div>
        ) : null}
        
        <div className="space-y-4 flex-grow">
          {tripOptions.length > 0 ? (
            tripOptions.slice(0, 2).map((option, index) => ( // Show max 2 options
              <div key={index}>
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                  <span>Volta em {option.returnDate} ({option.duration.split('/')[1].trim()})</span>
                  <span className="text-lg font-bold" style={{color: themeColor}}>
                     R$ {option.totalCost.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="text-xs text-slate-500 text-right">
                  (ida + volta)
                </div>
              </div>
            ))
          ) : carTrips ? (
            <div>
              <div className="flex items-center text-sm text-slate-600 font-semibold mb-2">
                <CarIcon className="h-4 w-4 mr-2 flex-shrink-0 text-[var(--theme-color)]" />
                <span>Viagem de Carro ({carTrips.length > 1 ? 'Múltiplos Trechos' : 'Ida e Volta'})</span>
              </div>
              <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-slate-800 truncate pr-2">{carTrips.length > 1 ? "Custo total da rota" : `${carTrips[0].duration} (por trecho)`}</span>
                  <span className="text-lg font-bold" style={{color: themeColor}}>
                      R$ {totalCarTripCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
              </div>
              <div className="text-xs text-slate-500 text-right -mt-1">
                Total estimado
              </div>
               <div className="flex items-center text-xs text-slate-600 mt-2">
                  <MapPinIcon className="h-4 w-4 text-slate-500 mr-1" />
                  <span className="text-slate-500">
                    {carTrips.length > 1 
                      ? `${carTrips.length} trechos planejados`
                      : `${carTrips[0].distance} (por trecho) · ${carTrips[0].details}`
                    }
                  </span>
              </div>
            </div>
          ) : accommodationPreview ? (
            <div>
              <p className="text-sm text-slate-600 font-semibold mb-2">Hospedagem Sugerida:</p>
              <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-slate-800 truncate pr-2">{accommodationPreview.name}</span>
                  <span className="text-lg font-bold" style={{color: themeColor}}>
                      R$ {accommodationPreview.pricePerNight.toLocaleString('pt-BR')}
                  </span>
              </div>
              <div className="text-xs text-slate-500 text-right -mt-1">
                / noite
              </div>
              
              <div className="flex justify-between items-baseline mt-2 pt-2 border-t border-slate-200/60">
                <span className="font-semibold text-slate-600">Valor total</span>
                <span className="font-bold text-slate-800">R$ {accommodationPreview.totalPrice.toLocaleString('pt-BR')}</span>
              </div>
               <div className="text-xs text-slate-500 text-right">
                para {accommodationPreview.nights} noites
              </div>

              <div className="flex items-center text-xs text-slate-600 mt-2">
                  <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-bold">{accommodationPreview.rating > 0 ? accommodationPreview.rating.toFixed(1) : 'Novo'}</span>
                  <span className="ml-1 text-slate-500">({accommodationPreview.rating >= 9 ? 'Extraordinário' : 'Muito Bom'})</span>
              </div>
            </div>
          ) : !bestCombinations ? (
            <div className="text-center text-sm text-slate-500 pt-4">
              <p>Nenhuma combinação de ida e volta encontrada com os voos salvos.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
