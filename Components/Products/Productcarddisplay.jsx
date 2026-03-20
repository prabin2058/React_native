import React, { useMemo, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { allProducts } from "./ProductItem";

const resolveImageSource = (source) => {
	if (!source) return null;
	if (typeof source === "string") return { uri: source };
	if (source?.uri) return source;
	return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString("en-IN")}`;

const TABS = [
	{ key: "best", label: "Best Deals", icon: "lightning-bolt", iconColor: "#4c66ff" },
	{ key: "new", label: "New Arrivals", showNewTag: true },
	{ key: "sports", label: "Sports Outdoor", icon: "run-fast", iconColor: "#22c55e" },
];

const PROMO_BANNERS = {
	main: {
		uri: "https://imgs.search.brave.com/ktfvCdo_0bNUysSFjoknWMlPqXWkMEXx6GHZntWaebk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NDUwNTgwOC92ZWN0/b3IvNTAtb2ZmLXNh/bGUtYmFubmVyLXZl/Y3Rvci1kZXNpZ24t/b24tY29sb3ItYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bVRP/LXFKcDgtVFQzY1Na/bm8wN09LUnlFUGNk/N0l2SzZzZUVOVzNF/WmZXST0",
	},
	smallLeft: {
		uri: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=80",
	},
	smallRight: {
		uri: "https://imgs.search.brave.com/U40sEoh-bJxWnXnsiS6e4uiHQO-FGcDGiMVjggr2mCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/NTA2Lzg3OS9zbWFs/bC8yMC1wZXJjZW50/LW9mZi0zZC1zcGVj/aWFsLXByb21vdGlv/bmFsLWNhbXBhaWdu/LWRlc2lnbi0yMC1v/ZmYtM2QtZGlzY291/bnQtb2ZmZXItZm9y/LXNhbGUtYW5kLW1h/cmtldGluZy1mcmVl/LXZlY3Rvci5qcGc",
	},
};

const ProductCardDisplay = ({ products = allProducts, onProductPress, limit = 6 }) => {
	const [activeTab, setActiveTab] = useState("best");

	const filteredProducts = useMemo(() => {
		const sourceProducts = products || [];

		if (activeTab === "new") {
			const newItems = sourceProducts.filter((item) => item?.isNew);
			return newItems.length ? newItems : sourceProducts;
		}

		if (activeTab === "sports") {
			const sportsItems = sourceProducts.filter((item) =>
				/sport|outdoor|fitness|gym|running|cycle|football|cricket/i.test(item?.title || "")
			);
			return sportsItems.length ? sportsItems : sourceProducts;
		}

		return sourceProducts;
	}, [products, activeTab]);

	const displayProducts = filteredProducts.slice(0, limit);

	return (
		<View style={styles.wrapper}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.tabsContainer}
			>
				{TABS.map((tab) => {
					const isActive = activeTab === tab.key;

					return (
						<TouchableOpacity
							key={tab.key}
							activeOpacity={0.85}
							onPress={() => setActiveTab(tab.key)}
							style={styles.tabItem}
						>
							{tab.showNewTag ? (
								<View style={styles.tabNewBadge}>
									<Text style={styles.tabNewBadgeText}>NEW</Text>
								</View>
							) : null}
							{tab.icon ? (
								<MaterialCommunityIcons
									name={tab.icon}
									size={16}
									color={tab.iconColor || "#4b5563"}
									style={styles.tabIcon}
								/>
							) : null}
							<Text style={[styles.tabText, isActive && styles.tabTextActive]}>{tab.label}</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>

			<FlatList
				data={displayProducts}
				keyExtractor={(item) => item.id?.toString()}
				numColumns={2}
				scrollEnabled={false}
				showsVerticalScrollIndicator={false}
				columnWrapperStyle={styles.gridRow}
				contentContainerStyle={styles.flatListContent} // Added
				renderItem={({ item }) => {
					const previewImage = resolveImageSource(item?.images?.[0] || item?.image);

					return (
						<TouchableOpacity
							style={styles.productCard}
							activeOpacity={0.85}
							onPress={() => onProductPress?.(item)}
						>
							<View style={styles.productImageWrap}>
								{previewImage ? (
									<Image source={previewImage} style={styles.productImage} resizeMode="cover" />
								) : null}

								<View style={styles.badgesRow}>
									{item?.isNew ? (
										<View style={styles.newBadge}>
											<Text style={styles.badgeText}>New</Text>
										</View>
									) : null}
									{!!item?.discount && (
										<View style={styles.discountBadge}>
											<Text style={styles.badgeText}>-{item.discount}%</Text>
										</View>
									)}
								</View>
							</View>

							<Text numberOfLines={2} style={styles.productTitle}>{item?.title}</Text>
							<Text style={styles.productPrice}>{formatCurrency(item?.price)}</Text>
							{!!item?.originalPrice && (
								<Text style={styles.productOldPrice}>NPR {item.originalPrice.toLocaleString("en-IN")}</Text>
							)}
							<View style={styles.ratingRow}>
								<Text style={styles.star}>★</Text>
								<Text style={styles.ratingText}>{item?.rating || 4.2}</Text>
							</View>
						</TouchableOpacity>
					);
				}}
			/>

			<View style={styles.promoSection}>
				<TouchableOpacity activeOpacity={0.9} style={styles.promoMainCard}>
					<Image source={PROMO_BANNERS.main} style={styles.promoMainImage} resizeMode="cover" />
					<View style={styles.promoOverlay}>
						<Text style={styles.promoSmallText}>Upto</Text>
						<Text style={styles.promoMainTitle}>50% Discount</Text>
						<Text style={styles.promoSubText}>on sneakers</Text>
					</View>
				</TouchableOpacity>

				<View style={styles.promoBottomRow}>
					<TouchableOpacity activeOpacity={0.9} style={styles.promoSmallCard}>
						<Image source={PROMO_BANNERS.smallLeft} style={styles.promoSmallImage} resizeMode="cover" />
						<View style={styles.promoOverlay}>
							<Text style={styles.promoSmallText}>Upto</Text>
							<Text style={styles.promoSmallTitle}>22% Off</Text>
							<Text style={styles.promoSubText}>on fossil watches</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.9} style={styles.promoSmallCard}>
						<Image source={PROMO_BANNERS.smallRight} style={styles.promoSmallImage} resizeMode="cover" />
						<View style={styles.promoOverlay}>
							<Text style={styles.promoSmallText}>Upto</Text>
							<Text style={styles.promoSmallTitle}>22% Off</Text>
							<Text style={styles.promoSubText}>on fossil watches</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default ProductCardDisplay;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1, 
		marginTop: 14,
	},
	tabsContainer: {
		paddingHorizontal: 12,
		paddingBottom: 12,
		alignItems: "center",
	},
	tabItem: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 16,
	},
	tabIcon: {
		marginRight: 4,
	},
	tabText: {
		fontSize: 14,
		color: "#4b5563",
		fontWeight: "500",
	},
	tabTextActive: {
		color: "#4c66ff",
		fontWeight: "700",
	},
	tabNewBadge: {
		backgroundColor: "#ff2b6a",
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 4,
		marginRight: 6,
	},
	tabNewBadgeText: {
		color: "#fff",
		fontSize: 9,
		fontWeight: "800",
	},
	flatListContent: {
		paddingHorizontal: 12, // Moved padding here instead
	},
	gridRow: {
		justifyContent: "space-between",
		marginBottom: 14,
	},
	productCard: {
		width: "48%", // Changed from 49% to 48% for better spacing
		backgroundColor: "#fff",
		borderRadius: 12,
		paddingBottom: 8,
		// Added shadow for better card appearance
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.05,
		shadowRadius: 2,
		elevation: 2,
	},
	productImageWrap: {
		width: "100%",
		aspectRatio: 1, // Changed from fixed height to aspect ratio for responsiveness
		borderRadius: 16,
		backgroundColor: "#ececef",
		overflow: "hidden",
		marginBottom: 10,
	},
	productImage: {
		width: "100%",
		height: "100%",
	},
	badgesRow: {
		position: "absolute",
		top: 8,
		left: 8,
		flexDirection: "row",
		gap: 4, // Added gap for better spacing
	},
	newBadge: {
		backgroundColor: "#4c66ff",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 8,
	},
	discountBadge: {
		backgroundColor: "#ff8a00",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 8,
	},
	badgeText: {
		color: "#fff",
		fontSize: 10, // Increased from 8
		fontWeight: "700",
	},
	productTitle: {
		fontSize: 13, // Increased from 11
		lineHeight: 18,
		color: "#1f2333",
		fontWeight: "500",
		marginHorizontal: 4,
	},
	productPrice: {
		marginTop: 6,
		marginHorizontal: 4,
		fontSize: 14, // Increased from 12
		color: "#4064ff",
		fontWeight: "700",
	},
	productOldPrice: {
		marginTop: 2,
		marginHorizontal: 4,
		fontSize: 11, // Increased from 9
		color: "#9ca3af",
		textDecorationLine: "line-through",
	},
	ratingRow: {
		marginTop: 4,
		marginHorizontal: 4,
		flexDirection: "row",
		alignItems: "center",
	},
	star: {
		fontSize: 12, // Increased from 10
		color: "#f7a400",
		marginRight: 4,
	},
	ratingText: {
		fontSize: 12, // Increased from 11
		color: "#6b7280",
	},
	promoSection: {
		paddingHorizontal: 12,
		paddingTop: 6,
		paddingBottom: 12,
	},
	promoMainCard: {
		height: 150,
		borderRadius: 24,
		overflow: "hidden",
		marginBottom: 10,
	},
	promoMainImage: {
		width: "100%",
		height: "100%",
	},
	promoBottomRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	promoSmallCard: {
		width: "48.5%",
		height: 108,
		borderRadius: 18,
		overflow: "hidden",
	},
	promoSmallImage: {
		width: "100%",
		height: "100%",
	},
	promoOverlay: {
		position: "absolute",
		top: 14,
		left: 12,
		right: 12,
	},
	promoSmallText: {
		fontSize: 10,
		fontWeight: "600",
		color: "#fff",
		marginBottom: 2,
	},
	promoMainTitle: {
		fontSize: 36,
		lineHeight: 40,
		fontWeight: "800",
		color: "#fff",
	},
	promoSmallTitle: {
		fontSize: 18,
		lineHeight: 22,
		fontWeight: "800",
		color: "#fff",
	},
	promoSubText: {
		fontSize: 12,
		fontWeight: "500",
		color: "#fff",
		marginTop: 2,
	},
});