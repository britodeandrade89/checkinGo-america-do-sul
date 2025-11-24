import React, { useState, useEffect, useCallback } from 'react';
import { Itinerary } from '../types';
import { analyzeTravelScreenshot } from '../services/geminiService';
import { ActivityIcon, AlertTriangleIcon } from './icons';

interface ImageUploaderProps {
  onItineraryCreated: (itinerary: Omit<Itinerary, 'id' | 'savedDate'>) => void;
  onApiKeyError: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onItineraryCreated, onApiKeyError }) => {
  const [pastedImage, setPastedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processImage = useCallback(async (imageBase64: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Remove o prefixo 'data:image/png;base64,' para enviar apenas os dados puros
      const pureBase64 = imageBase64.split(',')[1];
      const itineraryData = await analyzeTravelScreenshot(pureBase64);
      onItineraryCreated(itineraryData);
      setPastedImage(null); // Limpa a imagem após o sucesso
    } catch (err) {
      // FIX: Check for the specific API key error and trigger the callback to reset the UI state.
      if (err instanceof Error && err.message === 'API_KEY_NOT_FOUND') {
        onApiKeyError();
        return; // Stop further processing to avoid showing a generic error.
      }
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
    } finally {
      setIsLoading(false);
    }
  }, [onItineraryCreated, onApiKeyError]);

  const handlePaste = useCallback((event: ClipboardEvent) => {
    if (isLoading) return;

    const items = event.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result as string;
            setPastedImage(result);
            processImage(result);
          };
          reader.readAsDataURL(file);
          event.preventDefault(); // Impede que a imagem seja colada em outro lugar
          break;
        }
      }
    }
  }, [isLoading, processImage]);

  useEffect(() => {
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, [handlePaste]);

  return (
    <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-slate-200 text-center">
      {!isLoading && !pastedImage && (
        <>
            <h2 className="text-lg font-bold text-slate-700">Adicionar Nova Viagem</h2>
            <p className="text-slate-500 mt-1">Tire uma captura de tela da sua busca (voo, hotel, ônibus) e cole em qualquer lugar da página (Ctrl+V).</p>
        </>
      )}

      {isLoading && (
         <div className="flex flex-col items-center justify-center text-blue-600">
            <ActivityIcon className="h-8 w-8 animate-pulse mb-2" />
            <p className="font-semibold">Analisando sua captura de tela...</p>
            <p className="text-sm text-slate-500">Aguarde, a inteligência artificial está extraindo os dados da viagem.</p>
         </div>
      )}

      {!isLoading && error && (
         <div className="text-red-600">
            <AlertTriangleIcon className="h-8 w-8 mx-auto mb-2" />
            <p className="font-semibold">Falha na Análise</p>
            <p className="text-sm">{error}</p>
            <button
              onClick={() => { setPastedImage(null); setError(null); }}
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              Tentar Novamente
            </button>
         </div>
      )}

      {pastedImage && !error && (
         <div className="mt-4">
             <p className="text-sm font-medium text-slate-600 mb-2">Pré-visualização:</p>
             <img 
                src={pastedImage} 
                alt="Captura de tela colada"
                className={`rounded-lg border-4 ${isLoading ? 'border-blue-200 animate-pulse' : error ? 'border-red-300' : 'border-slate-200'} max-h-60 mx-auto`}
             />
         </div>
      )}
    </div>
  );
};

export default ImageUploader;
