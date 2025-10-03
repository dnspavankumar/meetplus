import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import DynamicLayout from '@/components/DynamicLayout';
import { SidebarProvider } from '@/contexts/SidebarContext';

export const metadata: Metadata = {
  title: 'Meet',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <SidebarProvider>
      <main className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Background Pattern - Keeping your beloved dots! */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ff0066%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />

      {/* Floating Gradient Orbs - Keeping these beautiful elements! */}
      <div className="fixed top-20 left-20 size-72 bg-gradient-to-r from-red-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 size-96 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000" />

      <Navbar />

        <div className="flex relative z-10">
          <Sidebar />
          <DynamicLayout>
            {children}
          </DynamicLayout>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
