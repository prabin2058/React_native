import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { allProducts, getProductDetailData } from './ProductItem';

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

const resolveImageSource = (source) => {
	if (!source) return null;
	if (typeof source === 'string') return { uri: source };
	if (source?.uri) return source;
	return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString('en-IN')}`;

const ProductDetail = ({ product, onBack, onWishlist, onShare, onSelectProduct, onAddToCart, onBuyNow, onOpenCart }) => {
	const merged = useMemo(() => ({ ...fallbackDetail, ...(product || {}) }), [product]);
	const [selectedStorage, setSelectedStorage] = useState(merged.selectedStorage || merged.storage?.[0] || '');
	const [selectedColor, setSelectedColor] = useState(merged.selectedColor || merged.color || '');
	const [searchText, setSearchText] = useState('');
	const [showHighlights, setShowHighlights] = useState(true);
	const [showDetails, setShowDetails] = useState(true);
	const [selectedImage, setSelectedImage] = useState(0);
	const { width } = useWindowDimensions();

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

	const selectedGalleryImage = resolveImageSource(gallery[selectedImage]);

	useEffect(() => {
		if (selectedImage >= gallery.length) {
			setSelectedImage(0);
		}
	}, [gallery.length, selectedImage]);

	const maxCount = Math.max(...(merged.ratingsBreakdown || []).map((r) => r.count), 1);

	const photoGallery = (merged.images || []).map((img) => resolveImageSource(img)).filter(Boolean);

	const videoGallery = (merged.videos || []).map((videoUrl, index) => ({
		url: videoUrl,
		thumbnail: resolveImageSource(merged.images?.[index % Math.max(merged.images?.length || 0, 1)] || merged.image),
	}));

	const customerReviews =
		Array.isArray(merged.customerReviews) && merged.customerReviews.length
			? merged.customerReviews
			: [
				{
					id: 'r1',
					name: 'H',
					rating: 4.0,
					date: 'Aug 01, 2025',
					title: 'S***R',
					comment:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					likes: 500,
					meta: 'Color Family: White, Size:38',
					images: photoGallery.slice(0, 3),
				},
				{
					id: 'r2',
					name: 'H',
					rating: 4.0,
					date: 'Aug 01, 2025',
					title: 'S***R',
					comment:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					likes: 500,
					meta: 'Color Family: White, Size:38',
					images: photoGallery.slice(0, 3),
				},
			];

	const suggestedProducts = useMemo(() => {
		const base = allProducts.filter((item) => item.id !== merged.id);
		const sameCategory = base.filter((item) => item.category === merged.category);
		const fallback = base.filter((item) => item.category !== merged.category);
		return [...sameCategory, ...fallback];
	}, [merged.category, merged.id]);

	const youMayAlsoLike = suggestedProducts.slice(0, 8);
	const relatedProducts = suggestedProducts.slice(2, 10);

	const handleHeroSwipe = (event) => {
		if (!gallery.length || !width) return;
		const xOffset = event.nativeEvent.contentOffset.x;
		const nextIndex = Math.min(gallery.length - 1, Math.max(0, Math.round(xOffset / width)));
		setSelectedImage(nextIndex);
	};

	const handleSelectSuggested = (item) => {
		onSelectProduct?.(getProductDetailData(item));
	};

	const renderSuggestedCard = (item) => {
		const thumb = resolveImageSource(item?.images?.[0] || item?.image);
		return (
			<TouchableOpacity
				key={item.id}
				style={styles.suggestedCard}
				onPress={() => handleSelectSuggested(item)}
				activeOpacity={0.85}
			>
				<View style={styles.suggestedImageWrap}>
					{thumb ? <Image source={thumb} style={styles.suggestedImage} resizeMode="cover" /> : null}
					<View style={styles.suggestedBadgeRow}>
						{item?.isNew ? (
							<View style={styles.newBadgeSmall}>
								<Text style={styles.badgeTextSmall}>New</Text>
							</View>
						) : null}
						{!!item?.discount && (
							<View style={styles.discountBadgeSmall}>
								<Text style={styles.badgeTextSmall}>-{item.discount}%</Text>
							</View>
						)}
					</View>
				</View>

				<Text numberOfLines={2} style={styles.suggestedTitle}>{item?.title}</Text>
				<Text style={styles.suggestedPrice}>{formatCurrency(item?.price)}</Text>
				{!!item?.originalPrice && (
					<Text style={styles.suggestedOldPrice}>NPR {item.originalPrice.toLocaleString('en-IN')}</Text>
				)}
				<View style={styles.suggestedRatingRow}>
					<Text style={styles.suggestedStar}>★</Text>
					<Text style={styles.suggestedRatingText}>{item?.rating || 4.0}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.headerContainer}>
				<TouchableOpacity style={styles.headerIconBtn} onPress={onBack} activeOpacity={0.7}>
					<Ionicons name="chevron-back" size={20} color="#6b7280" />
				</TouchableOpacity>

				<View style={styles.searchBarContainer}>
					<Ionicons name="search-outline" size={15} color="#6b7280" style={styles.searchIcon} />
					<TextInput
						style={styles.searchInput}
						placeholder="Search in Chinabazar"
						placeholderTextColor="#6b7280"
						value={searchText}
						onChangeText={setSearchText}
					/>
				</View>

				<TouchableOpacity style={styles.headerCartBtn} activeOpacity={0.7} onPress={onOpenCart}>
					<Ionicons name="cart-outline" size={18} color="#646cff" />
				</TouchableOpacity>
			</View>

			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollBody}
			>
				<View style={styles.heroWrap}>
					{gallery.length > 0 ? (
						<ScrollView
							horizontal
							pagingEnabled
							showsHorizontalScrollIndicator={false}
							onMomentumScrollEnd={handleHeroSwipe}
							nestedScrollEnabled
						>
							{gallery.map((img, i) => {
								const source = resolveImageSource(img);
								return source ? (
									<Image
										key={`${i}`}
										source={source}
										style={[styles.heroImage, { width }]}
										resizeMode="cover"
									/>
								) : (
									<View key={`${i}`} style={[styles.heroImage, { width }]} />
								);
							})}
						</ScrollView>
					) : selectedGalleryImage ? (
						<Image source={selectedGalleryImage} style={styles.heroImage} resizeMode="cover" />
					) : (
						<View style={styles.heroImage} />
					)}

					{!!gallery.length && (
						<View style={styles.counterWrap}>
							<Text style={styles.counterText}>{selectedImage + 1}/{gallery.length}</Text>
						</View>
					)}

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
						<View style={styles.ratingActions}>
							<TouchableOpacity style={styles.inlineIconBtn} onPress={onWishlist} activeOpacity={0.8}>
								<Ionicons name="heart-outline" size={20} color="#9ca3af" />
							</TouchableOpacity>
							<TouchableOpacity style={styles.inlineIconBtn} onPress={onShare} activeOpacity={0.8}>
								<Ionicons name="share-social-outline" size={19} color="#9ca3af" />
							</TouchableOpacity>
						</View>
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

						<View style={styles.reviewMediaWrap}>
							<Text style={styles.mediaLabel}>All Photos</Text>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={styles.mediaRow}
							>
								{photoGallery.map((img, index) => (
									<Image key={`photo-${index}`} source={img} style={styles.mediaThumb} resizeMode="cover" />
								))}
							</ScrollView>

							<Text style={[styles.mediaLabel, styles.mt8]}>All Videos</Text>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={styles.mediaRow}
							>
								{videoGallery.map((video, index) => (
									<View key={`video-${index}`} style={styles.videoThumbWrap}>
										{video.thumbnail ? (
											<Image source={video.thumbnail} style={styles.mediaThumb} resizeMode="cover" />
										) : (
											<View style={styles.mediaThumb} />
										)}
										<View style={styles.playBadge}>
											<Text style={styles.playIcon}>▶</Text>
										</View>
									</View>
								))}
							</ScrollView>
						</View>

						{customerReviews.map((review, reviewIndex) => (
							<View
								key={review.id || `${reviewIndex}`}
								style={[styles.customerReviewCard, reviewIndex > 0 && styles.customerReviewCardGap]}
							>
								<View style={styles.customerHeaderRow}>
									<View style={styles.avatarCircle}>
										<Text style={styles.avatarText}>{review.name || 'U'}</Text>
									</View>
									<View style={styles.customerMetaCol}>
										<View style={styles.customerTopRow}>
											<Text style={styles.customerRating}>{Number(review.rating || 4).toFixed(1)}</Text>
											<Text style={styles.customerStars}>★★★★★</Text>
											<Text style={styles.customerDate}>• {review.date || ''}</Text>
										</View>
										<Text style={styles.customerTitle}>{review.title || ''}</Text>
									</View>
								</View>

								<Text style={styles.customerComment}>{review.comment}</Text>

								<View style={styles.customerImagesRow}>
									{(review.images || []).slice(0, 3).map((img, idx) => (
										<Image
											key={`review-img-${reviewIndex}-${idx}`}
											source={img}
											style={styles.customerImageThumb}
											resizeMode="cover"
										/>
									))}
								</View>

								<Text style={styles.reviewMetaText}>{review.meta || ''}</Text>
								<Text style={styles.likesText}>👍 {review.likes || 0}</Text>
							</View>
						))}

						<View style={styles.recoSectionWrap}>
							<Text style={styles.recoTitle}>You May Also Like</Text>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={styles.recoRow}
							>
								{youMayAlsoLike.map(renderSuggestedCard)}
							</ScrollView>

							<Text style={[styles.recoTitle, styles.mt14]}>Related Products</Text>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={styles.recoRow}
							>
								{relatedProducts.map(renderSuggestedCard)}
							</ScrollView>
						</View>
					</View>
				</View>
			</ScrollView>

			<View style={styles.bottomCtaWrap}>
				<TouchableOpacity style={styles.addCartBtn} activeOpacity={0.9} onPress={() => onAddToCart?.(merged)}>
					<Text style={styles.addCartText}>Add to Cart</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buyNowBtn} activeOpacity={0.9} onPress={() => onBuyNow?.(merged)}>
					<Text style={styles.buyNowText}>Buy Now</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default ProductDetail;

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: '#f6f7fb' },
	container: { flex: 1 },
	scrollBody: { paddingBottom: 110 },
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#f6f7fb',
		paddingHorizontal: 10,
		paddingVertical: 8,
	},
	headerIconBtn: {
		width: 32,
		height: 32,
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f6f7fb',
	},
	searchBarContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: 36,
		borderRadius: 18,
		borderWidth: 1.5,
		borderColor: '#646cff',
		backgroundColor: '#f8f9ff',
		paddingHorizontal: 10,
		marginHorizontal: 8,
	},
	searchIcon: { marginRight: 6 },
	searchInput: {
		flex: 1,
		fontSize: 12,
		color: '#374151',
		paddingVertical: 0,
	},
	headerCartBtn: {
		width: 28,
		height: 28,
		justifyContent: 'center',
		alignItems: 'center',
	},
	heroWrap: { backgroundColor: '#fff' },
	heroImage: { width: '100%', height: 300, backgroundColor: '#ececec' },
	counterWrap: {
		position: 'absolute',
		top: 12,
		right: 12,
		paddingHorizontal: 9,
		paddingVertical: 4,
		borderRadius: 10,
		backgroundColor: 'rgba(17,24,39,0.45)',
	},
	counterText: { color: '#fff', fontSize: 11, fontWeight: '700' },
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
	ratingActions: { marginLeft: 'auto', flexDirection: 'row', alignItems: 'center' },
	inlineIconBtn: { marginLeft: 10 },
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
	reviewMediaWrap: {
		paddingHorizontal: 10,
		paddingBottom: 10,
	},
	mediaLabel: { fontSize: 13, color: '#111827', fontWeight: '600', marginBottom: 8 },
	mediaRow: { paddingRight: 6 },
	mediaThumb: {
		width: 74,
		height: 58,
		borderRadius: 10,
		marginRight: 8,
		backgroundColor: '#e5e7eb',
	},
	videoThumbWrap: {
		width: 74,
		height: 58,
		borderRadius: 10,
		marginRight: 8,
		overflow: 'hidden',
	},
	playBadge: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{ translateX: -12 }, { translateY: -12 }],
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: 'rgba(17,24,39,0.45)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	playIcon: { color: '#fff', fontSize: 11, marginLeft: 1 },
	mt8: { marginTop: 8 },
	customerReviewCard: {
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#e5e7eb',
		paddingHorizontal: 10,
		paddingTop: 12,
		paddingBottom: 10,
	},
	customerReviewCardGap: {
		marginTop: 4,
	},
	customerHeaderRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatarCircle: {
		width: 34,
		height: 34,
		borderRadius: 17,
		backgroundColor: '#d1d5db',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8,
	},
	avatarText: { fontSize: 14, color: '#fff', fontWeight: '700' },
	customerMetaCol: { flex: 1 },
	customerTopRow: { flexDirection: 'row', alignItems: 'center' },
	customerRating: { fontSize: 14, color: '#111827', fontWeight: '700', marginRight: 4 },
	customerStars: { fontSize: 12, color: '#f3b400', marginRight: 4 },
	customerDate: { fontSize: 11, color: '#9ca3af' },
	customerTitle: { fontSize: 11, color: '#6b7280', marginTop: 2 },
	customerComment: {
		fontSize: 13,
		lineHeight: 20,
		color: '#4b5563',
		marginTop: 8,
	},
	customerImagesRow: { flexDirection: 'row', marginTop: 10 },
	customerImageThumb: {
		width: 72,
		height: 56,
		borderRadius: 10,
		marginRight: 8,
		backgroundColor: '#e5e7eb',
	},
	reviewMetaText: { marginTop: 8, fontSize: 11, color: '#9ca3af' },
	likesText: { marginTop: 8, fontSize: 12, color: '#6b7280' },
	recoSectionWrap: {
		marginTop: 14,
	},
	recoTitle: {
		fontSize: 28,
		fontWeight: '700',
		color: '#1f2937',
		marginBottom: 10,
	},
	mt14: { marginTop: 14 },
	recoRow: { paddingRight: 6 },
	suggestedCard: {
		width: 118,
		marginRight: 10,
	},
	suggestedImageWrap: {
		width: 118,
		height: 88,
		borderRadius: 14,
		overflow: 'hidden',
		backgroundColor: '#ececef',
		marginBottom: 7,
	},
	suggestedImage: {
		width: '100%',
		height: '100%',
	},
	suggestedBadgeRow: {
		position: 'absolute',
		top: 6,
		left: 6,
		flexDirection: 'row',
	},
	newBadgeSmall: {
		backgroundColor: '#4c66ff',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 6,
		marginRight: 4,
	},
	discountBadgeSmall: {
		backgroundColor: '#ff8a00',
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 6,
	},
	badgeTextSmall: {
		color: '#fff',
		fontSize: 8,
		fontWeight: '700',
	},
	suggestedTitle: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: '600',
		color: '#1f2333',
	},
	suggestedPrice: {
		marginTop: 4,
		fontSize: 11,
		color: '#4064ff',
		fontWeight: '700',
	},
	suggestedOldPrice: {
		marginTop: 2,
		fontSize: 9,
		color: '#9ca3af',
		textDecorationLine: 'line-through',
	},
	suggestedRatingRow: {
		marginTop: 3,
		flexDirection: 'row',
		alignItems: 'center',
	},
	suggestedStar: {
		color: '#f7a400',
		fontSize: 12,
		marginRight: 2,
	},
	suggestedRatingText: {
		fontSize: 11,
		color: '#666',
	},
	bottomCtaWrap: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 10,
		backgroundColor: '#fff',
		paddingHorizontal: 12,
		paddingTop: 10,
		paddingBottom: 12,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#e5e7eb',
		flexDirection: 'row',
		alignItems: 'center',
	},
	addCartBtn: {
		flex: 1,
		height: 46,
		borderRadius: 23,
		borderWidth: 1,
		borderColor: '#f3b400',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8,
	},
	addCartText: {
		color: '#f3b400',
		fontSize: 18,
		fontWeight: '600',
	},
	buyNowBtn: {
		flex: 1,
		height: 46,
		borderRadius: 23,
		backgroundColor: '#5964e8',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buyNowText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
	},
});
