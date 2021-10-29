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
    <Box borderRadius={theme.layout.borderRadius.big}>
      <Box
        padding={theme.layout.space.medium}
        marginBottom={theme.layout.space.medium}>
        <Box marginBottom={theme.layout.space.medium}>
          <Text style={[styles.sectionHeader, theme.application.section.title]}>
            {title}
          </Text>
        </Box>
        <Box
          absoluteFill
          borderRadius={theme.layout.borderRadius.big}
          backgroundColor={theme.application.section.background.color}
          opacity={theme.application.section.background.opacity} />
        {children}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    alignSelf: 'flex-end',
  },
});

export default withTheme(Section);
