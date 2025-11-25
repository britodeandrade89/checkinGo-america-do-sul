
import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="earth-grad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#87CEEB" />
                <stop offset="100%" stopColor="#005f9e" />
            </radialGradient>
            <clipPath id="earth-clip">
                <circle cx="100" cy="100" r="70" />
            </clipPath>
        </defs>
        <g>
            <circle cx="100" cy="100" r="70" fill="url(#earth-grad)" />
            <g clipPath="url(#earth-clip)">
                <g>
                    <animateTransform attributeName="transform" type="translate" values="-80 0; 80 0; -80 0" begin="0s" dur="6s" repeatCount="indefinite" />
                    <path d="M100 80 C 80 85, 90 110, 100 120 S 130 115, 140 100 S 120 70, 100 80 Z" fill="#22c55e" opacity="0.6" />
                    <path d="M150 90 C 145 100, 155 110, 160 105 S 165 85, 150 90 Z" fill="#16a34a" opacity="0.6" />
                    <path d="M50 95 C 60 90, 70 100, 65 110 S 45 115, 50 95 Z" fill="#16a34a" opacity="0.6" />
                </g>
            </g>
        </g>
        <path id="pin-path" d="M 100, 30 A 70,70 0 1 1 99.99, 30 Z" fill="none" />
        <path id="plane-path" d="M 10,100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0" fill="none" />
        <g>
            <path d="M-6 -18 C -6 -24, 6 -24, 6 -18 C 6 -12, 0 0, 0 0 C 0 0, -6 -12, -6 -18 Z" fill="#ef4444"/>
            <circle cx="0" cy="-15" r="3" fill="white"/>
            <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#pin-path"/>
            </animateMotion>
        </g>
        <g fill="#f8fafc" stroke="#64748b" strokeWidth="1.5">
            <path d="M-15 0 L 15 0 M-5 -6 L 0 0 L -5 6 M5 -10 L 15 0 L 5 10" />
            <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#plane-path"/>
            </animateMotion>
        </g>
    </svg>
);

export const SpinningEarthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="earth-grad-spin" cx="50%" cy="50%" r="50%" fx="25%" fy="25%">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" /> 
                <stop offset="100%" stopColor="#166534" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="#1d4ed8" /> {/* Oceano Azul Profundo */}
        <g>
             {/* Continentes Estilizados para rotação visível */}
            <path d="M20 30 Q 35 10, 50 30 T 80 40 T 50 70 T 20 60 Z" fill="#22c55e" opacity="0.9" />
            <path d="M60 10 Q 75 -5, 90 15 T 95 45" fill="#16a34a" opacity="0.8" />
            <path d="M10 60 Q 25 80, 45 90 T 15 95" fill="#16a34a" opacity="0.8" />
            <circle cx="70" cy="70" r="8" fill="#4ade80" opacity="0.6" />
        </g>
        {/* Sombra/Brilho para dar volume */}
        <circle cx="50" cy="50" r="48" fill="url(#earth-grad-spin)" opacity="0.2" />
    </svg>
);

export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
);

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const LatamLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0H48V48H0V0Z" fill="white" fillOpacity="0.01"/>
    <path d="M12 11L4 24H12L20 11H12Z" fill="#0033A0"/>
    <path d="M21 11L13 24H21L29 11H21Z" fill="#0033A0"/>
    <path d="M29 11L21 24H29L37 11H29Z" fill="#D81E05"/>
    <path d="M38 11L30 24H38L46 11H38Z" fill="#D81E05"/>
  </svg>
);

export const SkyLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.913 6.96313H21.4285V4.76172H14.1428V6.96313H16.6067C15.2287 11.6441 12.0125 15.111 8.57139 17.0709L10.2857 18.9998L10.3242 19.0383C14.3999 16.7141 18.0035 12.6369 19.4632 6.96313H18.913ZM7.14282 14.8569L9.17854 13.0355L4.49996 4.76172H2.57139L7.14282 14.8569Z" fill="#6c2bd9"/>
  </svg>
);

export const BoaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0033A0"/>
        <path d="m13.21 15.4-3.95-3.95a.996.996 0 1 1 1.41-1.41l2.22 2.22 4.68-4.68a.996.996 0 1 1 1.41 1.41L14.62 15.4a.996.996 0 0 1-1.41 0z" fill="#D81E05"/>
        <path d="M12.5,9.5 C12.5,9.22 12.72,9 13,9 L16,9 C16.28,9 16.5,9.22 16.5,9.5 C16.5,9.78 16.28,10 16,10 L13,10 C12.72,10 12.5,9.78 12.5,9.5 z" fill="#FFC72C"/>
    </svg>
);

export const JetSmartLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="45" fill="#0033A0" />
        <path d="M30 60 C 40 70, 60 70, 70 60" stroke="#FFFFFF" strokeWidth="8" fill="transparent" />
        <path d="M35 40 Q 50 25, 65 40" stroke="#D81E05" strokeWidth="8" fill="transparent" />
    </svg>
);

export const FlybondiLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="45" fill="#FFD700" />
        <path d="M30,50 a20,20 0 1,1 40,0" fill="#000" />
        <circle cx="50" cy="50" r="10" fill="#FFD700" />
    </svg>
);

export const MaxMilhasLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100" height="50" rx="10" fill="#2E8B57"/>
      <text x="50" y="35" fontFamily="Arial, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">max</text>
    </svg>
);

export const AzulLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M49.9998 8.33301C38.8358 8.33301 28.1814 13.033 20.4184 20.796C12.6554 28.559 7.9554 39.2134 7.9554 50.3774C7.9554 61.5414 12.6554 72.1958 20.4184 79.9588C28.1814 87.7218 38.8358 92.4218 49.9998 92.4218C61.1638 92.4218 71.8182 87.7218 79.5812 79.9588C87.3442 72.1958 92.0442 61.5414 92.0442 50.3774C92.0442 39.2134 87.3442 28.559 79.5812 20.796C71.8182 13.033 61.1638 8.33301 49.9998 8.33301Z" fill="#001E64"/>
        <path d="M29.1667 50.377L33.3334 46.2103L50.0001 62.877L66.6667 46.2103L70.8334 50.377L50.0001 71.2103L29.1667 50.377Z" fill="#00AEEF"/>
        <path d="M50.0001 29.5439L33.3334 46.2106L37.5001 50.3773L50.0001 37.8773L62.5001 50.3773L66.6667 46.2106L50.0001 29.5439Z" fill="white"/>
    </svg>
);

export const DecolarLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#F43F5E"/>
        <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C27.13 36 29.98 34.89 32.09 33.09C30.29 30.98 29.18 28.13 29.18 25.1C29.18 20.53 32.89 16.82 37.46 16.82C35.13 13.91 30.09 12 24 12Z" fill="white"/>
    </svg>
);

export const BookingLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#003580"/>
        <path d="M21 14H24.5C27.5 14 30 16.5 30 19.5C30 22.5 27.5 25 24.5 25H21V14ZM21 27H25C28.5 27 31 29.5 31 32.5C31 35.5 28.5 38 25 38H21V27Z" fill="white" stroke="#FFFFFF" strokeWidth="2"/>
    </svg>
);

export const AirbnbLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#FF5A5F"/>
        <path d="M24 8C19.58 8 16 11.58 16 16C16 20.42 24 32 24 32C24 32 32 20.42 32 16C32 11.58 28.42 8 24 8ZM24 19C22.34 19 21 17.66 21 16C21 14.34 22.34 13 24 13C25.66 13 27 14.34 27 16C27 17.66 25.66 19 24 19Z" fill="white"/>
    </svg>
);

export const NsaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100" height="50" rx="8" fill="#1e3a8a"/>
      <text x="50" y="35" fontFamily="Arial, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">NSA</text>
    </svg>
);

export const NordesteLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100" height="50" rx="8" fill="#000080"/>
      <path d="M20 35 L20 15 L50 35 L50 15" stroke="#fbbf24" strokeWidth="4" fill="none"/>
      <text x="75" y="32" fontFamily="Arial, sans-serif" fontSize="20" fill="#fbbf24" textAnchor="middle" fontWeight="bold">NOR</text>
    </svg>
);


export const ClickBusLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#FF6600"/>
      <path d="M16 24V18H32V24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 30H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 30H32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 24H36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 30H36V34H12V30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875M10.5 6h3.75a2.25 2.25 0 0 1 2.25 2.25v3.75a2.25 2.25 0 0 1-2.25-2.25h-3.75a2.25 2.25 0 0 1-2.25-2.25v-3.75a2.25 2.25 0 0 1 2.25-2.25Z" />
  </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 21.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
);

export const PlaneTakeoffIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5" />
    </svg>
);

export const PriceTagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
);

export const CheckShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    </svg>
);

export const CompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 4.5 4.5M13.5 9l-4.5 4.5" />
    </svg>
);

export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" />
    </svg>
);

export const BaggageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
    </svg>
);

export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.664 0l3.18-3.185m-3.181-4.992-3.182-3.182a8.25 8.25 0 0 0-11.664 0L2.985 14.652Z" />
    </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

export const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.43.992a6.759 6.759 0 0 1 0 1.905c-.008.379.137.752.43.992l1.004.827a1.125 1.125 0 0 1 .26 1.43-1.125 1.125 0 0 1-1.37.49l-1.217-.456a1.125 1.125 0 0 1-1.075.124c-.072.044-.146.087-.22.128-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87-.074-.04-.147-.083-.22-.127-.325-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 0 1 1.37-.49l-1.296-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.759 6.759 0 0 1 0-1.905c.008-.379-.137-.752-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43 1.125 1.125 0 0 1 1.37-.49l1.217.456a1.125 1.125 0 0 1 1.075-.124c.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.213-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const ActivityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
    </svg>
);

export const AlertTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
);

export const ParkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-6h6" />
    </svg>
);

export const RouteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662a48.678 48.678 0 0 0 7.462 0Zm-14.862 0A48.678 48.678 0 0 1 12 10.5c2.298 0 4.406.203 6.338.562m-12.676 0c.24.02.48.038.72.056m11.236 0c.24-.018.48-.036.72-.056m-12.676 0-2.002-2.002a2.25 2.25 0 0 0-3.182 0l-.002.002a2.25 2.25 0 0 0 0 3.182l2.002 2.002m12.676 0-2.002 2.002a2.25 2.25 0 0 1-3.182 0l-.002-.002a2.25 2.25 0 0 1 0-3.182l2.002-2.002Z" />
    </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const ThumbsUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M6.633 10.25l-2.286-6.857a.75.75 0 0 0-1.433 1.003l1.144 3.434a.75.75 0 0 1-1.003 1.433l-6.857 2.286a.75.75 0 0 0 1.003 1.433l3.434 1.144a.75.75 0 0 1 1.433-1.003l2.286-6.857Z" />
    </svg>
);

export const ThumbsDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 12h-2.25" />
    </svg>
);

export const WifiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.136 11.886a9.75 9.75 0 0 1 13.728 0M2 8.734a14.25 14.25 0 0 1 20 0M12 18.375h.007v.008H12v-.008Z" />
    </svg>
);

export const BackpackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.805 0-8.716-3.91-8.716-8.716C3.284 7.47 7.195 3.56 12 3.56c4.805 0 8.716 3.91 8.716 8.716 0 .362-.02.721-.058 1.074M12 6.382v2.64m0 0-2.316 1.158m2.316-1.158L14.316 9" />
    </svg>
);

export const SuitcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 2.25a14.98 14.98 0 0 0-5.84 7.38m5.84 2.58a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 15.59 21.75a14.98 14.98 0 0 0 5.84-7.38m-5.84-2.58a14.98 14.98 0 0 0-6.16-12.12A14.98 14.98 0 0 0 9.63 21.75a14.98 14.98 0 0 0 5.84-7.38" />
    </svg>
);

export const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
);

export const TrendingUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
);

export const TrendingDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.95 11.95 0 0 1 5.814 5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
);

export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);

export const BusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V9.75a1.125 1.125 0 0 1 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v7.875a1.125 1.125 0 0 1-1.125 1.125h-1.875a1.5 1.5 0 0 1-3 0m-6 0a1.5 1.5 0 0 0-3 0m3 0h6M12 6.75h.008v.008H12V6.75Zm-2.25 0h.008v.008H9.75V6.75Zm4.5 0h.008v.008h-.008V6.75Z" />
    </svg>
);

export const FuelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.03 1.121 0 1.131.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5M8.25 7.5V9a.75.75 0 0 1-.75.75H5.625a.75.75 0 0 1-.75-.75V7.5m15 0V9a.75.75 0 0 0-.75.75h-2.625a.75.75 0 0 0-.75-.75V7.5m0-3-3-3m0 0-3 3m3-3v11.25A2.25 2.25 0 0 1 12 21.75H5.25A2.25 2.25 0 0 1 3 19.5V7.5a2.25 2.25 0 0 1 2.25-2.25h.75" />
    </svg>
);

export const ShipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0 1.291-.077 2.56-.226 3.791M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM19.5 12c0-1.291.077-2.56.226-3.791m0 7.582a22.492 22.492 0 0 1-15.002-1.423M3.774 15.791a22.5 22.5 0 0 1 15-1.423m0 1.423a22.492 22.492 0 0 0-15 1.423" />
    </svg>
);

export const LocationMarkerAIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#3b82f6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);

export const LocationMarkerBIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#ef4444" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);

export const TollBoothIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f59e0b" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.5-10.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm-7.5 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5h-16.5z" />
    </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const CCRBarcasLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#00AEEF"/>
      <path d="M12 24L24 16L36 24L24 32L12 24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 30L24 22L36 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const GolLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#FF6600"/>
      <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">GOL</text>
    </svg>
);

export const TripLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#6B21A8"/>
      <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Trip</text>
    </svg>
);

export const ExpediaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#1E90FF"/>
      <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Expedia</text>
    </svg>
);

export const ViajaNetLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#32CD32"/>
      <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">ViajaNet</text>
    </svg>
);

export const ZupperLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#FF4500"/>
      <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Zupper</text>
    </svg>
);

export const KiwiLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#00A991"/>
      <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">Kiwi</text>
    </svg>
);

export const WalkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export const ShopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
    </svg>
);

export const EatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12.352c-.22.233-.42.484-.6.762-.178.274-.32.565-.42.882-.036.115-.05.234-.05.352v.75c0 .092.01.183.03.272.02.09.05.178.09.264.08.17.18.33.3.482.12.152.26.29.42.418.16.128.34.24.54.332.2.09.42.148.66.172.24.024.48.024.72.024h.24c.24 0 .48 0 .72-.024.24-.024.46-.082.66-.172.2-.092.38-.204.54-.332.16-.128.3-.266.42-.418.12-.152.22-.312.3-.482.04-.086.07-.174.09-.264a.978.978 0 00.03-.272v-.75c0-.118-.014-.237-.05-.352-.1-.317-.242-.608-.42-.882-.18-.278-.38-.529-.6-.762m-13.2 0c-.22.233-.42.484-.6.762-.178.274-.32.565-.42.882-.036.115-.05.234-.05.352v.75c0 .092.01.183.03.272.02.09.05.178.09.264.08.17.18.33.3.482.12.152.26.29.42.418.16.128.34.24.54.332.2.09.42.148.66.172.24.024.48.024.72.024h.24c.24 0 .48 0 .72-.024.24-.024.46-.082.66-.172.2-.092.38-.204.54-.332.16-.128.3-.266.42-.418.12-.152.22-.312.3-.482.04-.086.07-.174.09-.264.02-.09.03-.183.03-.272v-.75c0-.118-.014-.237-.05-.352-.1-.317-.242-.608-.42-.882-.18-.278-.38-.529-.6-.762M15 11.25a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const MuseumIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12h6m-6 5.25h6M5.25 6h.008v.008H5.25V6Zm.75 0h.008v.008H6V6Zm.75 0h.008v.008H6.75V6Zm.75 0h.008v.008H7.5V6Zm.75 0h.008v.008H8.25V6Zm1.5 6h.008v.008H9.75V12Zm.75 0h.008v.008h-.008V12Zm.75 0h.008v.008h-.008V12Zm.75 0h.008v.008h-.008V12Zm1.5 5.25h.008v.008h-.008v-.008Zm.75 0h.008v.008h-.008v-.008Zm.75 0h.008v.008h-.008v-.008Z" />
    </svg>
);

export const ParaguayFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask id="fade-mask">
      <linearGradient id="fade-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="white" stopOpacity="1" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
      <rect width="90" height="60" fill="url(#fade-grad)" />
    </mask>
    <g mask="url(#fade-mask)">
      <path d="M0 0 H 90 V 60 H 0 Z" stroke="currentColor" strokeWidth="4" />
      <path d="M0 20 H 90" stroke="currentColor" strokeWidth="2" />
      <path d="M0 40 H 90" stroke="currentColor" strokeWidth="2" />
    </g>
  </svg>
);

export const TripleFrontierIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50 10 L90 85 H10 Z" fill="none" stroke="currentColor" strokeWidth="8"/>
    <circle cx="50" cy="45" r="12" fill="currentColor"/>
  </svg>
);
