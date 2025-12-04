
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
        
        if (itinerary.id === 101 || itinerary.id === 102) {
            const dest1 = destinations.find(d => d.id === 1);
            if (dest1) key = dest1.title;
        } else if (itinerary.id === 201) {
            const dest2 = destinations.find(d => d.id === 2);
            if (dest2) key = dest2.title;
        } else if (itinerary.id === 301) {
            const dest3 = destinations.find(d => d.id === 3);
            if (dest3) key = dest3.title;
        }
        
        if (groupedTrips[key] && !groupedTrips[key].itineraries.some(it => it.id === itinerary.id)) {
            groupedTrips[key].itineraries.push(itinerary);
        }
    });

    const finalTrips = Object.values(groupedTrips)
      .filter(trip => (trip.itineraries && trip.itineraries.length > 0) || (trip.carTrips && trip.carTrips.length > 0));

    return (
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x pr-4">
            {finalTrips.map((trip, index) => {
                const destId = 'id' in trip.destination ? trip.destination.id : undefined;
                
                return (
                    <div key={index} className="snap-start flex-shrink-0">
                        <DestinationTripCard 
                            trip={trip}
                            onShowInfo={destId ? () => onShowInfo(destId) : () => {}}
                            onToggleFavorite={destId ? () => handleToggleFavorite(destId) : undefined}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default MyTrips;
