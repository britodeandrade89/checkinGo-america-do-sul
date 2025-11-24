import { GoogleGenAI, Type } from "@google/genai";
import type { UserConfig, Flight, Itinerary } from '../types';

// FIX: Removed the global AI instance. A new client is created on demand to ensure the latest API key is used.
const getAiClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

const flightSchema = {
    type: Type.OBJECT,
    properties: {
        origin: { type: Type.STRING },
        destination: { type: Type.STRING },
        price: { type: Type.NUMBER },
        airline: { type: Type.STRING },
        departure_date: { type: Type.STRING, description: "Formato: AAAA-MM-DD" },
        return_date: { type: Type.STRING, description: "Formato: AAAA-MM-DD" },
        baggage: { type: Type.STRING, description: "ex: '10kg' ou '23kg'" },
        route_type: { type: Type.STRING, enum: ['round_trip', 'circular'] },
        return_city: { type: Type.STRING, description: "Apenas para o tipo de rota 'circular'" }
    },
    required: ['origin', 'destination', 'price', 'airline', 'departure_date', 'return_date', 'baggage', 'route_type']
};

export const searchFlights = async (config: UserConfig): Promise<Flight[]> => {
    const ai = getAiClient();
    const prompt = `
        Simule uma API de busca de voos. Gere uma lista de 15 resultados de voos fictícios com base na seguinte configuração de usuário.
        - Os preços devem ser em Reais (BRL).
        - Crie uma mistura de tipos de rota 'round_trip' (ida e volta) e 'circular'.
        - Para rotas circulares, a 'return_city' (cidade de retorno) deve ser um dos outros destinos.
        - Garanta que alguns preços de voos sejam bem baixos (menos de 1000 BRL) para simular boas ofertas.
        - Siga estritamente o esquema JSON fornecido para a saída.

        Configuração do Usuário: ${JSON.stringify(config, null, 2)}
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: flightSchema
                },
            },
        });
        
        const jsonText = response.text;
        const flights = JSON.parse(jsonText) as Flight[];
        
        return flights.sort((a, b) => a.price - b.price);

    } catch (error) {
        console.error("Erro ao buscar dados de voos da API Gemini:", error);
        // FIX: Added specific error handling for API key issues as per guidelines.
        if (error instanceof Error && error.message.includes('Requested entity was not found')) {
            throw new Error("API_KEY_NOT_FOUND");
        }
        throw new Error("Falha ao buscar dados de voos. Verifique sua chave de API e tente novamente.");
    }
};

const itinerarySchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING, description: "Um título descritivo para o itinerário, ex: 'Voo GOL para La Paz' ou 'Estadia no Hotel Copacabana Palace'" },
        totalPrice: { type: Type.NUMBER, description: "O preço total da reserva em BRL, extraído da imagem." },
        sourceUrl: { type: Type.STRING, description: "A URL completa visível na barra de endereço da captura de tela." },
        events: {
            type: Type.ARRAY,
            description: "Uma lista de todos os eventos da viagem (voos, estadia).",
            items: {
                type: Type.OBJECT,
                properties: {
                    type: { type: Type.STRING, enum: ['flight', 'accommodation'] },
                    startTime: { type: Type.STRING, description: "Horário de partida ou 'Check-in' para estadia." },
                    endTime: { type: Type.STRING, description: "Horário de chegada ou 'Check-out' para estadia." },
                    startDate: { type: Type.STRING, description: "Data de partida ou data de check-in." },
                    endDate: { type: Type.STRING, description: "Data de chegada ou data de check-out." },
                    startLocation: { type: Type.STRING, description: "Código do aeroporto, cidade de partida ou cidade da estadia." },
                    endLocation: { type: Type.STRING, description: "Código do aeroporto, cidade de chegada ou nome do hotel." },
                    duration: { type: Type.STRING, description: "Duração total do trecho ou número de noites." },
                    details: { type: Type.STRING, description: "Detalhes como 'Direto', '1 parada em VVI' ou '2 adultos'." },
                    company: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING, description: "Nome da companhia (aérea) ou do site de reserva (Booking.com)." },
                            logo: { type: Type.STRING, description: "Apenas o nome da companhia, para mapeamento do logo." }
                        },
                        required: ["name", "logo"]
                    },
                    operator: { type: Type.STRING, description: "Companhia que opera o voo, se houver." },
                    warning: { type: Type.STRING, description: "Qualquer aviso importante, como 'Conexão longa (5h)'." }
                },
                required: ["type", "startTime", "endTime", "startDate", "endDate", "startLocation", "endLocation", "duration", "details", "company"]
            }
        },
        baggage: {
            type: Type.OBJECT,
            description: "Detalhes sobre a franquia de bagagem. Preencher apenas se for um voo.",
            properties: {
                personal: {
                    type: Type.OBJECT,
                    properties: {
                        status: { type: Type.STRING, enum: ['Inclusa', 'Taxa Adicional', 'Não disponível'] },
                        details: { type: Type.STRING }
                    },
                    required: ["status", "details"]
                },
                carryOn: {
                    type: Type.OBJECT,
                    properties: {
                        status: { type: Type.STRING, enum: ['Inclusa', 'Taxa Adicional', 'Não disponível'] },
                        details: { type: Type.STRING }
                    },
                     required: ["status", "details"]
                },
                checked: {
                    type: Type.OBJECT,
                    properties: {
                        status: { type: Type.STRING, enum: ['Inclusa', 'Taxa Adicional', 'Não disponível'] },
                        details: { type: Type.STRING }
                    },
                     required: ["status", "details"]
                }
            },
            // Baggage is not required for the whole itinerary
        }
    },
    required: ["title", "totalPrice", "sourceUrl", "events"]
};


export const analyzeTravelScreenshot = async (imageDataBase64: string): Promise<Omit<Itinerary, 'id' | 'savedDate'>> => {
    const ai = getAiClient();
    const prompt = `
        Analise esta captura de tela de uma reserva de viagem. A imagem contém detalhes de um itinerário e uma barra de endereço do navegador no topo.
        Sua primeira tarefa é identificar se a reserva é para um (1) Voo ou (2) Estadia/Acomodação.
        Após identificar o tipo, extraia TODAS as informações relevantes e retorne-as como um único objeto JSON que siga estritamente o esquema fornecido.

        Instruções específicas por tipo:
        - **Para Voos:**
          - Extraia cada trecho (ida, volta, conexões) como um evento separado do tipo 'flight'.
          - Preencha a seção 'baggage' com o máximo de detalhes possível.
          - Use códigos de aeroporto (GRU, LIM) sempre que possível para 'startLocation' e 'endLocation'.
        - **Para Estadias/Acomodações:**
          - Crie um único evento do tipo 'accommodation'.
          - 'startLocation' deve ser a cidade.
          - 'endLocation' deve ser o nome do hotel/propriedade.
          - 'startTime' deve ser 'Check-in' e 'endTime' deve ser 'Check-out'.
          - 'duration' deve ser o número de noites (ex: '3 noites').
          - 'details' pode incluir número de hóspedes (ex: '2 adultos').
          - Deixe a seção 'baggage' de fora.

        Pontos de atenção gerais:
        1.  **URL:** Extraia a URL completa da barra de endereço na imagem. Este é o 'sourceUrl'.
        2.  **Preço:** Encontre o preço total final da reserva.
        3.  **Título:** Crie um título descritivo que resuma a reserva.
    `;

    try {
        const imagePart = {
            inlineData: {
                mimeType: 'image/png',
                data: imageDataBase64,
            },
        };
        const textPart = { text: prompt };

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: { parts: [textPart, imagePart] },
            config: {
                responseMimeType: "application/json",
                responseSchema: itinerarySchema,
            },
        });

        const jsonText = response.text;
        const itineraryData = JSON.parse(jsonText) as Omit<Itinerary, 'id' | 'savedDate'>;
        
        return itineraryData;

    } catch (error) {
        console.error("Erro ao analisar a captura de tela com a API Gemini:", error);
        // FIX: Added specific error handling for API key issues as per guidelines.
        if (error instanceof Error && error.message.includes('Requested entity was not found')) {
            throw new Error("API_KEY_NOT_FOUND");
        }
        throw new Error("Não foi possível extrair os dados da imagem. Tente uma captura de tela mais nítida ou verifique o console para mais detalhes.");
    }
};

export const getAiTravelAssistantResponse = async (prompt: string): Promise<string> => {
    const ai = getAiClient();
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
             config: {
                systemInstruction: `Você é o assistente de viagens do "Check-in, GO!", um especialista. Sua missão é fornecer respostas úteis, criativas e bem formatadas para ajudar os usuários a planejarem suas viagens dos sonhos.
- Responda em português do Brasil.
- Use Markdown para formatar suas respostas (listas, negrito, etc.) para melhor legibilidade.
- Seja amigável e informativo.
- Quando perguntado sobre preços, sempre deixe claro que são estimativas e podem variar.
- Quando sugerir roteiros, organize-os por dia.`,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Erro ao contatar o assistente de IA Gemini:", error);
        if (error instanceof Error && error.message.includes('Requested entity was not found')) {
            throw new Error("API_KEY_NOT_FOUND");
        }
        throw new Error("Não foi possível obter uma resposta do assistente. Verifique sua chave de API e tente novamente.");
    }
};