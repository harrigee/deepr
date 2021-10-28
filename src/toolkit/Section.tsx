import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IThemeProps, withTheme } from '../../theme';

interface ISectionProps extends IThemeProps {
  children?: React.ReactNode
}

const Section = (props: ISectionProps) => {

  return (
    <View style={styles.section}>
      <View style={[styles.background, StyleSheet.absoluteFill, {
        backgroundColor: props.theme.components.section.background.color,
        opacity: props.theme.components.section.background.opacity,
      }]} />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  background: {
    borderRadius: 16,
  },
});

export default withTheme(Section);
