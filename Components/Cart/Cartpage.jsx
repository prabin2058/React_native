import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const resolveImageSource = (source) => {
	if (!source) return null;
	if (typeof source === 'string') return { uri: source };
	if (source?.uri) return source;
	return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString('en-IN')}`;

const Cartpage = ({
	cartItems = [],
	onBack,
	onRemoveItem,
	onIncreaseQty,
	onDecreaseQty,
	onContinueShopping,
	onCheckout,
	onOpenProduct,
}) => {
	const subtotal = useMemo(
		() => cartItems.reduce((sum, item) => sum + (item?.price || 0) * (item?.quantity || 1), 0),
		[cartItems],
	);

	const itemCount = useMemo(
		() => cartItems.reduce((sum, item) => sum + (item?.quantity || 1), 0),
		[cartItems],
	);

	const shipping = cartItems.length ? 120 : 0;
	const total = subtotal + shipping;

	const renderCartItem = ({ item }) => {
		const previewImage = resolveImageSource(item?.images?.[0] || item?.image);
		const quantity = item?.quantity || 1;

		return (
			<TouchableOpacity
				activeOpacity={0.9}
				style={styles.itemCard}
				onPress={() => onOpenProduct?.(item)}
			>
				<View style={styles.itemImageWrap}>
					{previewImage ? <Image source={previewImage} style={styles.itemImage} resizeMode="cover" /> : null}
				</View>

				<View style={styles.itemContent}>
					<Text numberOfLines={2} style={styles.itemTitle}>{item?.title || 'Product'}</Text>
					<Text style={styles.itemPrice}>{formatCurrency(item?.price)}</Text>
					<View style={styles.quantityRow}>
						<TouchableOpacity
							style={styles.qtyBtn}
							onPress={() => onDecreaseQty?.(item?.id)}
							activeOpacity={0.8}
						>
							<Text style={styles.qtyBtnText}>-</Text>
						</TouchableOpacity>
						<Text style={styles.qtyValue}>{quantity}</Text>
						<TouchableOpacity
							style={styles.qtyBtn}
							onPress={() => onIncreaseQty?.(item?.id)}
							activeOpacity={0.8}
						>
							<Text style={styles.qtyBtnText}>+</Text>
						</TouchableOpacity>
					</View>
				</View>

				<TouchableOpacity
					style={styles.deleteBtn}
					onPress={() => onRemoveItem?.(item?.id)}
					activeOpacity={0.8}
				>
					<Ionicons name="trash-outline" size={18} color="#ef4444" />
				</TouchableOpacity>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.headerRow}>
				<TouchableOpacity style={styles.backBtn} activeOpacity={0.8} onPress={onBack}>
					<Ionicons name="chevron-back" size={20} color="#374151" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>My Cart</Text>
				<View style={styles.headerRight}>
					<Text style={styles.headerCount}>{itemCount} items</Text>
				</View>
			</View>

			{cartItems.length === 0 ? (
				<View style={styles.emptyWrap}>
					<Ionicons name="cart-outline" size={48} color="#9ca3af" />
					<Text style={styles.emptyTitle}>Your cart is empty</Text>
					<Text style={styles.emptySub}>Add products to see them here.</Text>
					<TouchableOpacity style={styles.continueBtn} activeOpacity={0.9} onPress={onContinueShopping || onBack}>
						<Text style={styles.continueBtnText}>Continue Shopping</Text>
					</TouchableOpacity>
				</View>
			) : (
				<>
					<FlatList
						data={cartItems}
						keyExtractor={(item) => item.id?.toString()}
						renderItem={renderCartItem}
						contentContainerStyle={styles.listContent}
						showsVerticalScrollIndicator={false}
					/>

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

						<TouchableOpacity style={styles.checkoutBtn} activeOpacity={0.9} onPress={() => onCheckout?.(total)}>
							<Text style={styles.checkoutText}>Proceed to Checkout</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</SafeAreaView>
	);
};

export default Cartpage;

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#f3f4f8',
	},
	headerRow: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#e5e7eb',
		backgroundColor: '#fff',
	},
	backBtn: {
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#111827',
	},
	headerRight: {
		minWidth: 64,
		alignItems: 'flex-end',
	},
	headerCount: {
		fontSize: 12,
		color: '#6b7280',
		fontWeight: '600',
	},
	emptyWrap: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 28,
	},
	emptyTitle: {
		marginTop: 12,
		fontSize: 20,
		fontWeight: '700',
		color: '#111827',
	},
	emptySub: {
		marginTop: 4,
		fontSize: 13,
		color: '#6b7280',
	},
	continueBtn: {
		marginTop: 14,
		backgroundColor: '#4f62ff',
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	continueBtnText: {
		color: '#fff',
		fontWeight: '700',
		fontSize: 14,
	},
	listContent: {
		paddingHorizontal: 12,
		paddingTop: 10,
		paddingBottom: 8,
	},
	itemCard: {
		backgroundColor: '#fff',
		borderRadius: 16,
		padding: 10,
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemImageWrap: {
		width: 72,
		height: 72,
		borderRadius: 12,
		overflow: 'hidden',
		backgroundColor: '#eef0f5',
	},
	itemImage: {
		width: '100%',
		height: '100%',
	},
	itemContent: {
		flex: 1,
		marginHorizontal: 10,
	},
	itemTitle: {
		fontSize: 14,
		color: '#1f2937',
		fontWeight: '600',
	},
	itemPrice: {
		marginTop: 4,
		color: '#4f62ff',
		fontWeight: '700',
		fontSize: 15,
	},
	quantityRow: {
		marginTop: 6,
		flexDirection: 'row',
		alignItems: 'center',
	},
	qtyBtn: {
		width: 28,
		height: 28,
		borderRadius: 8,
		backgroundColor: '#eef2ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	qtyBtnText: {
		fontSize: 18,
		lineHeight: 20,
		color: '#4f62ff',
		fontWeight: '700',
	},
	qtyValue: {
		minWidth: 24,
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '700',
		color: '#111827',
		marginHorizontal: 8,
	},
	deleteBtn: {
		width: 34,
		height: 34,
		borderRadius: 17,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fef2f2',
	},
	summaryCard: {
		marginHorizontal: 12,
		marginTop: 2,
		marginBottom: 10,
		borderRadius: 16,
		backgroundColor: '#fff',
		padding: 12,
	},
	summaryRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 6,
	},
	summaryLabel: {
		fontSize: 13,
		color: '#6b7280',
	},
	summaryValue: {
		fontSize: 13,
		color: '#111827',
		fontWeight: '600',
	},
	totalRow: {
		paddingTop: 6,
		borderTopWidth: 1,
		borderTopColor: '#e5e7eb',
		marginTop: 2,
		marginBottom: 10,
	},
	totalLabel: {
		fontSize: 15,
		color: '#111827',
		fontWeight: '700',
	},
	totalValue: {
		fontSize: 16,
		color: '#111827',
		fontWeight: '800',
	},
	checkoutBtn: {
		backgroundColor: '#4f62ff',
		borderRadius: 12,
		paddingVertical: 12,
		alignItems: 'center',
	},
	checkoutText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '700',
	},
});
