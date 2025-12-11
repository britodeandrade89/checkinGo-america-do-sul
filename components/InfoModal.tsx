
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { destinations as allDestinations } from '../destinations';
import type { Itinerary, Destination } from '../types';
import { CloseIcon, StarIcon, PlayIcon, InfoIcon } from './icons';
import { detailedRoutes } from '../detailedRoutes';

interface InfoModalProps {
    selectionId: number | null;
    onClose: () => void;
    onShowDetails: (id: number) => void;
    onSelectItinerary: (itinerary: Itinerary) => void;
}

const EpisodeRow: React.FC<{ 
    index: number; 
    title: string; 
    duration: string; 
    description: string; 
    imageUrl?: string;
    logo?: React.ReactNode;
    onClick: () => void 
}> = ({ index, title, duration, description, imageUrl, logo, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center gap-4 py-4 border-b border-gray-800 cursor-pointer hover:bg-[#1f1f1f] px-2 rounded-md transition-colors group">
            <span className="text-gray-400 font-medium text-lg w-4">{index + 1}</span>
            <div className="relative w-32 h-20 flex-shrink-0 bg-[#222] rounded overflow-hidden flex items-center justify-center">
                {logo ? (
                     <div className="p-4 w-full h-full flex items-center justify-center">
                         {/* Renderiza o logo se disponível */}
                         {React.isValidElement(logo) 
                            ? React.cloneElement(logo as React.ReactElement, { className: "w-full h-full object-contain" } as any)
                            : logo
                         }
                     </div>
                ) : (
                    <img src={imageUrl || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=200&fit=crop"} alt="Thumb" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                )}
                
                {/* Overlay de Play (apenas decorativo se for imagem, ou sobreposto sutilmente se for logo) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-1 border border-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon className="h-4 w-4 text-white fill-current" />
                    </div>
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-white font-bold text-sm truncate">{title}</h4>
                    <span className="text-gray-400 text-xs ml-2">{duration}</span>
                </div>
                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

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

    if (!selectionId) return null;

    const destination = allDestinations.find(d => d.id === selectionId);
    if (!destination) return null;

    const destinationItineraries = userData?.itineraries.filter(it => {
        if (selectionId === 1) return it.id === 101 || it.id === 102;
        if (selectionId === 2) return it.id === 201;
        if (selectionId === 3) return it.id === 301;
        return false;
    }) || [];

    const isPremium = selectionId === 3;
    const detailedDays = isPremium && detailedRoutes[3] ? detailedRoutes[3].itinerary[0].days : [];

    const title = destination.title.split(':')[0]; // Short title

    return (
        <div className={`fixed inset-0 z-[60] flex items-end md:items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

            <div className={`relative bg-[#181818] w-full md:max-w-4xl md:rounded-lg shadow-2xl transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full md:translate-y-10'} h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col overflow-hidden`}>
                
                {/* Header */}
                <div className="relative h-64 md:h-96 flex-shrink-0">
                    <img src={destination.imageUrl} alt={title} className="w-full h-full object-cover" />
                    {/* Dark gradients to ensure text legibility on bright backgrounds */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent h-32"></div>

                    <button onClick={onClose} className="absolute top-4 right-4 bg-[#181818]/80 backdrop-blur-sm rounded-full p-2 text-white z-20 hover:bg-[#333] transition">
                        <CloseIcon className="h-6 w-6" />
                    </button>

                    <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full z-10">
                        {/* Title as very bold text to mimic logo */}
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-xl font-sans" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.8)' }}>{title}</h2>
                        
                        <div className="flex items-center space-x-2 text-sm md:text-base font-bold mb-6 drop-shadow-md">
                            <span className="text-[#46d369]">98% relevante</span>
                            <span className="text-gray-300">2026</span>
                            <span className="bg-[#333]/80 border border-gray-500 px-1.5 text-xs text-white rounded-sm">16+</span>
                            <span className="text-white">8 Episódios</span>
                        </div>

                        <div className="flex space-x-3">
                            <button className="flex-1 md:flex-none bg-white text-black px-8 py-2.5 rounded font-bold flex items-center justify-center hover:bg-gray-200 transition text-lg">
                                <PlayIcon className="h-7 w-7 mr-2 fill-current" />
                                Assistir
                            </button>
                             <button className="flex-1 md:flex-none bg-[#333]/90 text-white border border-gray-500/50 px-8 py-2.5 rounded font-bold flex items-center justify-center hover:bg-[#444] transition text-lg backdrop-blur-sm">
                                <InfoIcon className="h-7 w-7 mr-2" />
                                Mais Informações
                            </button>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide bg-[#181818]">
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <div className="flex-1">
                            <p className="text-white text-sm md:text-base leading-relaxed mb-4 whitespace-pre-line font-medium text-gray-300">{destination.description}</p>
                        </div>
                        <div className="w-full md:w-1/3 text-xs text-gray-400 space-y-2">
                             <p><span className="text-gray-500">Elenco:</span> André Brito, Marcelly Bispo</p>
                             <p><span className="text-gray-500">Gêneros:</span> Viagem, Lifestyle, Aventura</p>
                             <p><span className="text-gray-500">Cenas e momentos:</span> Empolgantes, Inspiradores</p>
                        </div>
                    </div>

                    {/* Episodes List */}
                    <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2">
                         <h3 className="text-lg font-bold text-white">Episódios</h3>
                         <span className="text-sm font-bold text-gray-400">Roteiro Completo</span>
                    </div>

                    <div className="pb-12">
                        {isPremium && detailedDays.length > 0 ? (
                            detailedDays.map((day, idx) => (
                                <EpisodeRow 
                                    key={day.day}
                                    index={idx}
                                    title={`Episódio ${day.day}: ${day.title}`}
                                    duration="Dia Inteiro"
                                    description={day.activities.map((a:any) => a.description).join('. ')}
                                    imageUrl={destination.imageUrl} 
                                    onClick={() => {}} 
                                />
                            ))
                        ) : destinationItineraries.length > 0 ? (
                            destinationItineraries.map((it, idx) => {
                                const flight = it.events[0];
                                return (
                                    <EpisodeRow 
                                        key={it.id}
                                        index={idx}
                                        title={it.title}
                                        duration={flight.duration}
                                        description={`Voo ${flight.company.name} de ${flight.startLocation} para ${flight.endLocation}. ${it.subtitle || ''}`}
                                        logo={flight.company.logo} // Passando o logo da empresa aérea
                                        onClick={() => onSelectItinerary(it)}
                                    />
                                );
                            })
                        ) : (
                             <p className="text-gray-500 py-4">Nenhum episódio disponível.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
