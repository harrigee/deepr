import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IProps {
  children?: React.ReactNode;
  absoluteFill?: boolean;
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
  backgroundColor?: string;
  opacity?: number;
}

export const Box = (props: IProps) => {

  const absoluteFill = props.absoluteFill ? StyleSheet.absoluteFill : {};

  return (
    <View style={{
      ...props,
      ...absoluteFill,
    }}>
      {props.children}
    </View>
  );
};
