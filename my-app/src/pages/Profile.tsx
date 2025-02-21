import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { ThemeContext } from '../../App'; // Import ThemeContext

const Profile: React.FC = () => {
  const theme = useContext(ThemeContext); // Access darkMode state
  const darkMode = theme?.darkMode || false; // Handle undefined case

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Image source={require('../../assets/pfp.png')} style={styles.image} />
      
      <View style={styles.rightAligned}>
        <Text style={[styles.title, darkMode ? styles.darkText : styles.lightText]}>
          Welcome to my portfolio
        </Text>

        <Text style={[styles.heading, darkMode ? styles.darkText : styles.lightText]}>
          LHV
        </Text>
        <Text style={[styles.body, darkMode ? styles.darkText : styles.lightText]}>
          I'm Alive.
        </Text>

        <Text style={[styles.subheading, darkMode ? styles.darkText : styles.lightText]}>
          My Skills
        </Text>
        <Text style={[styles.body, darkMode ? styles.darkText : styles.lightText]}>
          C++, C#, Python
        </Text>

        <Text style={[styles.subheading, darkMode ? styles.darkText : styles.lightText]}>
          My Links
        </Text>
        <Text
          style={[styles.link, darkMode ? styles.darkLink : styles.lightLink]}
          onPress={() => Linking.openURL('https://gmail.com')}>
          lhvinas112203@gmail.com
        </Text>
        <Text
          style={[styles.link, darkMode ? styles.darkLink : styles.lightLink]}
          onPress={() => Linking.openURL('https://github.com/loevvii')}>
          Github
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 13,
    width: '100%',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#fffaf3', // Rosé Pine Dawn
  },
  darkContainer: {
    backgroundColor: '#2a273f', // Rosé Pine Moon
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  body: {
    fontSize: 16,
    marginTop: 4,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
  },
  lightText: {
    color: '#575279', // Rosé Pine Dawn
  },
  darkText: {
    color: '#e0def4', // Rosé Pine Moon
  },
  lightLink: {
    color: '#286983', // Rosé Pine Dawn link color
  },
  darkLink: {
    color: '#9ccfd8', // Rosé Pine Moon link color
  },
});

export default Profile;
