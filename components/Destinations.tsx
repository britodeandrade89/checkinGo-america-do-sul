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

  const groupedDestinations = destinations.reduce((acc, dest) => {
    (acc[dest.category] = acc[dest.category] || []).push(dest);
    return acc;
  }, {} as Record<string, Destination[]>);

  const handleSelectDestination = (id: number) => {
    setSelectedDestination({ id, startDate: null }); // Start date is handled within the detailed view now
  };

  const handleClose = () => {
    setSelectedDestination(null);
  }

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedDestination) return;
    const currentCategory = destinations.find(d => d.id === selectedDestination.id)?.category;
    if (!currentCategory) return;
    
    const categoryDestinations = destinations.filter(d => d.category === currentCategory);
    const currentIndex = categoryDestinations.findIndex(d => d.id === selectedDestination.id);

    let nextDestination: Destination;
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % categoryDestinations.length;
      nextDestination = categoryDestinations[nextIndex];
    } else {
      const prevIndex = (currentIndex - 1 + categoryDestinations.length) % categoryDestinations.length;
      nextDestination = categoryDestinations[prevIndex];
    }
    
    setSelectedDestination({ id: nextDestination.id, startDate: null });
  }

  return (
    <>
      <div className="space-y-12">
        {Object.entries(groupedDestinations).map(([category, dests]) => (
          <section key={category}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-400 pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dests.map(destination => {
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
          </section>
        ))}
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