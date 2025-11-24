
import type { User, UserData } from '../types';
import { initialItineraries } from '../itineraries';
import { destinations } from '../destinations';

const USERS: User[] = [
    { id: 1, name: 'André', avatar: 'https://i.pravatar.cc/150?u=andre' },
    { id: 2, name: 'Maria', avatar: 'https://i.pravatar.cc/150?u=maria' },
];

export const getUsers = (): User[] => {
    return USERS;
};

export const getUserData = (userId: number): UserData | null => {
    const data = localStorage.getItem(`userData_${userId}`);
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
        localStorage.setItem(`userData_${userId}`, JSON.stringify(data));
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
