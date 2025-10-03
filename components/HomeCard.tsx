'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-black via-gray-950/95 to-black backdrop-blur-sm px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8 flex flex-col justify-between w-full xl:max-w-[300px] aspect-square sm:aspect-auto sm:min-h-[220px] lg:min-h-[260px] rounded-xl sm:rounded-3xl cursor-pointer transition-all duration-700 hover:scale-[1.02] sm:hover:scale-[1.05] hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 sm:hover:-translate-y-2 group border border-gray-800/60',
        className
      )}
      onClick={handleClick}
    >
      {/* Simple border effect without overlay */}
      <div className="absolute inset-[2px] bg-gradient-to-br from-black via-gray-950/98 to-black rounded-3xl -z-10" />

      {/* Floating particles */}
      <div className="absolute top-4 right-4 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
      <div className="absolute bottom-6 left-6 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700 delay-200" />

      {/* Enhanced Icon Container */}
      <div className="flex-center size-10 sm:size-14 lg:size-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500/25 to-purple-500/25 backdrop-blur-sm border border-red-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-red-500/20">
        <Image src={img} alt="meeting" width={20} height={20} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 brightness-0 invert group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Enhanced Content */}
      <div className="flex flex-col gap-1 sm:gap-3 mt-2 sm:mt-4">
        <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-white group-hover:text-red-300 transition-all duration-500 leading-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-500 leading-tight sm:leading-relaxed">
          {description}
        </p>

        {/* Action indicator - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-1.5 mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-400 to-purple-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-300 font-medium">Click to continue</span>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
      <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-80 group-hover:animate-bounce transition-all duration-500 delay-100" />


    </section>
  );
};

export default HomeCard;
