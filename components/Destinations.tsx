import React from 'react';
import DestinationCard from './DestinationCard';
import type { Destination } from '../types';
import { useAuth } from '../contexts/AuthContext';

interface DestinationsProps {
  onShowInfo: (id: number) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ onShowInfo }) => {
  const { userData } = useAuth();

  if (!userData) {
    return <div>Carregando dados do usuário...</div>;
  }
  
  const { destinations, itineraries } = userData;

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {destinations.map(destination => {
          const destinationItineraries = itineraries.filter(it => {
              if (destination.id === 41) return it.id.toString().startsWith('2');
              if (destination.id === 42) return it.id.toString().startsWith('3');
              return false;
          });
          const totalItineraryCost = destinationItineraries.reduce((sum, it) => sum + it.totalPrice, 0);
          const additionalCosts = destination.additionalCosts?.reduce((sum, cost) => sum + cost.amount, 0) || 0;
          const totalCost = totalItineraryCost + additionalCosts;
          const plannedItemsCount = destinationItineraries.length + (destination.additionalCosts?.length || 0);

          return (
            <DestinationCard 
              key={destination.id} 
              destination={destination}
              totalCost={totalCost}
              plannedItemsCount={plannedItemsCount}
              onShowInfo={() => onShowInfo(destination.id)}
            />
          )
        })}
      </div>
  );
};

export default Destinations;
