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
    { id: 1, image: require('../images/elevator.png'), title: 'Dead Elevator', description: 'A Visual Novel made in Construct 2.' },
    { id: 2, image: require('../images/undystopia.png'), title: 'Undystopia', description: 'Game concept for a resource management game.' },
    { id: 3, image: require('../images/ikigai.png'), title: 'Ikigai', description: 'A passion project currently Work In Progress.' },
    { id: 4, image: require('../images/Kotonesch.png'), title: 'Kotone', description: '"Why cant i believe my lie?"' },
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
    backgroundColor: '#f2e9e1',
    borderRadius: 13,
  },
  darkContainer: {
    backgroundColor: '#2a273f', 
  },
  item: {
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f2e9e1',
    borderRadius: 8,
  },
  darkItem: {
    backgroundColor: '#444', 
  },
  image: {
    width: 300,
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