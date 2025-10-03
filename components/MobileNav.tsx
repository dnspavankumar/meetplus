'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px] lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-red-500/20 to-purple-500/20 hover:from-red-500/30 hover:to-purple-500/30 border border-red-500/30 hover:border-red-500/50 transition-all duration-300 cursor-pointer">
            <Image
              src="/icons/hamburger.svg"
              width={24}
              height={24}
              alt="hamburger icon"
              className="brightness-0 invert"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" hideCloseButton={true} className="mobile-nav-content border-none bg-gradient-to-b from-gray-900/95 via-gray-900/95 to-gray-900/95 backdrop-blur-xl border-r border-red-500/30 shadow-2xl shadow-red-500/10 [&>button]:hidden [&_button[data-radix-dialog-close]]:hidden">
          {/* No close button - users can click outside to close */}

          <Link href="/" className="flex items-center gap-3 mb-8 mt-4">
            <div className="size-10 rounded-xl bg-gradient-to-br from-red-500 to-purple-500 flex-center">
              <Image
                src="/icons/Video.svg"
                width={22}
                height={16}
                alt="Video camera icon"
                className="brightness-0 invert"
              />
            </div>
            <p className="text-[26px] font-extrabold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Meet
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-4 pt-8 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'relative overflow-hidden flex gap-4 items-center p-4 rounded-xl w-full max-w-60 transition-all duration-300 group border border-transparent hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10',
                          {
                            'bg-gradient-to-r from-red-500/20 to-purple-500/20 border-red-500/40 shadow-lg shadow-red-500/20': isActive,
                            'hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50': !isActive,
                          }
                        )}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-red-400 to-purple-400 rounded-r-full" />
                        )}

                        {/* Icon container */}
                        <div className={cn(
                          'flex-center w-10 h-10 rounded-lg transition-all duration-300',
                          {
                            'bg-gradient-to-br from-red-500/30 to-purple-500/30 shadow-lg': isActive,
                            'bg-gray-800/50 group-hover:bg-gray-700/50': !isActive,
                          }
                        )}>
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={18}
                            height={18}
                            className="brightness-0 invert transition-all duration-300"
                          />
                        </div>

                        {/* Text */}
                        <p className={cn(
                          'font-semibold transition-all duration-300',
                          {
                            'text-white font-bold': isActive,
                            'text-gray-300 group-hover:text-white': !isActive,
                          }
                        )}>
                          {item.label}
                        </p>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
