
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUsers } from '../services/userService';
import { LogoIcon, PlaneTakeoffIcon } from './icons';
import type { User } from '../types';

const LoginScreen: React.FC = () => {
    const { login } = useAuth();
    const users = getUsers();
    const [stage, setStage] = useState<'splash' | 'profiles' | 'password' | 'transition'>('splash');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [pin, setPin] = useState(['', '', '', '']);
    const [error, setError] = useState('');

    // Estágio 1: Splash Screen (2.5s)
    useEffect(() => {
        const timer = setTimeout(() => {
            setStage('profiles');
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

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
                // Simula a animação de transição antes de logar de fato
                setTimeout(() => {
                    if (selectedUser) login(selectedUser.id);
                }, 3000);
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
            <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
                <div className="animate-pulse">
                    <LogoIcon className="h-40 w-40 animate-bounce-slow" />
                </div>
            </div>
        );
    }

    if (stage === 'transition') {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
                {/* Animação do avião traçando a rota */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path 
                        id="flightPath" 
                        d="M -100, 500 Q 400, 200 800, 500 T 2000, 300" 
                        fill="none" 
                        stroke="rgba(34, 197, 94, 0.5)" 
                        strokeWidth="4"
                        strokeDasharray="10 10"
                    >
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" fill="freeze" />
                    </path>
                    <g>
                        <PlaneTakeoffIcon className="h-16 w-16 text-white rotate-45" />
                        <animateMotion dur="3s" rotate="auto" fill="freeze">
                            <mpath href="#flightPath" />
                        </animateMotion>
                    </g>
                </svg>
                <div className="z-10 text-center animate-fade-in">
                    <LogoIcon className="h-32 w-32 mx-auto mb-6 animate-spin-slow" />
                    <h2 className="text-3xl font-bold text-white tracking-widest uppercase">Decolando...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center p-4 relative font-sans">
            {/* Logo Topo Esquerdo (Estilo Netflix) */}
            <div className="absolute top-4 left-4 md:top-8 md:left-12 opacity-80">
                 <div className="flex items-center space-x-2">
                    <LogoIcon className="h-10 w-10" />
                    <span className="text-xl font-extrabold text-white tracking-tight">Check-in,<span className="text-lime-400">GO!</span></span>
                 </div>
            </div>

            <div className="w-full max-w-3xl text-center z-10 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-normal text-white mb-12 drop-shadow-md">
                    {stage === 'password' ? `Olá, ${selectedUser?.name}.` : 'Quem está viajando?'}
                </h1>

                {stage === 'profiles' && (
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {users.map(user => (
                            <div 
                                key={user.id} 
                                onClick={() => handleUserSelect(user)} 
                                className="group flex flex-col items-center cursor-pointer transition-all duration-300"
                            >
                                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-white transition-all duration-200 transform group-hover:scale-105">
                                    <img 
                                        src={user.avatar} 
                                        alt={user.name} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <p className="text-gray-400 text-xl group-hover:text-white transition-colors">{user.name}</p>
                            </div>
                        ))}
                        {/* Botão Adicionar Perfil (Visual) */}
                        <div className="group flex flex-col items-center cursor-not-allowed opacity-50 hover:opacity-70 transition-opacity">
                             <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full flex items-center justify-center bg-[#2b2b2b] border-4 border-transparent group-hover:border-gray-400">
                                <span className="text-6xl text-gray-400">+</span>
                             </div>
                             <p className="text-gray-400 text-xl">Adicionar</p>
                        </div>
                    </div>
                )}

                {stage === 'password' && (
                    <div className="bg-black/80 p-8 rounded-lg max-w-md mx-auto border border-gray-800 shadow-2xl">
                        <p className="text-gray-400 mb-6 text-sm">Digite sua senha para acessar (1234)</p>
                        <div className="flex justify-center gap-4 mb-6">
                            {pin.map((digit, idx) => (
                                <input
                                    key={idx}
                                    id={`pin-${idx}`}
                                    type="password"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handlePinChange(idx, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(idx, e)}
                                    className="w-12 h-14 bg-[#333] border border-transparent focus:border-white focus:bg-[#444] rounded text-center text-white text-2xl outline-none transition-all"
                                    autoFocus={idx === 0}
                                />
                            ))}
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4 animate-pulse">{error}</p>}
                        <button 
                            onClick={() => { setStage('profiles'); setPin(['','','','']); }}
                            className="text-gray-500 hover:text-white text-sm uppercase tracking-wider border border-gray-600 px-6 py-2 rounded hover:border-white transition-all"
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
