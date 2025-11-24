
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
    id: 28,
    title: 'Pousada Sakura Rio Mar',
    subtitle: '2 diárias em Ilha Grande (Abraão)',
    savedDate: '2024-07-29 21:00',
    totalPrice: 648.00,
    sourceUrl: 'https://www.booking.com/hotel/br/bella-tulip.pt-br.html',
    events: [
        {
            type: 'accommodation',
            startTime: '14:00',
            endTime: '12:00',
            startDate: '20/12/2025',
            endDate: '22/12/2025',
            startLocation: 'Ilha Grande',
            endLocation: 'Pousada Sakura Rio Mar',
            duration: '2 noites',
            details: '2 adultos',
            company: { name: 'Booking.com', logo: React.createElement(BookingLogoIcon) },
        }
    ]
  },
  {
    id: 27,
    title: 'CCR Barcas: Mangaratiba → Ilha Grande',
    subtitle: 'Passagem só de ida',
    savedDate: '2024-07-28 12:00',
    totalPrice: 20.50,
    sourceUrl: 'http://barcasrio.com.br/linhas_horarios/mangaratiba-ilha-grande/',
    events: [
      {
        type: 'ship',
        startTime: '08:00',
        endTime: '09:50',
        startDate: '20/12',
        endDate: '20/12',
        startLocation: 'Porto de Mangaratiba',
        endLocation: 'Vila do Abraão, Ilha Grande',
        duration: '1h 50m',
        details: 'Operando normalmente',
        company: { name: 'CCR Barcas', logo: React.createElement(CCRBarcasLogoIcon) },
      }
    ]
  },
  {
    id: 26,
    title: 'ClickBus: Rio de Janeiro → Paraty',
    subtitle: 'Ida e Volta · Semi-Leito · 1 passageiro',
    savedDate: '2024-07-28 10:00',
    totalPrice: 215.80,
    sourceUrl: 'https://www.clickbus.com.br/',
    events: [
      {
        type: 'bus',
        startTime: '08:00',
        endTime: '12:30',
        startDate: '20/12',
        endDate: '20/12',
        startLocation: 'Rodoviária Novo Rio',
        endLocation: 'Rodoviária de Paraty',
        duration: '4h 30m',
        details: 'Viação Costa Verde',
        company: { name: 'ClickBus', logo: React.createElement(ClickBusLogoIcon, { className: "h-8 w-auto" }) },
      },
      {
        type: 'bus',
        startTime: '14:00',
        endTime: '18:30',
        startDate: '24/12',
        endDate: '24/12',
        startLocation: 'Rodoviária de Paraty',
        endLocation: 'Rodoviária Novo Rio',
        duration: '4h 30m',
        details: 'Viação Costa Verde',
        company: { name: 'ClickBus', logo: React.createElement(ClickBusLogoIcon, { className: "h-8 w-auto" }) },
      }
    ]
  }
];
