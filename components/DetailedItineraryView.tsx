import React from 'react';
import type { DetailedRoute, CityItinerary, DayPlan, Activity, BudgetTips } from '../types';
import { detailedRoutes } from '../detailedRoutes';
import { 
    CloseIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    AlertTriangleIcon,
    WalkIcon
} from './icons';

const BudgetTipsCard: React.FC<{ tips: BudgetTips }> = ({ tips }) => (
    <div className="bg-slate-100/80 p-4 rounded-xl border border-slate-200 mt-6">
        <h4 className="font-bold text-slate-700 mb-3 text-base">Dicas de Bolso</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h5 className="font-semibold text-sm text-slate-600 mb-2">{tips.transport.title}</h5>
                <div className="space-y-2 text-xs">
                    {tips.transport.options.map((opt, i) => (
                        <div key={i}>
                            <p className="font-semibold text-slate-800">{opt.type}: <span className="font-normal">{opt.cost}</span></p>
                            <p className="text-slate-500">{opt.details}</p>
                        </div>
                    ))}
                </div>
            </div>
             <div>
                <h5 className="font-semibold text-sm text-slate-600 mb-2">{tips.food.title}</h5>
                <div className="space-y-2 text-xs">
                    {tips.food.options.map((opt, i) => (
                        <div key={i}>
                            <p className="font-semibold text-slate-800">{opt.type}: <span className="font-normal">{opt.cost}</span></p>
                            <p className="text-slate-500">{opt.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {tips.general && (
            <div className="mt-4 pt-4 border-t border-slate-200/80">
                 <h5 className="font-semibold text-sm text-slate-600 mb-2 flex items-center"><AlertTriangleIcon className="h-4 w-4 mr-2 text-amber-500" /> {tips.general.title}</h5>
                 <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-600">
                    {tips.general.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
            </div>
        )}
    </div>
);


const ActivityRow: React.FC<{ activity: Activity }> = ({ activity }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-500">
            {React.cloneElement(activity.icon, { className: 'h-5 w-5' })}
        </div>
        <div className="flex-1">
            <p className="text-sm text-slate-800">
                <span className="font-semibold text-slate-500">{activity.period}:</span> {activity.description}
                {activity.cost_level === 'Grátis' && (
                    <span className="ml-2 text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Grátis</span>
                )}
            </p>
            {activity.tip && <p className="text-xs text-slate-500 mt-1">Dica: {activity.tip}</p>}
        </div>
    </div>
);

const DayCard: React.FC<{ dayPlan: DayPlan }> = ({ dayPlan }) => (
    <div className="relative">
        <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-cyan-500 ring-8 ring-white"></div>
        <p className="font-bold text-slate-700 text-lg">{dayPlan.title}
            <span className="font-normal text-slate-500 text-sm ml-2">- {dayPlan.date}</span>
        </p>
        <div className="mt-3 space-y-3">
            {dayPlan.activities.map((activity, actIndex) => (
                <ActivityRow key={actIndex} activity={activity} />
            ))}
        </div>
    </div>
);


const DetailedItineraryView: React.FC<{ 
    selection: { id: number } | null; 
    onClose: () => void; 
    onNavigate: (direction: 'next' | 'prev') => void; 
}> = ({ selection, onClose, onNavigate }) => {
  if (!selection) {
    return null;
  }

  const { id: destinationId } = selection;
  const routeData = detailedRoutes[destinationId];

  // Scroll to top when route changes
  const scrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
    }
  }, [destinationId]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${destinationId !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sliding Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-gradient-to-br from-white via-white to-sky-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${destinationId !== null ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex-shrink-0 sticky top-0 z-20">
            <h2 className="text-xl font-bold text-slate-800 truncate pr-4">{routeData?.title || 'Carregando...'}</h2>
            <div className="flex items-center space-x-1">
               <button onClick={() => onNavigate('prev')} className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors" title="Anterior">
                 <ChevronLeftIcon className="h-6 w-6" />
               </button>
               <button onClick={() => onNavigate('next')} className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors" title="Próximo">
                 <ChevronRightIcon className="h-6 w-6" />
               </button>
               <div className="w-px h-6 bg-slate-300 mx-2"></div>
               <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors" title="Fechar">
                 <CloseIcon className="h-6 w-6" />
               </button>
            </div>
          </header>

          {/* Content */}
          <div ref={scrollRef} className="relative z-0 flex-grow overflow-y-auto p-6 space-y-8">
            {routeData ? (
              <>
                {routeData.itinerary.map((cityPlan, cityIndex) => (
                  <section key={cityIndex}>
                    <div className="flex items-baseline space-x-3 mb-4">
                       <h3 className="text-2xl font-extrabold text-cyan-700">{cityPlan.city}</h3>
                       <span className="text-sm font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">{cityPlan.duration}</span>
                    </div>
                    
                    {/* Walking Guide Banner */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow group">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-emerald-100 rounded-full text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                                <WalkIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h5 className="font-bold text-emerald-800">Guia de Caminhada: {cityPlan.city} a Pé</h5>
                                <p className="text-xs text-emerald-600">Descubra atrações gratuitas e bairros charmosos.</p>
                            </div>
                        </div>
                        <div className="text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-6 border-l-2 border-slate-200 ml-4 pl-8">
                      {cityPlan.days.map((dayPlan, dayIndex) => (
                        <DayCard key={dayIndex} dayPlan={dayPlan} />
                      ))}
                    </div>
                    <BudgetTipsCard tips={cityPlan.budgetTips} />
                  </section>
                ))}

                {/* Footer Navigation */}
                <div className="pt-8 mt-8 border-t border-slate-200 flex justify-between items-center pb-4">
                    <button 
                        onClick={() => onNavigate('prev')} 
                        className="flex items-center px-4 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
                    >
                        <ChevronLeftIcon className="h-5 w-5 mr-2" />
                        Anterior
                    </button>
                    <button 
                        onClick={() => onNavigate('next')} 
                        className="flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        Próximo Roteiro
                        <ChevronRightIcon className="h-5 w-5 ml-2" />
                    </button>
                </div>
              </>
            ) : (
              <p>Roteiro não encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedItineraryView;