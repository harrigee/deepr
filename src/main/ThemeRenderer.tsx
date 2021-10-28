import React, { useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import { withTheme } from '../../theme/themes';
import { IThemeProps } from '../../theme/themes/theme.structure';
import Section from '../toolkit/Section';

const ThemeRenderer = ({ theme }: IThemeProps) => {

  const [typographyPage, setTypographyPage] = useState(0);

  const onTypographyScrollViewScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const page = parseInt('' + (e.nativeEvent.contentOffset.x / e.nativeEvent.contentSize.width * Object.keys(theme.typography).length), 10);
    setTypographyPage(page);
  };

  const screenWidth = Dimensions.get('screen').width;

  const renderStatusBarStyle = () => (
    <Section title={'StatusBarStyle'}>
      <Text style={theme.application.main.text} > {`${theme.statusBarStyle}`}</Text>
    </Section>
  );

  const renderColors = () => (
    <Section title={'Colors'}>
      {Object.keys(theme.palette).map((colorKey, index) => {
        const colorValue = (theme.palette as any)[colorKey];
        return (
          <View
            key={`color-item-${index}`}
            style={[{
              paddingVertical: theme.layout.space.normal,
            }, styles.colorUnitContainer]}>
            <View style={[styles.colorRendererContainer, {
              marginRight: theme.layout.space.normal,
              borderColor: theme.application.main.text.color,
            }]}>
              <View style={[styles.colorRenderer, {
                backgroundColor: colorValue.color,
                opacity: colorValue.opacity,
              }]} />
            </View>
            <View style={styles.colorRow}>
              <Text style={[styles.colorText, theme.application.main.text]}>{`hex\n${colorValue.color}`}</Text>
              {colorValue.opacity &&
                <Text style={[styles.colorText, theme.application.main.text]}>{`opacity\n${colorValue.opacity}`}</Text>
              }
              <Text style={[styles.colorText, styles.colorName, theme.application.main.text]}>{colorKey}</Text>
            </View>
          </View>
        );
      })}
    </Section>
  );

  const renderTypography = () => (
    <Section title={'Typography'}>
      <ScrollView
        onMomentumScrollEnd={onTypographyScrollViewScrollEnd}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal>
        {Object.keys(theme.typography).map((fontKey, index) => {
          const style = (theme.typography as any)[fontKey];
          return (
            <View
              key={`typography-item-${index}`}
              style={[styles.typographyUnitContainer, {
                width: screenWidth - theme.layout.space.huge * 2,
              }]}>
              <Text
                style={[theme.application.main.text, {
                  marginBottom: theme.layout.space.big,
                }]}>
                {`${fontKey}`}
              </Text>
              <Text
                style={[{
                  ...style,
                  marginHorizontal: theme.layout.space.big,
                  color: theme.application.main.text.color,
                }]}>
                {'Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.'}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={[styles.typographyPaginationContainer, {
        marginVertical: theme.layout.space.big,
      }]}>
        {Object.keys(theme.typography).map((_, index) => {
          const background = index === typographyPage ? theme.application.section.pagination.active : theme.application.section.pagination.inactive;
          return (
            <View
              key={`typohgraphy-paging-item-${index}`}
              style={[styles.typographyPaginationItem, {
                borderColor: theme.application.main.text.color,
                backgroundColor: background.color,
                opacity: background.opacity,
              }]} />
          );
        })}
      </View>
    </Section>
  );

  const renderLayout = () => (
    <Section title={'Layout'}>
      <></>
    </Section>
  );

  return (
    <View style={[styles.container]}>
      {renderStatusBarStyle()}
      {renderColors()}
      {renderTypography()}
      {renderLayout()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorRendererContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
  colorRenderer: {
    flex: 1,
    borderRadius: 20,
  },
  colorUnitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorText: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  colorName: {
    textAlign: 'right',
  },
  typographyUnitContainer: {
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
  },
});

export default withTheme(ThemeRenderer);
