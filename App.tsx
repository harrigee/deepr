import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider, themes } from './theme';
import ThemeRenderer from './src/toolkit/ThemeRenderer';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const isDark = currentTheme.components.main.background.color === themes.dark.components.main.background.color;

  return (
    <ThemeProvider theme={currentTheme}>
      <StatusBar barStyle={currentTheme.statusBarStyle} />
      <SafeAreaView
        style={[styles.container, { backgroundColor: currentTheme.components.main.background.color }]}
      >
        <Button
          color={currentTheme.components.main.button.color}
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
