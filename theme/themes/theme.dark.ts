import { ITheme } from './theme.structure';
import { IPalette } from '../definitions/theme.palette';
import { ITypographies } from '../definitions/theme.typography';

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

const palette: IPalette = {
  main: {
    color: '#000000',
    opacity: 1,
  },
  text: {
    color: '#FFFFFF',
    opacity: 1,
  },
  paper: {
    color: '#7f7f7fAA',
    opacity: 0.2,
  },
  primary: {
    color: '#00BFFF',
    opacity: 1,
  },
  secondary: {
    color: '#FF1493',
    opacity: 1,
  },
};

export const darkTheme: ITheme = {
  statusBarStyle: 'light-content',
  palette,
  typography: typography,
  application: {
    main: {
      background: palette.main,
      button: palette.primary,
      text: {
        ...palette.text,
        ...typography.normal,
      },
    },
    section: {
      background: palette.paper,
      title: {
        ...palette.secondary,
        ...typography.h2,
      },
      pagination: {
        active: palette.primary,
        inactive: palette.secondary,
      },
    },
  },
};

