import { createTheming } from '@callstack/react-theme-provider';

import { StatusBarStyle } from 'react-native';

type FontWeightType = 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface ITypographyFont {
  fontSize: number;
  fontWeight?: FontWeightType
  lineHeight?: number;
}

interface ITypography {
  h1: ITypographyFont,
  h2: ITypographyFont,
  h3: ITypographyFont,
  normal: ITypographyFont
}

interface ITheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
  };
  typography: ITypography;
  statusBarStyle: StatusBarStyle;
}

const typography: ITypography = {
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
  normal: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 14,
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
    typography: typography,
  },
  dark: {
    colors: {
      backgroundColor: '#000000',
      primaryColor: '#FF1493',
      secondaryColor: '#00BFFF',
    },
    statusBarStyle: 'light-content',
    typography: typography,
  },
};

export interface IThemeProps {
  theme: ITheme;
}

export const { ThemeProvider, withTheme } = createTheming(themes.dark);
