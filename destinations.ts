
import React from 'react';
import type { Destination, AccommodationOption } from './types';
import { 
    SparklesIcon,
    ParaguayFlagIcon,
    TripleFrontierIcon
} from './components/icons';


export const destinations: Destination[] = [
    {
        id: 41,
        title: "Opção 1: Rota via Assunção",
        category: "Mochilão América do Sul",
        places: ['Rio', 'Foz', 'Assunção', 'Buenos Aires'],
        description: 'Roteiro completo passando pelo Paraguai na ida.',
        themeColor: '#0ea5e9', // Sky Blue
        icon: React.createElement(ParaguayFlagIcon),
        // Imagem de Assunção/Pantheon
        imageUrl: 'https://images.unsplash.com/photo-1622186636766-3652d884b86d?q=80&w=1920&auto=format&fit=crop', 
        carTrips: [],
        accommodations: [],
        additionalCosts: [
            { description: 'Entrada Cataratas (Brasileiros)', amount: 180.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Parque das Aves', amount: 160.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Itaipu / Furnas', amount: 100.00, icon: React.createElement(SparklesIcon), details: 'Visita Panorâmica' }
        ]
    },
    {
        id: 42,
        title: "Opção 2: Rota Direta (Iguazú)",
        category: "Mochilão América do Sul",
        places: ['Rio', 'Foz', 'Puerto Iguazú', 'Buenos Aires'],
        description: 'Roteiro focado em Argentina via Puerto Iguazú.',
        themeColor: '#eab308', // Yellow
        icon: React.createElement(TripleFrontierIcon),
        // Imagem das Cataratas
        imageUrl: 'https://images.unsplash.com/photo-1534234828563-02511426b798?q=80&w=1920&auto=format&fit=crop',
        carTrips: [],
        accommodations: [],
        additionalCosts: [
             { description: 'Entrada Cataratas (Brasileiros)', amount: 180.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Parque das Aves', amount: 160.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Itaipu / Furnas', amount: 100.00, icon: React.createElement(SparklesIcon), details: 'Visita Panorâmica' }
        ]
    }
];
