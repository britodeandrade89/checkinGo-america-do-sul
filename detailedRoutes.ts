
import React from 'react';
import type { DetailedRoute } from './types';
import { PlaneTakeoffIcon, BusIcon, HomeIcon, SparklesIcon, WalkIcon, EatIcon, ShopIcon, MuseumIcon, ShipIcon, CarIcon, ThumbsUpIcon } from './components/icons';

export const detailedRoutes: Record<number, DetailedRoute> = {
    1: {
        id: 1,
        title: 'Opção 1: Assessoria Essencial - Curitiba',
        itinerary: [
             {
                city: 'Curitiba',
                duration: "7 Dias",
                budgetTips: {
                    transport: {
                        title: "Transporte em Curitiba",
                        options: [
                            { type: "Linha Turismo", cost: "R$ 50,00", details: "Passa pelos principais pontos turísticos (Jardim Botânico, Ópera de Arame)." },
                            { type: "Uber/99", cost: "Variável", details: "Ótimo para distâncias curtas ou à noite." }
                        ]
                    },
                    food: {
                        title: "Gastronomia",
                        options: [
                            { type: "Santa Felicidade", cost: "R$ 60-100", details: "Rodízio de massas e frango tradicional." },
                            { type: "Feirinha do Largo", cost: "R$ 15-30", details: "Pastel e comidas de rua aos domingos." }
                        ]
                    }
                },
                days: [
                    { day: 1, date: "10/01/2026", title: "Chegada e Jardim Botânico", activities: [
                        { period: 'Manhã', description: "Chegada no aeroporto Afonso Pena (CWB). Transfer para o hotel.", type: 'Transporte', cost_level: 'Médio', icon: React.createElement(BusIcon)},
                        { period: 'Tarde', description: "Visita ao cartão postal: Jardim Botânico de Curitiba.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(SparklesIcon)},
                    ]},
                    { day: 2, date: "11/01/2026", title: "Centro Histórico e Feirinha", activities: [
                        { period: 'Manhã', description: "Passeio pelo Largo da Ordem e Feirinha (Domingo).", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(WalkIcon)},
                        { period: 'Tarde', description: "Visita ao Museu Oscar Niemeyer (Museu do Olho).", type: 'Passeio', cost_level: 'Médio', icon: React.createElement(MuseumIcon)},
                    ]},
                    { day: 7, date: "17/01/2026", title: "Parques e Retorno", activities: [
                        { period: 'Manhã', description: "Parque Tanguá ou Ópera de Arame.", type: 'Passeio', cost_level: 'Baixo', icon: React.createElement(SparklesIcon)},
                        { period: 'Noite', description: "Retorno para o Rio de Janeiro (Voo noturno para aproveitar o dia).", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
                ]
             }
        ],
        accommodations: []
    },
    2: {
        id: 2,
        title: 'Opção 2: Assessoria Completa - Curitiba',
        itinerary: [
             {
                city: 'Curitiba',
                duration: "7 Dias",
                budgetTips: {
                    transport: {
                        title: "Transporte em Curitiba",
                        options: [
                            { type: "Linha Turismo", cost: "R$ 50,00", details: "Passa pelos principais pontos turísticos (Jardim Botânico, Ópera de Arame)." },
                            { type: "Uber/99", cost: "Variável", details: "Ótimo para distâncias curtas ou à noite." }
                        ]
                    },
                    food: {
                        title: "Gastronomia",
                        options: [
                            { type: "Santa Felicidade", cost: "R$ 60-100", details: "Rodízio de massas e frango tradicional." },
                            { type: "Feirinha do Largo", cost: "R$ 15-30", details: "Pastel e comidas de rua aos domingos." }
                        ]
                    }
                },
                days: [
                    { day: 1, date: "10/01/2026", title: "Chegada VIP", activities: [
                        { period: 'Noite', description: "Chegada no aeroporto Afonso Pena (CWB). Transfer Executivo para o hotel.", type: 'Transporte', cost_level: 'Alto', icon: React.createElement(BusIcon)},
                    ]},
                    { day: 2, date: "11/01/2026", title: "City Tour Privativo", activities: [
                        { period: 'Manhã', description: "Passeio Guiado pelo Centro Histórico e Feirinha.", type: 'Passeio', cost_level: 'Médio', icon: React.createElement(WalkIcon)},
                        { period: 'Tarde', description: "Entrada prioritária no Museu Oscar Niemeyer.", type: 'Passeio', cost_level: 'Médio', icon: React.createElement(MuseumIcon)},
                    ]},
                    { day: 7, date: "17/01/2026", title: "Retorno", activities: [
                        { period: 'Manhã', description: "Café da manhã especial e check-out.", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                        { period: 'Manhã', description: "Retorno para o Rio de Janeiro (Voo LATAM).", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(BusIcon)},
                    ]},
                ]
             }
        ],
        accommodations: []
    },
    3: {
        id: 3,
        title: 'Opção 3: Assessoria Premium (8 Dias)',
        itinerary: [
             {
                city: 'Curitiba & Arredores',
                duration: "8 Dias de Experiência Completa",
                budgetTips: {
                    transport: {
                        title: "Resumo Financeiro (Estimativa)",
                        options: [
                            { type: "Transporte Total", cost: "R$ 680-1.100", details: "Uber, Transfer, Barcos, Van e Trem." },
                            { type: "Passeios/Ingressos", cost: "R$ 500-1.000", details: "Inclui Beto Carrero, Trem Morretes, Museus." }
                        ]
                    },
                    food: {
                        title: "Gastronomia",
                        options: [
                            { type: "Alimentação Total", cost: "R$ 1.170-2.340", details: "Considerando refeições turísticas completas." },
                            { type: "TOTAL GERAL", cost: "~R$ 2.350", details: "Por pessoa (sem aéreo/hotel)." }
                        ]
                    },
                    general: {
                        title: "Dica Final do André",
                        tips: [
                            "Se quiser economizar, o segredo está na comida (trocar restaurantes famosos por lanches).",
                            "Se tirar o Beto Carrero, a viagem cai uns R$ 500 por pessoa.",
                            "Mas se puder, faça tudo, vale cada centavo!"
                        ]
                    }
                },
                days: [
                    { day: 1, date: "10/01/2026", title: "Chegada e Cartões Postais", activities: [
                        { period: '08:00', description: "Chegada (CWB) e Uber para o hotel. Manhã no Jardim Botânico (melhor luz para fotos).", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(SparklesIcon)},
                        { period: 'Almoço', description: "Mercado Municipal (Pastel de Bacalhau ou almoço no andar superior).", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                        { period: 'Tarde', description: "Ópera de Arame (visita rápida) e pôr do sol no Parque Tanguá (Obrigatório).", type: 'Passeio', cost_level: 'Baixo', tip: "Dolorosa do dia: ~R$ 265/pessoa", icon: React.createElement(SparklesIcon)},
                        { period: 'Noite', description: "Jantar no bairro Batel (chique) ou Rua Itupava (descolado).", type: 'Alimentação', cost_level: 'Alto', icon: React.createElement(EatIcon)},
                    ]},
                    { day: 2, date: "11/01/2026", title: "Bate-volta na Ilha do Mel", activities: [
                        { period: '07:00', description: "Ônibus (Viação Graciosa) para Pontal do Sul + Barco para a Ilha.", type: 'Transporte', cost_level: 'Médio', icon: React.createElement(BusIcon)},
                        { period: 'Dia Todo', description: "Escolha: Brasília (Farol) OU Encantadas (Gruta). Não tente fazer os dois correndo.", type: 'Passeio', cost_level: 'Baixo', tip: "Dolorosa do dia: ~R$ 300/pessoa", icon: React.createElement(ShipIcon)},
                        { period: 'Almoço', description: "Frutos do mar pé na areia (Prepare o bolso, frete marítimo encarece).", type: 'Alimentação', cost_level: 'Alto', icon: React.createElement(EatIcon)},
                        { period: '17:00', description: "Barco de volta + Ônibus. Noite de pizza e descanso.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(HomeIcon)},
                    ]},
                    { day: 3, date: "12/01/2026", title: "A Clássica Feirinha (Domingo)", activities: [
                        { period: 'Manhã', description: "Feira do Largo da Ordem. Enorme. Compre lembranças e prove o pierogi.", type: 'Compras', cost_level: 'Baixo', icon: React.createElement(ShopIcon)},
                        { period: 'Almoço', description: "Bar do Alemão no Centro Histórico. Pedido: 'Submarino' + Eisbein ou Marreco.", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                        { period: 'Tarde', description: "Museu Oscar Niemeyer (MON). O gramado atrás ('Parcão') tem vibe ótima.", type: 'Passeio', cost_level: 'Médio', tip: "Dolorosa do dia: ~R$ 266/pessoa", icon: React.createElement(MuseumIcon)},
                    ]},
                    { day: 4, date: "13/01/2026", title: "Morretes de Trem", activities: [
                        { period: '08:30', description: "Saída de Trem (Serra Verde Express). Sente do lado esquerdo para ver a vista.", type: 'Passeio', cost_level: 'Alto', icon: React.createElement(BusIcon)},
                        { period: 'Almoço', description: "Barreado em Morretes (Restaurante Madalozo ou Casarão). A carne desmancha.", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                        { period: 'Retorno', description: "Volte de Van pela Estrada da Graciosa (linda e cheia de hortênsias). Evite o trem na volta.", type: 'Transporte', cost_level: 'Médio', tip: "Dolorosa do dia: ~R$ 424/pessoa", icon: React.createElement(CarIcon)},
                    ]},
                    { day: 5, date: "14/01/2026", title: "Maratona Beto Carrero", activities: [
                        { period: 'Logística', description: "Van de Excursão (200km). Saem cedo do hotel e trazem dormindo.", type: 'Transporte', cost_level: 'Alto', icon: React.createElement(BusIcon)},
                        { period: '10h-19h', description: "Dia no parque. Foque nos shows (Hot Wheels) e Big Tower/Firewhip.", type: 'Passeio', cost_level: 'Alto', tip: "Dolorosa do dia: ~R$ 500/pessoa. Leve protetor solar!", icon: React.createElement(SparklesIcon)},
                        { period: '23:00', description: "Chegada em Curitiba quebrados.", type: 'Transporte', cost_level: 'Incluso', icon: React.createElement(HomeIcon)},
                    ]},
                    { day: 6, date: "15/01/2026", title: "Santa Felicidade e Comilança", activities: [
                        { period: 'Manhã', description: "Durma até mais tarde. Visita à Torre Panorâmica (vista 360º).", type: 'Passeio', cost_level: 'Baixo', icon: React.createElement(SparklesIcon)},
                        { period: 'Almoço', description: "Madalosso em Santa Felicidade. Maior restaurante das Américas. Frango e polenta.", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                        { period: 'Tarde', description: "Parque Barigui. Veja as capivaras e relaxe no lago.", type: 'Passeio', cost_level: 'Grátis', tip: "Dolorosa do dia: ~R$ 220/pessoa", icon: React.createElement(WalkIcon)},
                        { period: 'Noite', description: "Bar Mercearia Fantinato para provar Carne de Onça (patrimônio cultural).", type: 'Alimentação', cost_level: 'Médio', icon: React.createElement(EatIcon)},
                    ]},
                    { day: 7, date: "16/01/2026", title: "O Lado Zen", activities: [
                        { period: 'Manhã', description: "Bosque do Papa (Memorial Polonês) e Bosque Alemão (trilha João e Maria).", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(WalkIcon)},
                        { period: 'Tarde', description: "Unilivre (Universidade Livre do Meio Ambiente). Arquitetura incrível na pedreira.", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(SparklesIcon)},
                        { period: 'Noite', description: "Despedida no Hard Rock Cafe ou Praça da Espanha.", type: 'Alimentação', cost_level: 'Alto', tip: "Dolorosa do dia: ~R$ 230/pessoa", icon: React.createElement(EatIcon)},
                    ]},
                    { day: 8, date: "17/01/2026", title: "Compras e Tchau", activities: [
                        { period: 'Manhã', description: "Check-out (malas no hotel). Caminhada na Rua XV de Novembro (Bondinho).", type: 'Passeio', cost_level: 'Grátis', icon: React.createElement(ShopIcon)},
                        { period: 'Tarde', description: "Passeio Público ou café especial na Lucca Cafés.", type: 'Alimentação', cost_level: 'Baixo', icon: React.createElement(EatIcon)},
                        { period: '19:30', description: "Uber para o aeroporto (SJP). Saia com antecedência pelo trânsito.", type: 'Transporte', cost_level: 'Médio', tip: "Dolorosa do dia: ~R$ 150/pessoa", icon: React.createElement(PlaneTakeoffIcon)},
                    ]},
                ]
             }
        ],
        accommodations: []
    }
};
