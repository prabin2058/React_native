import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, SafeAreaView, ScrollView } from 'react-native';
import HeaderBar from './Components/HeaderBar';
import ImageSlider from './Components/Imageslide';
import CategoryList from './Components/Category/CategoryList';
import DealsList from './Components/DealItem';
import Footer from './Components/Footer';
import ProductList from './Components/Products/ProductList';
import { allProducts, getProductDetailData } from './Components/Products/ProductItem';
import ProductDetail from './Components/Products/ProductDetail';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWishlistPress = () => {
    Alert.alert('Wishlist', 'Heart icon pressed!');
  };

  const handleSearchPress = (query) => {
    Alert.alert('Search', `Searching for: ${query}`);
  };

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'Bell icon pressed!');
  };

  const handleProductPress = (product) => {
    setSelectedProduct(getProductDetailData(product));
  };

  const handleAddToCart = (product) => {
    Alert.alert('Cart', `${product?.title || 'Product'} added`);
  };

  const handleProductWishlist = (product) => {
    Alert.alert('Wishlist', `${product?.title || 'Product'} saved`);
  };

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        onWishlist={() => handleProductWishlist(selectedProduct)}
        onShare={() => Alert.alert('Share', `Share ${selectedProduct.title}`)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderBar
          onWishlistPress={handleWishlistPress}
          onSearchPress={handleSearchPress}
          onNotificationPress={handleNotificationPress}
        />
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <ImageSlider />
          <CategoryList />
          {/* DealsList placed directly after CategoryList */}
          <DealsList />
          <ProductList
            title="Featured Deals"
            products={allProducts}
            horizontal
            showHeader
            onProductPress={handleProductPress}
            onAddToCart={handleAddToCart}
            onWishlist={handleProductWishlist}
          />
        </ScrollView>
        <Footer activeTab="home" />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f8',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f4f8',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10,
  },
});