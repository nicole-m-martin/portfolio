import { THEME_TYPES } from './constants/index';

export const applyDarkTheme = (theme) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const root = window.document.documentElement;
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};

// import { useEffect, useState } from 'react';

// export const applyDarkTheme = () => {
//   const [theme, setTheme] = useState('light');
//   const colorTheme = theme === 'light' ? 'dark' : 'light';

//   useEffect(
//     () => {
//       const root = window.document.documentElement;
//       root.classList.remove(colorTheme);
//       root.classList.add(theme);
//     },
//     [theme],
//     colorTheme
//   );
//   return [colorTheme, setTheme];
// };
