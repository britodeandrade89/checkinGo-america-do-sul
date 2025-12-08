
import React, { useState, useEffect, useRef } from 'react';
import type { Itinerary, Destination } from '../types';
import Destinations from './Destinations';
import AiAssistant from './AiAssistant';
import MyTrips from './MyTrips';
import DetailedItineraryView from './DetailedItineraryView';
import InfoModal from './InfoModal';
import { 
    DownloadIcon, LogoutIcon, BellIcon, SearchIcon, SpinningEarthIcon,
    LatamLogoIcon, AzulLogoIcon, FlybondiLogoIcon, JetSmartLogoIcon, SkyLogoIcon,
    BoaLogoIcon, BookingLogoIcon, AirbnbLogoIcon, DecolarLogoIcon, MaxMilhasLogoIcon,
    NordesteLogoIcon, NsaLogoIcon, ClickBusLogoIcon, CCRBarcasLogoIcon, PlaneTakeoffIcon,
    ChevronLeftIcon, ChevronRightIcon, WhatsAppIcon, HomeIcon, BackpackIcon, SparklesIcon,
    InfoIcon, StarIcon
} from './icons';
import { useAuth } from '../contexts/AuthContext';
import ImageUploader from './ImageUploader';
import CarTripCard from './CarTripCard';
import { destinations as allDestinations } from '../destinations'; 
import { getAgentClientsData } from '../services/userService';

interface DashboardProps {
  installPromptEvent: BeforeInstallPromptEvent | null;
  onInstallSuccess: () => void;
  onSelectItinerary: (itinerary: Itinerary) => void;
}

const AgentDashboard: React.FC = () => {
    const { logout } = useAuth();
    const clientsData = getAgentClientsData();

    return (
        <div className="pt-24 px-4 md:px-12 pb-12 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-1">Painel do Agente</h2>
                    <p className="text-gray-400">Monitoramento de clientes e favoritos.</p>
                </div>
                <button 
                    onClick={logout}
                    className="flex items-center bg-[#E50914] hover:bg-[#b81d24] text-white px-6 py-2 rounded font-bold transition-colors shadow-lg text-sm uppercase tracking-wider"
                >
                    <LogoutIcon className="h-5 w-5 mr-2" />
                    Sair do Painel
                </button>
            </div>

            <div className="space-y-8">
                {clientsData.map((client) => (
                    <div key={client.userId} className="bg-[#1f1f1f] rounded-lg p-6 border border-gray-700">
                        <div className="flex items-center space-x-4 mb-6">
                            <img src={client.userAvatar} alt={client.userName} className="w-16 h-16 rounded-full border-2 border-gray-600 object-cover" />
                            <div>
                                <h3 className="text-xl font-bold text-white">Perfil: {client.userName}</h3>
                                <p className="text-sm text-gray-400">ID Cliente: #{client.userId}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                                    <StarIcon className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" />
                                    Destinos Favoritos
                                </h4>
                                {client.favorites.length > 0 ? (
                                    <div className="space-y-3">
                                        {client.favorites.map((dest: any) => (
                                            <div key={dest.id} className="flex items-center space-x-3 bg-black/30 p-2 rounded">
                                                <img src={dest.imageUrl} className="w-12 h-8 object-cover rounded" alt="thumb" />
                                                <span className="text-sm text-white font-medium">{dest.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : <p className="text-gray-500 text-sm">Nenhum favorito.</p>}
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                                    <BellIcon className="w-4 h-4 mr-2 text-cyan-500" />
                                    Alertas / Seleções Recentes
                                </h4>
                                 {client.selectedItineraries.length > 0 ? (
                                    <div className="space-y-3">
                                        {client.selectedItineraries.map((it: any) => (
                                            <div key={it.id} className="bg-black/30 p-3 rounded flex justify-between items-center">
                                                <div>
                                                    <p className="text-sm text-white font-bold">{it.title}</p>
                                                    <p className="text-xs text-gray-400">Salvo: {it.savedDate}</p>
                                                </div>
                                                <span className="text-green-400 font-bold text-sm">R$ {it.totalPrice}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : <p className="text-gray-500 text-sm">Nenhuma seleção recente.</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Dashboard: React.FC<DashboardProps> = ({ installPromptEvent, onInstallSuccess, onSelectItinerary }) => {
    const { currentUser, logout, userData, updateUserData } = useAuth();
    const [activeTab, setActiveTab] = useState<'home' | 'trips' | 'assistant'>('home');
    const [isScrolled, setIsScrolled] = useState(false);
    
    // State for Hero Carousel
    const [currentHeroId, setCurrentHeroId] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // States for Modals (Level 1: Info, Level 2: Details)
    const [infoModalSelection, setInfoModalSelection] = useState<number | null>(null);
    const [detailedModalSelection, setDetailedModalSelection] = useState<number | null>(null);

    const [apiKeyError, setApiKeyError] = useState(false);
    const myTripsRef = useRef<HTMLDivElement>(null);
    
    // Check for Agent
    const isAgent = currentUser?.id === 99;

    useEffect(() => {
        const checkApiKey = async () => {
            if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
                setApiKeyError(true);
            }
        };
        checkApiKey();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-rotate Hero Carousel
    useEffect(() => {
        const interval = setInterval(() => {
            handleHeroNavigation('next');
        }, 7000); // Rotate every 7 seconds
        return () => clearInterval(interval);
    }, [currentHeroId]);

    const currentHeroDestination = allDestinations.find(d => d.id === currentHeroId);
    
    const heroDisplayContent = {
        id: currentHeroDestination?.id || 1,
        title: currentHeroDestination?.title.replace(/Opção \d: /g, '').replace(/\(Iguazú\)/g, '').replace('Rota Direta', '').trim() || "Curitiba",
        subtitle: currentHeroDestination?.description || "Aproveite o melhor de Curitiba com nossos roteiros exclusivos.",
        image: currentHeroDestination?.imageUrl || "https://images.unsplash.com/photo-1627483262268-9c96d8e367c8?q=80&w=1920&auto=format&fit=crop",
        match: "98% Relevante",
        tags: currentHeroDestination?.id === 3 ? "Exclusivo • Completo • 8 Dias" : "Urbano • Natureza • Verão"
    };

    const handleInstallClick = () => {
        if (!installPromptEvent) return;
        installPromptEvent.prompt();
        installPromptEvent.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') onInstallSuccess();
        });
    };

    const handleContinuePlanning = () => {
        setActiveTab('trips');
        if (myTripsRef.current) {
            myTripsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleShowInfo = (id: number) => {
        setInfoModalSelection(id);
    };

    const handleShowDetails = (id: number) => {
        setInfoModalSelection(null); // Close L1 modal
        setDetailedModalSelection(id); // Open L2 modal
    };

    const handleHeroNavigation = (direction: 'next' | 'prev') => {
        setIsTransitioning(true);
        setTimeout(() => {
            const featuredIds = [1, 2, 3];
            const currentIndex = featuredIds.indexOf(currentHeroId);
            let nextIndex = (direction === 'next') ? (currentIndex + 1) % featuredIds.length : (currentIndex - 1 + featuredIds.length) % featuredIds.length;
            setCurrentHeroId(featuredIds[nextIndex]);
            setIsTransitioning(false);
        }, 300); // Wait for fade out
    };

    const handleModalNavigation = (direction: 'next' | 'prev') => {
        if (!detailedModalSelection) return;
        const allDestinationIds = allDestinations.map(d => d.id);
        const currentIndex = allDestinationIds.indexOf(detailedModalSelection);
        let nextIndex = (direction === 'next') ? (currentIndex + 1) % allDestinationIds.length : (currentIndex - 1 + allDestinationIds.length) % allDestinationIds.length;
        setDetailedModalSelection(allDestinationIds[nextIndex]);
    };

    const handleApiKeyError = () => {
        setApiKeyError(true);
    };

    const handleSelectKey = async () => {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            setApiKeyError(false);
        }
    };

    const handleItineraryCreated = (newItineraryData: Omit<Itinerary, 'id' | 'savedDate'>) => {
        if (!userData || !updateUserData) return;

        const companyNameToIcon = (name: string): React.ReactElement => {
            const lowerCaseName = name.toLowerCase();
            if (lowerCaseName.includes('latam')) return <LatamLogoIcon />;
            if (lowerCaseName.includes('azul')) return <AzulLogoIcon />;
            if (lowerCaseName.includes('flybondi')) return <FlybondiLogoIcon />;
            if (lowerCaseName.includes('jetsmart')) return <JetSmartLogoIcon />;
            if (lowerCaseName.includes('sky')) return <SkyLogoIcon />;
            if (lowerCaseName.includes('boa')) return <BoaLogoIcon />;
            if (lowerCaseName.includes('booking')) return <BookingLogoIcon />;
            if (lowerCaseName.includes('airbnb')) return <AirbnbLogoIcon />;
            if (lowerCaseName.includes('decolar')) return <DecolarLogoIcon />;
            if (lowerCaseName.includes('maxmilhas')) return <MaxMilhasLogoIcon />;
            if (lowerCaseName.includes('nordeste')) return <NordesteLogoIcon />;
            if (lowerCaseName.includes('nsa')) return <NsaLogoIcon />;
            if (lowerCaseName.includes('clickbus')) return <ClickBusLogoIcon />;
            if (lowerCaseName.includes('ccr')) return <CCRBarcasLogoIcon />;
            return <PlaneTakeoffIcon />;
        };

        const processedEvents = newItineraryData.events.map(event => ({
            ...event,
            company: { ...event.company, logo: companyNameToIcon((event.company as any).logo as string) }
        }));

        const newItinerary: Itinerary = { ...newItineraryData, events: processedEvents, id: Date.now(), savedDate: new Date().toISOString() };
        updateUserData({ ...userData, itineraries: [...userData.itineraries, newItinerary] });
        setApiKeyError(false);
        setActiveTab('trips');
    };

    const carTripDestinations = allDestinations.filter(dest => dest.carTrips && dest.carTrips.length > 0);

    return (
        <div className="bg-[#141414] min-h-screen font-sans text-white pb-20 md:pb-0">
            {/* Desktop Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-3 md:py-4 flex items-center justify-between ${isScrolled ? 'bg-[#141414] shadow-md' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center cursor-pointer group" onClick={() => setActiveTab('home')}>
                        <h1 className="font-black text-xl md:text-3xl tracking-tighter flex items-center drop-shadow-md text-[#E50914]">
                            CHECK-IN, GO!
                        </h1>
                    </div>
                    {/* Desktop Menu Links */}
                    {!isAgent && (
                        <div className="hidden md:flex space-x-5 text-sm font-medium text-gray-300">
                            <button onClick={() => setActiveTab('home')} className={`hover:text-white transition ${activeTab === 'home' ? 'text-white font-bold' : ''}`}>Início</button>
                            <button onClick={() => setActiveTab('trips')} className={`hover:text-white transition ${activeTab === 'trips' ? 'text-white font-bold' : ''}`}>Minhas Viagens</button>
                            <button onClick={() => setActiveTab('assistant')} className={`hover:text-white transition ${activeTab === 'assistant' ? 'text-white font-bold' : ''}`}>Assistente</button>
                        </div>
                    )}
                </div>
                <div className="flex items-center space-x-4 md:space-x-6 text-gray-300">
                    <button className="hover:text-white"><SearchIcon className="h-6 w-6" /></button>
                    <button className="hover:text-white hidden sm:block"><BellIcon className="h-6 w-6" /></button>
                    {installPromptEvent && (<button onClick={handleInstallClick} className="hover:text-white" title="Instalar App"><DownloadIcon className="h-6 w-6" /></button>)}
                    <div className="flex items-center space-x-2 cursor-pointer group relative">
                        <img src={currentUser?.avatar} alt="Perfil" className="h-8 w-8 rounded-md border border-transparent group-hover:border-white transition-all object-cover" />
                        <div className="hidden md:block absolute right-0 top-8 w-32 bg-black/90 border border-gray-700 rounded shadow-xl py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                            <button onClick={logout} className="flex items-center w-full px-4 py-2 text-sm hover:underline text-gray-300 hover:text-white"><LogoutIcon className="h-4 w-4 mr-2" /> Sair</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Logic */}
            {isAgent ? (
                <AgentDashboard />
            ) : activeTab === 'home' ? (
                <>
                    {/* Hero Section - Netflix Style */}
                    <div className="relative h-[85vh] md:h-[95vh] w-full group">
                        <div className={`absolute inset-0 transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <img src={heroDisplayContent.image} alt="Hero Background" className="w-full h-full object-cover" />
                            {/* Top Gradient */}
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
                            {/* Bottom Gradient (Vignette) */}
                            <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent"></div>
                        </div>
                        
                        {/* Hero Navigation Arrows */}
                        <button onClick={() => handleHeroNavigation('prev')} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-opacity hidden md:group-hover:block" aria-label="Destino Anterior"><ChevronLeftIcon className="h-10 w-10" /></button>
                        <button onClick={() => handleHeroNavigation('next')} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-opacity hidden md:group-hover:block" aria-label="Próximo Destino"><ChevronRightIcon className="h-10 w-10" /></button>

                        <div className={`absolute bottom-0 left-0 w-full px-4 pb-8 md:pb-24 flex flex-col items-center md:items-start text-center md:text-left mx-auto transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            
                            {/* N Series / Top 10 Badge */}
                            <div className="flex flex-col items-center md:items-start mb-4">
                                <div className="flex items-center space-x-2 mb-2">
                                     <span className="text-[#E50914] font-black text-2xl tracking-tighter">N</span>
                                     <span className="text-gray-300 font-bold tracking-widest text-xs uppercase">SÉRIES</span>
                                </div>
                                <div className="flex items-center space-x-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded px-2 py-1">
                                    <span className="font-bold text-white text-xs">TOP 10</span>
                                    <span className="text-white text-xs font-semibold">N.º {currentHeroId} em viagens hoje</span>
                                </div>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-5xl md:text-8xl font-black text-white drop-shadow-2xl leading-none mb-4 tracking-tighter uppercase max-w-[90%] md:max-w-3xl">
                                {heroDisplayContent.title}
                            </h1>
                            
                            {/* Metadata */}
                            <div className="flex items-center justify-center md:justify-start space-x-3 text-sm font-medium mb-6 text-shadow">
                                <span className="text-[#46d369] font-bold">{heroDisplayContent.match}</span>
                                <span className="text-gray-300">2026</span>
                                <span className="bg-[#4d4d4d] px-1.5 rounded-[2px] text-[10px] text-white border border-gray-500">HD</span>
                                <span className="text-gray-300">{heroDisplayContent.tags}</span>
                            </div>

                            {/* Actions Buttons */}
                            <div className="flex flex-row items-center justify-center w-full gap-4 px-8 md:px-0 md:justify-start md:w-auto">
                                <button onClick={handleContinuePlanning} className="flex-1 md:flex-none flex items-center justify-center bg-white text-black py-2 md:px-6 md:py-2.5 rounded font-bold hover:bg-white/90 transition md:min-w-[140px]">
                                    <svg className="h-6 w-6 md:h-8 md:w-8 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                    <span className="text-base md:text-xl">Visualizar</span>
                                </button>
                                <button onClick={() => handleShowInfo(currentHeroId)} className="flex-1 md:flex-none flex items-center justify-center bg-[rgba(109,109,110,0.7)] text-white py-2 md:px-6 md:py-2.5 rounded font-bold hover:bg-[rgba(109,109,110,0.4)] transition md:min-w-[140px]">
                                    <InfoIcon className="h-6 w-6 md:h-8 md:w-8 mr-2" />
                                    <span className="text-base md:text-xl">Mais informações</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Lists */}
                    <div className="relative z-10 space-y-6 md:space-y-12 pb-24 px-0 bg-[#141414]">
                        <section className="pl-4 md:pl-12 -mt-10 md:-mt-24 relative z-20">
                            <h3 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-2 md:mb-4">Populares na Check-in, GO!</h3>
                            <Destinations onShowInfo={handleShowInfo} />
                        </section>
                        
                        <section className="pl-4 md:pl-12" ref={myTripsRef}>
                             <h3 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-2 md:mb-4 hover:text-white cursor-pointer flex items-center group">
                                Minha Lista
                            </h3>
                             <div className="pr-4 md:pr-12 mb-4">
                                {apiKeyError && currentUser?.id !== 3 && currentUser?.id !== 99 ? (
                                    <div className="bg-red-900/50 border border-red-700 p-6 rounded-lg text-center animate-fade-in mx-4 md:mx-0">
                                        <h3 className="text-lg font-semibold text-white">Chave de API Necessária</h3>
                                        <button onClick={handleSelectKey} className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-opacity-80 transition mt-2">Selecionar Chave</button>
                                    </div>
                                ) : (
                                    <div className="mx-4 md:mx-0">
                                       <ImageUploader onItineraryCreated={handleItineraryCreated} onApiKeyError={handleApiKeyError} />
                                    </div>
                                )}
                            </div>
                            <MyTrips onSelectItinerary={onSelectItinerary} onShowInfo={handleShowInfo} />
                        </section>

                        {carTripDestinations.length > 0 && (
                             <section className="pl-4 md:pl-12">
                                <h3 className="text-lg md:text-xl font-bold text-[#e5e5e5] mb-2 md:mb-4">
                                    Rotas de Carro Sugeridas
                                </h3>
                                <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x">
                                    {carTripDestinations.flatMap(dest => dest.carTrips?.map(trip => (
                                        <div key={trip.title} className="snap-start min-w-[200px] md:min-w-[280px]">
                                            <CarTripCard trip={trip} />
                                        </div>
                                    )))}
                                </div>
                            </section>
                        )}
                    </div>
                </>
            ) : activeTab === 'trips' ? (
                <div className="pt-24 px-4 md:px-12 pb-12 min-h-screen">
                     <h2 className="text-3xl font-bold mb-8">Minhas Viagens</h2>
                     <section ref={myTripsRef}>
                         <MyTrips onSelectItinerary={onSelectItinerary} onShowInfo={handleShowInfo} />
                     </section>
                </div>
            ) : (
                <div className="pt-24 px-4 md:px-12 pb-12 min-h-screen">
                    <h2 className="text-3xl font-bold mb-8">Assistente de Viagem IA</h2><AiAssistant />
                </div>
            )}
            
            {/* Footer */}
            <footer className="max-w-5xl mx-auto py-8 px-4 text-gray-500 text-xs text-center md:text-left mb-16 md:mb-0 bg-[#141414]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <a href="#" className="hover:underline">Perguntas frequentes</a>
                    <a href="#" className="hover:underline">Central de Ajuda</a>
                    <a href="#" className="hover:underline">Termos de Uso</a>
                    <a href="#" className="hover:underline">Privacidade</a>
                </div>
                <button className="border border-gray-500 px-2 py-1 text-gray-400 hover:text-white mb-4 text-[10px]">Código do Serviço</button>
                <p>&copy; 2025 Check-in, GO! Inc.</p>
            </footer>
            
            {/* Mobile Bottom Navigation - Netflix Style */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#121212] border-t border-[#333] flex justify-around items-center py-2 z-50 text-[10px] text-[#808080] pb-safe">
                <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center space-y-1 ${activeTab === 'home' ? 'text-white' : ''}`}>
                    <HomeIcon className="h-6 w-6" />
                    <span className="font-medium">Início</span>
                </button>
                 <button className="flex flex-col items-center space-y-1">
                    <div className="relative">
                        <SearchIcon className="h-6 w-6" />
                    </div>
                    <span className="font-medium">Bombando</span>
                </button>
                <button onClick={() => setActiveTab('trips')} className={`flex flex-col items-center space-y-1 ${activeTab === 'trips' ? 'text-white' : ''}`}>
                    <BackpackIcon className="h-6 w-6" />
                    <span className="font-medium">Minha Lista</span>
                </button>
                <button onClick={() => setActiveTab('assistant')} className={`flex flex-col items-center space-y-1 ${activeTab === 'assistant' ? 'text-white' : ''}`}>
                    <SparklesIcon className="h-6 w-6" />
                    <span className="font-medium">IA</span>
                </button>
                 <button onClick={logout} className="flex flex-col items-center space-y-1">
                     <img src={currentUser?.avatar} alt="Perfil" className="h-6 w-6 rounded opacity-100" />
                    <span className="font-medium">Perfil</span>
                </button>
            </div>

            <InfoModal 
                selectionId={infoModalSelection}
                onClose={() => setInfoModalSelection(null)}
                onShowDetails={handleShowDetails}
                onSelectItinerary={onSelectItinerary}
            />
            <DetailedItineraryView 
                selection={detailedModalSelection ? { id: detailedModalSelection } : null}
                onClose={() => setDetailedModalSelection(null)}
                onNavigate={handleModalNavigation}
            />
            
            <a href="https://wa.me/5521994527694" target="_blank" rel="noopener noreferrer" className="fixed bottom-20 md:bottom-6 right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 z-40 group" aria-label="Fale conosco no WhatsApp">
                <WhatsAppIcon className="h-6 w-6 md:h-8 md:w-8" />
            </a>
        </div>
    );
};

export default Dashboard;
