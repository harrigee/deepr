import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IThemeProps, withTheme } from '../../themeing';
import { invertColor } from './invertColor';

const ThemeRenderer = ({ theme }: IThemeProps) => {
  const contrastColor = invertColor(theme.colors.backgroundColor);

  const sectionHeader = (text: string) => (
    <Text style={[styles.sectionHeader, { color: theme.colors.primaryColor }]}>{text}</Text>
  );

  const renderStatusBarStyle = () => (
    <View style={styles.section}>
      {sectionHeader('StatusBarStyle')}
      <Text style={{ color: contrastColor }}>{`${theme.statusBarStyle}`}</Text>
    </View>
  );

  const renderTypography = () => (
    <View style={styles.section}>
      {sectionHeader('Typography')}
      {Object.keys(theme.typography).map((fontKey) => {
        const typography = (theme.typography as any)[fontKey] as any;
        return (
          <View style={styles.unitContainer}>
            <Text
              style={{
                color: contrastColor,
                fontSize: typography.fontSize,
                fontWeight: typography.fontWeight,
                lineHeight: typography.lineHeight,
              }}
            >
              {`${fontKey}   |   `}
              {'the quick brown fox jumps over the lazy dog'}
            </Text>
          </View>
        );
      })}
    </View>
  );

  const renderColors = () => (
    <View style={styles.section}>
      {sectionHeader('Colors')}
      {Object.keys(theme.colors).map((colorName) => {
        const color = (theme.colors as any)[colorName] as string;
        return (
          <View style={styles.unitContainer}>
            <View
              style={[styles.colorRenderer, { backgroundColor: color, borderColor: contrastColor }]}
            />
            <Text style={{ color: contrastColor }}>{`${color}   |   ${colorName}`}</Text>
          </View>
        );
      })}
    </View>
  );

  return (
    <View style={[styles.container]}>
      {renderStatusBarStyle()}
      {renderColors()}
      {renderTypography()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    backgroundColor: 'rgba(127.5,127.5,127.5,0.2)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 16,
  },
  colorRenderer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
  },
  unitContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
  },
});

export default withTheme(ThemeRenderer);
