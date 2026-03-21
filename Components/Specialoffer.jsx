import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { allProducts } from "./Products/ProductItem";

const resolveImageSource = (source) => {
	if (!source) return null;
	if (typeof source === "string") return { uri: source };
	if (source?.uri) return source;
	return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString("en-IN")}`;

const Specialoffer = ({ products = allProducts, onProductPress, onViewAll, limit = 6 }) => {
	const sourceProducts = products || [];
	const specialProducts = sourceProducts.slice(0, limit);

	return (
		<View style={styles.wrapper}>
			<View style={styles.headerRow}>
				<Text style={styles.headerTitle}>Special Offers</Text>
				<TouchableOpacity activeOpacity={0.85} onPress={onViewAll}>
					<Text style={styles.viewAllText}>View All  ›</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.productGrid}>
				{specialProducts.map((item) => {
					const previewImage = resolveImageSource(item?.images?.[0] || item?.image);

					return (
						<TouchableOpacity
							key={item.id?.toString()}
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
				})}
			</View>
		</View>
	);
};

export default Specialoffer;

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 16,
	},
	headerRow: {
		paddingHorizontal: 16,
		marginBottom: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerTitle: {
		fontSize: 22,
		color: "#1f2333",
		fontWeight: "700",
	},
	viewAllText: {
		color: "#f3b400",
		fontSize: 12,
		fontWeight: "600",
	},
	productGrid: {
		paddingHorizontal: 16,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	productCard: {
		flexBasis: "48.5%",
		maxWidth: "48.5%",
		marginBottom: 14,
	},
	productImageWrap: {
		aspectRatio: 1,
		borderRadius: 18,
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
		backgroundColor: "#5d68ff",
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 8,
		marginRight: 4,
	},
	discountBadge: {
		backgroundColor: "#ff8a00",
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 8,
	},
	badgeText: {
		color: "#fff",
		fontSize: 8,
		fontWeight: "700",
	},
	productTitle: {
		fontSize: 14,
		lineHeight: 18,
		color: "#1f2333",
		fontWeight: "500",
	},
	productPrice: {
		marginTop: 4,
		fontSize: 24,
		color: "#4064ff",
		fontWeight: "700",
	},
	productOldPrice: {
		marginTop: 2,
		fontSize: 10,
		color: "#9ca3af",
		textDecorationLine: "line-through",
	},
	ratingRow: {
		marginTop: 3,
		flexDirection: "row",
		alignItems: "center",
	},
	star: {
		fontSize: 12,
		color: "#f7b500",
		marginRight: 3,
	},
	ratingText: {
		fontSize: 12,
		color: "#6b7280",
	},
});
