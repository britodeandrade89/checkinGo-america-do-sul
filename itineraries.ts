
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
} from './components/icons';

export const initialItineraries: Itinerary[] = [
  {
    id: 101,
    title: 'Flybondi: Assunção → Buenos Aires (André)',
    subtitle: 'Mochilão América do Sul · Apenas Mochila',
    savedDate: '2024-05-21 14:30',
    totalPrice: 361.72,
    sourceUrl: 'https://flybondi.com/br/search/rates?origin=ASU&destination=BUE&departure=2026-01-01&adults=1',
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
            details: 'Voo FO5851 · 1 Adulto',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Tarifa base'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila (até 6kg)' },
        carryOn: { status: 'Taxa Adicional', details: 'Mala de mão não inclusa' },
        checked: { status: 'Taxa Adicional', details: 'Bagagem despachada não inclusa' }
    },
    monitoring: {
        enabled: true
    },
    priceHistory: [
        { timestamp: new Date('2024-05-20T10:00:00'), price: 359.94 },
        { timestamp: new Date('2024-05-21T14:30:00'), price: 361.72 }
    ]
  },
  {
    id: 102,
    title: 'Flybondi: Assunção → Buenos Aires (Marcelly)',
    subtitle: 'Mochilão América do Sul · C/ Bagagens (12kg + 20kg)',
    savedDate: '2024-05-21 14:35',
    totalPrice: 707.85,
    sourceUrl: 'https://flybondi.com/br/search/rates?origin=ASU&destination=BUE&departure=2026-01-01&adults=1',
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
            details: 'Voo FO5851 · 1 Adulto',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Inclui despacho de bagagem'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila (até 6kg)' },
        carryOn: { status: 'Taxa Adicional', details: 'Mala de mão não inclusa' },
        checked: { status: 'Inclusa', details: '1x 12kg + 1x 20kg Despachadas' }
    },
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
    id: 103,
    title: 'Flybondi: Buenos Aires → Rio (André)',
    subtitle: 'Mochilão Volta (Opção 1 - 17/Jan) · Apenas Mochila',
    savedDate: '2024-05-21 15:00',
    totalPrice: 721.48,
    sourceUrl: 'https://flybondi.com/br/search/rates?origin=BUE&destination=RIO&departure=2026-01-17&adults=1',
    events: [
        {
            type: 'flight',
            startTime: '17:00',
            endTime: '19:55',
            startDate: '17/01/2026',
            endDate: '17/01/2026',
            startLocation: 'EZE',
            endLocation: 'GIG',
            duration: '2h 55m',
            details: 'Voo FO5904 · 1 Adulto',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Atenção: Saída de Ezeiza (EZE)'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila (até 6kg)' },
        carryOn: { status: 'Taxa Adicional', details: 'Mala de mão não inclusa' },
        checked: { status: 'Taxa Adicional', details: 'Bagagem despachada não inclusa' }
    },
    monitoring: {
        enabled: true
    }
  },
  {
    id: 104,
    title: 'Flybondi: Buenos Aires → Rio (Marcelly)',
    subtitle: 'Mochilão Volta (Opção 1 - 17/Jan) · C/ Bagagens (12kg + 20kg)',
    savedDate: '2024-05-21 15:05',
    totalPrice: 1609.19,
    sourceUrl: 'https://flybondi.com/br/search/rates?origin=BUE&destination=RIO&departure=2026-01-17&adults=1',
    events: [
        {
            type: 'flight',
            startTime: '17:00',
            endTime: '19:55',
            startDate: '17/01/2026',
            endDate: '17/01/2026',
            startLocation: 'EZE',
            endLocation: 'GIG',
            duration: '2h 55m',
            details: 'Voo FO5904 · 1 Adulto',
            company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon) },
            warning: 'Atenção: Saída de Ezeiza (EZE)'
        }
    ],
    baggage: {
        personal: { status: 'Inclusa', details: 'Mochila (até 6kg)' },
        carryOn: { status: 'Taxa Adicional', details: 'Mala de mão não inclusa' },
        checked: { status: 'Inclusa', details: '1x 12kg + 1x 20kg Despachadas' }
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