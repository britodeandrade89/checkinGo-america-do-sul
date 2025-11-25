
import React from 'react';
import type { Itinerary, GroupedTrip } from '../types';
import DestinationTripCard from './DestinationTripCard';
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
        year = 2025;
    }
    
    return new Date(year, month - 1, day);
};


const MyTrips: React.FC<MyTripsProps> = ({ onSelectItinerary }) => {
    const { userData, updateUserData } = useAuth();

    if (!userData) {
        return <div>Carregando...</div>;
    }

    const { itineraries, destinations } = userData;

    const handleToggleFavorite = (destinationId: number) => {
        const updatedDestinations = destinations.map(dest => {
            if (dest.id === destinationId) {
                return { ...dest, isFavorite: !dest.isFavorite };
            }
            return dest;
        });
        updateUserData({ ...userData, destinations: updatedDestinations });
    };

    const groupedTrips: { [key: string]: GroupedTrip } = {};

    // 1. Initialize groups from all destinations.
    destinations.forEach(dest => {
        const key = dest.title;
        if (!groupedTrips[key]) {
            groupedTrips[key] = {
                destination: dest, 
                itineraries: [],
                carTrips: dest.carTrips,
            };
        }
    });
    
    // 2. Group itineraries into the prepared groups.
    itineraries.forEach(itinerary => {
        let key = "Outros";
        
        if (itinerary.subtitle?.includes('Opção 1') || itinerary.title.includes('Opção 1')) {
            key = 'Opção 1: Rota via Assunção';
        } else if (itinerary.subtitle?.includes('Opção 2') || itinerary.title.includes('Opção 2')) {
            key = 'Opção 2: Rota Direta (Iguazú)';
        }
        
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
              const numA = parseInt(a.title.split('.')[0]);
              const numB = parseInt(b.title.split('.')[0]);
              if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
              return parseItineraryDate(a).getTime() - parseItineraryDate(b).getTime();
          })
      }));

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {finalTrips.map((trip, index) => {
                const destId = 'id' in trip.destination ? trip.destination.id : undefined;
                
                return (
                    <DestinationTripCard 
                        key={index}
                        trip={trip}
                        onSelectItinerary={onSelectItinerary}
                        onToggleFavorite={destId ? () => handleToggleFavorite(destId) : undefined}
                    />
                );
            })}
        </div>
    );
};

export default MyTrips;
