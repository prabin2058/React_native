import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const tabs = [
	{ key: 'home', label: 'Home', icon: 'home' },
	{ key: 'shorts', label: 'Shorts Feed', icon: 'play-outline' },
	{ key: 'live', label: 'Live', icon: 'radio-outline' },
	{ key: 'cart', label: 'Cart', icon: 'cart-outline' },
	{ key: 'account', label: 'Account', icon: 'person-outline' },
];

const Footer = ({ activeTab = 'home', onTabPress }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				{tabs.map((tab) => {
					const active = tab.key === activeTab;
					return (
						<TouchableOpacity
							key={tab.key}
							style={styles.tabButton}
							activeOpacity={0.8}
							onPress={() => onTabPress?.(tab.key)}
						>
							<Ionicons
								name={tab.icon}
								size={18}
								color={active ? '#5b63ff' : '#5b5f6b'}
							/>
							<Text style={[styles.label, active && styles.activeLabel]}>{tab.label}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 22,
		borderTopRightRadius: 22,
		borderTopWidth: 1,
		borderColor: '#ececf0',
		overflow: 'hidden',
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 8,
		paddingTop: 8,
		paddingBottom: 10,
	},
	tabButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		marginTop: 4,
		fontSize: 10,
		color: '#5b5f6b',
		fontWeight: '500',
	},
	activeLabel: {
		color: '#5b63ff',
		fontWeight: '700',
	},
});
