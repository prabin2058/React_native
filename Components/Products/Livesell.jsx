import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { allProducts } from "./ProductItem";

const resolveImageSource = (source) => {
	if (!source) return null;
	if (typeof source === "string") return { uri: source };
	if (source?.uri) return source;
	return source;
};

const LiveSell = ({ products = allProducts, onProductPress, onViewAll, limit = 4 }) => {
	const liveProducts = (products || []).slice(0, limit);

	return (
		<View style={styles.wrapper}>
			<View style={styles.headerRow}>
				<Text style={styles.headerTitle}>Live Sell</Text>
				<TouchableOpacity activeOpacity={0.85} onPress={onViewAll}>
					<Text style={styles.viewAllText}>View All</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				horizontal
				data={liveProducts}
				keyExtractor={(item) => item.id?.toString()}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.listContent}
				renderItem={({ item }) => {
					const previewImage = resolveImageSource(item?.images?.[0] || item?.image);

					return (
						<TouchableOpacity
							activeOpacity={0.9}
							style={styles.card}
							onPress={() => onProductPress?.(item)}
						>
							<View style={styles.imageWrap}>
								{previewImage ? <Image source={previewImage} style={styles.image} resizeMode="cover" /> : null}

								<View style={styles.topBadgesRow}>
									<View style={styles.liveBadge}>
										<Text style={styles.liveDot}>◉</Text>
										<Text style={styles.liveText}>Live</Text>
									</View>
									<View style={styles.viewerBadge}>
										<Ionicons name="eye-outline" size={12} color="#fff" />
										<Text style={styles.viewerText}>4.8K</Text>
									</View>
								</View>
							</View>

							<View style={styles.footerRow}>
								<View style={styles.avatarWrap}>
									{previewImage ? (
										<Image source={previewImage} style={styles.avatarImage} resizeMode="cover" />
									) : (
										<Text style={styles.avatarFallback}>L</Text>
									)}
								</View>
								<Text numberOfLines={1} style={styles.streamTitle}>Fashion Try-On Live</Text>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default LiveSell;

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
		paddingLeft: 12,
		paddingRight: 4,
	},
	card: {
		width: 165,
		marginRight: 10,
	},
	imageWrap: {
		width: "100%",
		height: 175,
		borderRadius: 26,
		overflow: "hidden",
		backgroundColor: "#d8deea",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	topBadgesRow: {
		position: "absolute",
		top: 10,
		left: 10,
		right: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	liveBadge: {
		backgroundColor: "#ff3b3b",
		borderRadius: 10,
		paddingHorizontal: 8,
		paddingVertical: 4,
		flexDirection: "row",
		alignItems: "center",
	},
	liveDot: {
		color: "#fff",
		fontSize: 10,
		marginRight: 4,
	},
	liveText: {
		color: "#fff",
		fontSize: 11,
		fontWeight: "700",
	},
	viewerBadge: {
		marginLeft: 6,
		backgroundColor: "rgba(0,0,0,0.55)",
		borderRadius: 10,
		paddingHorizontal: 8,
		paddingVertical: 4,
		flexDirection: "row",
		alignItems: "center",
	},
	viewerText: {
		color: "#fff",
		fontSize: 11,
		marginLeft: 4,
		fontWeight: "600",
	},
	footerRow: {
		marginTop: 8,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 6,
	},
	avatarWrap: {
		width: 24,
		height: 24,
		borderRadius: 12,
		overflow: "hidden",
		backgroundColor: "#d1d5db",
		marginRight: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	avatarImage: {
		width: "100%",
		height: "100%",
	},
	avatarFallback: {
		fontSize: 12,
		color: "#4b5563",
		fontWeight: "700",
	},
	streamTitle: {
		flex: 1,
		fontSize: 15,
		lineHeight: 18,
		color: "#1f2333",
		fontWeight: "500",
	},
});
