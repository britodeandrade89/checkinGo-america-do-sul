import React from 'react';
import type { DetailedRoute, BudgetTips } from '../types';
import { detailedRoutes } from '../detailedRoutes';
import { 
    CloseIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    AlertTriangleIcon,
    WalkIcon
} from './icons';

const BudgetTipsCard: React.FC<{ tips: BudgetTips }> = ({ tips }) => (
    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 mt-6">
        <h4 className="font-bold text-gray-200 mb-3 text-base">Dicas de Bolso</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h5 className="font-semibold text-sm text-gray-400 mb-2">{tips.transport.title}</h5>
                <div className="space-y-2 text-xs">
                    {tips.transport.options.map((opt, i) => (
                        <div key={i}>
                            <p className="font-semibold text-gray-200">{opt.type}: <span className="font-normal">{opt.cost}</span></p>
                            <p className="text-gray-500">{opt.details}</p>
                        </div>
                    ))}
                </div>
            </div>
             <div>
                <h5 className="font-semibold text-sm text-gray-400 mb-2">{tips.food.title}</h5>
                <div className="space-y-2 text-xs">
                    {tips.food.options.map((opt, i) => (
                        <div key={i}>
                            <p className="font-semibold text-gray-200">{opt.type}: <span className="font-normal">{opt.cost}</span></p>
                            <p className="text-gray-500">{opt.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {tips.general && (
            <div className="mt-4 pt-4 border-t border-gray-700/80">
                 <h5 className="font-semibold text-sm text-gray-400 mb-2 flex items-center"><AlertTriangleIcon className="h-4 w-4 mr-2 text-amber-400" /> {tips.general.title}</h5>
                 <ul className="space-y-1.5 list-disc list-inside text-xs text-gray-400">
                    {tips.general.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
            </div>
        )}
    </div>
);

const DetailedItineraryView: React.FC<{ 
    selection: { id: number } | null; 
    onClose: () => void; 
    onNavigate: (direction: 'next' | 'prev') => void; 
}> = ({ selection, onClose, onNavigate }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (selection) {
      setIsVisible(true);
      scrollRef.current?.scrollTo(0, 0);
    } else {
      setIsVisible(false);
    }
  }, [selection]);

  if (!selection) return null;

  const { id: destinationId } = selection;
  const routeData = detailedRoutes[destinationId];
  
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-[#181818] shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 bg-[#1f1f1f]/80 backdrop-blur-sm border-b border-gray-700 flex-shrink-0 sticky top-0 z-20">
            <h2 className="text-xl font-bold text-gray-100 truncate pr-4">{routeData?.title || 'Carregando...'}</h2>
            <div className="flex items-center space-x-1">
               <button onClick={() => onNavigate('prev')} className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors" title="Anterior"><ChevronLeftIcon className="h-6 w-6" /></button>
               <button onClick={() => onNavigate('next')} className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors" title="Próximo"><ChevronRightIcon className="h-6 w-6" /></button>
               <div className="w-px h-6 bg-gray-600 mx-2"></div>
               <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors" title="Fechar"><CloseIcon className="h-6 w-6" /></button>
            </div>
          </header>

          <div ref={scrollRef} className="relative z-0 flex-grow overflow-y-auto p-6 space-y-8 text-gray-300">
            {routeData ? (
              <>
                {routeData.itinerary.map((cityPlan, cityIndex) => (
                  <section key={cityIndex}>
                    <div className="flex items-baseline space-x-3 mb-4">
                       <h3 className="text-2xl font-extrabold text-cyan-400">{cityPlan.city}</h3>
                       <span className="text-sm font-semibold text-gray-300 bg-gray-700 px-2 py-0.5 rounded">{cityPlan.duration}</span>
                    </div>
                    
                    <div className="mb-6 p-4 bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-700/50 rounded-xl flex items-center justify-between cursor-pointer hover:shadow-lg hover:border-emerald-600/70 transition-all group">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-emerald-800/50 rounded-full text-emerald-400 group-hover:bg-emerald-700/60 transition-colors"><WalkIcon className="h-6 w-6" /></div>
                            <div>
                                <h5 className="font-bold text-emerald-300">Guia de Caminhada: {cityPlan.city} a Pé</h5>
                                <p className="text-xs text-emerald-500">Descubra atrações gratuitas e bairros charmosos.</p>
                            </div>
                        </div>
                        <div className="text-emerald-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></div>
                    </div>

                    <div className="space-y-6 border-l-2 border-gray-700 ml-4 pl-8">
                      {cityPlan.days.map((dayPlan) => (
                        <div className="relative" key={dayPlan.day}>
                          <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-cyan-500 ring-8 ring-[#181818]"></div>
                          <p className="font-bold text-gray-200 text-lg">{dayPlan.title}<span className="font-normal text-gray-500 text-sm ml-2">- {dayPlan.date}</span></p>
                          <div className="mt-3 space-y-4">
                            {dayPlan.activities.map((activity, actIndex) => (
                               <div className="flex items-start space-x-3" key={actIndex}>
                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 text-gray-400">{React.cloneElement(activity.icon, { className: 'h-5 w-5' })}</div>
                                  <div className="flex-1">
                                      <p className="text-sm text-gray-300"><span className="font-semibold text-gray-500">{activity.period}:</span> {activity.description}
                                      {activity.cost_level === 'Grátis' && (<span className="ml-2 text-xs font-bold text-green-400 bg-green-900/50 px-2 py-0.5 rounded-full">Grátis</span>)}</p>
                                      {activity.tip && <p className="text-xs text-gray-500 mt-1">Dica: {activity.tip}</p>}
                                  </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <BudgetTipsCard tips={cityPlan.budgetTips} />
                  </section>
                ))}
              </>
            ) : ( <p>Roteiro não encontrado.</p> )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedItineraryView;
