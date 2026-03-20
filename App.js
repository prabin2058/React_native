import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import HeaderBar from './Components/HeaderBar';
import ImageSlider from './Components/Imageslide';
import CategoryList from './Components/Category/CategoryList';
import DealsList from './Components/DealItem';
import ProductCardDisplay from './Components/Products/Productcarddisplay';
import LiveSell from './Components/Products/Livesell';
import Flashdeal from './Components/Flashdeal';
import Specialoffer from './Components/Specialoffer';
import Cartpage from './Components/Cart/Cartpage';
import Checkout from './Components/Cart/Checkout';
import Footer from './Components/Footer';
import { allProducts, getProductDetailData } from './Components/Products/ProductItem';
import ProductDetail from './Components/Products/ProductDetail';

export default function App() {
  const homeScrollRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [specialOfferLimit, setSpecialOfferLimit] = useState(6);
  const [activeTab, setActiveTab] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutSource, setCheckoutSource] = useState('cart');

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
    setActiveTab('home');
    setSelectedProduct(getProductDetailData(product));
  };

  const handleAddToCart = (product) => {
    if (!product) return;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);

      if (existingIndex >= 0) {
        const next = [...prev];
        const currentQty = next[existingIndex]?.quantity || 1;
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: currentQty + 1,
        };
        return next;
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    Alert.alert('Cart', `${product?.title || 'Product'} added to cart`);
  };

  const handleProductWishlist = (product) => {
    Alert.alert('Wishlist', `${product?.title || 'Product'} saved`);
  };

  const handleSpecialOfferViewAll = () => {
    setSpecialOfferLimit(allProducts.length);
  };

  const handleRemoveCartItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleIncreaseCartQty = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      ),
    );
  };

  const handleDecreaseCartQty = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, (item.quantity || 1) - 1) }
            : item,
        )
        .filter((item) => (item.quantity || 0) > 0),
    );
  };

  const openCartPage = () => {
    setSelectedProduct(null);
    setActiveTab('cart');
  };

  const openCheckoutPage = (items = [], source = 'cart') => {
    const validItems = (items || []).filter(Boolean);
    if (!validItems.length) {
      Alert.alert('Checkout', 'No products available for checkout.');
      return;
    }

    setSelectedProduct(null);
    setCheckoutItems(validItems);
    setCheckoutSource(source);
    setActiveTab('checkout');
  };

  const handleBuyNow = (product) => {
    if (!product) return;
    openCheckoutPage([{ ...product, quantity: 1 }], 'buyNow');
  };

  const handleCartCheckout = () => {
    openCheckoutPage(cartItems, 'cart');
  };

  const handlePlaceOrder = (formData, total) => {
    if (checkoutSource === 'cart') {
      setCartItems([]);
    }

    setCheckoutItems([]);
    setActiveTab('home');

    Alert.alert(
      'Order Placed',
      `Thank you ${formData?.fullName || ''}! Your order of Rs. ${total.toLocaleString('en-IN')} is confirmed.`,
    );
  };

  const openPhoneCamera = async () => {
    try {
      const permission = await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert('Permission required', 'Camera permission is needed to open Live video camera.');
        return;
      }

      await ImagePicker.launchCameraAsync({
        mediaTypes: ['videos'],
        videoMaxDuration: 60,
        quality: 0.8,
      });
    } catch (error) {
      Alert.alert('Camera error', 'Unable to open video camera right now.');
    }
  };

  const handleFooterTabPress = async (tabKey) => {
    setActiveTab(tabKey);

    if (tabKey === 'home') {
      setSelectedProduct(null);
      setSpecialOfferLimit(6);
      homeScrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    if (tabKey === 'live') {
      await openPhoneCamera();
      return;
    }

    if (tabKey === 'cart') {
      openCartPage();
      return;
    }

    Alert.alert('Coming Soon', `${tabKey} screen will be added soon.`);
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
          onOpenCart={openCartPage}
          onBuyNow={handleBuyNow}
        />
      </SafeAreaProvider>
    );
  }

  if (activeTab === 'checkout') {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Checkout
              items={checkoutItems}
              onBack={() => setActiveTab(checkoutSource === 'cart' ? 'cart' : 'home')}
              onPlaceOrder={handlePlaceOrder}
            />
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  if (activeTab === 'cart') {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Cartpage
              cartItems={cartItems}
              onBack={() => setActiveTab('home')}
              onContinueShopping={() => setActiveTab('home')}
              onRemoveItem={handleRemoveCartItem}
              onIncreaseQty={handleIncreaseCartQty}
              onDecreaseQty={handleDecreaseCartQty}
              onOpenProduct={(item) => setSelectedProduct(getProductDetailData(item))}
              onCheckout={handleCartCheckout}
            />
            <Footer activeTab={activeTab} onTabPress={handleFooterTabPress} />
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
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
            ref={homeScrollRef}
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
            <Flashdeal
              products={allProducts}
              onProductPress={handleProductPress}
              limit={4}
            />
            <Specialoffer
              products={allProducts}
              onProductPress={handleProductPress}
              onViewAll={handleSpecialOfferViewAll}
              limit={specialOfferLimit}
            />
          </ScrollView>
          <Footer activeTab={activeTab} onTabPress={handleFooterTabPress} />
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