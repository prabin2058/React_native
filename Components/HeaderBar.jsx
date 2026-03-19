import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderBar = ({
    onWishlistPress,
    onSearchPress,
    onNotificationPress,
}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (onSearchPress) {
            onSearchPress(searchText);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Wishlist Icon */}
                <TouchableOpacity
                    onPress={onWishlistPress}
                    style={styles.iconButton}
                    activeOpacity={0.7}
                >
                    <Ionicons name="heart-outline" size={20} color="#646cff" />
                </TouchableOpacity>

                {/* Search Bar */}
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for product ...."
                        placeholderTextColor="#999"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <TouchableOpacity
                        onPress={handleSearch}
                        style={styles.searchButton}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>

                {/* Notification Icon */}
                <TouchableOpacity
                    onPress={onNotificationPress}
                    style={styles.iconButton}
                    activeOpacity={0.7}
                >
                    <Ionicons name="notifications-outline" size={20} color="#646cff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#f3f4f8',
        paddingTop: Platform.OS === 'android' ? 30 : 0, // Handle status bar on Android
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f3f4f8',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#e9e9ef',
        backgroundColor: '#fafafe',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafe',
        borderRadius: 25,
        marginHorizontal: 10,
        paddingLeft: 12,
        paddingRight: 4,
        height: 42,
        borderWidth: 1.5,
        borderColor: '#646cff',
    },
    searchInput: {
        flex: 1,
        fontSize: 13,
        color: '#333',
        paddingVertical: 6,
    },
    searchButton: {
        backgroundColor: '#646cff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});

export default HeaderBar;
