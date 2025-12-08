
import React from 'react';
import type { Destination } from './types';
import { 
    SparklesIcon,
    SearchIcon,
    CheckShieldIcon,
    StarIcon
} from './components/icons';

export const destinations: Destination[] = [
    {
        id: 1,
        title: "Curitiba",
        category: "Assessoria Essencial",
        places: ['Rio de Janeiro', 'Curitiba'],
        description: 'Opções de voos diretos para o período selecionado.\n\nAZUL:\n- Geral: 10x sem juros.\n- Azul Itaú: Até 12x sem juros.\n\nLATAM:\n- Geral: Até 4x sem juros.\n- LATAM Pass Itaú: Até 10x sem juros (Min R$ 70).\n\n*Valores e condições para compra direta no site das cias aéreas.*',
        themeColor: '#0ea5e9', // Sky Blue
        icon: React.createElement(SearchIcon),
        imageUrl: 'https://images.unsplash.com/photo-1627483262268-9c96d8e367c8?q=80&w=1920&auto=format&fit=crop', // Jardim Botanico - Image 4 Reference style
        carTrips: [],
        accommodations: [],
        additionalCosts: [
            { description: 'Taxa de Assessoria', amount: 150.00, icon: React.createElement(SparklesIcon), details: 'Serviço Personalizado' }
        ]
    },
    {
        id: 2,
        title: "Rio > Curitiba 10/01/2026 a 17/01/2026",
        category: "Assessoria Completa",
        places: ['Rio de Janeiro', 'Curitiba'],
        description: `INFORMAÇÕES DO VOO (AZUL):
📅 Ida: 10/01 | 05:05 - 06:35
📅 Volta: 17/01 | 23:20 - 00:45
💳 Parcelamento: 10x sem juros (Geral) ou 12x (Azul Itaú).

---

OPÇÃO 1: O "Econômico e Prático"
Ideal para quem vai passar o dia na rua e quer gastar pouco.

🏢 Rede Andrade São Francisco
Nota Custo-Benefício: 6.5/10 💰
📍 Localização: Centro (R. Visconde de Nácar).
✅ Pontos Fortes: Preço baixo, chuveiro quente, localização centralíssima.

---

OPÇÃO 2: O "Cultural e Estratégico"
Ideal para quem quer ficar perto de parques, feiras e cultura.

🏢 Hotel Elo Curitiba
Nota Custo-Benefício: 7.5/10 ⭐
📍 Localização: Centro Cívico/Alto da Glória.
✅ Pontos Fortes: Localização "cult", perto de ótima gastronomia e área verde.`,
        themeColor: '#E60026', // Latam Redish
        icon: React.createElement(CheckShieldIcon),
        imageUrl: 'https://images.unsplash.com/photo-1596476174624-9b883023240e?q=80&w=1920&auto=format&fit=crop', // Opera de Arame style
        carTrips: [],
        accommodations: [],
        additionalCosts: [
            { description: 'Taxa de Assessoria Completa', amount: 250.00, icon: React.createElement(CheckShieldIcon), details: 'Planejamento + Reservas' }
        ]
    },
    {
        id: 3,
        title: "Experiência Curitiba Premium (8 Dias)",
        category: "Assessoria Premium",
        places: ['Rio', 'Curitiba', 'Ilha do Mel', 'Beto Carrero'],
        description: `A experiência definitiva com roteiro dia-a-dia detalhado.

✈️ AÉREO COMPLETO:
Inclui análise das melhores opções Azul (10x sem juros) e LATAM (até 10x Itaú).

🏨 HOSPEDAGEM SELECIONADA:
- Econômico: Rede Andrade São Francisco
- Cultural: Hotel Elo Curitiba

🌟 ROTEIRO EXCLUSIVO DE 8 DIAS:
Dia 1: Chegada e Cartões Postais
Dia 2: Ilha do Mel (Bate-volta)
Dia 3: Feirinha e Centro Histórico
Dia 4: Trem para Morretes
Dia 5: Beto Carrero World
Dia 6: Gastronomia Italiana
Dia 7: Parques "Zen"
Dia 8: Compras e Despedida

Inclui estimativas de gastos diários ("A Dolorosa") e dicas de ouro.`,
        themeColor: '#FFD700', // Gold
        icon: React.createElement(StarIcon),
        imageUrl: 'https://images.unsplash.com/photo-1574585970267-3a137b019623?q=80&w=1920&auto=format&fit=crop', // Unilivre or High end photo
        carTrips: [],
        accommodations: [],
        additionalCosts: [
            { description: 'Consultoria Premium', amount: 350.00, icon: React.createElement(StarIcon), details: 'Roteiro Personalizado + Suporte' }
        ]
    }
];
