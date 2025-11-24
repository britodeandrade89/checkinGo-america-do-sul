
import React from 'react';
import type { UserConfig } from '../types';
import { CogIcon } from './icons';

interface ConfigPanelProps {
  config: UserConfig;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({ config }) => {
  return (
    <div className="mt-12 bg-gray-800/30 border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-300">
        <CogIcon className="h-6 w-6 mr-2" />
        Configuração Ativa
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-400">
        <div>
          <strong>Origens:</strong>
          <span className="ml-2 bg-gray-700/50 px-2 py-1 rounded text-gray-300 text-sm">{config.origins.join(', ')}</span>
        </div>
        <div>
          <strong>Destinos:</strong>
          <span className="ml-2 bg-gray-700/50 px-2 py-1 rounded text-gray-300 text-sm">{config.destinations.join(', ')}</span>
        </div>
        <div>
          <strong>Período da Viagem:</strong>
          <span className="ml-2 bg-gray-700/50 px-2 py-1 rounded text-gray-300 text-sm">{config.travel_period.start} a {config.travel_period.end}</span>
        </div>
        <div>
          <strong>Duração da Viagem:</strong>
          <span className="ml-2 bg-gray-700/50 px-2 py-1 rounded text-gray-300 text-sm">{config.travel_period.min_days}-{config.travel_period.max_days} dias</span>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
