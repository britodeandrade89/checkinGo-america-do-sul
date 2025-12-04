
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { destinations as allDestinations } from '../destinations';
import type { Itinerary, Destination } from '../types';
import { CloseIcon, StarIcon } from './icons';

interface InfoModalProps {
    selectionId: number | null;
    onClose: () => void;
    onShowDetails: (id: number) => void;
    onSelectItinerary: (itinerary: Itinerary) => void;
}

const ItineraryEpisode: React.FC<{ itinerary: Itinerary, index: number, onSelect: () => void }> = ({ itinerary, index, onSelect }) => {
    const firstEvent = itinerary.events[0];
    return (
        <div onClick={onSelect} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700/60 cursor-pointer transition-colors duration-200">
            <span className="text-xl font-bold text-gray-400">{index + 1}</span>
            <div className="w-24 h-14 bg-gray-700 rounded-md flex-shrink-0 flex items-center justify-center">
                 {React.cloneElement(firstEvent.company.logo as React.ReactElement<{ className?: string }>, { className: "h-8 w-auto" })}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">{itinerary.title}</p>
                <p className="text-gray-400 text-xs">{firstEvent.startLocation} → {firstEvent.endLocation}</p>
            </div>
            <div className="text-right">
                 <p className="text-white font-bold text-sm">R$ {itinerary.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</p>
                 <span className="text-gray-400 text-xs">{firstEvent.duration}</span>
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
        } else {
            setIsVisible(false);
        }
    }, [selectionId]);

    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    if (!selectionId) return null;

    const destination: Destination | undefined = allDestinations.find(d => d.id === selectionId);
    const destinationItineraries: Itinerary[] = userData?.itineraries.filter(it => {
        // Destination 1 (Assessoria Essencial) contains both Azul (101) and LATAM (102)
        if (selectionId === 1) return it.id === 101 || it.id === 102;
        // Destination 2 is empty for now
        if (selectionId === 2) return false;
        return false;
    }) || [];

    if (!destination) return null;

    const title = destination.title.replace(/Opção \d: /g, '').replace(/\(Iguazú\)/g, '').replace('Rota Direta', '').trim();

    return (
        <div 
            className={`fixed inset-0 bg-black/70 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleClose}
        >
            <div className={`bg-[#181818] w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <div className="relative">
                    <img src={destination.imageUrl} alt={title} className="w-full h-80 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-transparent"></div>
                    <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/80">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h2 className="text-4xl font-black text-white drop-shadow-lg">{title}</h2>
                        <div className="flex items-center space-x-4 mt-4">
                            <button 
                                onClick={() => onShowDetails(selectionId)}
                                className="flex items-center bg-white text-black px-6 py-2 rounded font-bold hover:bg-opacity-80 transition"
                            >
                                <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                Ver Roteiro Detalhado
                            </button>
                             <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white hover:bg-white/20 transition text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </button>
                            <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white hover:bg-white/20 transition text-white">
                                 <StarIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="p-8 max-h-80 overflow-y-auto">
                     <div className="flex items-start space-x-8">
                        <div className="flex-1 space-y-2">
                             <div className="flex items-center space-x-2 text-sm">
                                <span className="text-green-400 font-semibold">98% de Match</span>
                                <span className="text-gray-300">2026</span>
                                <span className="border border-gray-500 px-1 rounded text-xs text-gray-300">HD</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{destination.description}</p>
                        </div>
                        <div className="text-sm text-gray-400 w-1/3">
                            <p><span className="text-gray-500">Locais: </span>{destination.places.join(', ')}</p>
                             <p><span className="text-gray-500">Gênero: </span>Serviços Demonstrativos</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-bold text-white mb-2">Opções Disponíveis</h3>
                        <div className="space-y-2">
                            {destinationItineraries.length > 0 ? (
                                destinationItineraries.map((it, index) => (
                                    <ItineraryEpisode key={it.id} itinerary={it} index={index} onSelect={() => onSelectItinerary(it)} />
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm italic">Nenhuma opção disponível no momento.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
