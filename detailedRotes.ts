
import type { DetailedRoute } from './types';

export const detailedRoutes: Record<number, DetailedRoute> = {
    41: {
        id: 41,
        title: 'Opção 1: Rota via Assunção',
        itinerary: [
             {
                city: 'Foz do Iguaçu & Assunção',
                duration: "Início",
                days: [
                    { day: 1, title: "Saída do Rio", activities: ["Ônibus para Foz do Iguaçu."] },
                    { day: 3, title: "Ida ao Paraguai", activities: ["Ônibus CDE para Assunção.", "Check-in Villa Morra."] },
                ]
             },
             {
                city: 'Buenos Aires',
                duration: "Principal",
                days: [
                    { day: 1, title: "Chegada na Argentina", activities: ["Voo Assunção -> Buenos Aires."] },
                ]
             }
        ],
        accommodations: []
    },
    42: {
        id: 42,
        title: 'Opção 2: Rota Direta (Iguazú)',
        itinerary: [
             {
                city: 'Foz do Iguaçu',
                duration: "Conexão",
                days: [
                    { day: 1, title: "Saída do Rio", activities: ["Ônibus para Foz do Iguaçu."] },
                    { day: 2, title: "Travessia", activities: ["Ida para Puerto Iguazú.", "Voo para Buenos Aires."] },
                ]
             },
             {
                city: 'Buenos Aires',
                duration: "Principal",
                days: [
                    { day: 1, title: "Estadia", activities: ["Explorar a capital portenha."] },
                ]
             }
        ],
        accommodations: []
    }
  };
