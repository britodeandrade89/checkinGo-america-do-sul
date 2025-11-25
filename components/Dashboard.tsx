import React, { useState, useEffect, useRef } from 'react';
import type { Itinerary } from '../types';
import Destinations from './Destinations';
import AiAssistant from './AiAssistant';
import MyTrips from './MyTrips';
import DetailedItineraryView from './DetailedItineraryView';
import { 
    DownloadIcon, LogoutIcon, BellIcon, SearchIcon, SpinningEarthIcon,
    LatamLogoIcon, AzulLogoIcon, FlybondiLogoIcon, JetSmartLogoIcon, SkyLogoIcon,
    BoaLogoIcon, BookingLogoIcon, AirbnbLogoIcon, DecolarLogoIcon, MaxMilhasLogoIcon,
    NordesteLogoIcon, NsaLogoIcon, ClickBusLogoIcon, CCRBarcasLogoIcon, PlaneTakeoffIcon,
    ChevronLeftIcon, ChevronRightIcon, WhatsAppIcon
} from './icons';
import { useAuth } from '../contexts/AuthContext';
import ImageUploader from './ImageUploader';
import CarTripCard from './CarTripCard';
import { destinations as allDestinations } from '../destinations'; // Import all destinations for car trips

interface DashboardProps {
  installPromptEvent: BeforeInstallPromptEvent | null;
  onInstallSuccess: () => void;
  onSelectItinerary: (itinerary: Itinerary) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ installPromptEvent, onInstallSuccess, onSelectItinerary }) => {
    const { currentUser, logout, userData, updateUserData } = useAuth();
    const [activeTab, setActiveTab] = useState<'home' | 'assistant'>('home');
    const [isScrolled, setIsScrolled] = useState(false);
    
    // State for Hero Carousel
    const [currentHeroId, setCurrentHeroId] = useState(42); // Start with Foz do Iguaçu

    // State for "More Info" modal
    const [modalSelection, setModalSelection] = useState<{ id: number } | null>(null);
    const [apiKeyError, setApiKeyError] = useState(false);

    // Ref for "Continue Planning" scroll
    const myTripsRef = useRef<HTMLDivElement>(null);
    
    // Check for API Key on mount for AI features
    useEffect(() => {
        const checkApiKey = async () => {
            if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
                setApiKeyError(true);
            }
        };
        checkApiKey();
    }, []);

    // Efeito para navbar mudar de cor ao rolar (igual Netflix)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Derive current hero content dynamically from state
    const currentHeroDestination = allDestinations.find(d => d.id === currentHeroId);
    
    const heroDisplayContent = {
        id: currentHeroDestination?.id || 42,
        title: currentHeroDestination?.title.replace(/Opção \d: /g, '').replace(/\(Iguazú\)/g, '').replace('Rota Direta', '').trim() || "Foz do Iguaçu",
        subtitle: currentHeroDestination?.description || "Uma das 7 maravilhas naturais do mundo espera por você.",
        image: currentHeroDestination?.imageUrl || "https://images.unsplash.com/photo-1595166311142-28a2a01c?q=80&w=1920&auto=format&fit=crop",
        match: "98% de Match"
    };

    const handleInstallClick = () => {
        if (!installPromptEvent) return;
        installPromptEvent.prompt();
        installPromptEvent.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') onInstallSuccess();
        });
    };

    const handleContinuePlanning = () => {
        if (myTripsRef.current) {
            myTripsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleMoreInfo = () => {
        setModalSelection({ id: currentHeroId });
    };

    const handleHeroNavigation = (direction: 'next' | 'prev') => {
        const featuredIds = [42, 41]; // Foz and Assunção routes
        const currentIndex = featuredIds.indexOf(currentHeroId);
        
        let nextIndex;
        if (direction === 'next') {
            nextIndex = (currentIndex + 1) % featuredIds.length;
        } else {
            nextIndex = (currentIndex - 1 + featuredIds.length) % featuredIds.length;
        }
        setCurrentHeroId(featuredIds[nextIndex]);
    };

    const handleModalNavigation = (direction: 'next' | 'prev') => {
        if (!modalSelection) return;
        const featuredIds = [42, 41];
        const currentIndex = featuredIds.indexOf(modalSelection.id);
        
        let nextIndex;
        if (direction === 'next') {
            nextIndex = (currentIndex + 1) % featuredIds.length;
        } else {
            nextIndex = (currentIndex - 1 + featuredIds.length) % featuredIds.length;
        }
        setModalSelection({ id: featuredIds[nextIndex] });
    };

    const handleApiKeyError = () => {
        setApiKeyError(true);
    };

    const handleSelectKey = async () => {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            setApiKeyError(false); // Assume success as per guidelines
        }
    };

    const handleItineraryCreated = (newItineraryData: Omit<Itinerary, 'id' | 'savedDate'>) => {
        if (!userData || !updateUserData) return;

        const companyNameToIcon = (name: string): React.ReactElement => {
            const lowerCaseName = name.toLowerCase();
            if (lowerCaseName.includes('latam')) return React.createElement(LatamLogoIcon);
            if (lowerCaseName.includes('azul')) return React.createElement(AzulLogoIcon);
            if (lowerCaseName.includes('flybondi')) return React.createElement(FlybondiLogoIcon);
            if (lowerCaseName.includes('jetsmart')) return React.createElement(JetSmartLogoIcon);
            if (lowerCaseName.includes('sky')) return React.createElement(SkyLogoIcon);
            if (lowerCaseName.includes('boa')) return React.createElement(BoaLogoIcon);
            if (lowerCaseName.includes('booking')) return React.createElement(BookingLogoIcon);
            if (lowerCaseName.includes('airbnb')) return React.createElement(AirbnbLogoIcon);
            if (lowerCaseName.includes('decolar')) return React.createElement(DecolarLogoIcon);
            if (lowerCaseName.includes('maxmilhas')) return React.createElement(MaxMilhasLogoIcon);
            if (lowerCaseName.includes('nordeste')) return React.createElement(NordesteLogoIcon);
            if (lowerCaseName.includes('nsa')) return React.createElement(NsaLogoIcon);
            if (lowerCaseName.includes('clickbus')) return React.createElement(ClickBusLogoIcon);
            if (lowerCaseName.includes('ccr')) return React.createElement(CCRBarcasLogoIcon);
            return React.createElement(PlaneTakeoffIcon);
        };

        const processedEvents = newItineraryData.events.map(event => {
            const logoString = (event.company as any).logo as string;
            return {
                ...event,
                company: { ...event.company, logo: companyNameToIcon(logoString) }
            };
        });

        const newItinerary: Itinerary = {
            ...newItineraryData,
            events: processedEvents,
            id: Date.now(),
            savedDate: new Date().toISOString(),
        };

        updateUserData({ ...userData, itineraries: [...userData.itineraries, newItinerary] });
        setApiKeyError(false); // Success implies key is working

        setTimeout(() => {
            myTripsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const carTripDestinations = allDestinations.filter(dest => dest.carTrips && dest.carTrips.length > 0);

    return (
        <div className="bg-[#141414] min-h-screen font-sans text-white selection:bg-red-600 selection:text-white">
            {/* Navbar Fixa */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
                <div className="flex items-center space-x-8">
                    {/* Logo Unificado com LoginScreen */}
                    <div className="flex items-center cursor-pointer group" onClick={() => setActiveTab('home')}>
                        <h1 className="font-black text-2xl md:text-3xl tracking-tighter flex items-center drop-shadow-md">
                            <span className="text-blue-200">CHECK-IN,</span>
                            <span className="text-blue-200 ml-1">G</span>
                            <div className="w-6 h-6 md:w-8 md:h-8 mx-0.5 relative">
                               <SpinningEarthIcon className="w-full h-full animate-spin-slow" />
                            </div>
                            <span className="text-blue-200">!</span>
                        </h1>
                    </div>
                    
                    <div className="hidden md:flex space-x-5 text-sm font-medium text-gray-300">
                        <button onClick={() => setActiveTab('home')} className={`hover:text-white transition ${activeTab === 'home' ? 'text-white font-bold' : ''}`}>Explorar</button>
                        <button onClick={handleContinuePlanning} className="hover:text-white transition">Viagens</button>
                        <button onClick={() => setActiveTab('assistant')} className={`hover:text-white transition ${activeTab === 'assistant' ? 'text-white font-bold' : ''}`}>Assistente</button>
                    </div>
                </div>

                <div className="flex items-center space-x-6 text-gray-300">
                    <button className="hover:text-white"><SearchIcon className="h-6 w-6" /></button>
                    <button className="hover:text-white hidden sm:block"><BellIcon className="h-6 w-6" /></button>
                    
                    {installPromptEvent && (
                        <button onClick={handleInstallClick} className="hover:text-white" title="Instalar App">
                            <DownloadIcon className="h-6 w-6" />
                        </button>
                    )}

                    <div className="flex items-center space-x-2 cursor-pointer group relative">
                        <img 
                            src={currentUser?.avatar} 
                            alt="Perfil" 
                            className="h-8 w-8 rounded-md border border-transparent group-hover:border-white transition-all object-cover"
                        />
                        <div className="absolute right-0 top-8 w-32 bg-black/90 border border-gray-700 rounded shadow-xl py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                            <button onClick={logout} className="flex items-center w-full px-4 py-2 text-sm hover:underline text-gray-300 hover:text-white">
                                <LogoutIcon className="h-4 w-4 mr-2" /> Sair
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Conteúdo Principal */}
            {activeTab === 'home' ? (
                <>
                    {/* Hero Section */}
                    <div className="relative h-[85vh] w-full">
                        {/* Imagem de Fundo */}
                        <div className="absolute inset-0">
                            <img 
                                src={heroDisplayContent.image} 
                                alt="Hero Background" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                        </div>

                         {/* Navigation Arrows */}
                        <button onClick={() => handleHeroNavigation('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white transition-opacity opacity-70 hover:opacity-100" aria-label="Destino Anterior">
                            <ChevronLeftIcon className="h-8 w-8" />
                        </button>
                        <button onClick={() => handleHeroNavigation('next')} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white transition-opacity opacity-70 hover:opacity-100" aria-label="Próximo Destino">
                            <ChevronRightIcon className="h-8 w-8" />
                        </button>

                        {/* Conteúdo do Hero */}
                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pb-24 md:pb-20 space-y-3 max-w-2xl">
                            <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl leading-tight animate-fade-in-up">
                                {heroDisplayContent.title}
                            </h1>
                            <div className="flex items-center space-x-4 text-sm md:text-base font-semibold animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                                <span className="text-green-400">{heroDisplayContent.match}</span>
                                <span className="text-gray-300">2026</span>
                                <span className="border border-gray-500 px-1 rounded text-xs text-gray-300">HD</span>
                                <span className="text-gray-300">Aventura • Natureza</span>
                            </div>
                            <p className="text-gray-200 text-lg md:text-xl drop-shadow-md line-clamp-3 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                                {heroDisplayContent.subtitle} Prepare-se para uma jornada inesquecível pelas cataratas, parques e fronteiras. O roteiro perfeito para começar o ano.
                            </p>
                            
                            <div className="flex items-center space-x-4 pt-4 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                                <button 
                                    onClick={handleContinuePlanning}
                                    className="flex items-center bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-opacity-80 transition"
                                >
                                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                    Continuar Planejamento
                                </button>
                                <button 
                                    onClick={handleMoreInfo}
                                    className="flex items-center bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/50 transition backdrop-blur-sm"
                                >
                                    <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Mais Informações
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Rails de Conteúdo (Deslocado para cima para sobrepor o gradiente) */}
                    <div className="relative z-10 -mt-20 space-y-12 pb-20 px-4 md:px-12">
                        {/* Rail 1: Explorar Roteiros */}
                        <section className="pt-8">
                            <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-3 hover:text-white cursor-pointer flex items-center group">
                                Explorar Roteiros Disponíveis 
                                <span className="hidden group-hover:inline-block ml-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">Ver tudo &gt;</span>
                            </h3>
                            <Destinations />
                        </section>

                        {/* Rail 2: Minhas Viagens (Itens Salvos) */}
                        <section ref={myTripsRef}>
                             <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-3 hover:text-white cursor-pointer flex items-center group">
                                Mochilão América do Sul
                                <span className="hidden group-hover:inline-block ml-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">Ver tudo &gt;</span>
                            </h3>
                            <div className="w-full h-1 bg-gray-800 rounded-full mb-4">
                                <div className="h-full bg-blue-500 w-2/3 rounded-full"></div>
                            </div>
                             <div className="mb-8">
                                {apiKeyError ? (
                                    <div className="bg-red-900/50 border border-red-700 p-6 rounded-lg text-center animate-fade-in">
                                        <h3 className="text-lg font-semibold text-white">Chave de API Necessária</h3>
                                        <p className="text-red-200 mt-2 mb-4">Para analisar capturas de tela com IA, você precisa selecionar uma chave de API de um projeto com faturamento ativado.</p>
                                        <button 
                                            onClick={handleSelectKey} 
                                            className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-opacity-80 transition"
                                        >
                                            Selecionar Chave de API
                                        </button>
                                        <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="block text-xs text-red-300 hover:underline mt-3">
                                            Saiba mais sobre faturamento
                                        </a>
                                    </div>
                                ) : (
                                    <ImageUploader 
                                        onItineraryCreated={handleItineraryCreated} 
                                        onApiKeyError={handleApiKeyError} 
                                    />
                                )}
                            </div>
                            <MyTrips onSelectItinerary={onSelectItinerary} />
                        </section>

                        {/* Rail 3: Rotas de Carro */}
                        {carTripDestinations.length > 0 && (
                             <section>
                                <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-3 hover:text-white cursor-pointer flex items-center group">
                                    Rotas de Carro Sugeridas
                                    <span className="hidden group-hover:inline-block ml-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">Ver tudo &gt;</span>
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                                    {carTripDestinations.flatMap(dest => 
                                        dest.carTrips?.map(trip => (
                                            <CarTripCard key={trip.title} trip={trip} />
                                        ))
                                    )}
                                </div>
                            </section>
                        )}
                    </div>
                </>
            ) : (
                <div className="pt-24 px-4 md:px-12 pb-12 min-h-screen">
                    <h2 className="text-3xl font-bold mb-8">Assistente de Viagem IA</h2>
                    <AiAssistant />
                </div>
            )}
            
            {/* Footer estilo Netflix */}
            <footer className="max-w-5xl mx-auto py-12 px-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-4 mb-6">
                    {/* Icons can be added here if you have a library like FontAwesome */}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <a href="#" className="hover:underline">Sobre o Check-in, GO!</a>
                    <a href="#" className="hover:underline">Central de Ajuda</a>
                    <a href="#" className="hover:underline">Termos de Uso</a>
                    <a href="#" className="hover:underline">Privacidade</a>
                </div>
                <button className="border border-gray-500 px-4 py-1 text-gray-400 hover:text-white mb-4 text-xs">
                    Código do Serviço
                </button>
                <p>&copy; 2025 Check-in, GO! Inc. - Desenvolvido por André Brito</p>
            </footer>

            {/* Modal de Detalhes do Hero */}
            <DetailedItineraryView 
                selection={modalSelection}
                onClose={() => setModalSelection(null)}
                onNavigate={handleModalNavigation}
            />
            
            {/* WhatsApp Floating Button */}
            <a 
                href="https://wa.me/5521994527694" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 z-50 group"
                aria-label="Fale conosco no WhatsApp"
            >
                <WhatsAppIcon className="h-8 w-8" />
                <span className="absolute bottom-1/2 translate-y-1/2 right-full mr-3 px-3 py-1.5 bg-black/80 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Fale com o André!
                </span>
            </a>
        </div>
    );
};

export default Dashboard;