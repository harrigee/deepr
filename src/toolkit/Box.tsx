import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IColor, IGradient } from '../../theme/common/theme.common';

interface IProps {
  children?: React.ReactNode;
  height?: number;
  width?: number;
  margin?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  padding?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  color?: IColor;
  gradient?: IGradient;
}

export const Box = (props: IProps) => {

  const {
    gradient,
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
    <View style={props}>
      {backgroundColor &&
        <View style={[StyleSheet.absoluteFill, backgroundColor, borderRadius]} />
      }
      {gradient &&
        <LinearGradient colors={[gradient.fromColor, gradient.toColor]} style={[StyleSheet.absoluteFill, borderRadius]} />
      }
      {props.children}
    </View>
  );
};
