import { createTheming } from '@callstack/react-theme-provider';
import { darkTheme } from './themes/theme.dark';
import { lightTheme } from './themes/theme.light';
import { ITheme } from './themes/theme.structure';

export const themes: {
  light: ITheme;
  dark: ITheme;
} = {
  light: lightTheme,
  dark: darkTheme,
};

export const { ThemeProvider, withTheme } = createTheming(themes.dark);
