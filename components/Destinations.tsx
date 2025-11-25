
import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import DetailedItineraryView from './DetailedItineraryView';
import type { Destination } from '../types';
import { useAuth } from '../contexts/AuthContext';

const Destinations: React.FC = () => {
  const { userData } = useAuth();
  const [selectedDestination, setSelectedDestination] = useState<{ id: number; startDate: string | null } | null>(null);

  if (!userData) {
    return <div>Carregando dados do usuário...</div>;
  }
  
  const { destinations, itineraries } = userData;

  const handleSelectDestination = (id: number) => {
    setSelectedDestination({ id, startDate: null }); // Start date is handled within the detailed view now
  };

  const handleClose = () => {
    setSelectedDestination(null);
  }

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedDestination) return;
    
    const currentIndex = destinations.findIndex(d => d.id === selectedDestination.id);
    if (currentIndex === -1) return;

    let nextDestination: Destination;
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % destinations.length;
      nextDestination = destinations[nextIndex];
    } else {
      const prevIndex = (currentIndex - 1 + destinations.length) % destinations.length;
      nextDestination = destinations[prevIndex];
    }
    
    setSelectedDestination({ id: nextDestination.id, startDate: null });
  }

  return (
    <>
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
              onClick={() => handleSelectDestination(destination.id)}
            />
          )
        })}
      </div>
      
      <DetailedItineraryView 
        selection={selectedDestination}
        onClose={handleClose}
        onNavigate={handleNavigation}
      />
    </>
  );
};

export default Destinations;
