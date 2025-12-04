
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

  // Group destinations by category
  const categories = Array.from(new Set(destinations.map(d => d.category)));

  return (
      <div className="space-y-12">
        {categories.map(category => (
            <section key={category}>
                <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-4 hover:text-white cursor-pointer flex items-center group">
                    {category}
                    <span className="hidden group-hover:inline-block ml-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">Ver tudo &gt;</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                    {destinations
                        .filter(d => d.category === category)
                        .map(destination => {
                            const destinationItineraries = itineraries.filter(it => {
                                // Assessoria Essencial now holds both Azul (101) and LATAM (102)
                                if (destination.id === 1) return it.id === 101 || it.id === 102;
                                
                                // Assessoria Completa is currently empty
                                if (destination.id === 2) return false;
                                
                                return false;
                            });
                            
                            const totalItineraryCost = destinationItineraries.reduce((sum, it) => sum + it.totalPrice, 0);
                            
                            // For visual summary in the card, we might average the cost or just show base cost
                            // Since these are options, summing them all might be misleading for the "Total" displayed on the cover card
                            // Let's display the lowest price option + fee for the card summary
                            const lowestOptionPrice = destinationItineraries.length > 0 
                                ? Math.min(...destinationItineraries.map(it => it.totalPrice))
                                : 0;

                            const additionalCosts = destination.additionalCosts?.reduce((sum, cost) => sum + cost.amount, 0) || 0;
                            const displayCost = (lowestOptionPrice > 0 ? lowestOptionPrice : 0) + additionalCosts;

                            const plannedItemsCount = destinationItineraries.length;

                            return (
                                <DestinationCard 
                                    key={destination.id} 
                                    destination={destination}
                                    totalCost={displayCost}
                                    plannedItemsCount={plannedItemsCount}
                                    onShowInfo={() => onShowInfo(destination.id)}
                                />
                            )
                        })
                    }
                </div>
            </section>
        ))}
      </div>
  );
};

export default Destinations;
