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

interface IGradient {
  fromColor: string;
  toColor: string;
  opacity?: number;
}

interface IColor {
  color?: string;
  opacity?: number;
}

interface ITypography {
  h1: ITypographyFont,
  h2: ITypographyFont,
  h3: ITypographyFont,
  normal: ITypographyFont
}

interface ITheme {
  colors: {
    primary: IColor;
    secondary: IColor;
    background: IColor;
    container: IColor;
  };
  typography: ITypography;
  statusBarStyle: StatusBarStyle;
}

const typography: ITypography = {
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  h2: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 27,
  },
  h3: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
  },
  normal: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 21,
  },
};

export const themes: {
  light: ITheme;
  dark: ITheme;
} = {
  light: {
    colors: {
      background: {
        color: '#FFFFFF',
      },
      container: {
        color: '#7f7f7f',
        opacity: 0.2,
      },
      primary: {
        color: '#00BFFF',
      },
      secondary: {
        color: '#FF1493',
      },
    },
    statusBarStyle: 'dark-content',
    typography: typography,
  },
  dark: {
    colors: {
      background: {
        color: '#000000',
      },
      container: {
        color: '#7f7f7f',
        opacity: 0.2,
      },
      primary: {
        color: '#FF1493',
      },
      secondary: {
        color: '#00BFFF',
      },
    },
    statusBarStyle: 'light-content',
    typography: typography,
  },
};

export interface IThemeProps {
  theme: ITheme;
}

export const { ThemeProvider, withTheme } = createTheming(themes.dark);
