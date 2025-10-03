'use client';

import { ReactNode } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

interface DynamicLayoutProps {
  children: ReactNode;
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <section className={`flex-1 min-h-screen transition-all duration-300 ${isCollapsed ? 'lg:ml-[80px]' : 'lg:ml-[280px]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 pt-28 sm:pt-32 lg:pt-36">
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DynamicLayout;
