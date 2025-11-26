import type { User, UserData } from '../types';
import { initialItineraries } from '../itineraries';
import { destinations } from '../destinations';

const USERS: User[] = [
    { 
        id: 1, 
        name: 'André', 
        avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop',
        pin: '1234'
    },
    { 
        id: 2, 
        name: 'Marcelly', 
        avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=200&auto=format&fit=crop',
        pin: '1234'
    },
    {
        id: 3,
        name: 'Visitante',
        avatar: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop',
        // No PIN for public access
    }
];

export const getUsers = (): User[] => {
    return USERS;
};

// Changed key to v18 for new user data structure
export const getUserData = (userId: number): UserData | null => {
    const data = localStorage.getItem(`userData_v18_${userId}`);
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
        localStorage.setItem(`userData_v18_${userId}`, JSON.stringify(data));
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
