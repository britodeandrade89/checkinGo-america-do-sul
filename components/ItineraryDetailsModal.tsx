import React, { useState, useEffect } from 'react';
import type { Itinerary, TripEvent, BookingOption, PriceHistoryItem } from '../types';
import { 
    CloseIcon, 
    BaggageIcon, 
    BackpackIcon, 
    SuitcaseIcon,
    BellIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    InfoIcon
} from './icons';

const EventRow: React.FC<{ event: TripEvent }> = ({ event }) => (
    <div className="bg-white/80 p-4 rounded-xl border border-slate-200">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100">
                {React.cloneElement(event.company.logo as React.ReactElement, { className: "h-8 w-auto" })}
            </div>
            <div className="flex-1 grid grid-cols-3 items-center gap-4">
                <div className="font-semibold text-slate-700">
                    <p>{event.startTime} - {event.endTime} <span className="text-red-500 text-xs">{event.endDate !== event.startDate ? '+1' : ''}</span></p>
                    <p className="text-sm text-slate-500 font-normal">{event.company.name}</p>
                </div>
                <div className="text-sm text-slate-600 text-center">
                    <p>{event.duration}</p>
                     <p className="text-xs text-slate-400">{event.startLocation}-{event.endLocation}</p>
                </div>
                 <div className="text-sm text-slate-600 text-right">
                    <p>{event.details}</p>
                     <p className="text-xs text-slate-400">86 kg de CO2e</p>
                </div>
            </div>
        </div>
        {event.operator && <p className="text-xs text-slate-400 mt-2 pl-16">{event.operator}</p>}
    </div>
);

const BaggageItem: React.FC<{ status: 'Inclusa' | 'Taxa Adicional' | 'Não disponível'; details: string; icon: React.ReactNode }> = ({ status, details, icon }) => (
    <div className="flex items-start space-x-3 text-sm">
        <div className="text-slate-500 mt-0.5">{icon}</div>
        <div>
            <p className="text-slate-800">{details}</p>
            <p className={`font-semibold ${status === 'Inclusa' ? 'text-green-600' : 'text-slate-600'}`}>{status}</p>
        </div>
    </div>
);

const BookingRow: React.FC<{ option: BookingOption, latestPrice?: number }> = ({ option, latestPrice }) => (
    <div className="flex items-center justify-between p-4 bg-white/80 rounded-xl border border-slate-200 hover:bg-white/90 transition-colors">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                 {option.logo}
            </div>
            <div>
                 <p className="font-semibold text-slate-700">{option.provider}</p>
                 {option.tag && <p className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full inline-block mt-1">{option.tag}</p>}
            </div>
        </div>
        <div className="flex items-center space-x-6">
            <p className="text-lg font-bold text-slate-800">R$ {(latestPrice || option.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <a href={option.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-sm">
                Continuar
            </a>
        </div>
    </div>
);

const PriceHistoryChart: React.FC<{ history: PriceHistoryItem[] }> = ({ history }) => {
    if (history.length < 2) return <div className="text-center text-sm text-slate-500 py-8">Dados insuficientes para exibir o gráfico.</div>;

    const prices = history.map(h => h.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;

    const width = 300;
    const height = 100;

    const points = history.map((item, index) => {
        const x = (index / (history.length - 1)) * width;
        const y = height - ((item.price - minPrice) / (priceRange || 1)) * height;
        return { x, y, price: item.price };
    });

    const pathData = points.map((p, i) => (i === 0 ? 'M' : 'L') + `${p.x} ${p.y}`).join(' ');

    return (
        <svg viewBox={`-10 -10 ${width + 20} ${height + 20}`} className="w-full h-auto">
            {/* Gradient under the line */}
            <defs>
                <linearGradient id="price-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={`${pathData} L ${width} ${height} L 0 ${height} Z`} fill="url(#price-gradient)" />

            {/* Price line */}
            <path d={pathData} stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Points on the line */}
            {points.map((p, i) => (
                <g key={i}>
                    <circle cx={p.x} cy={p.y} r="3" fill="#0ea5e9" stroke="white" strokeWidth="1.5" />
                    <title>{`R$ ${p.price.toFixed(2)} em ${history[i].timestamp.toLocaleDateString()}`}</title>
                </g>
            ))}
        </svg>
    );
};

const PriceHistorySection: React.FC<{itinerary: Itinerary, onToggleMonitoring: () => void}> = ({ itinerary, onToggleMonitoring }) => {
    const isMonitoringEnabled = itinerary.monitoring?.enabled ?? false;
    const history = itinerary.priceHistory ?? [];

    if (history.length === 0) {
        return (
             <div className="bg-white/80 p-4 rounded-xl border border-slate-200 text-center">
                 <p className="text-slate-600 mb-3">Ative o monitoramento para acompanhar a variação de preço deste voo.</p>
                 <button onClick={onToggleMonitoring} className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-200 transition">
                     Ativar Monitoramento
                 </button>
             </div>
        )
    }

    const latestPrice = history[history.length - 1].price;
    const lowestPrice = Math.min(...history.map(h => h.price));
    const priceChange = latestPrice - history[history.length - 2]?.price;
    const isPriceUp = priceChange > 0;
    const isPriceDown = priceChange < 0;

    return (
        <section>
            <h3 className="text-lg font-semibold text-slate-700 mb-3 flex items-center">
                <BellIcon className="h-5 w-5 mr-2" /> Histórico de Preços
            </h3>
            <div className="bg-white/80 p-4 rounded-xl border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-slate-100 rounded-lg">
                        <p className="text-xs text-slate-500">Preço Atual</p>
                        <p className="text-xl font-bold text-slate-800">R$ {latestPrice.toLocaleString('pt-BR')}</p>
                         {priceChange !== 0 && !isNaN(priceChange) && (
                            <span className={`text-xs font-semibold flex items-center justify-center ${isPriceUp ? 'text-red-500' : 'text-green-600'}`}>
                                {isPriceUp ? <TrendingUpIcon className="h-4 w-4 mr-1"/> : <TrendingDownIcon className="h-4 w-4 mr-1"/>}
                                {isPriceUp ? '+' : ''}R$ {priceChange.toFixed(2)}
                            </span>
                        )}
                    </div>
                     <div className="p-3 bg-slate-100 rounded-lg">
                        <p className="text-xs text-slate-500">Menor Valor Visto</p>
                        <p className="text-xl font-bold text-green-600">R$ {lowestPrice.toLocaleString('pt-BR')}</p>
                    </div>
                     <div className="p-3 bg-slate-100 rounded-lg">
                        <p className="text-xs text-slate-500">Última Verificação</p>
                        <p className="text-lg font-bold text-slate-800">{history[history.length - 1].timestamp.toLocaleDateString('pt-BR')}</p>
                         <p className="text-xs text-slate-500">{history[history.length - 1].timestamp.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                </div>

                <PriceHistoryChart history={history} />

                <div className="flex justify-between items-center pt-4 border-t border-slate-200/80">
                    <div className="flex items-center text-xs text-slate-500">
                        <InfoIcon className="h-4 w-4 mr-2" />
                        <p>Os preços são verificados periodicamente. Podem haver divergências com o site da companhia.</p>
                    </div>
                    <button 
                        onClick={onToggleMonitoring} 
                        className={`font-semibold px-4 py-2 rounded-lg text-sm transition-colors ${
                            isMonitoringEnabled 
                                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                    >
                        {isMonitoringEnabled ? 'Parar de Monitorar' : 'Ativar Monitoramento'}
                    </button>
                </div>
            </div>
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
        } else {
            setIsVisible(false);
        }
    }, [itinerary]);

    const handleClose = () => {
        setIsVisible(false);
        // Delay the actual closing to allow for the exit animation
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

    const latestPrice = localItinerary?.monitoring?.enabled && localItinerary.priceHistory && localItinerary.priceHistory.length > 0
        ? localItinerary.priceHistory[localItinerary.priceHistory.length - 1].price
        : localItinerary?.totalPrice;

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                onClick={handleClose} 
            />
            <div 
                className={`fixed top-0 right-0 h-full w-full max-w-3xl bg-gradient-to-br from-slate-50 to-rose-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {localItinerary && (
                    <>
                        <header className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex-shrink-0 sticky top-0">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">{localItinerary.title}</h2>
                                <p className="text-sm text-slate-500">{localItinerary.subtitle}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-right">
                                     <p className="text-xs text-slate-500">Preço atual</p>
                                     <p className="text-2xl font-extrabold text-blue-700">R$ {(latestPrice ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                                </div>
                                <button onClick={handleClose} className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
                                    <CloseIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </header>
                        
                        <main className="flex-grow overflow-y-auto p-6 space-y-6">
                            <section>
                                <h3 className="text-lg font-semibold text-slate-700 mb-3">Voo selecionado</h3>
                                <div className="space-y-4">
                                    {localItinerary.events.map((event, index) => <EventRow key={index} event={event} />)}
                                </div>
                            </section>

                            {(localItinerary.monitoring || localItinerary.priceHistory) && <PriceHistorySection itinerary={localItinerary} onToggleMonitoring={handleToggleMonitoring} />}

                            {localItinerary.baggage && (
                                <section>
                                    <div className="bg-white/80 p-4 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                                       <BaggageItem status={localItinerary.baggage.personal.status} details="Item pessoal" icon={<BackpackIcon className="h-5 w-5"/>} />
                                       <BaggageItem status={localItinerary.baggage.carryOn.status} details={localItinerary.baggage.carryOn.details} icon={<BaggageIcon className="h-5 w-5"/>} />
                                       <BaggageItem status={localItinerary.baggage.checked.status} details={localItinerary.baggage.checked.details} icon={<SuitcaseIcon className="h-5 w-5"/>} />
                                    </div>
                                </section>
                            )}
                            
                            {localItinerary.bookingOptions && localItinerary.bookingOptions.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-semibold text-slate-700 mb-3">Opções de reserva</h3>
                                    <div className="space-y-3">
                                        {localItinerary.bookingOptions.map((opt, index) => <BookingRow key={index} option={opt} latestPrice={latestPrice} />)}
                                    </div>
                                </section>
                            )}
                        </main>
                    </>
                )}
            </div>
        </>
    );
};

export default ItineraryDetailsModal;
