
import React, { useState, useEffect } from 'react';
import type { Itinerary, TripEvent, BookingOption, PriceHistoryItem } from '../types';
import { destinations as allDestinations } from '../destinations';
import { 
    CloseIcon, 
    BaggageIcon, 
    BackpackIcon, 
    SuitcaseIcon, 
    BellIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    InfoIcon,
    CheckIcon,
    PlaneTakeoffIcon
} from './icons';

// Helper to find image based on arrival code (simple logic for demo)
const getDestinationImage = (code: string) => {
    // Tenta encontrar o destino pelo código do aeroporto ou cidade nas props
    const dest = allDestinations.find(d => 
        d.title.includes(code) || 
        (code === 'CWB' && d.id === 1) || 
        (code === 'CWB' && d.id === 2) ||
        (code === 'IGR' && d.title.includes('Iguazú'))
    );
    return dest?.imageUrl || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop';
};

const EventRow: React.FC<{ event: TripEvent, isLast: boolean }> = ({ event, isLast }) => (
    <div className="relative pl-6 pb-8 last:pb-0">
        {/* Timeline Line */}
        {!isLast && <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gray-700"></div>}
        
        {/* Timeline Dot */}
        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#141414] border-2 border-gray-500 flex items-center justify-center z-10">
             {React.cloneElement(event.company.logo as React.ReactElement<{ className?: string }>, { className: "h-3 w-auto" })}
        </div>

        <div className="bg-[#2f2f2f] p-4 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{event.type === 'flight' ? 'Voo' : 'Evento'}</span>
                    <h4 className="text-white font-bold text-lg">{event.company.name}</h4>
                </div>
                <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">{event.duration}</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
                <div className="text-center">
                    <p className="text-xl font-bold text-white">{event.startTime}</p>
                    <p className="text-gray-400 font-mono">{event.startLocation}</p>
                </div>
                
                <div className="flex-1 px-4 flex flex-col items-center">
                    <div className="w-full h-px bg-gray-600 relative">
                        <div className="absolute right-0 -top-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase">{event.details.split('·')[0]}</p>
                </div>

                <div className="text-center">
                    <p className="text-xl font-bold text-white">{event.endTime} <span className="text-red-500 text-xs align-top">{event.endDate !== event.startDate ? '+1' : ''}</span></p>
                    <p className="text-gray-400 font-mono">{event.endLocation}</p>
                </div>
            </div>
            {event.operator && <p className="text-xs text-gray-500 mt-3 pt-2 border-t border-gray-700">Operado por {event.operator}</p>}
        </div>
    </div>
);

const BaggageItem: React.FC<{ status: 'Inclusa' | 'Taxa Adicional' | 'Não disponível'; details: string; icon: React.ReactNode }> = ({ status, details, icon }) => (
    <div className="bg-[#2f2f2f] p-3 rounded-lg border border-gray-700 flex flex-col items-center text-center space-y-2">
        <div className={`p-2 rounded-full ${status === 'Inclusa' ? 'bg-green-900/30 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
            {icon}
        </div>
        <div>
            <p className="text-gray-300 text-sm font-medium">{details}</p>
            <p className={`text-xs font-bold ${status === 'Inclusa' ? 'text-green-500' : 'text-gray-500'}`}>{status}</p>
        </div>
    </div>
);

const BookingRow: React.FC<{ option: BookingOption, latestPrice?: number }> = ({ option, latestPrice }) => (
    <div className="flex items-center justify-between p-4 bg-[#2f2f2f] rounded-lg border border-gray-700 hover:bg-[#383838] hover:border-gray-500 transition-all cursor-pointer group">
        <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center p-1">
                 {option.logo}
            </div>
            <div>
                 <p className="font-bold text-white group-hover:text-cyan-400 transition-colors">{option.provider}</p>
                 {option.tag && <span className="text-[10px] font-bold text-black bg-cyan-400 px-1.5 py-0.5 rounded">{option.tag}</span>}
            </div>
        </div>
        <div className="flex flex-col items-end">
             <p className="text-lg font-bold text-white">R$ {(latestPrice || option.price).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</p>
             <a href={option.url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline flex items-center">
                Reservar agora <span className="ml-1">→</span>
             </a>
        </div>
    </div>
);

const PriceHistoryChart: React.FC<{ history: PriceHistoryItem[] }> = ({ history }) => {
    if (history.length < 2) return <div className="text-center text-xs text-gray-600 py-4">Gráfico disponível após monitoramento.</div>;

    const prices = history.map(h => h.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;

    const width = 300;
    const height = 80;

    const points = history.map((item, index) => {
        const x = (index / (history.length - 1)) * width;
        const y = height - ((item.price - minPrice) / (priceRange || 1)) * height;
        return { x, y, price: item.price };
    });

    const pathData = points.map((p, i) => (i === 0 ? 'M' : 'L') + `${p.x} ${p.y}`).join(' ');

    return (
        <svg viewBox={`-10 -10 ${width + 20} ${height + 20}`} className="w-full h-auto mt-4">
            <defs>
                <linearGradient id="price-gradient-dark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={`${pathData} L ${width} ${height} L 0 ${height} Z`} fill="url(#price-gradient-dark)" />
            <path d={pathData} stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="3" fill="#141414" stroke="#22d3ee" strokeWidth="2" />
            ))}
        </svg>
    );
};

const PriceHistorySection: React.FC<{itinerary: Itinerary, onToggleMonitoring: () => void}> = ({ itinerary, onToggleMonitoring }) => {
    const isMonitoringEnabled = itinerary.monitoring?.enabled ?? false;
    const history = itinerary.priceHistory ?? [];

    if (history.length === 0) {
        return (
             <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 flex justify-between items-center">
                 <div className="flex items-center text-gray-400 text-sm">
                    <BellIcon className="h-5 w-5 mr-3 text-gray-500" />
                    <span>Seja avisado se o preço baixar.</span>
                 </div>
                 <button onClick={onToggleMonitoring} className="bg-white text-black font-bold px-4 py-2 rounded text-xs hover:bg-gray-200 transition">
                     Ativar Alerta
                 </button>
             </div>
        )
    }

    const latestPrice = history[history.length - 1].price;
    const lowestPrice = Math.min(...history.map(h => h.price));
    const priceChange = latestPrice - (history[history.length - 2]?.price || latestPrice);
    const isPriceUp = priceChange > 0;

    return (
        <section className="bg-[#2f2f2f] p-4 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-sm font-bold text-gray-300 flex items-center">
                        Histórico de Preço
                    </h3>
                    <p className="text-xs text-gray-500">Última atualização: {history[history.length - 1].timestamp.toLocaleTimeString()}</p>
                </div>
                {priceChange !== 0 && (
                    <div className={`px-2 py-1 rounded text-xs font-bold flex items-center ${isPriceUp ? 'bg-red-900/30 text-red-400' : 'bg-green-900/30 text-green-400'}`}>
                        {isPriceUp ? <TrendingUpIcon className="h-3 w-3 mr-1"/> : <TrendingDownIcon className="h-3 w-3 mr-1"/>}
                        R$ {Math.abs(priceChange).toFixed(0)}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-2">
                 <div className="bg-[#1f1f1f] p-2 rounded">
                    <p className="text-[10px] text-gray-500 uppercase">Menor Valor</p>
                    <p className="text-lg font-bold text-green-400">R$ {lowestPrice.toLocaleString('pt-BR')}</p>
                </div>
                <div className="bg-[#1f1f1f] p-2 rounded">
                    <p className="text-[10px] text-gray-500 uppercase">Valor Atual</p>
                    <p className="text-lg font-bold text-white">R$ {latestPrice.toLocaleString('pt-BR')}</p>
                </div>
            </div>

            <PriceHistoryChart history={history} />

            <button 
                onClick={onToggleMonitoring} 
                className={`w-full mt-4 py-2 rounded font-bold text-xs transition-colors border ${
                    isMonitoringEnabled 
                        ? 'bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-white' 
                        : 'bg-white text-black border-transparent hover:bg-gray-200'
                }`}
            >
                {isMonitoringEnabled ? 'Desativar Monitoramento' : 'Reativar Monitoramento'}
            </button>
        </section>
    )
}

const ItineraryDetailsModal: React.FC<{ itinerary: Itinerary | null; onClose: () => void; }> = ({ itinerary, onClose }) => {
    const [localItinerary, setLocalItinerary] = useState<Itinerary | null>(itinerary);
    const [isVisible, setIsVisible] = useState(!!itinerary);

    useEffect(() => {
        if (itinerary) {
            setLocalItinerary(itinerary);
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; }
    }, [itinerary]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };
    
    const handleToggleMonitoring = () => {
        setLocalItinerary(prev => {
            if (!prev) return null;
            const isEnabled = !(prev.monitoring?.enabled ?? false);
            let newHistory = prev.priceHistory ?? [];
            if (isEnabled && newHistory.length === 0) {
                newHistory = [{ timestamp: new Date(), price: prev.totalPrice }];
            }

            return {
                ...prev,
                monitoring: { enabled: isEnabled },
                priceHistory: newHistory
            };
        });
    };

    if (!localItinerary) return null;

    const latestPrice = localItinerary.monitoring?.enabled && localItinerary.priceHistory && localItinerary.priceHistory.length > 0
        ? localItinerary.priceHistory[localItinerary.priceHistory.length - 1].price
        : localItinerary.totalPrice;

    // Get an image relevant to the destination
    const arrivalLocation = localItinerary.events.find(e => e.type === 'flight')?.endLocation || 'CWB';
    const heroImage = getDestinationImage(arrivalLocation);

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/70 z-[80] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                onClick={handleClose} 
            />
            
            {/* Sliding Panel */}
            <div 
                className={`fixed top-0 right-0 h-full w-full max-w-xl bg-[#141414] text-white shadow-2xl z-[90] transform transition-transform duration-300 ease-out flex flex-col ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header (Hero) */}
                <div className="relative h-64 flex-shrink-0">
                    <img src={heroImage} className="w-full h-full object-cover opacity-80" alt="Destination" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent h-24"></div>
                    
                    <button onClick={handleClose} className="absolute top-4 left-4 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors z-20">
                        <CloseIcon className="h-6 w-6 text-white" />
                    </button>

                    <div className="absolute bottom-0 left-0 w-full p-6">
                        <div className="flex items-center space-x-2 mb-2">
                             <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Destaque</span>
                             {localItinerary.subtitle && <span className="text-xs text-gray-300 font-semibold">{localItinerary.subtitle.split('·')[0]}</span>}
                        </div>
                        <h2 className="text-3xl font-black text-white leading-none mb-2">{localItinerary.title}</h2>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-2xl font-bold text-green-400">R$ {latestPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</span>
                            <span className="text-xs text-gray-400 line-through">R$ {(latestPrice * 1.2).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</span>
                        </div>
                    </div>
                </div>
                
                {/* Scrollable Content */}
                <main className="flex-grow overflow-y-auto p-6 space-y-8 scrollbar-hide">
                    
                    {/* Flight/Event Timeline */}
                    <section>
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Itinerário</h3>
                        <div className="pl-2">
                            {localItinerary.events.map((event, index) => (
                                <EventRow key={index} event={event} isLast={index === localItinerary.events.length - 1} />
                            ))}
                        </div>
                    </section>

                    {/* Booking Options */}
                    {localItinerary.bookingOptions && localItinerary.bookingOptions.length > 0 && (
                        <section>
                            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Onde Reservar</h3>
                            <div className="space-y-3">
                                {localItinerary.bookingOptions.map((opt, index) => <BookingRow key={index} option={opt} latestPrice={latestPrice} />)}
                            </div>
                        </section>
                    )}

                    {/* Monitoring */}
                    {(localItinerary.monitoring || localItinerary.priceHistory) && (
                         <PriceHistorySection itinerary={localItinerary} onToggleMonitoring={handleToggleMonitoring} />
                    )}

                    {/* Baggage Info */}
                    {localItinerary.baggage && (
                        <section>
                            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Franquia de Bagagem</h3>
                            <div className="grid grid-cols-3 gap-3">
                                <BaggageItem status={localItinerary.baggage.personal.status} details="Item pessoal" icon={<BackpackIcon className="h-5 w-5"/>} />
                                <BaggageItem status={localItinerary.baggage.carryOn.status} details={localItinerary.baggage.carryOn.details} icon={<BaggageIcon className="h-5 w-5"/>} />
                                <BaggageItem status={localItinerary.baggage.checked.status} details={localItinerary.baggage.checked.details} icon={<SuitcaseIcon className="h-5 w-5"/>} />
                            </div>
                        </section>
                    )}
                    
                    <div className="pb-10 pt-4 text-center text-xs text-gray-600">
                        <p>ID do Itinerário: {localItinerary.id}</p>
                        <p>Preços sujeitos a alteração e disponibilidade.</p>
                    </div>
                </main>
                
                {/* Bottom Action Bar (Mobile Only - Optional sticky CTA) */}
                <div className="md:hidden p-4 bg-[#141414] border-t border-gray-800 sticky bottom-0 z-20">
                    <a href={localItinerary.sourceUrl || "#"} className="flex items-center justify-center w-full bg-white text-black font-bold py-3 rounded text-lg hover:bg-gray-200 transition">
                        <PlaneTakeoffIcon className="h-5 w-5 mr-2" />
                        Ver no Site
                    </a>
                </div>
            </div>
        </>
    );
};

export default ItineraryDetailsModal;
