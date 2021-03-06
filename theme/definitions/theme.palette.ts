import { IColor, IGradient } from '../common/theme.common';

export interface IPalette {
  main: IColor,
  text: IColor,
  paper: IColor,
  primary: IColor,
  secondary: IColor,
  toxic: IGradient,
  sundown: IGradient,
  sunup: IGradient,
}
