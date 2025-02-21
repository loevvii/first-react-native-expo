import React, { createContext, useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Switch, SafeAreaView, Animated } from 'react-native';
import Projects from './src/pages/Projects';
import Profile from './src/pages/Profile';

interface ThemeContextType {  
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export const ThemeContext = createContext({ 
  darkMode: false,
  setDarkMode: (mode: boolean) => {},
});

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const backgroundColor = useRef(new Animated.Value(0)).current;
  const textColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundColor, {
      toValue: darkMode ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(textColor, {
      toValue: darkMode ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [darkMode]);

  const interpolatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#faf4ed', '#232136'],
  });

  const interpolatedTextColor = textColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000', '#fff'],
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Animated.View style={[styles.container, { backgroundColor: interpolatedBackgroundColor }]}>  
        <Profile />
        <Animated.Text style={[styles.header, { color: interpolatedTextColor }]}>My Projects</Animated.Text>
        <Projects />
        <Animated.Text style={[styles.text, { color: interpolatedTextColor }]}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Animated.Text>
        <Switch 
          value={darkMode} 
          onValueChange={() => setDarkMode(!darkMode)} 
          thumbColor={darkMode ? "#f4f3f4" : "#81b0ff"} 
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </Animated.View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
