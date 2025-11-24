
import React, { useState } from 'react';
import type { Itinerary, Destination, GroupedTrip } from '../types';
import DestinationTripCard from './DestinationTripCard';
import ImageUploader from './ImageUploader';
import { useAuth } from '../contexts/AuthContext';

interface MyTripsProps {
    onSelectItinerary: (itinerary: Itinerary) => void;
}

// Helper function to parse date strings like "DD/MM" or "DD/MM/YYYY" for sorting
const parseItineraryDate = (itinerary: Itinerary): Date => {
    const dateStr = itinerary.events[0].startDate;
    const parts = dateStr.split('/');
    
    let day, month, year;
    
    if (parts.length === 3) {
        // Format: DD/MM/YYYY
        [day, month, year] = parts.map(Number);
    } else {
        // Format: DD/MM (assume 2025 or 2026 based on month logic or default)
        [day, month] = parts.map(Number);
        // Basic logic: if month is Jan/Feb, likely next year (2026) if saved recently, else 2025.
        // For simplicity in this demo context, we default to 2025, but the itinerary data usually has full year now.
        year = 2025;
    }
    
    return new Date(year, month - 1, day);
};


const MyTrips: React.FC<MyTripsProps> = ({ onSelectItinerary }) => {
    const { userData, updateUserData } = useAuth();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    if (!userData) {
        return <div>Carregando...</div>;
    }

    const { itineraries, destinations } = userData;

    const handleItineraryCreated = (newItineraryData: Omit<Itinerary, 'id' | 'savedDate'>) => {
        const newItinerary: Itinerary = {
            ...newItineraryData,
            id: Math.max(...itineraries.map(i => i.id), 0) + 1,
            savedDate: new Date().toISOString(),
        };

        const updatedItineraries = [newItinerary, ...itineraries];
        updateUserData({ ...userData, itineraries: updatedItineraries });
    };

    const handleApiKeyError = () => {
        alert("Erro com a Chave de API. Por favor, verifique se sua chave está configurada corretamente e atualize a página.");
    };

    const groupedTrips: { [key: string]: GroupedTrip } = {};

    // 1. Initialize groups from all destinations.
    destinations.forEach(dest => {
        // Simplified key generation
        const key = dest.title.split(':')[0].trim(); 
        if (!groupedTrips[key]) {
            groupedTrips[key] = {
                destination: { ...dest, title: key }, 
                itineraries: [],
                carTrips: dest.carTrips,
            };
        }
    });
    
    // 2. Group itineraries from state into the prepared groups.
    itineraries.forEach(itinerary => {
        let key = "Outros"; // Default group
        
        // Logic to assign itineraries to groups based on keywords
        if (itinerary.title.includes('Paraty') || itinerary.title.includes('Mangaratiba') || itinerary.title.includes('Sakura Rio Mar')) {
            key = 'Fim de Semana em Paraty & Cunha';
        } else if (itinerary.subtitle?.includes('Mochilão') || itinerary.title.includes('Assunção') || itinerary.title.includes('Buenos Aires')) {
            key = 'Mochilão América do Sul';
        }
        
        // If the group doesn't exist (maybe user deleted destination but kept trips), create a temp group
        if (!groupedTrips[key]) {
            const firstEvent = itinerary.events[0];
            groupedTrips[key] = {
                destination: { title: key, icon: firstEvent.company.logo, themeColor: '#64748b' },
                itineraries: [],
            };
        }
        
        if (!groupedTrips[key].itineraries.some(it => it.id === itinerary.id)) {
            groupedTrips[key].itineraries.push(itinerary);
        }
    });

    const finalTrips = Object.values(groupedTrips)
      .filter(trip => (trip.itineraries && trip.itineraries.length > 0) || (trip.carTrips && trip.carTrips.length > 0))
      .map(trip => ({
          ...trip, 
          itineraries: trip.itineraries.sort((a, b) => {
              const dateA = parseItineraryDate(a);
              const dateB = parseItineraryDate(b);
              return dateA.getTime() - dateB.getTime();
          })
      }));

    return (
        <div className="space-y-8">
            <ImageUploader 
                onItineraryCreated={handleItineraryCreated}
                onApiKeyError={handleApiKeyError}
            />
            <div className="space-y-4">
                {finalTrips.map((trip, index) => (
                    <DestinationTripCard 
                        key={index}
                        trip={trip}
                        onSelectItinerary={onSelectItinerary}
                        isExpanded={expandedIndex === index}
                        onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyTrips;
