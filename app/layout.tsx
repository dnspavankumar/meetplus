import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import PWAInstaller from "@/components/PWAInstaller";
import StatusBarManager from "@/components/StatusBarManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet - Video Conferencing",
  description: "Professional video conferencing application for seamless communication",
  keywords: ["video conferencing", "meetings", "video calls", "collaboration", "communication"],
  authors: [{ name: "Meet Team" }],
  creator: "Meet",
  publisher: "Meet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icons/Video.svg",
    shortcut: "/icons/Video.svg",
    apple: "/icons/Video.svg",
  },
  manifest: "/manifest.json",
  themeColor: "#1c1c1c",
  colorScheme: "dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Meet",
  },
  openGraph: {
    type: "website",
    siteName: "Meet",
    title: "Meet - Video Conferencing",
    description: "Professional video conferencing application for seamless communication",
    images: [
      {
        url: "/icons/Video.svg",
        width: 512,
        height: 512,
        alt: "Meet Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet - Video Conferencing",
    description: "Professional video conferencing application for seamless communication",
    images: ["/icons/Video.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Meet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Meet" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1c1c1c" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#1c1c1c" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#1c1c1c" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1c1c1c" />
        <meta name="color-scheme" content="dark" />
        <link rel="apple-touch-icon" href="/icons/Video.svg" />
        <link rel="icon" type="image/svg+xml" href="/icons/Video.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/Video.svg" color="#1c1c1c" />
        <link rel="shortcut icon" href="/icons/Video.svg" />
      </head>
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/The Meet-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#8b5cf6",
            colorBackground: "#000000",
            colorInputBackground: "#1a1a1a",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-black-gradient min-h-screen`}>
          <StatusBarManager />
          <PWAInstaller />
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
