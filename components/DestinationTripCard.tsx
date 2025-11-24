import React from 'react';
// FIX: Removed local GroupedTrip interface and imported it from types.ts to resolve 'unknown' type inference errors.
import type { Itinerary, Destination, CarTripLeg, AccommodationOption, AdditionalCost, GroupedTrip } from '../types';
import { 
    PlaneTakeoffIcon, 
    BusIcon, 
    FuelIcon, 
    ShipIcon, 
    MapPinIcon,
    LocationMarkerAIcon,
    LocationMarkerBIcon,
    TollBoothIcon,
    ParkingIcon,
    ChevronDownIcon,
    BellIcon,
    StarIcon,
    ThumbsUpIcon,
    ThumbsDownIcon,
    WifiIcon,
    ExternalLinkIcon,
    HomeIcon,
} from './icons';

interface DestinationTripCardProps {
    trip: GroupedTrip;
    isExpanded: boolean;
    onToggle: () => void;
    onSelectItinerary: (itinerary: Itinerary) => void;
}

const ItineraryRow: React.FC<{ itinerary: Itinerary, onClick: () => void }> = ({ itinerary, onClick }) => {
    const firstEvent = itinerary.events[0];
    
    const isMonitored = itinerary.monitoring?.enabled && itinerary.priceHistory && itinerary.priceHistory.length > 0;
    const displayPrice = isMonitored ? itinerary.priceHistory![itinerary.priceHistory!.length - 1].price : itinerary.totalPrice;

    const displayTitle = itinerary.title.replace(/ \(\d{1,2}\/\d{1,2}\)$/, '');

    return (
        <div onClick={onClick} className="p-3 -mx-3 rounded-lg flex items-center justify-between hover:bg-slate-100 transition-colors duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border">
                    {React.cloneElement(firstEvent.company.logo as React.ReactElement, { className: "h-5 w-auto" })}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-slate-800 truncate" title={itinerary.title}>{displayTitle}</p>
                    <p className="text-xs text-slate-500">{firstEvent.startDate}, {firstEvent.startTime}</p>
                </div>
            </div>
            <div className="text-right flex items-center space-x-2 flex-shrink-0 ml-4">
                {isMonitored && <BellIcon className="h-4 w-4 text-blue-500" title="Monitoramento de preço ativo" />}
                <div>
                    <p className="font-bold text-sm text-blue-700">R$ {displayPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    <p className="text-xs text-slate-500 -mt-1">por pessoa</p>
                </div>
            </div>
        </div>
    );
};

const CarTripLegCard: React.FC<{ leg: CarTripLeg }> = ({ leg }) => {
    const tollCount = leg.tollCostOneWay > 0 ? Math.min(Math.round(leg.tollCostOneWay / 5), 4) : 0;

    return (
        <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 flex flex-col space-y-4">
            <h4 className="font-bold text-lg text-slate-800 text-center">
                {leg.title}
            </h4>
            <div className="py-8 px-4 flex items-center">
                <LocationMarkerAIcon className="h-10 w-10 flex-shrink-0" />
                <div className="flex-grow flex items-center justify-center relative h-10 px-2">
                    <div className="w-full border-t-2 border-dashed border-slate-300"></div>
                    <div className="absolute inset-0 flex items-center justify-around px-4">
                        {Array.from({ length: tollCount }).map((_, i) => (
                            <div key={i} className="bg-white px-1">
                                <TollBoothIcon className="h-8 w-8" />
                            </div>
                        ))}
                    </div>
                </div>
                <LocationMarkerBIcon className="h-10 w-10 flex-shrink-0" />
            </div>
            <div className="text-center -mt-8">
                <p className="text-2xl font-bold text-slate-800">
                    Total: {leg.distance}
                </p>
            </div>
            <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center text-slate-600">
                        <FuelIcon className="h-5 w-5 mr-2 text-slate-400" />
                        Combustível
                    </span>
                    <span className="font-semibold text-slate-800">
                        R$ {leg.fuelCostOneWay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                </div>
                
                {leg.tollCostOneWay > 0 && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center text-slate-600">
                            <ParkingIcon className="h-5 w-5 mr-2 text-slate-400" />
                            Pedágios
                        </span>
                        <span className="font-semibold text-slate-800">
                            R$ {leg.tollCostOneWay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                )}
                {leg.additionalCosts && leg.additionalCosts.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                        <span className="flex items-center text-slate-600">
                           {React.cloneElement(cost.icon as React.ReactElement, { className: "h-5 w-5 mr-2 text-slate-400" })}
                           {cost.description.includes('Estacionamento') ? 'Estacionamento' : cost.description}
                        </span>
                        <span className="font-semibold text-slate-800 text-right">
                            {cost.dailyRate ? `R$ ${cost.dailyRate.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} / dia` : ''}
                            {cost.total ? `R$ ${cost.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : ''}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AccommodationOptionCard: React.FC<{ option: AccommodationOption }> = ({ option }) => (
    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-5">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="text-lg font-bold text-slate-800">{option.name}</h4>
                    <div className="flex items-center space-x-1 mt-1 text-slate-600">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <span className="font-semibold">{option.rating > 0 ? option.rating.toFixed(1) : 'Novo'}</span>
                        {option.rating > 0 && <span className="text-sm">({option.rating >= 9 ? 'Fantástico' : 'Muito bom'})</span>}
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                <div>
                    <p className="text-xl font-bold text-slate-800">
                        R$ {option.pricePerNight.toLocaleString('pt-BR')}
                        <span className="text-sm font-normal text-slate-500"> / noite</span>
                    </p>
                     <p className="text-sm text-slate-500">
                        Total: <span className="font-semibold text-slate-700">R$ {option.totalPrice.toLocaleString('pt-BR')}</span> para {option.nights} noites
                    </p>
                </div>
                <a href={option.bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-sm flex items-center space-x-2">
                    <span>Reservar</span>
                    <ExternalLinkIcon className="h-4 w-4" />
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                    <h5 className="font-semibold text-slate-800 mb-2 flex items-center"><ThumbsUpIcon className="h-5 w-5 mr-2 text-green-500"/> Prós</h5>
                    <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-600">
                        {option.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-slate-800 mb-2 flex items-center"><ThumbsDownIcon className="h-5 w-5 mr-2 text-red-500"/> Contras</h5>
                     <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-600">
                        {option.cons.map((con, i) => <li key={i}>{con}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const DestinationTripCard: React.FC<DestinationTripCardProps> = ({ trip, isExpanded, onToggle, onSelectItinerary }) => {
    const { destination, carTrips, itineraries } = trip;
    const themeColor = 'themeColor' in destination ? destination.themeColor : '#64748b';

    // FIX: The `destination` object is a union type. Explicitly typing these constants ensures that TypeScript correctly infers them as arrays, resolving the 'unknown' type errors in subsequent method calls.
    const accommodations: AccommodationOption[] = 'id' in destination ? (destination.accommodations ?? []) : [];
    const additionalCosts: AdditionalCost[] = 'id' in destination ? (destination.additionalCosts ?? []) : [];
    
    const summaryParts = [];
    if (carTrips && carTrips.length > 0) summaryParts.push(`${carTrips.length} trecho${carTrips.length > 1 ? 's' : ''} de carro`);
    if (itineraries && itineraries.length > 0) summaryParts.push(`${itineraries.length} iten${itineraries.length > 1 ? 's' : ''} salvo${itineraries.length > 1 ? 's' : ''}`);
    const summary = summaryParts.join(' · ');

    const groupedAccommodations = accommodations.reduce((acc, option) => {
      (acc[option.city] = acc[option.city] || []).push(option);
      return acc;
    }, {} as Record<string, AccommodationOption[]>);

    const carCost = carTrips?.reduce((total, leg) => total + leg.totalCostOneWay, 0) ?? 0;
    const additionalCost = additionalCosts.reduce((total, cost) => total + cost.amount, 0);

    const cheapestAccommodationsCost = Object.values(groupedAccommodations).reduce((total, cityAccoms) => {
        if (cityAccoms.length === 0) return total;
        const cheapest = cityAccoms.reduce((prev, curr) => (prev.totalPrice < curr.totalPrice ? prev : curr));
        return total + cheapest.totalPrice;
    }, 0);

    const totalCost = carCost + additionalCost + cheapestAccommodationsCost;

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
            <div 
                onClick={onToggle}
                className="p-4 text-white relative flex justify-between items-center cursor-pointer"
                style={{ backgroundColor: themeColor }}
            >
                 <div className="absolute top-2 right-2 text-white/10">
                    {destination.icon && React.cloneElement(destination.icon, { className: 'h-20 w-20' })}
                </div>
                <div className="relative z-10">
                    <h3 className="text-lg font-bold drop-shadow-sm">{destination.title}</h3>
                    {summary && <p className="text-sm text-white/80 mt-1">{summary}</p>}
                </div>
                <ChevronDownIcon className={`h-6 w-6 text-white/90 relative z-10 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />

            </div>
            
            <div className={`transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 flex-grow flex flex-col space-y-6 border-t bg-slate-50/50" style={{ borderColor: themeColor + '40' }}>
                    {carTrips && carTrips.length > 0 && (
                        <div className="space-y-4">
                            {carTrips.map((leg, index) => <CarTripLegCard key={index} leg={leg} />)}
                        </div>
                    )}

                    {additionalCosts && additionalCosts.length > 0 && (
                        <div>
                            <h4 className="font-bold text-slate-700 mb-2">Custos Adicionais</h4>
                            <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 space-y-3">
                                {additionalCosts.map((cost, index) => (
                                    <div key={index} className="flex justify-between items-center text-sm">
                                        <span className="flex items-center text-slate-600">
                                            {cost.icon}
                                            <span className="ml-2">{cost.description}</span>
                                            {cost.details && <span className="text-xs text-slate-400 ml-1">({cost.details})</span>}
                                        </span>
                                        <span className="font-semibold text-slate-800">
                                            R$ {cost.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {accommodations && accommodations.length > 0 && (
                        <div>
                            <h4 className="font-bold text-slate-700 mb-2">Opções de Hospedagem</h4>
                            <div className="space-y-6">
                                {Object.entries(groupedAccommodations).map(([city, cityAccoms]) => (
                                    <div key={city}>
                                        <h5 className="font-semibold text-slate-600 mb-2 pl-1">Em {city}:</h5>
                                        <div className="space-y-4">
                                            {cityAccoms.map(option => <AccommodationOptionCard key={option.name} option={option} />)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {totalCost > 0 && (
                        <div className="mt-4 p-5 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white text-center shadow-lg">
                            <p className="font-semibold uppercase text-sm tracking-wider opacity-80">Custo Total Estimado da Viagem</p>
                            <p className="text-4xl font-extrabold my-1">
                                R$ {totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                            <p className="text-xs opacity-70">Soma de transporte + hospedagem mais econômica</p>
                        </div>
                    )}

                    {itineraries.length > 0 && (
                        <div className="flex-grow">
                            <h4 className="font-bold text-slate-700 mb-1">
                               {itineraries.length} {itineraries.length > 1 ? 'itens salvos' : 'item salvo'}
                            </h4>
                            <div className="flex flex-col">
                                {itineraries.map(itinerary => (
                                    <ItineraryRow 
                                        key={itinerary.id} 
                                        itinerary={itinerary} 
                                        onClick={() => onSelectItinerary(itinerary)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DestinationTripCard;