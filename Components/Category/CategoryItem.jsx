import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItem = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  item: {
    width: 105,
    marginRight: 12,
    alignItems: 'center',
  },
  imageWrap: {
    width: 85,
    height: 85,
    borderRadius: 42,
    overflow: 'hidden',
    backgroundColor: '#f1f2f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: '#2f3241',
    textAlign: 'center',
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});