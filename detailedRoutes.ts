
import React from 'react';
import type { DetailedRoute } from './types';
// FIX: Removed unused 'AlertIcon' which is not an exported member of './components/icons'.
import { PlaneTakeoffIcon, BusIcon, HomeIcon, SparklesIcon, WalkIcon, EatIcon, ShopIcon, MuseumIcon } from './components/icons';

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
    }
};
