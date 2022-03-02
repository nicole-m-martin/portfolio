import { useEffect } from 'react';
import useThemeStore from '../stores/useThemeStore';
import { applyDarkTheme } from '../services/themeUtils';

const selector = (state) => state.theme;
export const useTheme = () => {
  const theme = useThemeStore(selector);
  useEffect(() => {
    applyDarkTheme(theme);
  }, [theme]);
};
