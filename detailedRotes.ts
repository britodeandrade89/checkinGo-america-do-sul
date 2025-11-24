
import type { DetailedRoute } from './types';

export const detailedRoutes: Record<number, DetailedRoute> = {
    40: {
        id: 40,
        title: 'Mochilão América do Sul',
        itinerary: [
             {
                city: 'Rio → São Paulo → Foz',
                duration: "Trechos Iniciais",
                days: [
                    { day: 1, title: "Início da Jornada", activities: ["Saída do Rio de Janeiro.", "Conexão em São Paulo."] },
                ]
             },
             {
                city: 'Assunção & Buenos Aires',
                duration: "Internacional",
                days: [
                    { day: 1, title: "Chegada em Assunção", activities: ["Explorar o centro histórico.", "Ida para Buenos Aires."] },
                ]
             }
        ],
        accommodations: []
    }
  };