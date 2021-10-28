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

export interface ITypography {
  fontSize: number;
  fontWeight?: FontWeightType
  lineHeight?: number;
}

export interface IColor {
  color?: string;
  opacity?: number;
}

export interface IGradient {
  fromColor: string;
  toColor: string;
  opacity?: number;
}

export interface IColors {
  white: IColor;
  black: IColor;
  greyOpaque: IColor;
  deepSkyBlue: IColor;
  deepPink: IColor;
}
