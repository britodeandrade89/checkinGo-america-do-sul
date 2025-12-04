
import React from 'react';
import type { Destination } from './types';
import { 
    SparklesIcon,
    SearchIcon
} from './components/icons';

export const destinations: Destination[] = [
    {
        id: 1,
        title: "Opção 1: Assessoria Essencial",
        category: "Serviços Demonstrativos",
        places: ['Rio de Janeiro', 'Curitiba'],
        description: 'Busca de passagens aéreas pelo melhor valor, com monitoramento de atualizações regulares e identificação da melhor oportunidade (custo-benefício, horários estratégicos).',
        themeColor: '#0ea5e9', // Sky Blue
        icon: React.createElement(SearchIcon),
        // Imagem do Jardim Botânico de Curitiba
        imageUrl: 'https://images.unsplash.com/photo-1568453229864-754687002088?q=80&w=1920&auto=format&fit=crop', 
        carTrips: [],
        accommodations: [],
        additionalCosts: [
            { description: 'Taxa de Assessoria', amount: 150.00, icon: React.createElement(SparklesIcon), details: 'Serviço Personalizado' }
        ]
    }
];
