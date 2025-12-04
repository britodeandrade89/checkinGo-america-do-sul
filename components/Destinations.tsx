
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
      <div className="space-y-8">
        {categories.map(category => (
            <section key={category} className="group/section">
                <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-3 hover:text-white cursor-pointer flex items-center group">
                    {category}
                    <span className="hidden group-hover:inline-block ml-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">Ver tudo &gt;</span>
                </h3>
                
                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x pr-4">
                    {destinations
                        .filter(d => d.category === category)
                        .map(destination => {
                            const destinationItineraries = itineraries.filter(it => {
                                if (destination.id === 1) return it.id === 101 || it.id === 102;
                                if (destination.id === 2) return it.id === 201;
                                if (destination.id === 3) return it.id === 301;
                                return false;
                            });
                            
                            // For visual summary in the card
                            const lowestOptionPrice = destinationItineraries.length > 0 
                                ? Math.min(...destinationItineraries.map(it => it.totalPrice))
                                : 0;

                            const additionalCosts = destination.additionalCosts?.reduce((sum, cost) => sum + cost.amount, 0) || 0;
                            const displayCost = (lowestOptionPrice > 0 ? lowestOptionPrice : 0) + additionalCosts;

                            const plannedItemsCount = destinationItineraries.length;

                            return (
                                <div key={destination.id} className="snap-start flex-shrink-0">
                                    <DestinationCard 
                                        destination={destination}
                                        totalCost={displayCost}
                                        plannedItemsCount={plannedItemsCount}
                                        onShowInfo={() => onShowInfo(destination.id)}
                                    />
                                </div>
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
