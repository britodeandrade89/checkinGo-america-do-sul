
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-5 py-2.5 font-medium rounded-lg text-sm inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-800',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-800',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 focus:ring-gray-700',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
