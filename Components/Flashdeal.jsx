import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { allProducts } from "./Products/ProductItem";

const resolveImageSource = (source) => {
	if (!source) return null;
	if (typeof source === "string") return { uri: source };
	if (source?.uri) return source;
	return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString("en-IN")}`;

const saleBanner = {
	uri: "https://static.vecteezy.com/system/resources/thumbnails/074/150/475/small/yellow-background-with-black-and-white-limited-offer-text-and-stopwatch-icon-vector.jpg",
};

const Flashdeal = ({ products = allProducts, onProductPress, onViewAll, limit = 4 }) => {
	const flashProducts = (products || []).slice(0, limit);

	return (
		<View style={styles.wrapper}>
			<View style={styles.headerRow}>
				<Text style={styles.headerTitle}>Flash Deals</Text>
				<TouchableOpacity activeOpacity={0.85} onPress={onViewAll}>
					<Text style={styles.viewAllText}>View All</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={flashProducts}
				keyExtractor={(item) => item.id?.toString()}
				numColumns={2}
				scrollEnabled={false}
				showsVerticalScrollIndicator={false}
				columnWrapperStyle={styles.gridRow}
				contentContainerStyle={styles.listContent}
				ListFooterComponent={<Image source={saleBanner} style={styles.saleBanner} resizeMode="cover" />}
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
		</View>
	);
};

export default Flashdeal;

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 14,
	},
	headerRow: {
		paddingHorizontal: 12,
		marginBottom: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerTitle: {
		fontSize: 18,
		color: "#1f2333",
		fontWeight: "700",
	},
	viewAllText: {
		color: "#f0ad00",
		fontSize: 14,
		fontWeight: "600",
	},
	listContent: {
		paddingHorizontal: 12,
	},
	gridRow: {
		justifyContent: "space-between",
		marginBottom: 12,
	},
	productCard: {
		width: "48.5%",
	},
	productImageWrap: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 20,
		backgroundColor: "#ececef",
		overflow: "hidden",
		marginBottom: 8,
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
	},
	newBadge: {
		backgroundColor: "#4c66ff",
		paddingHorizontal: 7,
		paddingVertical: 3,
		borderRadius: 8,
		marginRight: 4,
	},
	discountBadge: {
		backgroundColor: "#ff8a00",
		paddingHorizontal: 7,
		paddingVertical: 3,
		borderRadius: 8,
	},
	badgeText: {
		color: "#fff",
		fontSize: 9,
		fontWeight: "700",
	},
	productTitle: {
		fontSize: 15,
		lineHeight: 19,
		color: "#1f2333",
		fontWeight: "500",
	},
	productPrice: {
		marginTop: 4,
		fontSize: 14,
		color: "#4064ff",
		fontWeight: "700",
	},
	productOldPrice: {
		marginTop: 1,
		fontSize: 10,
		color: "#9ca3af",
		textDecorationLine: "line-through",
	},
	ratingRow: {
		marginTop: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	star: {
		fontSize: 12,
		color: "#f7a400",
		marginRight: 3,
	},
	ratingText: {
		fontSize: 12,
		color: "#6b7280",
	},
	saleBanner: {
		marginTop: 8,
		marginHorizontal: 12,
		height: 120,
		borderRadius: 16,
	},
});
