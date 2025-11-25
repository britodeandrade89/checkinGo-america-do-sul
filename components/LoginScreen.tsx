
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUsers } from '../services/userService';
import { SpinningEarthIcon } from './icons';
import type { User } from '../types';

const LoginScreen: React.FC = () => {
    const { login } = useAuth();
    const users = getUsers();
    const [stage, setStage] = useState<'splash' | 'profiles' | 'password' | 'transition'>('splash');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [pin, setPin] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const videoRef = useRef<HTMLVideoElement>(null);

    // Estágio 1: Splash Screen (2.5s)
    useEffect(() => {
        const timer = setTimeout(() => {
            setStage('profiles');
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    // Fallback de segurança (timeout) para a transição
    useEffect(() => {
        if (stage === 'transition' && selectedUser) {
            const safetyTimer = setTimeout(() => {
                login(selectedUser.id);
            }, 8000); // 8 segundos de segurança
            return () => clearTimeout(safetyTimer);
        }
    }, [stage, selectedUser, login]);

    const handleUserSelect = (user: User) => {
        setSelectedUser(user);
        setStage('password');
        setPin(['', '', '', '']);
        setError('');
    };

    const handlePinChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        if (value && index < 3) {
            document.getElementById(`pin-${index + 1}`)?.focus();
        }

        if (index === 3 && value) {
            const enteredPin = newPin.join('');
            if (enteredPin === '1234') { // Senha fixa para demo
                setStage('transition');
            } else {
                setError('Senha incorreta. Tente 1234.');
                setPin(['', '', '', '']);
                document.getElementById('pin-0')?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !pin[index] && index > 0) {
            document.getElementById(`pin-${index - 1}`)?.focus();
        }
    };

    // RENDERIZAÇÃO CONDICIONAL POR ESTÁGIO

    if (stage === 'splash') {
        return (
            <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-[#0f172a] to-black flex items-center justify-center overflow-hidden">
                <div className="animate-pulse flex items-center justify-center">
                     <h1 className="font-black text-6xl tracking-tighter flex items-center drop-shadow-lg">
                        <span className="text-blue-200">CHECK-IN,</span>
                        <span className="text-blue-200 ml-3">G</span>
                        <div className="w-16 h-16 mx-1 relative">
                           <SpinningEarthIcon className="w-full h-full animate-spin-slow" />
                        </div>
                        <span className="text-blue-200">!</span>
                    </h1>
                </div>
            </div>
        );
    }

    if (stage === 'transition') {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
                {/* Video de avião decolando */}
                <video 
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay 
                    muted 
                    playsInline
                    onEnded={() => {
                        if (selectedUser) login(selectedUser.id);
                    }}
                    onError={() => {
                        // Fallback se o vídeo falhar
                        if (selectedUser) login(selectedUser.id);
                    }}
                >
                    {/* Vídeo de decolagem noturna/pôr do sol */}
                    <source src="https://videos.pexels.com/video-files/5927913/5927913-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                </video>

                {/* Overlay com o gradiente da marca */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/60 via-[#0f172a]/60 to-black/80 mix-blend-overlay pointer-events-none"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-[#0f172a] to-black flex flex-col items-center justify-center p-4 relative font-sans">
            {/* Logo Topo Esquerdo (Estilo Netflix) */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-90">
                 <div className="flex items-center">
                    {/* Logo com cor Azul Clarinho (Blue-200) para contrastar com o título branco */}
                    <h1 className="font-black text-3xl md:text-4xl tracking-tighter flex items-center drop-shadow-md">
                        <span className="text-blue-200">CHECK-IN,</span>
                        <span className="text-blue-200 ml-2">G</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-0.5 relative">
                           <SpinningEarthIcon className="w-full h-full animate-spin-slow" />
                        </div>
                        <span className="text-blue-200">!</span>
                    </h1>
                 </div>
            </div>

            <div className="w-full max-w-3xl text-center z-10 animate-fade-in-up mt-12">
                {/* Título com cor Champagne/Pérola (#EAE0C8) e sombra forte para destaque */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#EAE0C8] mb-16 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-wide">
                    {stage === 'password' ? `Olá, ${selectedUser?.name}.` : 'Quem está viajando hoje?'}
                </h1>

                {stage === 'profiles' && (
                    <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                        {users.map(user => (
                            <div 
                                key={user.id} 
                                onClick={() => handleUserSelect(user)} 
                                className="group flex flex-col items-center cursor-pointer transition-all duration-300"
                            >
                                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-white transition-all duration-200 transform group-hover:scale-105 shadow-lg group-hover:shadow-2xl shadow-black/50">
                                    <img 
                                        src={user.avatar} 
                                        alt={user.name} 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                                <p className="text-gray-400 text-xl font-medium group-hover:text-white transition-colors duration-300">{user.name}</p>
                            </div>
                        ))}
                        {/* Botão Adicionar Perfil (Visual) */}
                        <div className="group flex flex-col items-center cursor-not-allowed opacity-60 hover:opacity-90 transition-opacity">
                             <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full flex items-center justify-center bg-[#1e293b] border-4 border-transparent group-hover:border-white hover:bg-[#334155] transition-all duration-200 transform group-hover:scale-105 shadow-lg">
                                <span className="text-6xl text-gray-400 group-hover:text-white font-light pb-2">+</span>
                             </div>
                             <p className="text-gray-400 text-xl font-medium group-hover:text-white">Adicionar</p>
                        </div>
                    </div>
                )}

                {stage === 'password' && (
                    <div className="bg-black/60 backdrop-blur-md p-10 rounded-lg max-w-md mx-auto border border-gray-700/50 shadow-2xl transform transition-all">
                        <p className="text-gray-300 mb-8 text-base font-medium">Digite sua senha para acessar (1234)</p>
                        <div className="flex justify-center gap-4 mb-8">
                            {pin.map((digit, idx) => (
                                <input
                                    key={idx}
                                    id={`pin-${idx}`}
                                    type="password"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handlePinChange(idx, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(idx, e)}
                                    className="w-14 h-16 bg-[#0f172a] border border-gray-600 focus:border-white focus:bg-[#1e293b] rounded-md text-center text-white text-3xl outline-none transition-all duration-200 shadow-inner"
                                    autoFocus={idx === 0}
                                />
                            ))}
                        </div>
                        {error && <p className="text-red-400 text-sm mb-6 animate-pulse font-medium">{error}</p>}
                        <button 
                            onClick={() => { setStage('profiles'); setPin(['','','','']); }}
                            className="text-gray-400 hover:text-white text-sm uppercase tracking-widest border border-gray-600 hover:border-white px-8 py-2.5 rounded transition-all duration-300"
                        >
                            Voltar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginScreen;
