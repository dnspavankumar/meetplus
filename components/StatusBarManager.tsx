'use client';

import { useEffect } from 'react';

const StatusBarManager = () => {
  useEffect(() => {
    // Function to update theme color meta tag
    const updateThemeColor = (color: string) => {
      // Update existing theme-color meta tag
      let themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', color);
      } else {
        // Create new theme-color meta tag if it doesn't exist
        themeColorMeta = document.createElement('meta');
        themeColorMeta.setAttribute('name', 'theme-color');
        themeColorMeta.setAttribute('content', color);
        document.head.appendChild(themeColorMeta);
      }

      // Update theme-color for light mode
      const themeColorLightMeta = document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]');
      if (themeColorLightMeta) {
        themeColorLightMeta.setAttribute('content', color);
      }

      // Update theme-color for dark mode
      const themeColorDarkMeta = document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]');
      if (themeColorDarkMeta) {
        themeColorDarkMeta.setAttribute('content', color);
      }

      // Update Apple status bar style
      const appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      if (appleStatusBarMeta) {
        appleStatusBarMeta.setAttribute('content', 'default');
      }
    };

    // Set the header color (gray-900 equivalent)
    const headerColor = '#1c1c1c';
    updateThemeColor(headerColor);

    // Also update CSS custom property
    document.documentElement.style.setProperty('--status-bar-color', headerColor);
    
    // Update body background to match
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = headerColor;

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      updateThemeColor(headerColor);
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StatusBarManager;
