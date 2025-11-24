import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import DetailedItineraryView from './DetailedItineraryView';
import type { Destination, Itinerary, AccommodationOption } from '../types';
import { detailedRoutes } from '../detailedRotes';
import { useAuth } from '../contexts/AuthContext';

const Destinations: React.FC = () => {
  const { userData } = useAuth();
  const [selectedDestination, setSelectedDestination] = useState<{ id: number; startDate: string | null } | null>(null);

  if (!userData) {
    return <div>Carregando dados do usuário...</div>;
  }
  
  const { destinations } = userData;

  const groupedDestinations = destinations.reduce((acc, dest) => {
    (acc[dest.category] = acc[dest.category] || []).push(dest);
    return acc;
  }, {} as Record<string, Destination[]>);

  const handleSelectDestination = (id: number, startDate: string | null) => {
    setSelectedDestination({ id, startDate });
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
                // Since all Porto Seguro flight data is removed, we only display car-based trips.
                const routeDetails = detailedRoutes[destination.id];
                const accommodationPreview = routeDetails?.accommodations?.[0];
                return (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination}
                    tripOptions={[]} // No flight options to calculate
                    accommodationPreview={accommodationPreview}
                    onClick={() => handleSelectDestination(destination.id, null)} // No start date for car trips
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