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
            style={[styles.colorUnitContainer, {
              paddingVertical: theme.layout.space.small,
              marginHorizontal: theme.layout.space.medium,
            }]}>
            <View style={[styles.colorRendererContainer, {
              marginRight: theme.layout.space.medium,
              borderColor: theme.application.main.text.color,
            }]}>
              <View style={[styles.colorRenderer, {
                backgroundColor: colorValue.color,
                opacity: colorValue.opacity,
              }]} />
            </View>
            <View style={styles.colorDetails}>
              <Text style={[styles.colorText, theme.application.main.text]}>{`${colorValue.color}`}</Text>
              <Text style={[styles.colorText, theme.application.main.text]}>{`opacity ${colorValue.opacity || 1}`}</Text>
            </View>
            <Text style={[styles.colorText, styles.colorName, theme.application.main.text]}>{colorKey}</Text>
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
                width: screenWidth - theme.layout.space.big * 2,
              }]}>
              <Text
                style={[theme.application.main.text, {
                  marginBottom: theme.layout.space.medium,
                }]}>
                {`${fontKey}`}
              </Text>
              <Text
                style={[{
                  ...style,
                  marginHorizontal: theme.layout.space.medium,
                  color: theme.application.main.text.color,
                }]}>
                {'Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.'}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={[styles.typographyPaginationContainer, {
        marginVertical: theme.layout.space.medium,
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
    <Section title={'Space'}>
      <View style={[styles.spaceContainer, {
        marginBottom: theme.layout.space.small,
        marginHorizontal: theme.layout.space.medium,
      }]}>
        {Object.keys(theme.layout.space).map((spaceKey, index) => {
          const space = (theme.layout.space as any)[spaceKey];
          return (
            <View
              key={`space-item-${index}`}
              style={[styles.spaceRow, {
                marginVertical: theme.layout.space.tiny,
              }]}>
              <View style={[styles.spaceBar, {
                width: space,
                backgroundColor: theme.application.section.pagination.active.color,
              }]} />
              <Text
                style={theme.application.main.text}>
                {`${spaceKey}`}
              </Text>
            </View>
          );
        })}
      </View>
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
  colorDetails: {
    flexDirection: 'column',
  },
  colorText: {
    flex: 1,
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
  spaceContainer: {
    flexDirection: 'column',
  },
  spaceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spaceBar: {
    height: 32,
  },
});

export default withTheme(ThemeRenderer);
