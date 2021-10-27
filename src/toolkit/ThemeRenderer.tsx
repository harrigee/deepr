import React, { useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IThemeProps, withTheme } from '../../themeing';
import { invertColor } from './invertColor';

const WIDTH = Dimensions.get('screen').width;

const ThemeRenderer = ({ theme }: IThemeProps) => {

  const [typographyPage, setTypographyPage] = useState(0);

  const contrastColor = invertColor(theme.colors.backgroundColor);

  const onTypographyScrollViewScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const page = parseInt('' + (e.nativeEvent.contentOffset.x / e.nativeEvent.contentSize.width * Object.keys(theme.typography).length), 10);
    setTypographyPage(page);
  };

  const sectionHeader = (text: string) => (
    <Text style={[styles.sectionHeader, {
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
      <ScrollView
        onMomentumScrollEnd={onTypographyScrollViewScrollEnd}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal>
        {Object.keys(theme.typography).map((fontKey, index) => {
          const typography = (theme.typography as any)[fontKey];
          return (
            <View
              key={`typography-item-${index}`}
              style={styles.typographyUnitContainer}>
              <Text
                style={[styles.typographyHeader, {
                  color: contrastColor,
                  ...theme.typography.normal,
                }]}>
                {`${fontKey}`}
              </Text>
              <Text
                style={{
                  color: contrastColor,
                  ...typography,
                }}>
                {'Pack my box with five dozen liquor jugs.'}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.typographyPaginationContainer}>
        {Object.keys(theme.typography).map((_, index) => {
          const backgroundColor = index === typographyPage ? theme.colors.primaryColor : theme.colors.secondaryColor;
          return (
            <View
              key={`typohgraphy-paging-item-${index}`}
              style={[styles.typographyPaginationItem, {
                borderColor: contrastColor,
                backgroundColor: backgroundColor,
              }]} />
          );
        })}
      </View>
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
            style={styles.colorUnitContainer}>
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
  colorUnitContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
  },
  typographyHeader: {
    marginBottom: 16,
  },
  typographyUnitContainer: {
    width: WIDTH - 64,
    justifyContent: 'center',
  },
  typographyPaginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  typographyPaginationItem: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
    marginTop: 32,
  },
});

export default withTheme(ThemeRenderer);
