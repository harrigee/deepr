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

  const sectionHeader = (text: string) => (
    <Text style={[styles.sectionHeader, theme.application.section.title]}>{text}</Text>
  );

  const renderStatusBarStyle = () => (
    <Section>
      {sectionHeader('StatusBarStyle')}
      <Text style={theme.application.main.text} > {`${theme.statusBarStyle}`}</Text>
    </Section>
  );

  const renderTypography = () => (
    <Section>
      {sectionHeader('Typography')}
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
                width: screenWidth - 64,
              }]}>
              <Text
                style={[styles.typographyHeader, theme.application.main.text]}>
                {`${fontKey}`}
              </Text>
              <Text
                style={[styles.typographyTextContainer, {
                  ...style,
                  color: theme.application.main.text.color,
                }]}>
                {'Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs. Pack my box with five dozen liquor jugs.'}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.typographyPaginationContainer}>
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

  const renderColors = () => (
    <Section>
      {sectionHeader('Colors')}
      {Object.keys(theme.palette).map((colorKey, index) => {
        const colorValue = (theme.palette as any)[colorKey];
        return (
          <View
            key={`color-item-${index}`}
            style={styles.colorUnitContainer}>
            <View style={[styles.colorRendererContainer, {
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
  colorText: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  colorName: {
    textAlign: 'right',
  },
  typographyHeader: {
    marginBottom: 16,
  },
  typographyTextContainer: {
    marginHorizontal: 16,
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
    marginTop: 32,
  },
});

export default withTheme(ThemeRenderer);