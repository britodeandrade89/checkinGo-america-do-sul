
// FIX: Imported the `React` namespace to resolve the "Cannot find namespace 'React'" error for the `React.ReactElement` type.
import React, { ReactNode } from 'react';

// FIX: Moved the AIStudio interface into the `declare global` block. This resolves the "Subsequent property declarations must have the same type" error by ensuring AIStudio is a true global type, preventing scope conflicts.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }

  // START: Added BeforeInstallPromptEvent interface for PWA installation
  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
      outcome: 'accepted' | 'dismissed';
      platform: string;
    }>;
    prompt(): Promise<void>;
  }
  // END: Added BeforeInstallPromptEvent interface for PWA installation
}

// START: Added User and UserData interfaces for multi-profile support
export interface User {
  id: number;
  name: string;
  avatar: string;
  pin?: string; // Added PIN for login simulation
}

export interface UserData {
  itineraries: Itinerary[];
  destinations: Destination[];
}
// END: Added User and UserData interfaces

// FIX: Added UserConfig interface to define the shape of user configuration data.
export interface UserConfig {
  origins: string[];
  destinations: string[];
  whatsapp_numbers: string[];
  travel_period: {
    start: string;
    end: string;
    min_days: number;
    max_days: number;
  };
}

// FIX: Added Flight interface to define the shape of flight data from the Gemini API.
export interface Flight {
  origin: string;
  destination: string;
  price: number;
  airline: string;
  departure_date: string;
  return_date: string;
  baggage: string;
  route_type: 'round_trip' | 'circular';
  return_city?: string;
}

export interface Airport {
  code: string;
  name: string;
}

export type TripEventType = 'flight' | 'car' | 'train' | 'accommodation' | 'bus' | 'ship';

export interface TripEvent {
  type: TripEventType;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  startLocation: string;
  endLocation: string;
  duration: string;
  details: string;
  company: {
    name: string;
    logo: ReactNode;
  };
  warning?: string;
  operator?: string;
}

export interface BaggageDetail {
  status: 'Inclusa' | 'Taxa Adicional' | 'Não disponível';
  details: string;
}

export interface BaggageInfo {
  personal: BaggageDetail;
  carryOn: BaggageDetail;
  checked: BaggageDetail;
}

export interface AdditionalCost {
  description: string;
  amount: number;
  icon: ReactNode;
  details?: string;
}

export interface PriceHistoryItem {
  timestamp: Date;
  price: number;
}

export interface BookingOption {
    provider: string;
    price: number;
    url: string;
    logo?: ReactNode;
    tag?: string;
}

export interface Itinerary {
  id: number;
  title: string;
  subtitle?: string;
  savedDate: string;
  totalPrice: number;
  events: TripEvent[];
  baggage?: BaggageInfo;
  additionalCosts?: AdditionalCost[];
  bookingOptions?: BookingOption[];
  sourceUrl: string;
  monitoring?: {
    enabled: boolean;
  };
  priceHistory?: PriceHistoryItem[];
}

export interface CarTripInfo {
  duration: string;
  distance: string;
  totalCostOneWay: number;
  details: string;
  fuelCostOneWay: number;
  tollCostOneWay: number;
  mapUrl?: string;
  additionalCosts?: {
    description: string;
    dailyRate?: number;
    total?: number;
    icon: ReactNode;
  }[];
}

export interface CarTripLeg extends CarTripInfo {
  title: string;
}


export interface Destination {
  id: number;
  title: string;
  category: string;
  places: string[];
  description: string;
  themeColor: string;
  icon: React.ReactElement;
  imageUrl?: string; // Added for Netflix-style cards
  isFavorite?: boolean; // Added for Favorite feature
  carTrips?: CarTripLeg[];
  // START: Added properties to support detailed trip planning within MyTrips.
  accommodations?: AccommodationOption[];
  additionalCosts?: AdditionalCost[];
  // END: Added properties.
}

// START: Updated interfaces for detailed, rich day-by-day itineraries
export interface Activity {
  period: 'Manhã' | 'Tarde' | 'Noite' | 'Dia Inteiro' | 'Transporte';
  description: string;
  type: 'Passeio' | 'Transporte' | 'Alimentação' | 'Compras' | 'Hospedagem' | 'Dica';
  cost_level: 'Grátis' | 'Baixo' | 'Médio' | 'Alto' | 'Incluso';
  tip?: string;
  icon: React.ReactElement;
}

export interface DayPlan {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface BudgetTipOption {
    type: string;
    cost: string;
    details: string;
}

export interface BudgetTips {
    transport: {
        title: string;
        options: BudgetTipOption[];
    };
    food: {
        title: string;
        options: BudgetTipOption[];
    };
    general?: {
        title: string;
        tips: string[];
    }
}

export interface CityItinerary {
  city: string;
  duration: string;
  days: DayPlan[];
  budgetTips: BudgetTips;
}

export interface AccommodationOption {
    name: string;
    city: string;
    rating: number;
    pricePerNight: number;
    totalPrice: number;
    nights: number;
    amenities: string[];
    pros: string[];
    cons: string[];
    distanceToCenter: string;
    bookingUrl: string;
}

export interface DetailedRoute {
  id: number;
  title: string;
  itinerary: CityItinerary[];
  // FIX: Added optional 'accommodations' property to align the type with its usage in components and the data structure in detailedRotes.ts.
  accommodations?: AccommodationOption[];
}
// END: Updated interfaces

// FIX: Added missing interfaces for trip combinations and grouped trips to resolve import errors and provide a single source of truth for these types.
export interface TripOption {
  departureFlight: Itinerary;
  returnFlight: Itinerary;
  returnDate: string;
  duration: string;
  totalCost: number;
}

export interface BestTripCombination {
  type: 'Menor Preço' | 'Melhor Custo-Benefício';
  totalCost: number;
  departureFlight: Itinerary;
  returnFlight: Itinerary;
  accommodation: AccommodationOption;
}

export interface GroupedTrip {
    destination: Destination | { title: string; themeColor?: string, icon?: React.ReactElement, imageUrl?: string };
    itineraries: Itinerary[];
    carTrips?: CarTripLeg[];
}