import React, { useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import { withTheme } from '../../theme/themes';
import { IThemeProps } from '../../theme/themes/theme.structure';
import Section from '../toolkit/Section';
import { Box } from '../toolkit/Box';

const ThemeRenderer = ({ theme }: IThemeProps) => {

  const [typographyPage, setTypographyPage] = useState(0);

  const onTypographyScrollViewScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const page = parseInt('' + (e.nativeEvent.contentOffset.x / e.nativeEvent.contentSize.width * Object.keys(theme.typography).length), 10);
    setTypographyPage(page);
  };

  const screenWidth = Dimensions.get('screen').width;

  const renderStatusBarStyle = () => (
    <Section title={'StatusBarStyle'}>
      <Text style={theme.application.section.subtitle} > {`${theme.statusBarStyle}`}</Text>
    </Section>
  );

  const renderColors = () => (
    <Section title={'Colors'}>
      {Object.keys(theme.palette).map((colorKey, index) => {
        const colorValue = (theme.palette as any)[colorKey];
        return (
          <Box
            paddingVertical={theme.layout.space.small}
            marginRight={theme.layout.space.medium}
            marginLeft={theme.layout.space.small}
            key={`color-item-${index}`}>
            <View style={styles.colorUnitContainer}>
              <Box marginRight={theme.layout.space.medium}>
                {colorValue.color &&
                  <Box borderWidth={1} borderColor={theme.application.main.text.color} width={48} height={48} borderRadius={24} color={colorValue} />
                }
                {colorValue.fromColor && colorValue.toColor &&
                  <Box borderWidth={1} borderColor={theme.application.main.text.color} width={48} height={48} borderRadius={24} gradient={colorValue} />
                }
              </Box>
              <Text style={[styles.colorText, styles.colorName, theme.application.section.subtitle]}>{colorKey}</Text>
              <Box>
                {colorValue.color &&
                  <>
                    <Text style={[styles.colorText, theme.application.main.text]}>{`${colorValue.color}`}</Text>
                    <Text style={[styles.colorText, theme.application.main.text]}>{`opacity ${colorValue.opacity || 1}`}</Text>
                  </>
                }
                {colorValue.fromColor && colorValue.toColor &&
                  <>
                    <Text style={[styles.colorText, theme.application.main.text]}>{`${colorValue.fromColor} ${colorValue.toColor}`}</Text>
                    <Text style={[styles.colorText, theme.application.main.text]}>{`opacity ${colorValue.opacity || 1}`}</Text>
                  </>
                }
              </Box>
            </View>
          </Box>
        );
      })}
    </Section >
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
                style={[theme.application.section.subtitle, {
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
      <Box marginTop={theme.layout.space.big} marginBottom={theme.layout.space.small}>
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
      </Box>
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
                style={theme.application.section.subtitle}>
                {`${spaceKey} (${space})`}
              </Text>
            </View>
          );
        })}
      </View>
    </Section>
  );

  const renderBorderRadius = () => (
    <Section title={'Radius'}>
      <View style={[styles.spaceContainer, {
        marginBottom: theme.layout.space.small,
        marginHorizontal: theme.layout.space.medium,
      }]}>
        {Object.keys(theme.layout.borderRadius).map((radiusKey, index) => {
          const radius = (theme.layout.borderRadius as any)[radiusKey];
          return (
            <View
              key={`border-radius-item-${index}`}
              style={[styles.spaceRow, {
                marginVertical: theme.layout.space.tiny,
              }]}>
              <Box width={64} height={64} color={theme.application.section.pagination.active} borderRadius={radius} />
              <Text style={[theme.application.section.subtitle]}>
                {`${radiusKey} (${radius})`}
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
      {renderBorderRadius()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorUnitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorText: {
    flex: 1,
    textAlign: 'right',
  },
  colorName: {
    textAlign: 'left',
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
