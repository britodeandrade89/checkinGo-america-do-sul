
import type { User, UserData, Itinerary } from '../types';
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
    },
    {
        id: 99,
        name: 'Sou Agente',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
        pin: '1008' // Senha solicitada
    }
];

export const getUsers = (): User[] => {
    return USERS;
};

// Mock data for the Agent view since we can't access other browser's local storage in this demo
export const getAgentClientsData = () => {
    return [
        {
            userId: 1,
            userName: 'André',
            userAvatar: USERS[0].avatar,
            favorites: [
                { ...destinations[0], isFavorite: true }, // Curitiba
                { ...destinations[2], isFavorite: true }  // Premium
            ],
            selectedItineraries: [
                { ...initialItineraries[0], savedDate: 'Hoje, 10:30' } // Azul Voo
            ]
        },
        {
            userId: 2,
            userName: 'Marcelly',
            userAvatar: USERS[1].avatar,
            favorites: [
                { ...destinations[1], isFavorite: true } // Completa
            ],
            selectedItineraries: [
                { ...initialItineraries[2], savedDate: 'Ontem, 18:45' } // Pacote Completo
            ]
        }
    ];
};

// We use a hydration strategy here. 
// React Elements (Icons) cannot be serialized to JSON/LocalStorage.
// So we always load the "static" data (initialItineraries and destinations) from the code imports
// and only merge stateful flags (like isFavorite) from LocalStorage.
export const getUserData = (userId: number): UserData | null => {
    const storageKey = `userData_v40_${userId}`; // Incrementing version to force refresh
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

            // Merge itinerary favorites
            activeData.itineraries = activeData.itineraries.map(it => {
                const storedIt = storedData.itineraries.find(i => i.id === it.id);
                return storedIt ? { ...it, isFavorite: storedIt.isFavorite, monitoring: storedIt.monitoring } : it;
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
        const storageKey = `userData_v40_${userId}`;
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
