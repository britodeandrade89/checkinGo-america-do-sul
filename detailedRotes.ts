
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
        accommodations: [
             {
                name: "Villa Morra Condo piscina Wi-Fi (#107)",
                city: "Assunção & Buenos Aires",
                rating: 5.0,
                pricePerNight: 170.25, // Derived from 681 / 4
                totalPrice: 681,
                nights: 4,
                amenities: ["Piscina", "Wi-Fi", "Ar-condicionado", "Cozinha"],
                pros: ["Excelente localização (Villa Morra)", "Superhost (Glen)", "Avaliação 5.0"],
                cons: ["Espaço compacto (Estúdio)"],
                distanceToCenter: "Bairro Villa Morra",
                bookingUrl: "https://www.airbnb.com.br/rooms/1481095006482438019"
             }
        ]
    }
  };
