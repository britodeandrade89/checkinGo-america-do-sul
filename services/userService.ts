
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
        name: 'Demonstrativo',
        avatar: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop',
        // No PIN for public access
    }
];

export const getUsers = (): User[] => {
    return USERS;
};

// We use a hydration strategy here. 
// React Elements (Icons) cannot be serialized to JSON/LocalStorage.
// So we always load the "static" data (initialItineraries and destinations) from the code imports
// and only merge stateful flags (like isFavorite) from LocalStorage.
export const getUserData = (userId: number): UserData | null => {
    const storageKey = `userData_v27_${userId}`; // Incrementing version to force refresh
    const storedDataString = localStorage.getItem(storageKey);
    
    // Start with fresh data from code to ensure Icons are valid React Elements
    const activeData: UserData = {
        itineraries: [...initialItineraries],
        destinations: [...destinations]
    };

    if (storedDataString) {
        try {
            const storedData = JSON.parse(storedDataString) as UserData;
            
            // 1. Merge Favorites from stored destinations into the fresh code destinations
            activeData.destinations = activeData.destinations.map(dest => {
                const storedDest = storedData.destinations.find(d => d.id === dest.id);
                return storedDest ? { ...dest, isFavorite: storedDest.isFavorite } : dest;
            });

            // 2. Identify and append any NEW itineraries the user created (e.g. via Image Upload)
            // These IDs won't exist in the initialItineraries list.
            const initialIds = new Set(initialItineraries.map(i => i.id));
            const userAddedItineraries = storedData.itineraries.filter(i => !initialIds.has(i.id));
            
            // Note: User added itineraries might still have broken icons if they relied on React Elements in state,
            // but this fixes the core app crash for the main demo data.
            activeData.itineraries = [...activeData.itineraries, ...userAddedItineraries];

        } catch (error) {
            console.error(`Erro ao carregar/mesclar dados do usuário ${userId}:`, error);
            // If parse fails, we fall back to activeData (fresh code data)
        }
    } else {
        // First run for this version, save the default state
        saveUserData(userId, activeData);
    }

    return activeData;
};

export const saveUserData = (userId: number, data: UserData): void => {
    try {
        const storageKey = `userData_v27_${userId}`;
        localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (error) {
        console.error(`Erro ao salvar dados do usuário ${userId}:`, error);
    }
};

export const initializeUserData = (userId: number): UserData => {
    // This is primarily used by the AuthContext login if no data exists, 
    // but logic is now handled in getUserData
    return getUserData(userId)!;
};
