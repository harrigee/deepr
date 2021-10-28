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

interface IPalette {
  main: IColor,
  text: IColor,
  paper: IColor,
  primary: IColor,
  secondary: IColor,
}

interface IComponentsTheme {
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
  statusBarStyle: StatusBarStyle;
  palette: IPalette;
  components: IComponentsTheme;
}

export const typography: ITypographies = {
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

const colors: IColors = {
  white: {
    color: '#FFFFFF',
    opacity: 1,
  },
  black: {
    color: '#000000',
    opacity: 1,
  },
  greyOpaque: {
    color: '#7f7f7fAA',
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

const lightPalette: IPalette = {
  main: colors.white,
  text: colors.black,
  paper: colors.greyOpaque,
  primary: colors.deepSkyBlue,
  secondary: colors.deepPink,
};

const darkPalette: IPalette = {
  main: colors.black,
  text: colors.white,
  paper: colors.greyOpaque,
  primary: colors.deepPink,
  secondary: colors.deepSkyBlue,
};

export const themes: {
  light: ITheme;
  dark: ITheme;
} = {
  light: {
    statusBarStyle: 'dark-content',
    palette: lightPalette,
    components: {
      main: {
        background: lightPalette.main,
        button: lightPalette.primary,
        text: {
          ...lightPalette.text,
          ...typography.normal,
        },
      },
      section: {
        background: lightPalette.paper,
        title: {
          ...lightPalette.primary,
          ...typography.h2,
        },
        pagination: {
          active: lightPalette.primary,
          inactive: lightPalette.secondary,
        },
      },
    },
  },
  dark: {
    statusBarStyle: 'light-content',
    palette: darkPalette,
    components: {
      main: {
        background: darkPalette.main,
        button: darkPalette.primary,
        text: {
          ...darkPalette.text,
          ...typography.normal,
        },
      },
      section: {
        background: darkPalette.paper,
        title: {
          ...darkPalette.primary,
          ...typography.h2,
        },
        pagination: {
          active: darkPalette.primary,
          inactive: darkPalette.secondary,
        },
      },
    },
  },
};

export interface IThemeProps {
  theme: ITheme;
}

export const { ThemeProvider, withTheme } = createTheming(themes.dark);
