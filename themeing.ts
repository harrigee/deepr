import { createTheming } from '@callstack/react-theme-provider';

import { StatusBarStyle } from 'react-native';

interface ITypography {
  fontSize: number;
  lineHeight: number;
  fontWeight:
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400 '
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
}

interface ITheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
  };
  typography: { [key: string]: ITypography };
  statusBarStyle: StatusBarStyle;
}

const typography: {
  [key: string]: ITypography;
} = {
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  h2: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 18,
  },
  h3: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 16,
  },
};

export const themes: {
  light: ITheme;
  dark: ITheme;
} = {
  light: {
    colors: {
      backgroundColor: '#FFFFFF',
      primaryColor: '#00BFFF',
      secondaryColor: '#FF1493',
    },
    statusBarStyle: 'dark-content',
    typography,
  },
  dark: {
    colors: {
      backgroundColor: '#000000',
      primaryColor: '#FF1493',
      secondaryColor: '#00BFFF',
    },
    statusBarStyle: 'light-content',
    typography,
  },
};

export interface IThemeProps {
  theme: ITheme;
}

export const { ThemeProvider, withTheme } = createTheming(themes.dark);
