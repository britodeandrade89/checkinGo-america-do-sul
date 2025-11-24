
import type { User, UserData } from '../types';
import { initialItineraries } from '../itineraries';
import { destinations } from '../destinations';

const USERS: User[] = [
    { 
        id: 1, 
        name: 'André', 
        // Referência visual: Homem negro, cabelo cacheado, estilo urbano
        avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop' 
    },
    { 
        id: 2, 
        name: 'Marcelly', 
        // Referência visual: Mulher negra, cabelo cacheado volumoso, elegante (Taís Araújo vibe)
        avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=200&auto=format&fit=crop' 
    },
];

export const getUsers = (): User[] => {
    return USERS;
};

// Changed key to v12 to force a reset and clear old items
export const getUserData = (userId: number): UserData | null => {
    const data = localStorage.getItem(`userData_v12_${userId}`);
    if (!data) return null;
    
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error(`Erro ao carregar dados do usuário ${userId}:`, error);
        return null;
    }
};

export const saveUserData = (userId: number, data: UserData): void => {
    try {
        localStorage.setItem(`userData_v12_${userId}`, JSON.stringify(data));
    } catch (error) {
        console.error(`Erro ao salvar dados do usuário ${userId}:`, error);
    }
};

export const initializeUserData = (userId: number): UserData => {
    const defaultData: UserData = {
        itineraries: initialItineraries,
        destinations: destinations,
    };
    saveUserData(userId, defaultData);
    return defaultData;
};
