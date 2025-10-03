'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';
import { useSidebar } from '@/contexts/SidebarContext';

const Navbar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <nav className="flex-between fixed z-50 w-full bg-gradient-to-r from-gray-900/95 via-gray-900/95 to-gray-900/95 backdrop-blur-xl border-b border-red-500/20 shadow-2xl shadow-red-500/10">
      {/* Desktop: Burger menu and app name */}
      <div className={`hidden lg:flex items-center gap-3 px-8 py-5 transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[280px]'}`}>
        {/* Burger Menu Button */}
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-red-500/20 to-purple-500/20 hover:from-red-500/30 hover:to-purple-500/30 border border-red-500/30 hover:border-red-500/50 transition-all duration-300 group"
        >
          <div className="flex flex-col gap-1">
            <div className={`w-4 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 rounded-full transition-all duration-300 ${isCollapsed ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-4 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 rounded-full transition-all duration-300 ${isCollapsed ? 'opacity-0' : ''}`} />
            <div className={`w-4 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 rounded-full transition-all duration-300 ${isCollapsed ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>

        {!isCollapsed && (
          <>
            <div className="size-10 rounded-xl bg-gradient-to-br from-red-500 to-purple-500 flex-center shadow-lg">
              <Image
                src="/icons/Video.svg"
                width={22}
                height={16}
                alt="Video camera icon"
                className="brightness-0 invert"
              />
            </div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Meet
            </h1>
          </>
        )}
      </div>

      {/* Mobile: Show logo */}
      <Link href="/" className="flex items-center gap-3 lg:hidden px-8 py-5">
        <div className="size-10 rounded-xl bg-gradient-to-br from-red-500 to-purple-500 flex-center shadow-lg">
          <Image
            src="/icons/Video.svg"
            width={22}
            height={16}
            alt="Video camera icon"
            className="brightness-0 invert"
          />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Meet
          </h1>
          <p className="text-xs text-gray-400 -mt-1">Video Conferencing</p>
        </div>
      </Link>

      {/* Main navbar content */}
      <div className="flex-1 flex justify-end items-center px-8 py-5">
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 rounded-xl border-2 border-red-500/30 shadow-lg hover:border-red-500/50 transition-all duration-300"
                }
              }}
            />
          </SignedIn>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
