import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const resolveImageSource = (source) => {
	if (!source) return null;
	if (typeof source === 'string') return { uri: source };
	if (source?.uri) return source;
	return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString('en-IN')}`;

const Checkout = ({ items = [], onBack, onPlaceOrder }) => {
	const [fullName, setFullName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('Kathmandu');
	const [paymentMethod, setPaymentMethod] = useState('cod');

	const subtotal = useMemo(
		() => items.reduce((sum, item) => sum + (item?.price || 0) * (item?.quantity || 1), 0),
		[items],
	);
	const shipping = items.length ? 120 : 0;
	const total = subtotal + shipping;

	const submitOrder = () => {
		if (!fullName.trim() || !phone.trim() || !address.trim() || !city.trim()) {
			Alert.alert('Missing details', 'Please fill all checkout fields.');
			return;
		}

		onPlaceOrder?.({ fullName, phone, address, city, paymentMethod }, total);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.backBtn} activeOpacity={0.8} onPress={onBack}>
					<Ionicons name="chevron-back" size={20} color="#374151" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Checkout</Text>
				<View style={styles.headerSpace} />
			</View>

			<ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
				<View style={styles.sectionCard}>
					<Text style={styles.sectionTitle}>Delivery Details</Text>
					<TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
					<TextInput
						style={styles.input}
						placeholder="Phone Number"
						value={phone}
						onChangeText={setPhone}
						keyboardType="phone-pad"
					/>
					<TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
					<TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
				</View>

				<View style={styles.sectionCard}>
					<Text style={styles.sectionTitle}>Payment Method</Text>
					<TouchableOpacity
						style={[styles.paymentOption, paymentMethod === 'cod' && styles.paymentOptionActive]}
						onPress={() => setPaymentMethod('cod')}
						activeOpacity={0.85}
					>
						<Text style={[styles.paymentText, paymentMethod === 'cod' && styles.paymentTextActive]}>Cash on Delivery</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.paymentOption, paymentMethod === 'esewa' && styles.paymentOptionActive]}
						onPress={() => setPaymentMethod('esewa')}
						activeOpacity={0.85}
					>
						<Text style={[styles.paymentText, paymentMethod === 'esewa' && styles.paymentTextActive]}>eSewa / Online</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.sectionCard}>
					<Text style={styles.sectionTitle}>Order Items ({items.length})</Text>
					{items.map((item) => {
						const source = resolveImageSource(item?.images?.[0] || item?.image);
						const qty = item?.quantity || 1;

						return (
							<View key={item.id} style={styles.itemRow}>
								<View style={styles.thumbWrap}>
									{source ? <Image source={source} style={styles.thumb} resizeMode="cover" /> : null}
								</View>
								<View style={styles.itemContent}>
									<Text numberOfLines={1} style={styles.itemTitle}>{item?.title || 'Product'}</Text>
									<Text style={styles.itemMeta}>Qty: {qty}</Text>
								</View>
								<Text style={styles.itemPrice}>{formatCurrency((item?.price || 0) * qty)}</Text>
							</View>
						);
					})}
				</View>

				<View style={styles.summaryCard}>
					<View style={styles.summaryRow}>
						<Text style={styles.summaryLabel}>Subtotal</Text>
						<Text style={styles.summaryValue}>{formatCurrency(subtotal)}</Text>
					</View>
					<View style={styles.summaryRow}>
						<Text style={styles.summaryLabel}>Shipping</Text>
						<Text style={styles.summaryValue}>{formatCurrency(shipping)}</Text>
					</View>
					<View style={[styles.summaryRow, styles.totalRow]}>
						<Text style={styles.totalLabel}>Total</Text>
						<Text style={styles.totalValue}>{formatCurrency(total)}</Text>
					</View>
				</View>
			</ScrollView>

			<View style={styles.bottomWrap}>
				<TouchableOpacity style={styles.placeOrderBtn} activeOpacity={0.9} onPress={submitOrder}>
					<Text style={styles.placeOrderText}>Place Order</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Checkout;

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: '#f3f4f8' },
	container: { flex: 1 },
	content: { padding: 12, paddingBottom: 96 },
	header: {
		backgroundColor: '#fff',
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#e5e7eb',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	backBtn: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
	headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
	headerSpace: { width: 32 },
	sectionCard: {
		backgroundColor: '#fff',
		borderRadius: 14,
		padding: 12,
		marginBottom: 10,
	},
	sectionTitle: { fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 8 },
	input: {
		height: 42,
		borderWidth: 1,
		borderColor: '#d1d5db',
		borderRadius: 10,
		paddingHorizontal: 12,
		marginBottom: 8,
		fontSize: 14,
		color: '#111827',
		backgroundColor: '#fff',
	},
	paymentOption: {
		borderWidth: 1,
		borderColor: '#d1d5db',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		marginBottom: 8,
	},
	paymentOptionActive: { borderColor: '#4f62ff', backgroundColor: '#eef2ff' },
	paymentText: { color: '#374151', fontWeight: '600', fontSize: 14 },
	paymentTextActive: { color: '#4f62ff' },
	itemRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	thumbWrap: { width: 44, height: 44, borderRadius: 8, overflow: 'hidden', backgroundColor: '#eef0f5' },
	thumb: { width: '100%', height: '100%' },
	itemContent: { flex: 1, marginHorizontal: 10 },
	itemTitle: { fontSize: 13, fontWeight: '600', color: '#1f2937' },
	itemMeta: { fontSize: 12, color: '#6b7280', marginTop: 2 },
	itemPrice: { fontSize: 13, fontWeight: '700', color: '#1f2937' },
	summaryCard: {
		backgroundColor: '#fff',
		borderRadius: 14,
		padding: 12,
	},
	summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
	summaryLabel: { fontSize: 13, color: '#6b7280' },
	summaryValue: { fontSize: 13, color: '#111827', fontWeight: '600' },
	totalRow: { borderTopWidth: 1, borderTopColor: '#e5e7eb', paddingTop: 8, marginTop: 2, marginBottom: 0 },
	totalLabel: { fontSize: 15, fontWeight: '700', color: '#111827' },
	totalValue: { fontSize: 16, fontWeight: '800', color: '#111827' },
	bottomWrap: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		padding: 12,
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderTopColor: '#e5e7eb',
	},
	placeOrderBtn: {
		backgroundColor: '#4f62ff',
		borderRadius: 12,
		paddingVertical: 13,
		alignItems: 'center',
	},
	placeOrderText: { color: '#fff', fontSize: 15, fontWeight: '700' },
});
