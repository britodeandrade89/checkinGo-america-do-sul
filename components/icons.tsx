
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

export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
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

export const CCRBarcasLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="50" fill="#00AEEF" rx="8"/>
    <text x="50" y="35" fontFamily="Arial, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">
      BARCAS
    </text>
  </svg>
);

export const GolLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="24" fill="#FF6600"/>
    <path d="M14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24Z" stroke="white" strokeWidth="4"/>
  </svg>
);

export const TripLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#1C75BC"/>
        <text x="24" y="30" fontFamily="Arial, sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Trip</text>
    </svg>
);

export const ExpediaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="24" fill="#FFD700"/>
        <path d="M24 12L30 24L24 36L18 24L24 12Z" fill="#0033A0"/>
    </svg>
);

export const ViajaNetLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#00AEEF"/>
        <path d="M12 24L24 12L36 24L24 36L12 24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ZupperLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#2E3192"/>
        <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">Zupper</text>
    </svg>
);

export const KiwiLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#00A991"/>
        <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">Kiwi</text>
    </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const HourglassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const AlertTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const BackpackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 0a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v.75m-1.5 0a1.5 1.5 0 0 0-1.5-1.5M4.5 9.75a4.5 4.5 0 0 1 4.5-4.5h6a4.5 4.5 0 0 1 4.5 4.5v9.75a1.5 1.5 0 0 1-1.5-1.5h-12a1.5 1.5 0 0 1-1.5-1.5V9.75Z" />
    </svg>
);

export const SuitcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0h15m-15 0a7.5 7.5 0 0 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 0 0 7.5 7.5h0a7.5 7.5 0 0 0 7.5-7.5M12 19.5v-7.5" />
    </svg>
);

export const BaggageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25" />
    </svg>
);

export const CompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15 9-6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5 9 15l4.5-1.5L15 9l-4.5 1.5z" />
  </svg>
);
export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);
export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423l.398-1.188.398 1.188a2.25 2.25 0 001.423 1.423l1.188.398-1.188.398a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
);
export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 11.25h.008v.008H12v-.008zm0 3h.008v.008H12v-.008zm-3 3h.008v.008H9v-.008zm0-3h.008v.008H9v-.008zm-3 3h.008v.008H6v-.008zm0-3h.008v.008H6v-.008zm9-3h.008v.008H15v-.008zm0 3h.008v.008H15v-.008zm-3 3h.008v.008H12v-.008zm0-3h.008v.008H12v-.008zm3-3h.008v.008H15v-.008z" />
    </svg>
);
export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664-5.303a8.25 8.25 0 010 11.665L2.985 19.644" />
    </svg>
);
export const PlaneTakeoffIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h12.75" />
    </svg>
);
export const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.26.716.53.966l.879.879c.27.27.63.417.996.417h1.665c.55 0 1.02.398 1.11.94l.213 1.281c.09.542.09 1.128 0 1.67l-.213 1.281c-.09.542-.56.94-1.11.94h-1.665c-.366 0-.726.147-.996.417l-.879.879c-.27.25-.467.592-.53.966l-.213 1.281c-.09.542-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.26-.716-.53-.966l-.879-.879c-.27-.27-.63-.417-.996.417H6.665c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.09-.542-.09-1.128 0-1.67l.213-1.281c.09.542.56.94 1.11.94h1.665c.366 0 .726-.147.996.417l.879-.879c.27-.25.467.592-.53.966l.213-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ActivityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v.01M12 21v.01M3.375 12H3m18 0h-.375M5.063 5.063l.007.007M18.93 18.93l-.007-.007m0-13.854l.007-.007M5.063 18.937l-.007-.007M12 18a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);

export const ShipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-2.34-1.35-4.43-3.37-5.52M4.5 12c0-2.34 1.35-4.43 3.37-5.52m11.66 11.04a5.23 5.23 0 0 1-3.37 1.21 5.23 5.23 0 0 1-3.37-1.21m-5.14 0c1.45.62 3.09.96 4.77.96s3.32-.34 4.77-.96M12 21V12m0 0L8.63 9.52a5.23 5.23 0 0 1 6.74 0L12 12z" />
  </svg>
);

export const MountainPeakIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75 12 11.25l-3.75-4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 18 3-3 3 3-3 3-3-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.25 18 3-3 3 3-3 3-3-3z" />
  </svg>
);

export const RouteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM16.5 18a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 9h3" />
  </svg>
);

export const ParkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 8h2a2 2 0 110 4h-2v4" />
  </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.336 1.003l-4.254 3.792a.563.563 0 00-.162.531l1.285 5.385a.562.562 0 01-.84.61l-4.735-2.724a.563.563 0 00-.586 0l-4.735 2.724a.562.562 0 01-.84-.61l1.285-5.385a.562.562 0 00-.162-.531l-4.254-3.792a.563.563 0 01.336-1.003l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

export const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const PriceTagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

export const CheckShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const ThumbsUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M6.633 10.5c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 00-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 00.75.75A2.25 2.25 0 005.25 20.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.126c-1.026 0-1.945-.694-2.054-1.715A11.949 11.949 0 016.633 10.5z" />
  </svg>
);

export const ThumbsDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533.446 2.031 1.08a9.041 9.041 0 012.861 2.4c.723.384 1.35.956 1.653 1.715a4.498 4.498 0 00.322 1.672V21a.75.75 0 01-.75.75A2.25 2.25 0 0113.5 19.5c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H9.375c-1.026 0-1.945-.694-2.054-1.715A11.949 11.949 0 016.633 10.5zm-1.884-.523c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 002.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 00-.75-.75A2.25 2.25 0 0013.5 4.5c0 1.152.26 2.243.723 3.218.266.558-.107-1.282-.725-1.282H9.375c-1.026 0-1.945-.694-2.054-1.715A11.949 11.949 0 014.749 10z" />
  </svg>
);

export const WifiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53a.75.75 0 01-1.06 0l-.53-.53c-.29-.29-.29-.764 0-1.054.29-.29.763-.29 1.054 0 .29.29.29.763 0 1.054z" />
  </svg>
);

export const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

export const TrendingUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94.886M21.75 5.25L17.81 6.136" />
  </svg>
);

export const TrendingDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
  </svg>
);

export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const BusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V9.75M18.75 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V9.75M3.375 9.75h17.25M3.375 9.75v-1.5a1.125 1.125 0 011.125-1.125h13.5a1.125 1.125 0 011.125 1.125v1.5" />
  </svg>
);

export const FuelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm10.5 0A2.25 2.25 0 0116.5 3.75h2.25a2.25 2.25 0 012.25 2.25V15A2.25 2.25 0 0118.75 17.25h-2.25A2.25 2.25 0 0114.25 15V6.75a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v8.25a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V12h-.75a.75.75 0 00-.75.75v.75" />
  </svg>
);

export const LocationMarkerAIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#3b82f6" viewBox="0 0 24 24" stroke="#1d4ed8" strokeWidth="1" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
    <text x="12" y="10.5" textAnchor="middle" dy=".3em" fontSize="8" fill="white" fontWeight="bold" stroke="none">A</text>
  </svg>
);

export const LocationMarkerBIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#ef4444" viewBox="0 0 24 24" stroke="#b91c1c" strokeWidth="1" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
    <text x="12" y="10.5" textAnchor="middle" dy=".3em" fontSize="8" fill="white" fontWeight="bold" stroke="none">B</text>
  </svg>
);

export const TollBoothIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" fill="#f59e0b" />
    <text x="12" y="12" textAnchor="middle" dy=".3em" fontSize="10" fill="white" fontWeight="bold">P</text>
  </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
