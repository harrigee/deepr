import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from '../../theme/themes';
import { IThemeProps } from '../../theme/themes/theme.structure';

interface ISectionProps extends IThemeProps {
  children?: React.ReactNode
}

const Section = ({ children, theme }: ISectionProps) => {

  return (
    <View style={{
      marginBottom: theme.layout.space.big,
      borderRadius: theme.layout.borderRadius.big,
      padding: theme.layout.space.big,
    }}>
      <View style={[StyleSheet.absoluteFill, {
        borderRadius: theme.layout.borderRadius.big,
        backgroundColor: theme.application.section.background.color,
        opacity: theme.application.section.background.opacity,
      }]} />
      {children}
    </View>
  );
};

export default withTheme(Section);
