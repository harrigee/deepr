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

interface ITypography {
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

interface ITypographies {
  h1: ITypography,
  h2: ITypography,
  h3: ITypography,
  normal: ITypography
}

interface IColors {
  white: IColor;
  black: IColor;
  greyOpaque: IColor;
  deepSkyBlue: IColor;
  deepPink: IColor;
}

interface IThemeContext {
  main: {
    background: IColor,
    button: IColor
    text: ITypography & IColor
  },
  section: {
    background: IColor,
    title: ITypography & IColor
    pagination: {
      active: IColor,
      inactive: IColor
    }
  }
}

interface ITheme {
  palette: IColors;
  statusBarStyle: StatusBarStyle;
  typography: ITypographies;
  context: IThemeContext;
}

const typography: ITypographies = {
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

const palette: IColors = {
  white: {
    color: '#FFFFFF',
    opacity: 1,
  },
  black: {
    color: '#000000',
    opacity: 1,
  },
  greyOpaque: {
    color: '#7f7f7f',
    opacity: 0.2,
  },
  deepSkyBlue: {
    color: '#00BFFF',
    opacity: 1,
  },
  deepPink: {
    color: '#FF1493',
    opacity: 1,
  },
};

export const themes: {
  light: ITheme;
  dark: ITheme;
} = {
  light: {
    statusBarStyle: 'dark-content',
    palette,
    typography,
    context: {
      main: {
        background: palette.white,
        button: palette.deepPink,
        text: {
          ...palette.black,
          ...typography.normal,
        },
      },
      section: {
        background: palette.greyOpaque,
        title: {
          ...palette.deepSkyBlue,
          ...typography.h2,
        },
        pagination: {
          active: palette.deepSkyBlue,
          inactive: palette.deepPink,
        },
      },
    },
  },
  dark: {
    statusBarStyle: 'light-content',
    palette,
    typography,
    context: {
      main: {
        background: palette.black,
        button: palette.deepSkyBlue,
        text: {
          ...palette.white,
          ...typography.normal,
        },
      },
      section: {
        background: palette.greyOpaque,
        title: {
          ...palette.deepPink,
          ...typography.h2,
        },
        pagination: {
          active: palette.deepPink,
          inactive: palette.deepSkyBlue,
        },
      },
    },
  },
};

export interface IThemeProps {
  theme: ITheme;
}

export const { ThemeProvider, withTheme } = createTheming(themes.dark);
