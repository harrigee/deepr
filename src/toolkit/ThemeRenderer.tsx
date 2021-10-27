import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IThemeProps, withTheme } from '../../themeing';
import { invertColor } from './invertColor';

const ThemeRenderer = ({ theme }: IThemeProps) => {
  const contrastColor = invertColor(theme.colors.backgroundColor);

  const sectionHeader = (text: string) => (
    <Text style={[styles.sectionHeader,
    {
      color: theme.colors.primaryColor,
      ...theme.typography.h2,
    }]}>{text}</Text>
  );

  const renderStatusBarStyle = () => (
    <View style={styles.section}>
      {sectionHeader('StatusBarStyle')}
      <Text style={{
        color: contrastColor,
        ...theme.typography.normal,
      }}>{`${theme.statusBarStyle}`}</Text>
    </View>
  );

  const renderTypography = () => (
    <View style={styles.section}>
      {sectionHeader('Typography')}
      {Object.keys(theme.typography).map((fontKey, index) => {
        const typography = (theme.typography as any)[fontKey];
        return (
          <View
            key={`typography-item-${index}`}
            style={styles.unitContainer} >
            <Text
              style={{
                color: contrastColor,
                ...typography,
              }}>
              {`${fontKey}   |   `}
              {'the quick brown fox jumps over the lazy dog'}
            </Text>
          </View>
        );
      })}
    </View >
  );

  const renderColors = () => (
    <View style={styles.section}>
      {sectionHeader('Colors')}
      {Object.keys(theme.colors).map((colorName, index) => {
        const color = (theme.colors as any)[colorName] as string;
        return (
          <View
            key={`color-item-${index}`}
            style={styles.unitContainer}>
            <View style={[styles.colorRenderer, {
              backgroundColor: color,
              borderColor: contrastColor,
            }]} />
            <View style={styles.colorRow}>
              <Text style={{
                color: contrastColor,
                ...theme.typography.normal,
              }}>{color}</Text>
              <Text style={{
                color: contrastColor,
                ...theme.typography.normal,
              }}>{colorName}</Text>
            </View>
          </View>
        );
      })}
    </View >
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
    marginBottom: 16,
  },
  colorRenderer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
  },
  colorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unitContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
  },
});

export default withTheme(ThemeRenderer);
