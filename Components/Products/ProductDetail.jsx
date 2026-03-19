import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const fallbackDetail = {
	storage: [],
	colors: [],
	highlights: [],
	ratingsBreakdown: [],
	reviewCount: 0,
	promoText: '',
	delivery: '',
	shippingFee: '',
	deliveryEta: '',
	description: '',
	fastCharging: 'N/A',
	disclaimer: '',
};

const ProductDetail = ({ product, onBack, onWishlist, onShare }) => {
	const merged = useMemo(() => ({ ...fallbackDetail, ...(product || {}) }), [product]);
	const [selectedStorage, setSelectedStorage] = useState(merged.selectedStorage || merged.storage?.[0] || '');
	const [selectedColor, setSelectedColor] = useState(merged.selectedColor || merged.color || '');
	const [showHighlights, setShowHighlights] = useState(true);
	const [showDetails, setShowDetails] = useState(true);
	const [selectedImage, setSelectedImage] = useState(0);

	const specificationEntries = Object.entries(merged.specifications || {}).filter(
		([, value]) => value !== undefined && value !== null && `${value}`.trim() !== '',
	);

	const toLabel = (key) =>
		key
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase());

	const gallery = merged.images?.length
		? merged.images
		: [merged.image, merged.image, merged.image].filter(Boolean);

	const maxCount = Math.max(...(merged.ratingsBreakdown || []).map((r) => r.count), 1);

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<View style={styles.heroWrap}>
					{gallery[selectedImage] ? (
						<Image source={gallery[selectedImage]} style={styles.heroImage} resizeMode="cover" />
					) : (
						<View style={styles.heroImage} />
					)}

					<View style={styles.heroTopRow}>
						<TouchableOpacity style={styles.circleBtn} onPress={onBack}>
							<Text style={styles.circleBtnText}>‹</Text>
						</TouchableOpacity>
						<View style={styles.heroRightRow}>
							<View style={styles.discountBubble}>
								<Text style={styles.discountBubbleText}>{merged.discount || 0}%</Text>
							</View>
							<TouchableOpacity style={styles.circleBtn} onPress={onWishlist}>
								<Text style={styles.circleBtnText}>♡</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.dotsWrap}>
						{gallery.map((_, i) => (
							<TouchableOpacity
								key={`${i}`}
								style={[styles.dot, i === selectedImage && styles.dotActive]}
								onPress={() => setSelectedImage(i)}
							/>
						))}
					</View>
				</View>

				<View style={styles.content}>
					<Text style={styles.title}>{merged.title}</Text>

					<View style={styles.ratingRow}>
						<Text style={styles.ratingNumber}>{merged.rating || 4.0}</Text>
						<Text style={styles.ratingStars}>★ ★ ★ ★</Text>
						<Text style={styles.ratingCount}>({merged.reviewCount})</Text>
						<TouchableOpacity style={styles.shareWrap} onPress={onShare}>
							<Text style={styles.shareText}>↗</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.priceRow}>
						<Text style={styles.priceMain}>Rs. {(merged.price || 0).toLocaleString('en-IN')}</Text>
						{!!merged.originalPrice && (
							<Text style={styles.priceOld}>{merged.originalPrice.toLocaleString('en-IN')}</Text>
						)}
						{!!merged.discount && <Text style={styles.priceOff}>-{merged.discount}%</Text>}
					</View>

					<View style={styles.promoRow}>
						<Text style={styles.promoIcon}>🏷️</Text>
						<Text style={styles.promoText}>{merged.promoText}</Text>
						<Text style={styles.rowArrow}>›</Text>
					</View>

					<View style={styles.optionSection}>
						<Text style={styles.optionLabel}>Color: {selectedColor}</Text>
						<View style={styles.colorRow}>
							{(merged.colors || []).map((c) => {
								const active = c.name === selectedColor;
								return (
									<TouchableOpacity
										key={c.name}
										style={[styles.colorOuter, active && styles.colorOuterActive]}
										onPress={() => setSelectedColor(c.name)}
									>
										<View style={[styles.colorInner, { backgroundColor: c.value }]} />
									</TouchableOpacity>
								);
							})}
						</View>
					</View>

					<View style={styles.optionSection}>
						<Text style={styles.optionLabel}>Storage</Text>
						<View style={styles.storageRow}>
							{(merged.storage || []).map((value) => {
								const active = value === selectedStorage;
								return (
									<TouchableOpacity
										key={value}
										style={[styles.storageChip, active && styles.storageChipActive]}
										onPress={() => setSelectedStorage(value)}
									>
										<Text style={[styles.storageText, active && styles.storageTextActive]}>{value}</Text>
									</TouchableOpacity>
								);
							})}
						</View>
					</View>

					<View style={styles.infoBox}>
						<View style={styles.infoRow}>
							<Text style={styles.infoLeft}>📍 Delivery</Text>
							<Text style={styles.infoRight}>{merged.delivery}</Text>
							<Text style={styles.infoArrow}>›</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoLeft}>🚚 Shipping Fee</Text>
							<View style={styles.shippingRight}>
								<Text style={styles.shippingEta}>{merged.deliveryEta}</Text>
								<Text style={styles.shippingPrice}>{merged.shippingFee}</Text>
							</View>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoLeft}>↩ Returns & Refund Policy</Text>
							<Text style={styles.infoArrow}>›</Text>
						</View>
					</View>

					<View style={styles.sectionCard}>
						<TouchableOpacity style={styles.sectionHeader} onPress={() => setShowHighlights((p) => !p)}>
							<Text style={styles.sectionTitle}>Product Highlights</Text>
							<Text style={styles.sectionArrow}>{showHighlights ? '⌃' : '⌄'}</Text>
						</TouchableOpacity>
						{showHighlights && (
							<View style={styles.sectionBody}>
								{(merged.highlights || []).map((h, idx) => (
									<Text key={`${idx}`} style={styles.bullet}>• {h}</Text>
								))}
							</View>
						)}
					</View>

					<View style={styles.sectionCard}>
						<TouchableOpacity style={styles.sectionHeader} onPress={() => setShowDetails((p) => !p)}>
							<Text style={styles.sectionTitle}>Product Details</Text>
							<Text style={styles.sectionArrow}>{showDetails ? '⌃' : '⌄'}</Text>
						</TouchableOpacity>
						{showDetails && (
							<View style={styles.sectionBody}>
								<Text style={styles.subHeading}>Description</Text>
								<Text style={styles.paragraph}>{merged.description}</Text>

								{specificationEntries.length > 0 && (
									<>
										<Text style={[styles.subHeading, styles.mt12]}>Specifications</Text>
										{specificationEntries.map(([key, value]) => (
											<View key={key} style={styles.specRow}>
												<Text style={styles.specKey}>{toLabel(key)}</Text>
												<Text style={styles.specVal}>{String(value)}</Text>
											</View>
										))}
									</>
								)}

								<Text style={[styles.subHeading, styles.mt12]}>Disclaimer</Text>
								<Text style={styles.paragraph}>{merged.disclaimer}</Text>
							</View>
						)}
					</View>

					<View style={styles.sectionCard}>
						<View style={styles.sectionHeader}>
							<Text style={styles.sectionTitle}>Reviews</Text>
							<Text style={styles.viewAll}>View All ›</Text>
						</View>

						<View style={styles.reviewBlock}>
							<View style={styles.scoreArea}>
								<Text style={styles.scoreNumber}>{(merged.rating || 4.0).toFixed(1)}</Text>
								<Text style={styles.scoreStars}>★ ★ ★ ★ ☆</Text>
								<Text style={styles.scoreCount}>({merged.reviewCount})</Text>
							</View>

							<View style={styles.breakdownArea}>
								{(merged.ratingsBreakdown || []).map((r) => (
									<View key={r.star} style={styles.breakdownRow}>
										<Text style={styles.breakdownLabel}>{r.star}</Text>
										<View style={styles.barTrack}>
											<View style={[styles.barFill, { width: `${(r.count / maxCount) * 100}%` }]} />
										</View>
										<Text style={styles.breakdownCount}>{r.count}</Text>
									</View>
								))}
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProductDetail;

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: '#f6f7fb' },
	container: { flex: 1 },
	heroWrap: { backgroundColor: '#fff' },
	heroImage: { width: '100%', height: 300, backgroundColor: '#ececec' },
	heroTopRow: {
		position: 'absolute',
		top: 12,
		left: 12,
		right: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	heroRightRow: { flexDirection: 'row', alignItems: 'center' },
	circleBtn: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'rgba(255,255,255,0.95)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circleBtnText: { fontSize: 18, color: '#374151', fontWeight: '700' },
	discountBubble: {
		backgroundColor: '#8b9099',
		borderRadius: 10,
		paddingHorizontal: 8,
		paddingVertical: 2,
		marginRight: 8,
	},
	discountBubbleText: { color: '#fff', fontSize: 11, fontWeight: '700' },
	dotsWrap: {
		position: 'absolute',
		bottom: 10,
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	dot: {
		width: 5,
		height: 5,
		borderRadius: 2.5,
		backgroundColor: '#d1d5db',
		marginHorizontal: 2,
	},
	dotActive: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#4f63ff' },
	content: { paddingHorizontal: 12, paddingTop: 10, paddingBottom: 20 },
	title: { fontSize: 28, fontWeight: '700', color: '#111827' },
	ratingRow: { marginTop: 6, flexDirection: 'row', alignItems: 'center' },
	ratingNumber: { fontSize: 14, fontWeight: '700', color: '#374151', marginRight: 5 },
	ratingStars: { fontSize: 11, color: '#f59e0b' },
	ratingCount: { fontSize: 11, color: '#6b7280', marginLeft: 5 },
	shareWrap: { marginLeft: 'auto' },
	shareText: { fontSize: 17, color: '#9ca3af' },
	priceRow: { marginTop: 8, flexDirection: 'row', alignItems: 'flex-end' },
	priceMain: { fontSize: 38, fontWeight: '800', color: '#405eff' },
	priceOld: {
		fontSize: 11,
		color: '#9ca3af',
		marginLeft: 8,
		marginBottom: 6,
		textDecorationLine: 'line-through',
	},
	priceOff: { fontSize: 11, color: '#6b7280', marginLeft: 4, marginBottom: 6 },
	promoRow: {
		marginTop: 8,
		borderWidth: 1,
		borderColor: '#f2d5aa',
		borderRadius: 8,
		backgroundColor: '#fffaf0',
		paddingHorizontal: 9,
		paddingVertical: 7,
		flexDirection: 'row',
		alignItems: 'center',
	},
	promoIcon: { fontSize: 12, marginRight: 5 },
	promoText: { flex: 1, fontSize: 11, color: '#eb8a00', fontWeight: '600' },
	rowArrow: { color: '#eb8a00', fontSize: 15, fontWeight: '700' },
	optionSection: { marginTop: 12 },
	optionLabel: { fontSize: 12, color: '#4b5563', marginBottom: 8 },
	colorRow: { flexDirection: 'row', alignItems: 'center' },
	colorOuter: {
		width: 28,
		height: 28,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#d1d5db',
		marginRight: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	colorOuterActive: { borderWidth: 2, borderColor: '#4f63ff' },
	colorInner: { width: 17, height: 17, borderRadius: 8.5 },
	storageRow: { flexDirection: 'row', flexWrap: 'wrap' },
	storageChip: {
		paddingHorizontal: 12,
		paddingVertical: 7,
		borderRadius: 16,
		backgroundColor: '#f3f4f6',
		marginRight: 8,
		marginBottom: 8,
	},
	storageChipActive: { borderWidth: 1, borderColor: '#4f63ff', backgroundColor: '#eef1ff' },
	storageText: { fontSize: 11, color: '#6b7280', fontWeight: '600' },
	storageTextActive: { color: '#4f63ff' },
	infoBox: {
		marginTop: 8,
		backgroundColor: '#fff',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#e5e7eb',
		overflow: 'hidden',
	},
	infoRow: {
		minHeight: 42,
		paddingHorizontal: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#e5e7eb',
		flexDirection: 'row',
		alignItems: 'center',
	},
	infoLeft: { flex: 1, fontSize: 12, color: '#1f2937' },
	infoRight: { fontSize: 11, color: '#6b7280', marginRight: 6 },
	infoArrow: { fontSize: 17, color: '#9ca3af' },
	shippingRight: { alignItems: 'flex-end' },
	shippingEta: { fontSize: 10, color: '#6b7280' },
	shippingPrice: { fontSize: 11, color: '#111827', fontWeight: '700', marginTop: 1 },
	sectionCard: {
		marginTop: 12,
		backgroundColor: '#fff',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#e5e7eb',
	},
	sectionHeader: {
		paddingHorizontal: 10,
		paddingVertical: 11,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sectionTitle: { fontSize: 15, fontWeight: '700', color: '#111827' },
	sectionArrow: { fontSize: 16, color: '#6b7280' },
	sectionBody: { paddingHorizontal: 10, paddingBottom: 12 },
	bullet: { fontSize: 12, lineHeight: 18, color: '#4b5563', marginBottom: 2 },
	subHeading: { fontSize: 12, fontWeight: '700', color: '#111827', marginBottom: 6 },
	mt12: { marginTop: 12 },
	paragraph: { fontSize: 12, lineHeight: 19, color: '#4b5563' },
	specRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#e5e7eb',
	},
	specKey: { fontSize: 12, color: '#6b7280' },
	specVal: { fontSize: 12, color: '#111827', fontWeight: '600' },
	viewAll: { fontSize: 11, color: '#f3b400', fontWeight: '700' },
	reviewBlock: { flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 12 },
	scoreArea: { width: 70, alignItems: 'center' },
	scoreNumber: { fontSize: 34, fontWeight: '800', color: '#111827' },
	scoreStars: { fontSize: 11, color: '#f59e0b' },
	scoreCount: { fontSize: 10, color: '#6b7280', marginTop: 2 },
	breakdownArea: { flex: 1, paddingLeft: 8, paddingTop: 7 },
	breakdownRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
	breakdownLabel: { width: 10, fontSize: 10, color: '#6b7280' },
	barTrack: {
		flex: 1,
		height: 4,
		borderRadius: 2,
		backgroundColor: '#eceff4',
		marginHorizontal: 6,
		overflow: 'hidden',
	},
	barFill: { height: '100%', backgroundColor: '#f3b400' },
	breakdownCount: { width: 32, textAlign: 'right', fontSize: 10, color: '#6b7280' },
});
