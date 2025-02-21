import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ThemeContext } from '../../App'; // Import ThemeContext

interface PortfolioItem {
  id: number;
  image: any;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const { darkMode } = useContext(ThemeContext); // Get darkMode state

  const [portfolioItems] = useState<PortfolioItem[]>([
    { id: 1, image: require('../images/elevator.png'), title: 'Dead Elevator', description: 'A Visual Novel made in Construct 2.' },
    { id: 2, image: require('../images/undystopia.png'), title: 'Undystopia', description: 'Game concept for a resource management game.' },
    { id: 3, image: require('../images/ikigai.png'), title: 'Ikigai', description: 'A passion project currently Work In Progress.' },
    { id: 4, image: require('../images/Kotonesch.png'), title: 'Kotone', description: '"Why can’t I believe my lie?"' },
  ]);

  const renderItem = ({ item }: { item: PortfolioItem }) => (
    <View style={[styles.item, darkMode ? styles.darkItem : styles.lightItem]}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, darkMode ? styles.darkText : styles.lightText]}>{item.title}</Text>
        <Text style={[styles.description, darkMode ? styles.darkText : styles.lightText]}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={portfolioItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  lightItem: {
    backgroundColor: '#fffaf3', // Rosé Pine Dawn
  },
  darkItem: {
    backgroundColor: '#2a273f', // Rosé Pine Moon
  },
  item: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  image: {
    width: 300,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  textContainer: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
  lightText: {
    color: '#575279', // Dawn
  },
  darkText: {
    color: '#e0def4', // Moon
  },
});

export default Projects;
