
import React, { useState } from 'react';
import type { Itinerary } from '../types';
import Destinations from './Destinations';
import ItineraryDetailsModal from './ItineraryDetailsModal';
import AiAssistant from './AiAssistant';
import MyTrips from './MyTrips';
import { CompassIcon, BookOpenIcon, SparklesIcon, DownloadIcon, LogoIcon, LogoutIcon } from './icons';
import { useAuth } from '../contexts/AuthContext';

interface DashboardProps {
  installPromptEvent: BeforeInstallPromptEvent | null;
  onInstallSuccess: () => void;
}

const pageTitles = {
    destinations: {
        icon: <LogoIcon className="h-12 w-12 mx-auto" />,
        title: "Explorar Roteiros",
        subtitle: "Inspire-se com nossos roteiros e veja uma estimativa de custos com base nas suas passagens salvas."
    },
    itineraries: {
        icon: <LogoIcon className="h-12 w-12 mx-auto" />,
        title: "Minhas Viagens",
        subtitle: "Aqui estão todas as suas viagens, agrupadas por destino para facilitar o planejamento."
    },
    'ai-assistant': {
        icon: <LogoIcon className="h-12 w-12 mx-auto" />,
        title: "Assistente de Viagem IA",
        subtitle: "Peça roteiros, dicas de preços, hotéis, distâncias e o que mais sua imaginação permitir."
    }
};

const Dashboard: React.FC<DashboardProps> = ({ installPromptEvent, onInstallSuccess }) => {
    const { currentUser, logout } = useAuth();
    const [activeTab, setActiveTab] = useState<'itineraries' | 'destinations' | 'ai-assistant'>('destinations');
    const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);

    const currentTitle = pageTitles[activeTab];

    const handleInstallClick = () => {
        if (!installPromptEvent) {
            return;
        }
        installPromptEvent.prompt();
        installPromptEvent.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação');
                onInstallSuccess();
            } else {
                console.log('Usuário recusou a instalação');
            }
        });
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'destinations':
                return <Destinations />;
            case 'ai-assistant':
                return <AiAssistant />;
            case 'itineraries':
            default:
                return <MyTrips onSelectItinerary={setSelectedItinerary} />;
        }
    };

    const TabButton: React.FC<{ tabName: 'itineraries' | 'destinations' | 'ai-assistant'; label: string; icon: React.ReactNode }> = ({ tabName, label, icon }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`flex-1 lg:flex-initial flex justify-center items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                activeTab === tabName
                    ? 'bg-white text-blue-800 shadow-lg'
                    : 'text-white hover:bg-white/30'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <div className="flex-grow">
                <div className="bg-gradient-to-b from-blue-800 via-blue-500 to-slate-50 pb-20 relative overflow-hidden">
                    {/* Cloud Shapes */}
                    <div className="absolute -top-10 -left-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl opacity-50"></div>
                    <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-40"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-20"></div>

                    <div className="relative z-10">
                        <header className="bg-transparent sticky top-0 z-20">
                            <nav className="px-4 sm:px-6 lg:px-8 py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center">
                                {/* Branding Area */}
                                <div className="flex flex-col lg:flex-row items-center lg:space-x-3">
                                    <LogoIcon className="h-16 w-auto lg:h-12" />
                                    <div className="text-center lg:text-left mt-2 lg:mt-0">
                                        <h1 className="text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
                                            Check-in,<span className="text-lime-400">GO!</span>
                                        </h1>
                                        <p className="text-sm text-white/80 mt-1">Olá, {currentUser?.name}! Eu planejo, você clica, finaliza e viaja!</p>
                                    </div>
                                </div>
                                
                                {/* Controls Area */}
                                <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center mt-6 lg:mt-0 lg:space-x-4">
                                    <div className="w-full lg:w-auto flex items-stretch lg:items-center space-x-1 bg-black/10 p-1 rounded-xl shadow-inner backdrop-blur-sm">
                                        <TabButton tabName="destinations" label="Explorar Roteiros" icon={<CompassIcon className="h-5 w-5" />} />
                                        <TabButton tabName="itineraries" label="Minhas Viagens" icon={<BookOpenIcon className="h-5 w-5" />} />
                                        <TabButton tabName="ai-assistant" label="Assistente IA" icon={<SparklesIcon className="h-5 w-5" />} />
                                    </div>
                                    <div className="flex items-center space-x-2 w-full lg:w-auto mt-4 lg:mt-0">
                                        {installPromptEvent && (
                                            <button
                                                onClick={handleInstallClick}
                                                className="w-full flex-1 lg:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all text-sm bg-white/90 text-slate-800 hover:bg-white hover:shadow-lg hover:scale-105"
                                            >
                                                <DownloadIcon className="h-5 w-5" />
                                                <span>Instalar</span>
                                            </button>
                                        )}
                                        <button
                                            onClick={logout}
                                            className="w-full flex-1 lg:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all text-sm bg-red-500/80 text-white hover:bg-red-500 hover:shadow-lg hover:scale-105"
                                        >
                                            <LogoutIcon className="h-5 w-5" />
                                            <span>Sair</span>
                                        </button>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-white">
                            {currentTitle.icon}
                            <h2 className="text-4xl font-extrabold mt-4">{currentTitle.title}</h2>
                            <p 
                                className="max-w-2xl mx-auto mt-2 text-lg font-medium" 
                                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
                            >
                                {currentTitle.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
                
                <main className="container mx-auto p-4 sm:p-6 lg:p-8 -mt-16">
                   {renderContent()}
                </main>
            </div>
            
            <footer className="w-full text-center p-4 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 space-y-1 flex-shrink-0">
                <p>Todos os direitos reservados a André Brito &reg;</p>
                <p>Desenvolvido por: André Brito</p>
                <p>Versão 1.0</p>
            </footer>

            <ItineraryDetailsModal itinerary={selectedItinerary} onClose={() => setSelectedItinerary(null)} />
        </div>
    );
};

export default Dashboard;