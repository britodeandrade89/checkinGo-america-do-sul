
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
  // --- OPÇÃO 1: Rota via Assunção ---

  {
    id: 201,
    title: '1. Ônibus: Rio → Foz do Iguaçu',
    subtitle: 'Opção 1 · Ida · 2 Pessoas + Taxas',
    savedDate: '2024-05-21 10:00',
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
            warning: 'Início da Viagem'
        }
    ],
    monitoring: { enabled: false }
  },
  {
    id: 202,
    title: '2. Ônibus NSA: CDE → Assunção',
    subtitle: 'Opção 1 · Fronteira Foz',
    savedDate: '2024-05-21 11:00',
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
            details: '2 Adultos',
            company: { name: 'NSA', logo: React.createElement(NsaLogoIcon) },
            warning: 'Saída de Ciudad del Este'
        }
    ],
    monitoring: { enabled: false }
  },
  {
    id: 203,
    title: '3. Airbnb: Villa Morra Condo',
    subtitle: 'Opção 1 · Assunção (3 Noites)',
    savedDate: '2024-05-21 12:00',
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
            details: '2 Hóspedes',
            company: { name: 'Airbnb', logo: React.createElement(AirbnbLogoIcon) },
            warning: ''
        }
    ],
    monitoring: { enabled: false }
  },
  {
    id: 204,
    title: '4. Flybondi: Assunção → Buenos Aires',
    subtitle: 'Opção 1 · Voo Conjunto',
    savedDate: '2024-05-21 13:00',
    totalPrice: 1139.02,
    sourceUrl: 'https://flybondi.com/br/',
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
            details: '2 Passageiros',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Inclui Bagagens'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: '2x Mochilas' },
        carryOn: { status: 'Inclusa', details: '1x 12kg' },
        checked: { status: 'Inclusa', details: '1x 20kg' }
    },
    monitoring: { enabled: true }
  },
  {
    id: 205,
    title: '5. Airbnb: Estúdio em Buenos Aires',
    subtitle: 'Opção 1 · Estadia BUE',
    savedDate: '2024-05-21 14:00',
    totalPrice: 481.00,
    sourceUrl: 'https://www.airbnb.com.br/',
    events: [
        {
            type: 'accommodation',
            startTime: 'Check-in',
            endTime: 'Check-out',
            startDate: '01/01/2026',
            endDate: '10/01/2026',
            startLocation: 'Buenos Aires',
            endLocation: 'Estúdio Moderno',
            duration: '9 noites',
            details: 'Data flexível no período',
            company: { name: 'Airbnb', logo: React.createElement(AirbnbLogoIcon) },
            warning: 'Ajustar datas exatas'
        }
    ],
    monitoring: { enabled: false }
  },
  {
    id: 206,
    title: '6. Flybondi: Buenos Aires → Puerto Iguazú',
    subtitle: 'Opção 1 · Retorno Argentina',
    savedDate: '2024-05-21 15:00',
    totalPrice: 707.06,
    sourceUrl: 'https://flybondi.com/br/',
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
            details: '2 Passageiros',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Retorno'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochilas' },
        carryOn: { status: 'Taxa Adicional', details: '-' },
        checked: { status: 'Inclusa', details: '1x 20kg' }
    },
    monitoring: { enabled: true }
  },
  {
    id: 207,
    title: '7. Ônibus: Foz do Iguaçu → Rio',
    subtitle: 'Opção 1 · Volta p/ Casa',
    savedDate: '2024-05-21 16:00',
    totalPrice: 907.38,
    sourceUrl: 'https://www.passagens.rodoviariadorio.com.br/',
    events: [
        {
            type: 'bus',
            startTime: '14:00',
            endTime: '15:25',
            startDate: '11/01/2026',
            endDate: '12/01/2026',
            startLocation: 'Foz do Iguaçu (PR)',
            endLocation: 'Novo Rio (RJ)',
            duration: '1d 1h 25m',
            details: '2 Adultos · Semi-Leito',
            company: { name: 'Nordeste Transportes', logo: React.createElement(NordesteLogoIcon) },
            warning: 'Fim da Viagem'
        }
    ],
    monitoring: { enabled: false }
  },

  // --- OPÇÃO 2: Rota Direta (Iguazú) ---

  {
    id: 301,
    title: '1. Ônibus: Rio → Foz do Iguaçu',
    subtitle: 'Opção 2 · Ida · 2 Pessoas + Taxas',
    savedDate: '2024-05-21 10:00',
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
            warning: 'Início da Viagem'
        }
    ],
    monitoring: { enabled: false }
  },
  {
    id: 302,
    title: '2. Flybondi: Puerto Iguazú → Buenos Aires',
    subtitle: 'Opção 2 · Ida Direta',
    savedDate: '2024-05-21 13:00',
    totalPrice: 573.64,
    sourceUrl: 'https://flybondi.com/br/',
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
            details: '2 Passageiros',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Saída de Puerto Iguazú'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochilas' },
        carryOn: { status: 'Taxa Adicional', details: '-' },
        checked: { status: 'Inclusa', details: '1x 20kg' }
    },
    monitoring: { enabled: true }
  },
  {
    id: 303,
    title: '3. Airbnb: Estúdio em Buenos Aires',
    subtitle: 'Opção 2 · Estadia BUE',
    savedDate: '2024-05-21 14:00',
    totalPrice: 481.00,
    sourceUrl: 'https://www.airbnb.com.br/',
    events: [
        {
            type: 'accommodation',
            startTime: 'Check-in',
            endTime: 'Check-out',
            startDate: '01/01/2026',
            endDate: '10/01/2026',
            startLocation: 'Buenos Aires',
            endLocation: 'Estúdio Moderno',
            duration: '9 noites',
            details: 'Data flexível no período',
            company: { name: 'Airbnb', logo: React.createElement(AirbnbLogoIcon) },
            warning: 'Host: Mora'
        }
    ],
    monitoring: { enabled: false }
  },
  {
    id: 304,
    title: '4. Flybondi: Buenos Aires → Puerto Iguazú',
    subtitle: 'Opção 2 · Retorno Argentina',
    savedDate: '2024-05-21 15:00',
    totalPrice: 707.06,
    sourceUrl: 'https://flybondi.com/br/',
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
            details: '2 Passageiros',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Retorno'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochilas' },
        carryOn: { status: 'Taxa Adicional', details: '-' },
        checked: { status: 'Inclusa', details: '1x 20kg' }
    },
    monitoring: { enabled: true }
  },
  {
    id: 305,
    title: '5. Ônibus: Foz do Iguaçu → Rio',
    subtitle: 'Opção 2 · Volta p/ Casa',
    savedDate: '2024-05-21 16:00',
    totalPrice: 907.38,
    sourceUrl: 'https://www.passagens.rodoviariadorio.com.br/',
    events: [
        {
            type: 'bus',
            startTime: '14:00',
            endTime: '15:25',
            startDate: '11/01/2026',
            endDate: '12/01/2026',
            startLocation: 'Foz do Iguaçu (PR)',
            endLocation: 'Novo Rio (RJ)',
            duration: '1d 1h 25m',
            details: '2 Adultos · Semi-Leito',
            company: { name: 'Nordeste Transportes', logo: React.createElement(NordesteLogoIcon) },
            warning: 'Fim da Viagem'
        }
    ],
    monitoring: { enabled: false }
  }
];
