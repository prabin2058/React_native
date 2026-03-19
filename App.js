import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, SafeAreaView, ScrollView } from 'react-native';
import HeaderBar from './Components/HeaderBar';
import ImageSlider from './Components/Imageslide';
import CategoryList from './Components/Category/CategoryList';

export default function App() {
  const handleWishlistPress = () => {
    Alert.alert('Wishlist', 'Heart icon pressed!');
  };

  const handleSearchPress = (query) => {
    Alert.alert('Search', `Searching for: ${query}`);
  };

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'Bell icon pressed!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderBar
          onWishlistPress={handleWishlistPress}
          onSearchPress={handleSearchPress}
          onNotificationPress={handleNotificationPress}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageSlider />
          <CategoryList />
        </ScrollView>
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
});