
import React, { useState, useEffect, useRef } from 'react';
import type { Itinerary } from '../types';
import Destinations from './Destinations';
import AiAssistant from './AiAssistant';
import MyTrips from './MyTrips';
import DetailedItineraryView from './DetailedItineraryView';
import { DownloadIcon, LogoutIcon, BellIcon, SearchIcon, SpinningEarthIcon } from './icons';
import { useAuth } from '../contexts/AuthContext';

interface DashboardProps {
  installPromptEvent: BeforeInstallPromptEvent | null;
  onInstallSuccess: () => void;
  onSelectItinerary: (itinerary: Itinerary) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ installPromptEvent, onInstallSuccess, onSelectItinerary }) => {
    const { currentUser, logout } = useAuth();
    const [activeTab, setActiveTab] = useState<'home' | 'assistant'>('home');
    const [isScrolled, setIsScrolled] = useState(false);
    
    // State for Hero "More Info" modal
    const [heroDetailSelection, setHeroDetailSelection] = useState<{ id: number } | null>(null);

    // Ref for "Continue Planning" scroll
    const myTripsRef = useRef<HTMLDivElement>(null);

    // Efeito para navbar mudar de cor ao rolar (igual Netflix)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hero Content dinâmico (Foz do Iguaçu - ID 42 na lista de roteiros detalhados)
    const heroContent = {
        id: 42, // ID da Opção 2 (Rota Direta Iguazú) para abrir detalhes
        title: "Foz do Iguaçu",
        subtitle: "Uma das 7 maravilhas naturais do mundo espera por você.",
        image: "https://images.unsplash.com/photo-1534234828563-02511426b798?q=80&w=1920&auto=format&fit=crop",
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
        setHeroDetailSelection({ id: heroContent.id });
    };

    const handleHeroNavigation = (direction: 'next' | 'prev') => {
        // Simple toggle for demo purposes since we only have 2 main routes in detailedRotes
        // In a real app, this would iterate through available featured routes
        setHeroDetailSelection(prev => prev?.id === 42 ? { id: 41 } : { id: 42 });
    };

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
                                src={heroContent.image} 
                                alt="Hero Background" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                        </div>

                        {/* Conteúdo do Hero */}
                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pb-24 md:pb-20 space-y-3 max-w-2xl">
                            <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl leading-tight">
                                {heroContent.title}
                            </h1>
                            <div className="flex items-center space-x-4 text-sm md:text-base font-semibold">
                                <span className="text-green-400">{heroContent.match}</span>
                                <span className="text-gray-300">2026</span>
                                <span className="border border-gray-500 px-1 rounded text-xs text-gray-300">HD</span>
                                <span className="text-gray-300">Aventura • Natureza</span>
                            </div>
                            <p className="text-gray-200 text-lg md:text-xl drop-shadow-md line-clamp-3">
                                {heroContent.subtitle} Prepare-se para uma jornada inesquecível pelas cataratas, parques e fronteiras. O roteiro perfeito para começar o ano.
                            </p>
                            
                            <div className="flex items-center space-x-4 pt-4">
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
                        {/* Rail 1: Minhas Viagens (Itens Salvos) */}
                        <section ref={myTripsRef} className="pt-8">
                             <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-3 hover:text-white cursor-pointer flex items-center group">
                                Mochilão América do Sul
                                <span className="hidden group-hover:inline-block ml-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">Ver tudo &gt;</span>
                            </h3>
                            <div className="w-full h-1 bg-gray-800 rounded-full mb-4">
                                <div className="h-full bg-blue-500 w-2/3 rounded-full"></div>
                            </div>
                            <MyTrips onSelectItinerary={onSelectItinerary} />
                        </section>
                        
                        {/* Rail 2: Explorar Roteiros */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-3 hover:text-white cursor-pointer flex items-center group">
                                Explorar Roteiros Disponíveis 
                                <span className="hidden group-hover:inline-block ml-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">Ver tudo &gt;</span>
                            </h3>
                            <Destinations />
                        </section>
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
                selection={heroDetailSelection}
                onClose={() => setHeroDetailSelection(null)}
                onNavigate={handleHeroNavigation}
            />
        </div>
    );
};

export default Dashboard;
