import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { withTheme } from '../../theme/themes';
import { IThemeProps } from '../../theme/themes/theme.structure';
import { Box } from './Box';

interface IProps extends IThemeProps {
  children?: React.ReactNode;
  title: string;
}

const Section = ({ children, theme, title }: IProps) => {

  return (
    <Box
      color={theme.application.section.background}
      borderRadius={theme.layout.borderRadius.big}
      padding={theme.layout.space.medium}
      marginBottom={theme.layout.space.medium}>
      <Box marginBottom={theme.layout.space.medium}>
        <Text style={[styles.sectionHeader, theme.application.section.title]}>
          {title}
        </Text>
      </Box>
      {children}
    </Box>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    alignSelf: 'flex-end',
  },
});

export default withTheme(Section);
