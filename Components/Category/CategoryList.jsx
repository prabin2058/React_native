import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import CategoryItem from './CategoryItem';

const categories = [
  {
    id: '1',
    title: 'Health & Skin Care',
    image: require('../../assets/images/Healt&skin.webp'),
  },
  {
    id: '2',
    title: 'Hair Care',
    image: require('../../assets/images/hair_care.webp'),
  },
  {
    id: '3',
    title: 'Furnitures & Plants',
    image: require('../../assets/images/Furniture_plant.webp'),
  },
  {
    id: '4',
    title: 'Chairs & Carpet',
    image: require('../../assets/images/Chair_carpet.webp'),
  },
  {
    id: '5',
    title: 'Electronics',
    image: require('../../assets/images/Electronic.webp'),
  },
];

const CategoryList = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.viewAll}>View All ›</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryItem
            title={item.title}
            image={item.image}
            onPress={() => console.log(item.title)}
          />
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 12,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2333',
  },
  viewAll: {
    fontSize: 13,
    color: '#646cff',
    fontWeight: '600',
  },
});
