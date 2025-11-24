
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg flex items-center space-x-4 transition-all hover:bg-gray-800/80 hover:border-cyan-500/50">
      <div className="bg-gray-700/50 p-3 rounded-full text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
