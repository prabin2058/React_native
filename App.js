import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from './Components/HeaderBar';
import ImageSlider from './Components/Imageslide';
import CategoryList from './Components/Category/CategoryList';
import DealsList from './Components/DealItem';
import ProductCardDisplay from './Components/Products/Productcarddisplay';
import LiveSell from './Components/Products/Livesell';
import Footer from './Components/Footer';
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
      <SafeAreaProvider>
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onWishlist={() => handleProductWishlist(selectedProduct)}
          onShare={() => Alert.alert('Share', `Share ${selectedProduct.title}`)}
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
          onBuyNow={(product) => Alert.alert('Buy Now', `Proceeding to checkout for ${product?.title || 'Product'}`)}
        />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
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
            <DealsList
              products={allProducts}
              onProductPress={handleProductPress}
            />
            <ProductCardDisplay
              products={allProducts}
              onProductPress={handleProductPress}
              limit={8}
            />
            <LiveSell
              products={allProducts}
              onProductPress={handleProductPress}
              limit={4}
            />
          </ScrollView>
          <Footer activeTab="home" />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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