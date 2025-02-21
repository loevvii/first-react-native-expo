import React, { createContext, useState } from 'react';
import { StyleSheet, Text, Switch, SafeAreaView, ImageBackground } from 'react-native';
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

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ImageBackground 
        source={darkMode ? require('./src/pages/images/bg-dark.png') : require('./src/pages/images/bg-light.png')} 
        style={styles.backgroundImage}
      >
        <SafeAreaView style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
          <Profile />

          <Text style={[styles.header, darkMode ? styles.darkText : styles.lightText]}>
            My Projects
          </Text>
          <Projects />

          <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Text>
          <Switch 
            value={darkMode} 
            onValueChange={() => setDarkMode(!darkMode)} 
            thumbColor={darkMode ? "#f4f3f4" : "#81b0ff"} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </SafeAreaView>
      </ImageBackground>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',    
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 10,
  },
  lightContainer: {
    backgroundColor: 'transparent', 
  },
  darkContainer: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  lightText: {
    color: '#000', 
  },
  darkText: {
    color: '#fff', 
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});