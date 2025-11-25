import React from 'react';
import type { Destination, AccommodationOption } from './types';
import { 
    SparklesIcon,
    ParaguayFlagIcon,
    TripleFrontierIcon,
    CarIcon,
    FuelIcon,
    TollBoothIcon
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
        // Imagem das Cataratas (CORRIGIDA)
        imageUrl: 'https://images.unsplash.com/photo-1595166311142-28a2a085a01c?q=80&w=1920&auto=format&fit=crop',
        carTrips: [],
        accommodations: [],
        additionalCosts: [
             { description: 'Entrada Cataratas (Brasileiros)', amount: 180.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Parque das Aves', amount: 160.00, icon: React.createElement(SparklesIcon), details: '2 Pessoas (Est.)' },
            { description: 'Itaipu / Furnas', amount: 100.00, icon: React.createElement(SparklesIcon), details: 'Visita Panorâmica' }
        ]
    },
    {
        id: 101,
        title: 'Escapadas de Carro (RJ)',
        category: 'Viagens Curtas',
        places: ['Angra dos Reis', 'Paraty', 'Cunha'],
        description: 'Roteiros de fim de semana saindo do Rio de Janeiro.',
        themeColor: '#10b981', // Emerald
        icon: React.createElement(CarIcon),
        isFavorite: true,
        carTrips: [
            {
                title: 'Fim de Semana em Angra',
                duration: '2h 45m (ida)',
                distance: '160 km (ida)',
                totalCostOneWay: 132.85,
                details: 'Custo total estimado para um trecho da viagem.',
                fuelCostOneWay: 62.85,
                tollCostOneWay: 70.00,
                mapUrl: './assets/angra-map.svg',
                additionalCosts: [
                    { description: 'Combustível (Total)', total: 125.70, icon: React.createElement(FuelIcon) },
                    { description: 'Pedágios (Total)', total: 140.00, icon: React.createElement(TollBoothIcon) },
                ]
            },
            {
                title: 'Fim de Semana em Paraty',
                duration: '4h 15m (ida)',
                distance: '250 km (ida)',
                totalCostOneWay: 174.65,
                details: 'Custo total estimado para um trecho da viagem.',
                fuelCostOneWay: 98.65,
                // FIX: Added the missing 'tollCostOneWay' property to satisfy the 'CarTripLeg' type.
                tollCostOneWay: 76.00,
                additionalCosts: [
                    { description: 'Combustível (Total)', total: 197.30, icon: React.createElement(FuelIcon) },
                    { description: 'Pedágios (Total)', total: 152.00, icon: React.createElement(TollBoothIcon) },
                ]
            }
        ]
    }
];