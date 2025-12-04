
import React from 'react';
import type { Destination } from './types';
import { 
    SparklesIcon,
    SearchIcon,
    CheckShieldIcon
} from './components/icons';

export const destinations: Destination[] = [
    {
        id: 1,
        title: "Rio > Curitiba (10 a 17/Jan)",
        category: "Assessoria Essencial",
        places: ['Rio de Janeiro', 'Curitiba'],
        description: 'Opções de voos diretos para o período selecionado.\n\nAZUL:\n- Geral: 10x sem juros.\n- Azul Itaú: Até 12x sem juros.\n\nLATAM:\n- Geral: Até 4x sem juros.\n- LATAM Pass Itaú: Até 10x sem juros (Min R$ 70).\n\n*Valores e condições para compra direta no site das cias aéreas.*',
        themeColor: '#0ea5e9', // Sky Blue
        icon: React.createElement(SearchIcon),
        imageUrl: 'https://images.unsplash.com/photo-1568453229864-754687002088?q=80&w=1920&auto=format&fit=crop', // Jardim Botanico
        carTrips: [],
        accommodations: [],
        additionalCosts: [
            { description: 'Taxa de Assessoria', amount: 150.00, icon: React.createElement(SparklesIcon), details: 'Serviço Personalizado' }
        ]
    },
    {
        id: 2,
        title: "Assessoria Completa (Em breve)",
        category: "Assessoria Completa",
        places: ['Rio de Janeiro', 'Curitiba'],
        description: 'Pacotes completos com hospedagem e passeios exclusivos.\n\nAguarde novidades para este destino.',
        themeColor: '#E60026', // Latam Redish
        icon: React.createElement(CheckShieldIcon),
        imageUrl: 'https://images.unsplash.com/photo-1596476174624-9b883023240e?q=80&w=1920&auto=format&fit=crop', // Opera de Arame
        carTrips: [],
        accommodations: [],
        additionalCosts: [
            { description: 'Taxa de Assessoria Completa', amount: 250.00, icon: React.createElement(CheckShieldIcon), details: 'Planejamento + Reservas' }
        ]
    }
];
