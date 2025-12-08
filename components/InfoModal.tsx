
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { destinations as allDestinations } from '../destinations';
import type { Itinerary, Destination } from '../types';
import { CloseIcon, StarIcon } from './icons';
import { detailedRoutes } from '../detailedRoutes';

interface InfoModalProps {
    selectionId: number | null;
    onClose: () => void;
    onShowDetails: (id: number) => void;
    onSelectItinerary: (itinerary: Itinerary) => void;
}

const ItineraryEpisode: React.FC<{ itinerary: Itinerary, index: number, onSelect: () => void }> = ({ itinerary, index, onSelect }) => {
    const outbound = itinerary.events[0];
    const inbound = itinerary.events[1];
    
    // Fallback if name is missing
    const airlineName = outbound.company.name || "Voo";

    return (
        <div onClick={onSelect} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200 border-b border-gray-800 last:border-0 group">
            <span className="text-lg font-bold text-gray-500 w-6 flex-shrink-0">{index + 1}</span>
            <div className="w-28 h-16 bg-black/40 rounded overflow-hidden flex-shrink-0 relative border border-gray-700 group-hover:border-gray-500 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center">
                    {React.cloneElement(outbound.company.logo as React.ReactElement<{ className?: string }>, { className: "h-8 w-auto" })}
                 </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
                <p className="text-white font-bold text-sm leading-tight mb-1">{airlineName}</p>
                <div className="text-gray-400 text-xs leading-snug space-y-0.5">
                    <div className="flex items-center gap-1.5">
                        <span className="text-gray-500 font-bold text-[10px] uppercase tracking-wider w-8">Ida</span>
                        <span>{outbound.startTime} - {outbound.endTime}</span>
                    </div>
                    {inbound && inbound.type === 'flight' && (
                        <div className="flex items-center gap-1.5">
                             <span className="text-gray-500 font-bold text-[10px] uppercase tracking-wider w-8">Volta</span>
                             <span>{inbound.startTime} - {inbound.endTime}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-right pl-2">
                 <p className="text-white font-bold text-sm">R$ {itinerary.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</p>
            </div>
        </div>
    )
}

const DayEpisodeRow: React.FC<{ day: any, index: number }> = ({ day, index }) => {
    const mainActivity = day.activities.find((a: any) => a.type === 'Passeio') || day.activities[0];
    return (
         <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors duration-200 border-b border-gray-800 last:border-0">
            <span className="text-lg font-bold text-gray-400 w-6 mt-1">{index + 1}</span>
             <div className="w-28 h-16 bg-gray-800 rounded overflow-hidden flex-shrink-0 relative border border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                   {mainActivity && React.cloneElement(mainActivity.icon, { className: "h-6 w-6" })}
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">{day.title}</p>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2 leading-snug">
                    {day.activities.map((a:any) => a.description).join('. ')}
                </p>
            </div>
        </div>
    )
}

const InfoModal: React.FC<InfoModalProps> = ({ selectionId, onClose, onShowDetails, onSelectItinerary }) => {
    const { userData } = useAuth();
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        if (selectionId !== null) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; }
    }, [selectionId]);

    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    if (!selectionId) return null;

    const destination: Destination | undefined = allDestinations.find(d => d.id === selectionId);
    const destinationItineraries: Itinerary[] = userData?.itineraries.filter(it => {
        if (selectionId === 1) return it.id === 101 || it.id === 102;
        if (selectionId === 2) return it.id === 201;
        if (selectionId === 3) return it.id === 301;
        return false;
    }) || [];

    // Check if it's premium to show day episodes
    const isPremium = selectionId === 3;
    const premiumDays = isPremium && detailedRoutes[3] ? detailedRoutes[3].itinerary[0].days : [];

    if (!destination) return null;

    const title = destination.title.replace(/Opção \d: /g, '').replace(/\(Iguazú\)/g, '').replace('Rota Direta', '').trim();

    return (
        <div 
            className={`fixed inset-0 z-[60] flex items-end md:items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

            {/* Modal / Bottom Sheet */}
            <div className={`relative bg-[#181818] w-full md:max-w-3xl md:rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-full md:translate-y-10 md:scale-95'} rounded-t-xl h-[90vh] md:h-auto md:max-h-[85vh] flex flex-col`}>
                
                {/* Header Image */}
                <div className="relative flex-shrink-0 h-56 md:h-80">
                    <img src={destination.imageUrl} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent"></div>
                    
                    <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 p-1.5 rounded-full text-white hover:bg-black/80 md:p-2 z-10">
                        <CloseIcon className="h-6 w-6" />
                    </button>

                    <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                        <h2 className="text-2xl md:text-4xl font-black text-white drop-shadow-lg leading-tight mb-3">{title}</h2>
                        <div className="flex flex-row items-center space-x-2 md:space-x-4">
                            <button 
                                onClick={() => onShowDetails(selectionId)}
                                className="flex-1 md:flex-none flex items-center justify-center bg-white text-black px-4 py-2 rounded font-bold hover:bg-opacity-90 transition text-sm md:text-base"
                            >
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                Roteiro
                            </button>
                             <button className="flex flex-col items-center justify-center p-2 text-gray-300 hover:text-white">
                                <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                <span className="text-[10px] uppercase font-bold">Minha Lista</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-2 text-gray-300 hover:text-white">
                                 <StarIcon className="w-6 h-6 mb-0.5" />
                                 <span className="text-[10px] uppercase font-bold">Avaliar</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-8 overflow-y-auto flex-grow">
                     <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-4 md:space-y-0 mb-6">
                        <div className="flex-1 space-y-2">
                             <div className="flex items-center space-x-2 text-sm mb-2">
                                <span className="text-green-400 font-bold">98% Match</span>
                                <span className="text-gray-300">2026</span>
                                <span className="bg-gray-600/60 px-1 rounded text-xs text-white">HD</span>
                                <span className="text-gray-300 text-xs border border-gray-600 px-1">AD</span>
                            </div>
                            <div className="text-white text-sm md:text-base leading-relaxed whitespace-pre-line">{destination.description}</div>
                        </div>
                        <div className="text-xs text-gray-400 md:w-1/3 space-y-1">
                            <p><span className="text-gray-500 font-semibold">Locais: </span>{destination.places.join(', ')}</p>
                             <p><span className="text-gray-500 font-semibold">Gênero: </span>Serviços Demonstrativos</p>
                             <p><span className="text-gray-500 font-semibold">Tags: </span>Urbano, Cultural</p>
                        </div>
                    </div>

                    {/* Episodes / Options List */}
                    <div>
                        <div className="flex items-center justify-between mb-3 border-t border-gray-800 pt-4">
                             <h3 className="text-lg font-bold text-white">Episódios</h3>
                             <span className="text-sm text-gray-500 font-semibold uppercase">{isPremium ? 'Temporada 1' : 'Opções'}</span>
                        </div>
                        
                        <div className="space-y-1 pb-10 md:pb-0">
                            {isPremium ? (
                                premiumDays.map((day, index) => (
                                    <DayEpisodeRow key={day.day} day={day} index={index} />
                                ))
                            ) : destinationItineraries.length > 0 ? (
                                destinationItineraries.map((it, index) => (
                                    <ItineraryEpisode key={it.id} itinerary={it} index={index} onSelect={() => onSelectItinerary(it)} />
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm italic py-4 text-center">Nenhuma opção disponível no momento.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
