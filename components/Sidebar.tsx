'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/contexts/SidebarContext';

const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();

  // Don't render sidebar when collapsed
  if (isCollapsed) {
    return null;
  }

  return (
    <section className="fixed left-0 top-0 flex h-screen w-[280px] flex-col justify-start bg-gradient-to-b from-gray-900/95 via-gray-900/95 to-gray-900/95 backdrop-blur-xl border-r border-red-500/30 p-6 pt-28 text-white max-sm:hidden z-45 shadow-2xl shadow-red-500/10 transition-all duration-300 ease-in-out">
      {/* Gradient Border Effect */}
      <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-red-500/60 to-transparent" />

      {/* Top spacing for navbar */}
      <div className="mb-4"></div>

      {/* Navigation Section */}
      <div className="flex flex-1 flex-col gap-3">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Navigation
        </h2>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'relative overflow-hidden flex gap-4 items-center p-4 rounded-2xl justify-start transition-all duration-500 group border border-transparent hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/20 hover:translate-x-1',
                {
                  'bg-gradient-to-r from-red-500/25 to-purple-500/25 border-red-500/50 shadow-xl shadow-red-500/25 translate-x-1': isActive,
                  'hover:bg-gradient-to-r hover:from-gray-800/60 hover:to-gray-700/60': !isActive,
                }
              )}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-red-400 to-purple-400 rounded-r-full shadow-lg shadow-red-400/50" />
              )}

              {/* Icon container */}
              <div className={cn(
                'flex-center w-12 h-12 rounded-xl transition-all duration-500 group-hover:scale-110',
                {
                  'bg-gradient-to-br from-red-500/40 to-purple-500/40 shadow-xl shadow-red-500/30': isActive,
                  'bg-gray-800/60 group-hover:bg-gradient-to-br group-hover:from-red-500/20 group-hover:to-purple-500/20': !isActive,
                }
              )}>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={cn(
                    'transition-all duration-300',
                    {
                      'filter brightness-0 invert': true, // Always make icons white
                    }
                  )}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <p className={cn(
                  'text-base font-semibold transition-all duration-500',
                  {
                    'text-white font-bold': isActive,
                    'text-gray-300 group-hover:text-white': !isActive,
                  }
                )}>
                  {item.label}
                </p>
                {isActive && (
                  <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 rounded-full mt-1" />
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/8 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Floating particles effect */}
              {isActive && (
                <>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-red-400 rounded-full animate-ping" />
                  <div className="absolute bottom-2 right-3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-300" />
                </>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer Section */}
      <div className="mt-8 pt-6 border-t border-gray-700/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30">
          <div className="size-2 bg-green-400 rounded-full animate-pulse" />
          <div className="flex flex-col">
            <p className="text-xs font-medium text-white">System Status</p>
            <p className="text-xs text-green-400">All systems operational</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
