import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ 
  title, 
  products = [], 
  onViewAll, 
  onProductPress,
  onAddToCart,
  onWishlist,
  horizontal = true,
  showHeader = true,
  variant = 'vertical', // 'vertical', 'horizontal', or 'grid'
  numColumns = 2,
  listEmptyComponent
}) => {
  if (!products || products.length === 0) {
    return listEmptyComponent || null;
  }

  // For grid view (2 columns)
  if (!horizontal && variant === 'grid') {
    return (
      <View style={styles.wrapper}>
        {showHeader && (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            {onViewAll && (
              <TouchableOpacity onPress={onViewAll} activeOpacity={0.8}>
                <Text style={styles.viewAll}>View All ›</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id?.toString()}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridList}
          renderItem={({ item }) => (
            <ProductItem
              item={item}
              onPress={() => onProductPress?.(item)}
              onAddToCart={() => onAddToCart?.(item)}
              onWishlist={() => onWishlist?.(item)}
              variant="grid"
            />
          )}
        />
      </View>
    );
  }

  // For horizontal scrolling list
  return (
    <View style={styles.wrapper}>
      {showHeader && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
          {onViewAll && (
            <TouchableOpacity onPress={onViewAll} activeOpacity={0.8}>
              <Text style={styles.viewAll}>View All ›</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <FlatList
        data={products}
        horizontal={horizontal}
        keyExtractor={(item) => item.id?.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={horizontal ? styles.horizontalList : styles.verticalList}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            onPress={() => onProductPress?.(item)}
            onAddToCart={() => onAddToCart?.(item)}
            onWishlist={() => onWishlist?.(item)}
            variant={horizontal ? 'vertical' : variant}
          />
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2333',
  },
  viewAll: {
    fontSize: 14,
    color: '#646cff',
    fontWeight: '600',
  },
  horizontalList: {
    paddingRight: 15,
  },
  verticalList: {
    // For vertical lists
  },
  gridList: {
    paddingBottom: 10,
  },
});