import React, { useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IThemeProps, withTheme } from '../../theme';
import { invertColor } from './invertColor';

const WIDTH = Dimensions.get('screen').width;

const ThemeRenderer = ({ theme }: IThemeProps) => {

  const [typographyPage, setTypographyPage] = useState(0);

  const contrastColor = invertColor(theme.colors.background.color);

  const onTypographyScrollViewScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const page = parseInt('' + (e.nativeEvent.contentOffset.x / e.nativeEvent.contentSize.width * Object.keys(theme.typography).length), 10);
    setTypographyPage(page);
  };

  const sectionHeader = (text: string) => (
    <Text style={[styles.sectionHeader, {
      ...theme.colors.primary,
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
                style={[styles.typographyTextContainer, {
                  color: contrastColor,
                  ...typography,
                }]}>
                {'Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.'}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.typographyPaginationContainer}>
        {Object.keys(theme.typography).map((_, index) => {
          const background = index === typographyPage ? theme.colors.primary : theme.colors.secondary;
          return (
            <View
              key={`typohgraphy-paging-item-${index}`}
              style={[styles.typographyPaginationItem, {
                borderColor: contrastColor,
                backgroundColor: background.color,
                opacity: background.opacity,
              }]} />
          );
        })}
      </View>
    </View >
  );

  const renderColors = () => (
    <View style={styles.section}>
      {sectionHeader('Colors')}
      {Object.keys(theme.colors).map((colorKey, index) => {
        const colorValue = (theme.colors as any)[colorKey];
        return (
          <View
            key={`color-item-${index}`}
            style={styles.colorUnitContainer}>
            <View style={[styles.colorRendererContainer, {
              borderColor: contrastColor,
            }]}>
              <View style={[styles.colorRenderer, {
                backgroundColor: colorValue.color,
                opacity: colorValue.opacity,
              }]} />
            </View>
            <View style={styles.colorRow}>
              <View style={styles.colorTextContainer}>
                <Text style={[styles.colorText, {
                  color: contrastColor,
                  ...theme.typography.normal,
                }]}>{`hex\n${colorValue.color}`}</Text>
                {colorValue.opacity &&
                  <Text style={[styles.colorText, {
                    color: contrastColor,
                    ...theme.typography.normal,
                  }]}>{`opacity\n${colorValue.opacity}`}</Text>
                }
                <Text style={[styles.colorName, {
                  color: contrastColor,
                  ...theme.typography.normal,
                }]}>{colorKey}</Text>
              </View>
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
    marginBottom: 16,
  },
  sectionHeader: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  colorRendererContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
  },
  colorRenderer: {
    flex: 1,
    borderRadius: 20,
  },
  colorUnitContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  colorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorText: {
    flexShrink: 1,
  },
  colorName: {
    alignSelf: 'center',
  },
  typographyHeader: {
    marginBottom: 16,
  },
  typographyTextContainer: {
    marginHorizontal: 16,
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
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    marginTop: 32,
  },
});

export default withTheme(ThemeRenderer);
