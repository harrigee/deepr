import { ITheme } from './theme.structure';
import { IPalette } from '../definitions/theme.palette';
import { ITypographies } from '../definitions/theme.typography';
import { ILayout } from '../definitions/theme.layout';

const typography: ITypographies = {
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
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
  primary: {
    color: '#00BFFF',
  },
  secondary: {
    color: '#FF1493',
  },
  main: {
    color: '#000000',
  },
  text: {
    color: '#FFFFFF',
  },
  paper: {
    color: '#7f7f7f',
    opacity: 0.3,
  },
  sunup: {
    fromColor: '#ffdf00',
    toColor: '#ff6400',
  },
  sundown: {
    toColor: '#ff00ac',
    fromColor: '#007dff',
  },
  toxic: {
    fromColor: '#e115ff',
    toColor: '#1dff68',
  },
};

const layout: ILayout = {
  space: {
    tiny: 4,
    small: 8,
    medium: 16,
    big: 32,
    huge: 64,
    monstrous: 128,
  },
  borderRadius: {
    tiny: 4,
    small: 8,
    medium: 12,
    big: 16,
    huge: 24,
    monstrous: 32,
  },
};

export const darkTheme: ITheme = {
  statusBarStyle: 'light-content',
  palette,
  typography,
  layout,
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
      subtitle: {
        ...palette.text,
        ...typography.h3,
      },
      pagination: {
        active: palette.primary,
        inactive: palette.secondary,
      },
      borderRadius: layout.borderRadius.big,
    },
    colorRenderer: {
      borderRadius: layout.borderRadius.big,
    },
  },
};

