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

  const [portfolioItems] = useState<PortfolioItem[]>([  //containes the items withing the ProtfolioItem array
    { id: 1, image: require('./images/Kotonesch.png'), title: 'Portfolio Website', description: 'A portfolio website done with React.' },
    { id: 2, image: require('./images/Kotonesch.png'), title: 'Inventory Management System', description: 'A simple inventory management website with the relevant functionality.' },
    { id: 3, image: require('./images/Kotonesch.png'), title: 'Library Management Website', description: 'A library management website for the LRC.' },
    { id: 4, image: require('./images/Kotonesch.png'), title: 'Art', description: 'I also do a bunch of art.' },
  ]);

  const renderItem = ({ item }: { item: PortfolioItem }) => (   //renders the contents within the array
    <View style={[styles.item, darkMode && styles.darkItem]}>
      <Image source={item.image} style={styles.image} />
      <Text style={[styles.title, darkMode && styles.darkText]}>{item.title}</Text>
      <Text style={[styles.description, darkMode && styles.darkText]}>{item.description}</Text>
    </View>
  );

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <FlatList
        data={portfolioItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(232, 230, 230, 0.9)',
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
  item: {
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
  },
  darkItem: {
    backgroundColor: '#444', 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  darkText: {
    color: '#fff', 
  },
});

export default Projects;