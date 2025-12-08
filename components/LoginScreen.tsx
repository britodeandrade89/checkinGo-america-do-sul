
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUsers } from '../services/userService';
import type { User } from '../types';

const LoginScreen: React.FC = () => {
    const { login } = useAuth();
    const users = getUsers();
    const [stage, setStage] = useState<'splash' | 'intro-anim' | 'profiles' | 'password'>('splash');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [pin, setPin] = useState(['', '', '', '']);
    const [error, setError] = useState('');

    useEffect(() => {
        // Sequência de animação estilo Netflix
        const splashTimer = setTimeout(() => setStage('intro-anim'), 1000);
        const animTimer = setTimeout(() => setStage('profiles'), 2800); // Tempo do "Ta-dum" + zoom
        
        return () => {
            clearTimeout(splashTimer);
            clearTimeout(animTimer);
        };
    }, []);

    const handleUserSelect = (user: User) => {
        setSelectedUser(user);
        if (user.pin) {
            setStage('password');
            setPin(['', '', '', '']);
            setError('');
        } else {
            login(user.id);
        }
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
            const targetPin = selectedUser?.pin || '1234';

            if (enteredPin === targetPin) { 
                login(selectedUser!.id);
            } else {
                setError('Senha incorreta.');
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

    if (stage === 'splash') {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                {/* Tela preta inicial muda */}
            </div>
        );
    }

    if (stage === 'intro-anim') {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
                <div className="animate-zoom-in flex items-center justify-center transform origin-center w-full px-4">
                     <img 
                        src="assets/logo.svg" 
                        alt="CHECK-IN, GO!" 
                        className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl"
                     />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center p-4 font-sans animate-fade-in relative">
            {/* Top Logo Small */}
            <div className="absolute top-4 left-4 md:top-6 md:left-12">
                 <img 
                    src="assets/logo.svg" 
                    alt="CHECK-IN, GO!" 
                    className="h-8 md:h-12 w-auto object-contain"
                 />
            </div>

            {/* Edit Button Top Right */}
            <div className="absolute top-4 right-4 md:top-8 md:right-12">
                 <button className="text-gray-400 font-bold text-xs md:text-sm uppercase hover:text-white tracking-widest">Editar</button>
            </div>

            <div className="w-full max-w-4xl text-center z-10 mt-16 md:mt-0">
                <h1 className="text-3xl md:text-5xl font-medium text-white mb-8 md:mb-12 drop-shadow-md">
                    {stage === 'password' ? `Senha de ${selectedUser?.name}` : 'Quem está viajando?'}
                </h1>

                {stage === 'profiles' && (
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {users.map(user => (
                            <div 
                                key={user.id} 
                                onClick={() => handleUserSelect(user)} 
                                className="group flex flex-col items-center cursor-pointer"
                            >
                                <div className="relative w-28 h-28 md:w-40 md:h-40 mb-4 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-200">
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <p className="text-gray-400 text-lg md:text-xl font-normal group-hover:text-white transition-colors duration-200">{user.name}</p>
                            </div>
                        ))}
                        {/* Add Profile Button Simulation */}
                        <div className="group flex flex-col items-center cursor-pointer">
                             <div className="w-28 h-28 md:w-40 md:h-40 mb-4 rounded-md flex items-center justify-center border-2 border-transparent group-hover:bg-white group-hover:border-white transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 group-hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-lg md:text-xl font-normal group-hover:text-white transition-colors">Adicionar</p>
                        </div>
                    </div>
                )}

                {stage === 'password' && selectedUser && (
                    <div className="flex flex-col items-center">
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
                                    className="w-14 h-16 bg-[#333] border border-transparent focus:border-white rounded text-center text-white text-3xl outline-none"
                                    autoFocus={idx === 0}
                                />
                            ))}
                        </div>
                        {error && <p className="text-[#E50914] text-sm mb-6 font-medium">{error}</p>}
                        <button onClick={() => { setStage('profiles'); setPin(['','','','']); }} className="text-gray-400 hover:text-white text-sm uppercase tracking-widest border border-gray-600 hover:border-white px-8 py-2.5 rounded transition-all duration-300">Voltar</button>
                    </div>
                )}
            </div>
            
            {stage === 'profiles' && (
                <div className="absolute bottom-8 md:bottom-12 text-center">
                    <button className="border border-gray-500 text-gray-400 px-6 py-2 uppercase text-sm tracking-widest hover:text-white hover:border-white transition-colors">Gerenciar Perfis</button>
                </div>
            )}
        </div>
    );
};

export default LoginScreen;
