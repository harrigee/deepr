import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IColor, IGradient } from '../../theme/common/theme.common';

interface IProps {
  absoluteFill?: boolean;
  children?: React.ReactNode;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  margin?: number | string;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  color?: IColor;
  gradient?: IGradient;
}

export const Box = (props: IProps) => {

  const {
    gradient,
    absoluteFill,
  } = props;

  const backgroundColor = props.color && {
    backgroundColor: props.color.color,
    opacity: props.color.opacity,
  };

  const borderRadius = {
    borderRadius: props.borderRadius,
    borderTopLeftRadius: props.borderTopLeftRadius,
    borderTopRightRadius: props.borderTopRightRadius,
    borderBottomLeftRadius: props.borderBottomLeftRadius,
    borderBottomRightRadius: props.borderBottomRightRadius,
  };

  return (
    <View style={[props, absoluteFill && StyleSheet.absoluteFill]}>
      {backgroundColor &&
        <View style={[StyleSheet.absoluteFill, backgroundColor, borderRadius]} />
      }
      {gradient &&
        <LinearGradient colors={[gradient.fromColor, gradient.toColor]} style={[StyleSheet.absoluteFill, borderRadius, { opacity: gradient.opacity }]} />
      }
      {props.children}
    </View>
  );
};
