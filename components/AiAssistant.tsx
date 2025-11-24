import React, { useState } from 'react';
import { getAiTravelAssistantResponse } from '../services/geminiService';
import { SparklesIcon, AlertTriangleIcon } from './icons';

const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />')
      .replace(/(\*|-)\s(.*?)(?=<br \/>|$)/g, '<ul><li>$2</li></ul>')
      .replace(/<\/ul><br \/><ul>/g, ''); // Join consecutive list items

    return <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: formattedText }} />;
};


const AiAssistant: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const result = await getAiTravelAssistantResponse(prompt);
            setResponse(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="ai-prompt" className="block text-sm font-medium text-slate-700 mb-2">
                        Sua pergunta:
                    </label>
                    <div className="flex items-center space-x-3">
                         <input
                            id="ai-prompt"
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ex: Crie um roteiro de 3 dias em Porto Seguro com foco em praias"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition bg-white/70"
                            disabled={isLoading}
                         />
                         <button
                            type="submit"
                            disabled={isLoading || !prompt.trim()}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all disabled:bg-slate-400 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed flex items-center"
                         >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Pensando...
                                </>
                            ) : (
                                'Perguntar'
                            )}
                         </button>
                    </div>
                </form>
            </div>
            
            {(isLoading || response || error) && (
                <div className="mt-8 bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Resposta do Assistente</h3>
                     {error && (
                        <div className="text-red-50 p-4 rounded-lg flex items-center space-x-3">
                            <AlertTriangleIcon className="h-6 w-6" />
                            <div>
                                <p className="font-semibold">Ocorreu um erro</p>
                                <p className="text-sm">{error}</p>
                            </div>
                        </div>
                    )}
                    {response && (
                        <div className="text-slate-700 leading-relaxed">
                            <SimpleMarkdown text={response} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AiAssistant;