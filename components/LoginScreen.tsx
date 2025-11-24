
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUsers } from '../services/userService';
import { LogoIcon } from './icons';

const LoginScreen: React.FC = () => {
    const { login } = useAuth();
    const users = getUsers();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-800 via-blue-500 to-slate-50 p-4 relative overflow-hidden">
             {/* Atmospheric Cloud Effects matching Dashboard */}
            <div className="absolute -top-10 -left-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-20"></div>

            <div className="w-full max-w-md text-center relative z-10">
                <div className="mb-6 animate-bounce-slow">
                     <LogoIcon className="h-28 w-28 mx-auto filter drop-shadow-xl" />
                </div>
                 <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                    Check-in,<span className="text-lime-400">GO!</span>
                </h1>
                <p className="text-white/90 mt-2 font-medium text-lg">Eu planejo, você clica, finaliza e viaja!</p>
                
                <div className="mt-12 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
                    <h2 className="text-xl font-semibold text-white mb-8">Quem está viajando hoje?</h2>
                    <div className="flex justify-center space-x-8">
                        {users.map(user => (
                            <div key={user.id} onClick={() => login(user.id)} className="flex flex-col items-center cursor-pointer group">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-lime-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <img 
                                        src={user.avatar} 
                                        alt={user.name} 
                                        className="w-24 h-24 rounded-full border-4 border-white/50 group-hover:border-lime-400 group-hover:scale-105 transition-all duration-300 shadow-lg relative z-10 object-cover"
                                    />
                                </div>
                                <p className="mt-4 font-bold text-white text-lg group-hover:text-lime-300 transition-colors">{user.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
