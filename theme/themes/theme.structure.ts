import { StatusBarStyle } from 'react-native';
import { IColor, ITypography } from '../common/theme.common';
import { IPalette } from '../definitions/theme.palette';
import { ITypographies } from '../definitions/theme.typography';

interface IApplicationTheme {
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

export interface ITheme {
  statusBarStyle: StatusBarStyle;
  palette: IPalette;
  typography: ITypographies;
  application: IApplicationTheme;
}

export interface IThemeProps {
  theme: ITheme;
}
