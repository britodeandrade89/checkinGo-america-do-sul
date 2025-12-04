
import React from 'react';
import type { Itinerary } from './types';
import { 
    AzulLogoIcon,
    LatamLogoIcon
} from './components/icons';

export const initialItineraries: Itinerary[] = [
  // --- OPÇÃO 1: Assessoria Essencial ---
  {
    id: 101,
    title: 'Voo: Rio de Janeiro ⇄ Curitiba (Azul)',
    subtitle: 'Melhor Custo-Benefício · Aproveitamento Máximo',
    savedDate: '2025-02-19 10:00',
    totalPrice: 435.00,
    sourceUrl: 'https://www.google.com/travel/flights/booking?tfs=CBwQAhpFEgoyMDI2LTAxLTEwIiAKA0dJRxIKMjAyNi0wMS0xMBoDQ1dCKgJBRDIENDIwOGoMCAISCC9tLzA2Z21ycgcIARIDQ1dCGkUSCjIwMjYtMDEtMTciIAoDQ1dCEgoyMDI2LTAxLTE3GgNHSUcqAkFEMgQyNzg1agcIARIDQ1dCcgwIAhIIL20vMDZnbXJAAUgBcAGCAQsI____________AZgBAQ&tfu=CmxDalJJZG5sc2NHNUlRamM1YlZGQlEweDVjVUZDUnkwdExTMHRMUzB0TFdObGVuY3hOMEZCUVVGQlIydDRiMEpSUWxCTVZXMUJFZ1pCUkRJM09EVWFDd2pzaEFNUUFob0RRbEpNT0J4d3ZVaz0SAggAIgA&hl=pt-BR&gl=br&curr=BRL',
    events: [
        {
            type: 'flight',
            startTime: '05:05',
            endTime: '06:35',
            startDate: '10/01/2026',
            endDate: '10/01/2026',
            startLocation: 'GIG',
            endLocation: 'CWB',
            duration: '1h 30m',
            details: 'Direto · Chegada Cedo',
            company: { name: 'Azul', logo: React.createElement(AzulLogoIcon) },
            warning: 'Ida'
        },
        {
            type: 'flight',
            startTime: '23:20',
            endTime: '00:45',
            startDate: '17/01/2026',
            endDate: '18/01/2026',
            startLocation: 'CWB',
            endLocation: 'GIG',
            duration: '1h 25m',
            details: 'Direto · Retorno Tarde',
            company: { name: 'Azul', logo: React.createElement(AzulLogoIcon) },
            warning: 'Volta (+1)'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila/Bolsa' },
        carryOn: { status: 'Inclusa', details: '10kg de Mão' },
        checked: { status: 'Taxa Adicional', details: 'Cobrada à parte' }
    },
    monitoring: { enabled: true }
  },
  {
    id: 102,
    title: 'Voo: Rio de Janeiro ⇄ Curitiba (LATAM)',
    subtitle: 'Opção Noturna · Voo Direto',
    savedDate: '2025-02-19 10:30',
    totalPrice: 715.00,
    sourceUrl: 'https://www.google.com/travel/flights/booking?tfs=CBwQAhpLEgoyMDI2LTAxLTEwIiAKA0dJRxIKMjAyNi0wMS0xMBoDQ1dCKgJMQTIEMzQ0MmoMCAISCC9tLzA2Z21ycg0IAhIJL20vMDI4bXByGksSCjIwMjYtMDEtMTciIAoDQ1dCEgoyMDI2LTAxLTE3GgNHSUcqAkxBMgQzNTQxag0IAhIJL20vMDI4bXBycgwIAhIIL20vMDZnbXJAAUgBcAGCAQsI____________AZgBAQ&tfu=CmxDalJJYldadVVWTmpjRlU0VDNkQlFtZG9jMEZDUnkwdExTMHRMUzB0TFMxalozTnRORUZCUVVGQlIydDRkSFJCVFd0amRtTkJFZ1pNUVRNMU5ERWFDd2k3MFFRUUFob0RRbEpNT0J4d2ozQT0SAggAIgYKATESATA&hl=pt-BR&gl=br&curr=BRL',
    events: [
        {
            type: 'flight',
            startTime: '22:50',
            endTime: '00:05',
            startDate: '10/01/2026',
            endDate: '11/01/2026',
            startLocation: 'GIG',
            endLocation: 'CWB',
            duration: '1h 15m',
            details: 'Direto · Chegada Madrugada',
            company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon) },
            warning: 'Ida (+1)'
        },
        {
            type: 'flight',
            startTime: '09:35',
            endTime: '11:00',
            startDate: '17/01/2026',
            endDate: '17/01/2026',
            startLocation: 'CWB',
            endLocation: 'GIG',
            duration: '1h 25m',
            details: 'Direto · Retorno Manhã',
            company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon) },
            warning: 'Volta'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila/Bolsa' },
        carryOn: { status: 'Inclusa', details: '10kg de Mão' },
        checked: { status: 'Taxa Adicional', details: 'Cobrada à parte' }
    },
    monitoring: { enabled: true }
  }
];
