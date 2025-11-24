
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
    }
];