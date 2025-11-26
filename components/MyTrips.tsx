import React from 'react';
import type { Itinerary, GroupedTrip } from '../types';
import DestinationTripCard from './DestinationTripCard';
import { useAuth } from '../contexts/AuthContext';

interface MyTripsProps {
    onSelectItinerary: (itinerary: Itinerary) => void;
    onShowInfo: (id: number) => void;
}

const MyTrips: React.FC<MyTripsProps> = ({ onSelectItinerary, onShowInfo }) => {
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
    
    itineraries.forEach(itinerary => {
        let key = "Outros";
        if (itinerary.subtitle?.includes('Opção 1') || itinerary.title.includes('Opção 1')) {
            key = 'Opção 1: Rota via Assunção';
        } else if (itinerary.subtitle?.includes('Opção 2') || itinerary.title.includes('Opção 2')) {
            key = 'Opção 2: Rota Direta (Iguazú)';
        }
        
        if (groupedTrips[key] && !groupedTrips[key].itineraries.some(it => it.id === itinerary.id)) {
            groupedTrips[key].itineraries.push(itinerary);
        }
    });

    const finalTrips = Object.values(groupedTrips)
      .filter(trip => (trip.itineraries && trip.itineraries.length > 0) || (trip.carTrips && trip.carTrips.length > 0));

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {finalTrips.map((trip, index) => {
                const destId = 'id' in trip.destination ? trip.destination.id : undefined;
                
                return (
                    <DestinationTripCard 
                        key={index}
                        trip={trip}
                        onShowInfo={destId ? () => onShowInfo(destId) : () => {}}
                        onToggleFavorite={destId ? () => handleToggleFavorite(destId) : undefined}
                    />
                );
            })}
        </div>
    );
};

export default MyTrips;
