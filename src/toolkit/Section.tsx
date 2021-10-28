import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from '../../theme/themes';
import { IThemeProps } from '../../theme/themes/theme.structure';

interface ISectionProps extends IThemeProps {
  children?: React.ReactNode;
  title: string;
}

const Section = ({ children, theme, title }: ISectionProps) => {

  return (
    <View style={{
      marginBottom: theme.layout.space.big,
      borderRadius: theme.layout.borderRadius.big,
      padding: theme.layout.space.big,
    }}>
      <Text style={[styles.sectionHeader, theme.application.section.title, {
        marginBottom: theme.layout.space.big,
      }]}>
        {title}
      </Text>
      <View style={[StyleSheet.absoluteFill, {
        borderRadius: theme.layout.borderRadius.big,
        backgroundColor: theme.application.section.background.color,
        opacity: theme.application.section.background.opacity,
      }]} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    alignSelf: 'flex-end',
  },
});

export default withTheme(Section);
