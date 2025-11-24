import React from 'react';
import type { DetailedRoute } from './types';
// FIX: Removed unused 'AlertIcon' which is not an exported member of './components/icons'.
import { PlaneTakeoffIcon, BusIcon, HomeIcon, SparklesIcon, WalkIcon, EatIcon, ShopIcon, MuseumIcon } from './components/icons';

export const detailedRoutes: Record<number, DetailedRoute> = {
    41: {
        id: 41,
        title: 'Opção 1: Rota via Assunção',
        itinerary: [
             {
                city: 'Foz do Iguaçu',
                duration: "3 Dias",
                budgetTips: {
                    transport: {
                        title: "Transporte em Foz",
                        options: [
                            { type: "Uber/99", cost: "R$ 15-30", details: "Corridas dentro da cidade." },
                            { type: "Ônibus Urbano", cost: "R$ 5,00", details: "Use para ir às Cataratas e Parque das Aves (Linha 120)." }
                        ]
                    },
                    food: {
                        title: "Alimentação Econômica",
                        options: [
                            { type: "Lanches/Salgados", cost: "R$ 10-20", details: "Padarias e lanchonetes no centro." },
                            { type: "Restaurante (Buffet)", cost: "R$ 30-50", details: "Procure por restaurantes 'por quilo' para economizar." }
                        ]
                    }
                },
                days: [
                    { day: 1, date: "26/12/2025", title: "Saída do Rio e Viagem", activities: [
                        { period: 'Manhã', description: "Embarque no ônibus da Nordeste na Rodoviária Novo Rio.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                        { period: 'Dia Inteiro', description: "Viagem longa, aproveite para descansar e planejar os próximos passos.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
                    { day: 2, date: "27/12/2025", title: "Chegada em Foz e Primeiro Contato", activities: [
                        { period: 'Manhã', description: "Chegada prevista em Foz do Iguaçu. Pegue um Uber/99 para a sua estadia.", type: 'Transporte', cost_level: 'Médio', icon: React.createElement(BusIcon)},
                        { period: 'Tarde', description: "Check-in na hospedagem e almoço. À tarde, visite o Marco das Três Fronteiras para o pôr do sol.", type: 'Passeio', cost_level: 'Baixo', icon: React.createElement(SparklesIcon)},
                        { period: 'Noite', description: "Jantar em um restaurante local. Experimente a culinária da região.", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                    ]},
                    { day: 3, date: "28/12/2025", title: "Maravilhas de Foz", activities: [
                        { period: 'Manhã', description: "Visita às Cataratas do Iguaçu (lado brasileiro). Vá cedo para evitar multidões.", type: 'Passeio', cost_level: 'Alto', icon: React.createElement(SparklesIcon)},
                        { period: 'Tarde', description: "Almoço e visita ao Parque das Aves, que fica em frente à entrada das Cataratas.", type: 'Passeio', cost_level: 'Alto', icon: React.createElement(SparklesIcon)},
                        { period: 'Noite', description: "Visita ao Templo Budista Chen Tien ou à Mesquita Muçulmana Omar Ibn Al-Khatab.", type: 'Passeio', cost_level: 'Grátis', tip: 'Verifique os horários de visitação.', icon: React.createElement(MuseumIcon)},
                    ]},
                ]
             },
             {
                city: 'Ciudad del Este & Assunção',
                duration: "4 Dias",
                 budgetTips: {
                    transport: {
                        title: "Transporte em Assunção",
                        options: [
                            { type: "Uber/Bolt", cost: "R$ 10-25", details: "Bolt costuma ser mais barato que Uber." },
                            { type: "Ônibus (Colectivo)", cost: "R$ 2-3", details: "Use o app 'Topa' para saber as linhas. Precisa de cartão (Jaha ou Más)." }
                        ]
                    },
                    food: {
                        title: "Alimentação Econômica",
                        options: [
                            { type: "Chipa / Sopa Paraguaia", cost: "R$ 5-10", details: "Comidas de rua típicas e baratas." },
                            { type: "Lomito", cost: "R$ 20-35", details: "Sanduíche de filé, uma refeição completa." }
                        ]
                    },
                    general: {
                      title: "Dicas de Compras em CDE",
                      tips: [
                        "NÃO siga 'guias' na rua, eles levam a lojas falsas e com preços inflados.",
                        "Foque em shoppings e lojas grandes e conhecidas como a Nissei e a Cellshop.",
                        "Teste eletrônicos na hora e peça nota fiscal."
                      ]
                    }
                },
                days: [
                    { day: 4, date: "29/12/2025", title: "Compras no Paraguai e Viagem", activities: [
                        { period: 'Manhã', description: "Atravesse a Ponte da Amizade a pé ou de ônibus. Foco nas compras!", type: 'Compras', cost_level: 'Médio', icon: React.createElement(ShopIcon), tip: "Leve documento e dinheiro em espécie (dólar ou real)."},
                        { period: 'Tarde', description: "Embarque no ônibus da NSA em Ciudad del Este com destino a Assunção.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                        { period: 'Noite', description: "Chegada em Assunção, vá para o Airbnb (Villa Morra) e descanse.", type: 'Hospedagem', cost_level: 'Incluso', icon: React.createElement(HomeIcon)},
                    ]},
                     { day: 5, date: "30/12/2025", title: "Explorando a Capital Paraguaia", activities: [
                        { period: 'Manhã', description: "Passeio a pé pelo Centro Histórico: Panteón de los Héroes, Palacio de los López (vista externa) e Manzana de la Rivera.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(WalkIcon)},
                        { period: 'Tarde', description: "Caminhada pela Costanera de Asunción e visita ao letreiro da cidade.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(WalkIcon)},
                         { period: 'Noite', description: "Jantar no bairro Villa Morra, conhecido pela gastronomia.", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                    ]},
                     { day: 6, date: "31/12/2025", title: "Cultura e Véspera de Ano Novo", activities: [
                        { period: 'Manhã', description: "Visita ao Museo del Barro, um dos mais importantes da cidade.", type: 'Passeio', cost_level: 'Baixo', icon: React.createElement(MuseumIcon)},
                        { period: 'Tarde', description: "Explore o popular e caótico Mercado 4 para uma experiência local autêntica.", type: 'Passeio', cost_level: 'Baixo', icon: React.createElement(ShopIcon)},
                         { period: 'Noite', description: "Prepare-se para a celebração de Ano Novo. Verifique eventos locais ou prepare algo no Airbnb.", type: 'Passeio', cost_level: 'Médio', icon: React.createElement(SparklesIcon)},
                    ]},
                ]
             },
             {
                city: 'Buenos Aires',
                duration: "10 Dias",
                 budgetTips: {
                    transport: {
                        title: "Transporte em Buenos Aires",
                        options: [
                            { type: "Subte (Metrô)", cost: "Muito barato", details: "A melhor forma de se locomover. Compre um cartão SUBE." },
                            { type: "Ônibus (Colectivo)", cost: "Muito barato", details: "Cobre toda a cidade. Também usa o cartão SUBE." }
                        ]
                    },
                    food: {
                        title: "Alimentação Econômica",
                        options: [
                            { type: "Empanadas", cost: "R$ 5-10/un", details: "Perfeitas para um almoço rápido e barato." },
                            { type: "Pizza (Ugi's/Fábrica)", cost: "R$ 20-40", details: "Pizzas inteiras muito baratas, famosas entre os locais." }
                        ]
                    }
                },
                days: [
                     { day: 7, date: "01/01/2026", title: "Chegada em Buenos Aires", activities: [
                        { period: 'Manhã', description: "Voo de Assunção para Buenos Aires (Aeroparque - AEP).", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(PlaneTakeoffIcon)},
                        { period: 'Tarde', description: "Check-in no Airbnb. Primeiro passeio pela região, como Palermo ou Recoleta.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(WalkIcon)},
                         { period: 'Noite', description: "Jantar em uma 'parrilla' de bairro para experimentar a famosa carne argentina.", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                    ]},
                    { day: 8, date: "02/01/2026", title: "Cores e História", activities: [
                        { period: 'Manhã', description: "Visite o Caminito em La Boca para fotos coloridas e cultura local.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(WalkIcon)},
                        { period: 'Tarde', description: "Explore San Telmo, com suas ruas de pedra e lojas de antiguidades. Se for domingo, aproveite a feira.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(WalkIcon)},
                    ]},
                    // ... mais dias em BA ...
                    { day: 16, date: "10/01/2026", title: "Despedida e Retorno a Iguazú", activities: [
                        { period: 'Dia Inteiro', description: "Aproveite o último dia para compras ou revisitar um lugar favorito.", type: 'Compras', cost_level: 'Médio', icon: React.createElement(ShopIcon)},
                        { period: 'Noite', description: "Voo de Buenos Aires para Puerto Iguazú (IGR).", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(PlaneTakeoffIcon)},
                    ]},
                    { day: 17, date: "11/01/2026", title: "Volta para Casa", activities: [
                        { period: 'Tarde', description: "Travessia para Foz do Iguaçu e embarque no ônibus de volta para o Rio de Janeiro.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
                     { day: 18, date: "12/01/2026", title: "Chegada no Rio", activities: [
                        { period: 'Tarde', description: "Chegada prevista na Rodoviária Novo Rio. Fim da viagem!", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
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
                duration: "6 Dias",
                // FIX: Populated the budgetTips object with data from the other "Foz do Iguaçu" entry to match the BudgetTips type.
                budgetTips: {
                    transport: {
                        title: "Transporte em Foz",
                        options: [
                            { type: "Uber/99", cost: "R$ 15-30", details: "Corridas dentro da cidade." },
                            { type: "Ônibus Urbano", cost: "R$ 5,00", details: "Use para ir às Cataratas e Parque das Aves (Linha 120)." }
                        ]
                    },
                    food: {
                        title: "Alimentação Econômica",
                        options: [
                            { type: "Lanches/Salgados", cost: "R$ 10-20", details: "Padarias e lanchonetes no centro." },
                            { type: "Restaurante (Buffet)", cost: "R$ 30-50", details: "Procure por restaurantes 'por quilo' para economizar." }
                        ]
                    }
                },
                days: [
                    { day: 1, date: "26/12/2025", title: "Saída do Rio", activities: [
                        { period: 'Manhã', description: "Embarque no ônibus da Nordeste na Rodoviária Novo Rio.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
                    { day: 2, date: "27/12/2025", title: "Chegada e Passeios", activities: [
                        { period: 'Manhã', description: "Chegada em Foz, check-in na hospedagem.", type: 'Hospedagem', cost_level: 'Médio', icon: React.createElement(HomeIcon)},
                        { period: 'Tarde', description: "Visita ao Marco das Três Fronteiras.", type: 'Passeio', cost_level: 'Baixo', icon: React.createElement(SparklesIcon)},
                    ]},
                    { day: 3, date: "28/12/2025", title: "Cataratas e Aves", activities: [
                        { period: 'Manhã', description: "Visita às Cataratas do Iguaçu (lado brasileiro).", type: 'Passeio', cost_level: 'Alto', icon: React.createElement(SparklesIcon)},
                        { period: 'Tarde', description: "Visita ao Parque das Aves.", type: 'Passeio', cost_level: 'Alto', icon: React.createElement(SparklesIcon)},
                    ]},
                     { day: 4, date: "29/12/2025", title: "Compras e Cultura", activities: [
                        { period: 'Manhã', description: "Dia de compras em Ciudad del Este, Paraguai.", type: 'Compras', cost_level: 'Médio', icon: React.createElement(ShopIcon)},
                        { period: 'Tarde', description: "Visita à Mesquita Muçulmana e ao Templo Budista em Foz.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(MuseumIcon)},
                    ]},
                    { day: 5, date: "30/12/2025", title: "Lado Argentino", activities: [
                        { period: 'Dia Inteiro', description: "Passeio opcional para o lado argentino das Cataratas (requer um dia inteiro).", type: 'Passeio', cost_level: 'Alto', icon: React.createElement(SparklesIcon), tip: "Leve documento e pesos argentinos."},
                    ]},
                    { day: 6, date: "31/12/2025", title: "Véspera de Ano Novo", activities: [
                        { period: 'Dia Inteiro', description: "Dia livre para explorar Foz ou Puerto Iguazú. Prepare-se para a virada.", type: 'Passeio', cost_level: 'Baixo', icon: React.createElement(SparklesIcon)},
                    ]},
                ]
             },
             {
                city: 'Buenos Aires',
                duration: "10 Dias",
                 // FIX: Populated the budgetTips object with data from the other "Buenos Aires" entry to match the BudgetTips type.
                 budgetTips: {
                    transport: {
                        title: "Transporte em Buenos Aires",
                        options: [
                            { type: "Subte (Metrô)", cost: "Muito barato", details: "A melhor forma de se locomover. Compre um cartão SUBE." },
                            { type: "Ônibus (Colectivo)", cost: "Muito barato", details: "Cobre toda a cidade. Também usa o cartão SUBE." }
                        ]
                    },
                    food: {
                        title: "Alimentação Econômica",
                        options: [
                            { type: "Empanadas", cost: "R$ 5-10/un", details: "Perfeitas para um almoço rápido e barato." },
                            { type: "Pizza (Ugi's/Fábrica)", cost: "R$ 20-40", details: "Pizzas inteiras muito baratas, famosas entre os locais." }
                        ]
                    }
                },
                days: [
                     { day: 7, date: "01/01/2026", title: "Chegada em Buenos Aires", activities: [
                        { period: 'Tarde', description: "Travessia para Puerto Iguazú (Argentina) e voo para Buenos Aires.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(PlaneTakeoffIcon)},
                        { period: 'Noite', description: "Check-in no Airbnb e primeiro jantar na capital.", type: 'Hospedagem', cost_level: 'Incluso', icon: React.createElement(HomeIcon)},
                    ]},
                    // ... roteiro de BA igual à Opção 1 ...
                    { day: 16, date: "10/01/2026", title: "Despedida e Retorno a Iguazú", activities: [
                        { period: 'Noite', description: "Voo de Buenos Aires para Puerto Iguazú (IGR).", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(PlaneTakeoffIcon)},
                    ]},
                    { day: 17, date: "11/01/2026", title: "Volta para Casa", activities: [
                        { period: 'Tarde', description: "Travessia para Foz do Iguaçu e embarque no ônibus de volta para o Rio de Janeiro.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
                     { day: 18, date: "12/01/2026", title: "Chegada no Rio", activities: [
                        { period: 'Tarde', description: "Chegada prevista na Rodoviária Novo Rio. Fim da viagem!", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
                ]
             }
        ],
        accommodations: []
    }
  };