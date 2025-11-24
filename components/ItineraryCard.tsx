
import React from 'react';
import type { Itinerary } from '../types';

const ItineraryCard: React.FC<{ itinerary: Itinerary; onSelect: (itinerary: Itinerary) => void; }> = ({ itinerary, onSelect }) => {
    const firstEvent = itinerary.events[0];
    
    // Determine a theme color based on the company. Default to a neutral color.
    const companyName = firstEvent.company.name.toLowerCase();
    let themeColor = '#64748b'; // slate-500
    if (companyName.includes('latam')) themeColor = '#E60026';
    else if (companyName.includes('flybondi')) themeColor = '#FFD700';
    else if (companyName.includes('jetsmart')) themeColor = '#0033A0';
    else if (companyName.includes('sul') || companyName.includes('branca')) themeColor = '#00529B';
     else if (companyName.includes('nordeste')) themeColor = '#228B22';
    else if (companyName.includes('buquebus')) themeColor = '#0073e6';
    else if (companyName.includes('azul')) themeColor = '#00AEEF';


    return (
        <div 
            onClick={() => onSelect(itinerary)}
            className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-md border border-white/30 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-[1.03] flex flex-col cursor-pointer"
            style={{ borderLeft: `5px solid ${themeColor}` }}
        >
            <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 overflow-hidden pr-2">
                        <h3 className="text-md font-bold text-slate-800 leading-tight truncate">{itinerary.title}</h3>
                        {itinerary.subtitle && <p className="text-xs text-slate-500 truncate">{itinerary.subtitle}</p>}
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                        <p className="text-xl font-bold text-blue-700">
                           R$ {itinerary.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                    </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100/80">
                     <div className="flex items-center text-sm text-slate-700">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 mr-3">
                            {React.cloneElement(firstEvent.company.logo as React.ReactElement, { className: "h-5 w-auto" })}
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold">{firstEvent.startLocation} → {firstEvent.endLocation}</p>
                             <p className="text-xs text-slate-500">
                                {firstEvent.startDate}, {firstEvent.startTime}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;