import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40, showText = false }) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <div 
        className="relative flex-shrink-0 rounded-full overflow-hidden border border-white/20 shadow-[0_0_12px_rgba(0,102,255,0.25)] bg-[#090a0f]"
        style={{ width: size, height: size }}
      >
        <img 
          src="/logo.svg" 
          alt="Tampa Shine Mobile Wash - Brillamos donde estés" 
          className="w-full h-full object-contain p-0.5"
          loading="eager"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-white tracking-wider text-sm sm:text-base leading-tight font-['Montserrat']">
            TAMPA SHINE
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#0066FF] uppercase leading-none mt-0.5">
            Mobile Wash
          </span>
        </div>
      )}
    </div>
  );
};
