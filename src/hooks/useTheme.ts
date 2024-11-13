import { ThemeProviderContext } from '@/context';
import { useContext } from 'react';

/**
 * Custom hook to get the current theme and a function to set the theme
 * @returns {ThemeProviderState} The current theme and a function to set the theme
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
