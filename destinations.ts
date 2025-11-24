
import React from 'react';
import type { Destination, AccommodationOption } from './types';
import { 
    SparklesIcon,
    ParkingIcon,
    RouteIcon
} from './components/icons';


export const destinations: Destination[] = [
    {
        id: 40,
        title: "Mochilão América do Sul: Rota das Capitais",
        category: "Internacional",
        places: ['Rio', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires'],
        description: 'Aventura multi-cidades percorrendo Brasil, Paraguai e Argentina.',
        themeColor: '#eab308', // Yellow-500 (cor vibrante para aventura/Flybondi)
        icon: React.createElement(RouteIcon),
        carTrips: [],
        accommodations: [],
    },
    {
        id: 30,
        title: "Fim de Semana em Paraty & Cunha",
        category: "Sudeste",
        places: ['Maricá', 'Paraty', 'Cunha'],
        description: 'Combine o charme colonial de Paraty com a beleza dos campos de lavanda em Cunha em um roteiro único.',
        themeColor: '#8b5cf6', // violet-500
        icon: React.createElement(SparklesIcon),
        carTrips: [
            {
                title: "Trecho 1: Maricá → Paraty (Ida)",
                duration: "aprox. 3h 45min",
                distance: "230 km",
                totalCostOneWay: 164.70,
                fuelCostOneWay: 147.20,
                tollCostOneWay: 17.50,
                details: "Via Rodovia Rio-Santos",
                mapUrl: './assets/angra-map.svg', // Reutilizando mapa genérico da região
            },
            {
                title: "Trecho 2: Paraty ↔ Cunha (Bate-volta)",
                duration: "aprox. 1h 30min",
                distance: "94 km (total)",
                totalCostOneWay: 43.08, // Custo para ida e volta
                fuelCostOneWay: 43.08,
                tollCostOneWay: 0.00,
                details: "Via RJ-165, Rod. Salvador Pacetti",
                mapUrl: './assets/paraty-cunha-map.svg',
            },
            {
                title: "Trecho 3: Paraty → Maricá (Volta)",
                duration: "aprox. 3h 45min",
                distance: "230 km",
                totalCostOneWay: 164.70,
                fuelCostOneWay: 147.20,
                tollCostOneWay: 17.50,
                details: "Via Rodovia Rio-Santos",
                mapUrl: './assets/paraty-santacruz-map.svg', // Reutilizando mapa de volta
            }
        ],
        accommodations: [
            {
                name: 'Azul do Horizonte 5',
                city: 'Paraty',
                rating: 0,
                pricePerNight: 203.50,
                totalPrice: 407,
                nights: 2,
                amenities: ['Wi-Fi', 'Ar-condicionado', 'Estacionamento', 'Cozinha', 'Aceita animais'],
                pros: [
                    'Refúgio tranquilo, ideal para contato com a natureza.',
                    'Próximo a Trindade e Paraty Mirim.',
                    'Acomodação nova e bem decorada.'
                ],
                cons: [
                    'Ainda não possui avaliações (anúncio novo).',
                    'Distante do Centro Histórico, necessita de carro.'
                ],
                distanceToCenter: 'Aprox. 20 min de carro do Centro',
                bookingUrl: 'https://www.airbnb.com.br/rooms/1555105931212403326?adults=2&check_in=2025-12-20&check_out=2025-12-22'
            }
        ],
    },
];
