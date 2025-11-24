
import React from 'react';
import type { Itinerary } from './types';
import { 
    LatamLogoIcon, 
    MaxMilhasLogoIcon,
    AzulLogoIcon,
    DecolarLogoIcon,
    BookingLogoIcon,
    ClickBusLogoIcon,
    CCRBarcasLogoIcon,
    GolLogoIcon,
    TripLogoIcon,
    ExpediaLogoIcon,
    ViajaNetLogoIcon,
    ZupperLogoIcon,
    KiwiLogoIcon,
    FlybondiLogoIcon,
    JetSmartLogoIcon,
    NsaLogoIcon,
    AirbnbLogoIcon,
    NordesteLogoIcon,
} from './components/icons';

export const initialItineraries: Itinerary[] = [
  {
    id: 114,
    title: 'Ônibus: Rio → Foz do Iguaçu (Nordeste)',
    subtitle: 'Opção Terrestre · 2 Pessoas + Taxas',
    savedDate: '2024-05-21 17:00',
    totalPrice: 907.38,
    sourceUrl: 'https://www.passagens.rodoviariadorio.com.br/',
    events: [
        {
            type: 'bus',
            startTime: '10:00',
            endTime: '11:25',
            startDate: '26/12/2025',
            endDate: '27/12/2025',
            startLocation: 'Novo Rio (RJ)',
            endLocation: 'Foz do Iguaçu (PR)',
            duration: '1d 1h 25m',
            details: '2 Adultos · Semi-Leito',
            company: { name: 'Nordeste Transportes', logo: React.createElement(NordesteLogoIcon) },
            warning: 'Taxas inclusas (est. R$ 149,00)'
        }
    ],
    monitoring: {
        enabled: false
    }
  },
  {
    id: 110,
    title: 'Flybondi: Assunção → Buenos Aires (2 Pessoas)',
    subtitle: 'Mochilão América do Sul · Voo Conjunto c/ Bagagens',
    savedDate: '2024-05-21 16:30',
    totalPrice: 1139.02,
    sourceUrl: 'https://flybondi.com/br/search/rates?origin=ASU&destination=BUE&departure=2026-01-01&adults=2',
    events: [
        {
            type: 'flight',
            startTime: '10:25',
            endTime: '12:20',
            startDate: '01/01/2026',
            endDate: '01/01/2026',
            startLocation: 'ASU',
            endLocation: 'AEP',
            duration: '1h 55m',
            details: 'Voo FO5851 · 2 Passageiros',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Inclui: 1x 12kg e 1x 20kg'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: '2x Mochilas (até 6kg)' },
        carryOn: { status: 'Inclusa', details: '1x Mala de Mão (12kg)' },
        checked: { status: 'Inclusa', details: '1x Mala Despachada (20kg)' }
    },
    monitoring: {
        enabled: true
    }
  },
  {
    id: 111,
    title: 'Flybondi: Puerto Iguazú → Buenos Aires (2 Pessoas)',
    subtitle: 'Opção 2: Saindo de Foz · C/ Bagagem 20kg',
    savedDate: '2024-05-21 16:40',
    totalPrice: 573.64,
    sourceUrl: 'https://flybondi.com/br/search/rates?origin=IGR&destination=AEP&departure=2026-01-01&adults=2',
    events: [
        {
            type: 'flight',
            startTime: '15:15',
            endTime: '17:05',
            startDate: '01/01/2026',
            endDate: '01/01/2026',
            startLocation: 'IGR',
            endLocation: 'AEP',
            duration: '1h 50m',
            details: 'Voo FO5105 · 2 Passageiros',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Saída de Puerto Iguazú (Argentina)'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochilas' },
        carryOn: { status: 'Taxa Adicional', details: 'Não incluso' },
        checked: { status: 'Inclusa', details: '1x 20kg Inclusa' }
    },
    monitoring: {
        enabled: true
    }
  },
  {
    id: 115,
    title: 'Flybondi: Buenos Aires → Puerto Iguazú (2 Pessoas)',
    subtitle: 'Mochilão Volta · Voo Interno Argentina',
    savedDate: '2024-05-21 17:15',
    totalPrice: 707.06,
    sourceUrl: 'https://flybondi.com/br/search/rates?origin=AEP&destination=IGR&departure=2026-01-10&adults=2',
    events: [
        {
            type: 'flight',
            startTime: '19:00',
            endTime: '21:00',
            startDate: '10/01/2026',
            endDate: '10/01/2026',
            startLocation: 'AEP',
            endLocation: 'IGR',
            duration: '2h 00m',
            details: 'Voo FO5110 · 2 Passageiros',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Retorno via Puerto Iguazú'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochilas' },
        carryOn: { status: 'Taxa Adicional', details: 'Não incluso' },
        checked: { status: 'Inclusa', details: '1x 20kg Inclusa' }
    },
    monitoring: {
        enabled: true
    }
  },
  {
    id: 108,
    title: 'Ônibus NSA: Ciudad del Este → Assunção',
    subtitle: 'Mochilão Ida · Saindo da fronteira de Foz',
    savedDate: '2024-05-21 16:15',
    totalPrice: 210.37,
    sourceUrl: 'https://www.nsa.com.py/',
    events: [
        {
            type: 'bus',
            startTime: '18:30',
            endTime: '22:42',
            startDate: '29/12/2025',
            endDate: '29/12/2025',
            startLocation: 'CDE',
            endLocation: 'ASU',
            duration: '4h 12m',
            details: '2 Adultos · Convencional',
            company: { name: 'NSA', logo: React.createElement(NsaLogoIcon) },
            warning: 'Saída de Ciudad del Este'
        }
    ],
    monitoring: {
        enabled: false
    }
  },
  {
    id: 109,
    title: 'Airbnb: Villa Morra Condo (Assunção)',
    subtitle: 'Mochilão Estadia · Piscina e Wi-Fi',
    savedDate: '2024-05-21 16:20',
    totalPrice: 681.00,
    sourceUrl: 'https://www.airbnb.com.br/rooms/1481095006482438019',
    events: [
        {
            type: 'accommodation',
            startTime: 'Check-in',
            endTime: 'Check-out',
            startDate: '28/12/2025',
            endDate: '01/01/2026',
            startLocation: 'Assunção',
            endLocation: 'Villa Morra Condo',
            duration: '4 noites',
            details: 'Espaço inteiro · 2 Hóspedes',
            company: { name: 'Airbnb', logo: React.createElement(AirbnbLogoIcon) },
            warning: 'Host: Glen (Superhost)'
        }
    ],
    monitoring: {
        enabled: false
    }
  },
  {
    id: 113,
    title: 'Airbnb: Villa Morra Condo (Opção 2 - 3 Noites)',
    subtitle: 'Mochilão Estadia Curta · Assunção',
    savedDate: '2024-05-21 16:50',
    totalPrice: 510.75,
    sourceUrl: 'https://www.airbnb.com.br/rooms/1481095006482438019',
    events: [
        {
            type: 'accommodation',
            startTime: 'Check-in',
            endTime: 'Check-out',
            startDate: '29/12/2025',
            endDate: '01/01/2026',
            startLocation: 'Assunção',
            endLocation: 'Villa Morra Condo',
            duration: '3 noites',
            details: 'Espaço inteiro · 2 Hóspedes',
            company: { name: 'Airbnb', logo: React.createElement(AirbnbLogoIcon) },
            warning: 'Opção Reduzida'
        }
    ],
    monitoring: {
        enabled: false
    }
  },
  {
    id: 116,
    title: 'Airbnb: Estúdio em Buenos Aires',
    subtitle: 'Estadia 3 Noites · Perto de tudo',
    savedDate: '2024-05-21 17:20',
    totalPrice: 481.00,
    sourceUrl: 'https://www.airbnb.com.br/rooms/896540006328332014',
    events: [
        {
            type: 'accommodation',
            startTime: 'Check-in',
            endTime: 'Check-out',
            startDate: '13/01/2026',
            endDate: '16/01/2026',
            startLocation: 'Buenos Aires',
            endLocation: 'Estúdio Moderno',
            duration: '3 noites',
            details: 'Espaço inteiro · 2 Hóspedes',
            company: { name: 'Airbnb', logo: React.createElement(AirbnbLogoIcon) },
            warning: 'Host: Mora'
        }
    ],
    monitoring: {
        enabled: false
    }
  },
  {
    id: 107,
    title: 'JetSmart: Buenos Aires → Rio (Opção 13/Jan)',
    subtitle: 'Mochilão Volta · Pack SMART (Bagagem Inclusa)',
    savedDate: '2024-05-21 16:00',
    totalPrice: 1406.46,
    sourceUrl: 'https://booking.jetsmart.com/V2/Flight',
    events: [
        {
            type: 'flight',
            startTime: '12:54',
            endTime: '15:50',
            startDate: '13/01/2026',
            endDate: '13/01/2026',
            startLocation: 'EZE',
            endLocation: 'GIG',
            duration: '2h 56m',
            details: 'Voo JetSmart · Pack SMART',
            company: { name: 'JetSmart', logo: React.createElement(JetSmartLogoIcon) },
            warning: 'Saída de Ezeiza (EZE)'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Item pessoal (10kg)' },
        carryOn: { status: 'Inclusa', details: 'Bagagem de mão inclusa' },
        checked: { status: 'Inclusa', details: 'Bagagem despachada (23kg)' }
    },
    monitoring: {
        enabled: false
    }
  },
  {
    id: 105,
    title: 'JetSmart: Buenos Aires → Rio (Opção 21/Jan)',
    subtitle: 'Mochilão Volta · Tarifa Base',
    savedDate: '2024-05-21 15:30',
    totalPrice: 645.00,
    sourceUrl: 'https://jetsmart.com/br/pt/',
    events: [
        {
            type: 'flight',
            startTime: '11:15',
            endTime: '14:25',
            startDate: '21/01/2026',
            endDate: '21/01/2026',
            startLocation: 'AEP',
            endLocation: 'GIG',
            duration: '3h 10m',
            details: 'Voo JetSmart (Cotação)',
            company: { name: 'JetSmart', logo: React.createElement(JetSmartLogoIcon) },
            warning: 'Bagagem não inclusa (Preço não informado)'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila pequena' },
        carryOn: { status: 'Taxa Adicional', details: 'Preço sob consulta' },
        checked: { status: 'Taxa Adicional', details: 'Preço sob consulta' }
    },
    monitoring: {
        enabled: false
    }
  },
  {
    id: 106,
    title: 'JetSmart: Buenos Aires → Rio (Opção 28/Jan)',
    subtitle: 'Mochilão Volta · Tarifa Base (Mais Barato)',
    savedDate: '2024-05-21 15:35',
    totalPrice: 590.00,
    sourceUrl: 'https://jetsmart.com/br/pt/',
    events: [
        {
            type: 'flight',
            startTime: '06:30',
            endTime: '09:40',
            startDate: '28/01/2026',
            endDate: '28/01/2026',
            startLocation: 'AEP',
            endLocation: 'GIG',
            duration: '3h 10m',
            details: 'Voo JetSmart (Cotação)',
            company: { name: 'JetSmart', logo: React.createElement(JetSmartLogoIcon) },
            warning: 'Bagagem não inclusa (Preço não informado)'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila pequena' },
        carryOn: { status: 'Taxa Adicional', details: 'Preço sob consulta' },
        checked: { status: 'Taxa Adicional', details: 'Preço sob consulta' }
    },
    monitoring: {
        enabled: false
    }
  }
];
