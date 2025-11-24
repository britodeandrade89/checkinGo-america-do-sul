
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
    },
    30: {
        id: 30,
        title: 'Fim de Semana em Paraty & Cunha',
        itinerary: [
            {
                city: 'Paraty & Cunha',
                duration: "3 Dias / 2 Noites",
                days: [
                    { 
                        day: 1, 
                        title: "Chegada em Paraty e Charme Histórico", 
                        activities: [
                            "Viagem de carro do Rio de Janeiro para Paraty pela manhã.",
                            "Check-in na pousada escolhida e almoço.",
                            "Tarde livre para uma caminhada pelas ruas de pedra do Centro Histórico.",
                            "Jantar em um dos restaurantes aconchegantes da cidade."
                        ]
                    },
                    { 
                        day: 2, 
                        title: "Bate-volta Mágico para Cunha", 
                        activities: [
                            "Manhã livre em Paraty: aproveite uma praia próxima (ex: Jabaquara) ou uma cachoeira (ex: Poço do Tarzan).",
                            "Após o almoço em Paraty, viagem de carro para Cunha (aprox. 1h30).",
                            "Visita ao Lavandário, programada para o fim de tarde para apreciar o pôr do sol espetacular.",
                            "Não se esqueça de provar o sorvete de lavanda!",
                            "Retorno para Paraty no início da noite para jantar."
                        ]
                    },
                    { 
                        day: 3, 
                        title: "Cultura Local e Despedida", 
                        activities: [
                            "Manhã para visitar um alambique de cachaça artesanal ou fazer compras de doces e artesanato.",
                            "Check-out da pousada por volta do meio-dia.",
                            "Almoço de despedida e início da viagem de volta para o Rio."
                        ]
                    },
                ]
            }
        ],
        // As acomodações agora estão no arquivo destinations.ts
        accommodations: [],
    }
  };
