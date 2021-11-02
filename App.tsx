import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider, themes } from './theme/themes';
import ThemeRenderer from './src/main/ThemeRenderer';
import { Box } from './src/toolkit/Box';

function App() {

  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  // Test
  const isDark = currentTheme.application.main.background.color === themes.dark.application.main.background.color;

  return (
    <ThemeProvider theme={currentTheme}>
      <StatusBar barStyle={currentTheme.statusBarStyle} />
      <Box absoluteFill color={currentTheme.application.main.background} />
      <SafeAreaView style={[styles.container]} >
        <Button
          color={currentTheme.application.main.button.color}
          title={isDark ? 'LightTheme' : 'DarkTheme'}
          onPress={() => setCurrentTheme(isDark ? themes.light : themes.dark)}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewContainer}>
          <ThemeRenderer />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default App;
