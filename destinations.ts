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
        category: "Mochilão",
        places: ['Rio', 'Foz', 'Assunção', 'Buenos Aires'],
        description: 'Roteiro completo passando pelo Paraguai na ida.',
        themeColor: '#0ea5e9', // Sky Blue
        icon: React.createElement(ParaguayFlagIcon),
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
        category: "Mochilão",
        places: ['Rio', 'Foz', 'Puerto Iguazú', 'Buenos Aires'],
        description: 'Roteiro focado em Argentina via Puerto Iguazú.',
        themeColor: '#eab308', // Yellow
        icon: React.createElement(TripleFrontierIcon),
        carTrips: [],
        accommodations: [],
        additionalCosts: [
             { description: 'Entrada Cataratas (Brasileiros)', amount: 180.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Parque das Aves', amount: 160.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Itaipu / Furnas', amount: 100.00, icon: React.createElement(SparklesIcon), details: 'Visita Panorâmica' }
        ]
    }
];