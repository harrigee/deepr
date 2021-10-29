import { StatusBarStyle } from 'react-native';
import { IColor, ITypography } from '../common/theme.common';
import { ILayout } from '../definitions/theme.layout';
import { IPalette } from '../definitions/theme.palette';
import { ITypographies } from '../definitions/theme.typography';

interface IApplicationTheme {
  main: {
    background: IColor,
    button: IColor
    text: ITypography & IColor
  },
  colorRenderer: {
    borderRadius: number
  },
  section: {
    background: IColor,
    title: ITypography & IColor
    subtitle: ITypography & IColor,
    pagination: {
      active: IColor,
      inactive: IColor
    },
    borderRadius: number
  }
}

export interface ITheme {
  statusBarStyle: StatusBarStyle;
  palette: IPalette;
  typography: ITypographies;
  layout: ILayout,
  application: IApplicationTheme;
}

export interface IThemeProps {
  theme: ITheme;
}
