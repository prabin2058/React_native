import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const categoryProducts = {
	'Health & Skin Care': [
		{
			id: 'p1',
			title: 'Vitamin C Glow Serum, 50 ML',
			category: 'Health & Skin Care',
			price: 999,
			originalPrice: 1299,
			discount: 23,
			isNew: true,
			rating: 4.6,
			image: require('../../assets/images/Healt&skin.webp'),
			specifications: {
				brand: 'GlowLab',
				modelId: 'GLW-SERUM-50',
				color: 'Vitamin C',
				volume: '50 ML',
				ingredients: 'Vitamin C, Hyaluronic Acid, Aloe Vera',
				skinType: 'All Skin Types',
				expiryDate: '2026-12-31',
				usage: 'Apply 2-3 drops on clean face daily',
				
			},
			highlights: [
				'10% stabilized Vitamin C for daily glow boost',
				'Lightweight non-greasy formula for all skin types',
				'Helps reduce dullness and uneven skin tone',
				'Quick absorption with hydrating base',
				'Dermatologically tested and paraben-free',
			],
			description:
				'Vitamin C serum for brighter skin tone and reduced dullness. Lightweight and suitable for daily routine.',
		},
		{
			id: 'p2',
			title: 'Hydra Repair Night Cream',
			category: 'Health & Skin Care',
			price: 1299,
			originalPrice: 1699,
			discount: 24,
			isNew: true,
			rating: 4.4,
			image: require('../../assets/images/Healt&skin.webp'),
			specifications: {
				brand: 'DermaPlus',
				modelId: 'HYDRA-NIGHT-01',
				color: 'Aloe',
				volume: '50 G',
				ingredients: 'Ceramides, Aloe Vera, Hyaluronic Complex',
				skinType: 'Dry & Combination',
				expiryDate: '2027-03-31',
				usage: 'Use every night after cleansing',
				
			},
			highlights: [
				'Deep overnight hydration lock technology',
				'Ceramide blend for skin barrier support',
				'Reduces dryness and rough texture by morning',
				'Soft cream finish with no sticky feel',
				'Ideal for dry and combination skin',
			],
			description:
				'Hydrating night cream with deep moisture lock formula to support skin barrier overnight.',
		},
	],
	'Hair Care': [
		{
			id: 'p3',
			title: 'Beardo Hair Serum with Argan Oil, 50 ML',
			category: 'Hair Care',
			price: 999,
			originalPrice: 1299,
			discount: 23,
			isNew: true,
			rating: 4.5,
			image: require('../../assets/images/hair_care.webp'),
			specifications: {
				brand: 'Beardo',
				modelId: 'BEARDO-ARGAN-50',
				color: 'Argan',
				volume: '50 ML',
				ingredients: 'Argan Oil, Vitamin E, Botanical Extracts',
				hairType: 'Frizzy & Dry Hair',
				expiryDate: '2027-01-31',
				usage: 'Apply on damp or dry hair lengths',
				fastCharging: 'N/A',
			},
			highlights: [
				'Argan oil nourishment for frizz control',
				'Instant smoothness and natural shine',
				'Non-sticky finish suitable for daily styling',
				'Protects hair from mild heat damage',
				'Pleasant long-lasting fragrance',
			],
			description:
				'Argan enriched hair serum for smooth finish, frizz control, and natural shine.',
		},
		{
			id: 'p4',
			title: 'Anti-Hairfall Shampoo, 250 ML',
			category: 'Hair Care',
			price: 749,
			originalPrice: 999,
			discount: 25,
			isNew: false,
			rating: 4.3,
			image: require('../../assets/images/hair_care.webp'),
			specifications: {
				brand: 'HairActive',
				modelId: 'ANTI-HAIRFALL-250',
				color: 'Classic',
				volume: '250 ML',
				ingredients: 'Biotin, Caffeine, Keratin',
				hairType: 'Weak & Breakage-prone Hair',
				expiryDate: '2027-04-15',
				usage: 'Massage into wet scalp and rinse well',
				
			},
			highlights: [
				'Gentle sulfate-balanced cleansing formula',
				'Strengthens roots to reduce hair breakage',
				'Supports scalp oil balance and freshness',
				'Daily-use safe pH-balanced composition',
				'Visible volume improvement over regular use',
			],
			description:
				'Anti-hairfall shampoo with gentle cleansing and scalp-friendly ingredients for daily use.',
		},
	],
	'Furnitures & Plants': [
		{
			id: 'p5',
			title: 'Indoor Plant with Decorative Pot',
			category: 'Furnitures & Plants',
			price: 1599,
			originalPrice: 1999,
			discount: 20,
			isNew: true,
			rating: 4.7,
			image: require('../../assets/images/Furniture_plant.webp'),
			specifications: {
				brand: 'HomeNest',
				modelId: 'PLANT-POT-INDOOR',
				color: 'White Pot',
				ram: 'N/A',
				size: 'Medium Pot',
				plantType: 'Indoor Foliage',
				material: 'Ceramic Pot',
				care: 'Water 2-3 times per week',
				
			},
			highlights: [
				'Low-maintenance indoor decorative plant',
				'Air-purifying foliage for home freshness',
				'Premium ceramic pot with modern finish',
				'Best for living room and office corners',
				'Easy watering schedule and care guide included',
			],
			description:
				'Indoor decorative plant with modern pot design to enhance your room ambiance.',
		},
		{
			id: 'p6',
			title: 'Minimal Wooden Side Table',
			category: 'Furnitures & Plants',
			price: 3499,
			originalPrice: 4199,
			discount: 17,
			isNew: false,
			rating: 4.2,
			image: require('../../assets/images/Furniture_plant.webp'),
			specifications: {
				brand: 'UrbanWood',
				modelId: 'WOOD-SIDE-TABLE',
				color: 'Walnut',
				size: 'Standard',
				material: 'Engineered Wood',
				dimensions: '45 x 45 x 52 cm',
				assembly: 'DIY Assembly Required',
				
			},
			highlights: [
				'Engineered wood with matte finish top',
				'Compact design for bedside and sofa corners',
				'Scratch-resistant coating for daily use',
				'Sturdy frame with anti-slip feet',
				'Quick assembly in under 10 minutes',
			],
			description:
				'Compact minimalist side table crafted for modern interiors and utility.',
		},
	],
	'Chairs & Carpet': [
		{
			id: 'p7',
			title: 'Ergonomic Lounge Chair',
			category: 'Chairs & Carpet',
			price: 4999,
			originalPrice: 6299,
			discount: 21,
			isNew: false,
			rating: 4.6,
			image: require('../../assets/images/Chair_carpet.webp'),
			specifications: {
				brand: 'ComfortSeat',
				modelId: 'ERGO-CHAIR-LX',
				color: 'Charcoal',
				size: 'Standard',
				material: 'Metal Frame + Fabric',
				weightCapacity: '120 KG',
				assembly: 'Partial Assembly Required',
				
			},
			highlights: [
				'Ergonomic posture support with curved back',
				'High-density foam cushioning for comfort',
				'Durable powder-coated metal base',
				'Breathable fabric and easy-clean surface',
				'Ideal for lounge, reading, and work corners',
			],
			description:
				'Ergonomic lounge chair designed for comfort with supportive structure and premium finish.',
		},
		{
			id: 'p8',
			title: 'Soft Pattern Carpet 5x7',
			category: 'Chairs & Carpet',
			price: 2899,
			originalPrice: 3499,
			discount: 17,
			isNew: true,
			rating: 4.3,
			image: require('../../assets/images/Chair_carpet.webp'),
			specifications: {
				brand: 'CozyFloor',
				modelId: 'CARPET-5x7-SOFT',
				color: 'Wine Red',
				size: '5x7 ft',
				material: 'Polyester Blend',
				backing: 'Anti-slip Latex',
				care: 'Vacuum clean / Spot wash',
				
			},
			highlights: [
				'Ultra-soft weave for cozy underfoot feel',
				'Anti-slip backing for safer placement',
				'Dust-resistant and easy to vacuum clean',
				'Modern geometric pattern for interiors',
				'Fade-resistant fabric for long-term use',
			],
			description:
				'Soft patterned carpet with anti-slip backing and easy-maintenance fibers.',
		},
	],
	Electronics: [
		{
			id: 'p9',
			title: 'Wireless Earbuds Pro',
			category: 'Electronics',
			price: 3999,
			originalPrice: 4999,
			discount: 20,
			isNew: true,
			rating: 4.8,
			image: require('../../assets/images/Electronic.webp'),
			specifications: {
				brand: 'Electra',
				modelId: 'EARBUDS-PRO-X',
				color: 'White',
				ram: '8GB',
				storage: '256 GB',
				battery: '30 Hours (with case)',
				connectivity: 'Bluetooth 5.3',
				waterResistance: 'IPX5',
				fastCharging: '25W',
			},
			highlights: [
				'Active noise cancellation with transparency mode',
				'Low-latency gaming audio profile',
				'Up to 30 hours total battery with case',
				'IPX5 splash resistance for workouts',
				'Touch controls with voice assistant support',
			],
			description:
				'Wireless earbuds with immersive audio, low-latency mode, and long battery performance.',
		},
		{
			id: 'p10',
			title: 'Smart Watch Series Fit',
			category: 'Electronics',
			price: 6999,
			originalPrice: 8999,
			discount: 22,
			isNew: false,
			rating: 4.5,
			image: require('../../assets/images/Electronic.webp'),
			specifications: {
				brand: 'Electra',
				modelId: 'WATCH-FIT-SERIES',
				color: 'Midnight',
				ram: '8GB',
				storage: '512 GB',
				display: '1.78" AMOLED',
				battery: 'Up to 7 Days',
				connectivity: 'Bluetooth + GPS',
				fastCharging: '18W',
			},
			highlights: [
				'AMOLED always-on display with rich colors',
				'24/7 heart-rate and SpO2 monitoring',
				'100+ workout modes with GPS support',
				'Call, message, and app notification sync',
				'7-day battery life with magnetic charger',
			],
			description:
				'Smart watch with health tracking, notifications, and all-day battery life.',
		},
	],
};

export const allProducts = Object.values(categoryProducts)
	.flat()
	.filter((item, index, arr) => arr.findIndex((p) => p.id === item.id) === index);

export const getProductDetailData = (product) => {
	if (!product) return null;

	const specs = product.specifications || {};
	const selectedStorage = specs.volume || specs.size || specs.storage || 'Standard';
	const selectedColor = specs.color || 'Default';

	return {
		...product,
		model: specs.modelId || 'N/A',
		brand: specs.brand || 'N/A',
		ram: specs.ram || 'N/A',
		color: selectedColor,
		selectedColor,
		selectedStorage,
		storage: [selectedStorage],
		colors: [{ name: selectedColor, value: '#1f2937' }],
		reviewCount: 84,
		promoText: 'NPR 1,000 OFF above orders 5K',
		delivery: 'Chabahil Area, Kathmandu',
		shippingFee: 'Rs. 120',
		deliveryEta: 'Delivery 28-30 Nov',
		highlights: product.highlights || [],
		description:
			product.description ||
			'Experience unparalleled audio quality and convenience with premium design and stable day-to-day performance.',
		fastCharging: specs.fastCharging || 'N/A',
		disclaimer: 'Specifications and availability may vary by region. Prices are subject to change.',
		ratingsBreakdown: [
			{ star: 5, count: 1000 },
			{ star: 4, count: 300 },
			{ star: 3, count: 422 },
			{ star: 2, count: 0 },
			{ star: 1, count: 32 },
		],
		images: [product.image, product.image, product.image],
	};
};

const formatCurrency = (value) => {
	if (typeof value !== 'number') return 'Rs. 0';
	return `Rs. ${value.toLocaleString('en-IN')}`;
};

const ProductItem = ({ item, onPress, onAddToCart, onWishlist, variant = 'grid' }) => {
	const {
		title,
		price,
		originalPrice,
		image,
		discount,
		isNew,
		rating,
	} = item || {};

	if (!item) return null;

	const cardStyle = variant === 'horizontal' ? styles.horizontalCard : styles.card;

	return (
		<TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.85}>
			<View style={styles.imageWrap}>
				<Image source={image} style={styles.image} resizeMode="contain" />

				<View style={styles.badgesRow}>
					{isNew ? (
						<View style={styles.newBadge}>
							<Text style={styles.badgeText}>New</Text>
						</View>
					) : null}
					{discount ? (
						<View style={styles.discountBadge}>
							<Text style={styles.badgeText}>-{discount}%</Text>
						</View>
					) : null}
				</View>

				<TouchableOpacity style={styles.wishlistBtn} onPress={onWishlist} activeOpacity={0.8}>
					<Text style={styles.wishlistText}>♡</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<Text numberOfLines={2} style={styles.title}>
					{title}
				</Text>

				<Text style={styles.price}>{formatCurrency(price)}</Text>

				{originalPrice ? (
					<Text style={styles.originalPrice}>NPR {originalPrice.toLocaleString('en-IN')}</Text>
				) : null}

				<View style={styles.bottomRow}>
					<View style={styles.ratingWrap}>
						<Text style={styles.star}>★</Text>
						<Text style={styles.ratingText}>{rating || '4.0'}</Text>
					</View>

					<TouchableOpacity style={styles.addBtn} onPress={onAddToCart} activeOpacity={0.85}>
						<Text style={styles.addBtnText}>Add</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	card: {
		width: 170,
		marginRight: 14,
	},
	horizontalCard: {
		width: '100%',
		marginBottom: 14,
	},
	imageWrap: {
		width: '100%',
		height: 175,
		borderRadius: 20,
		backgroundColor: '#ececef',
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		position: 'relative',
	},
	image: {
		width: '78%',
		height: '78%',
	},
	badgesRow: {
		position: 'absolute',
		top: 10,
		left: 10,
		flexDirection: 'row',
	},
	newBadge: {
		backgroundColor: '#4c66ff',
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 8,
		marginRight: 6,
	},
	discountBadge: {
		backgroundColor: '#ff8a00',
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 8,
	},
	badgeText: {
		color: '#fff',
		fontSize: 12,
		fontWeight: '700',
	},
	wishlistBtn: {
		position: 'absolute',
		top: 10,
		right: 10,
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.9)',
	},
	wishlistText: {
		fontSize: 18,
		color: '#ff4f6d',
	},
	content: {
		paddingHorizontal: 2,
	},
	title: {
		fontSize: 17,
		lineHeight: 20,
		color: '#1f2333',
		fontWeight: '600',
		marginBottom: 8,
	},
	price: {
		fontSize: 17,
		color: '#4064ff',
		fontWeight: '700',
		marginBottom: 4,
	},
	originalPrice: {
		fontSize: 12,
		color: '#999',
		textDecorationLine: 'line-through',
		marginBottom: 6,
	},
	bottomRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	ratingWrap: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	star: {
		color: '#f7a400',
		fontSize: 13,
		marginRight: 3,
	},
	ratingText: {
		fontSize: 12,
		color: '#666',
		fontWeight: '600',
	},
	addBtn: {
		backgroundColor: '#4064ff',
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 8,
	},
	addBtnText: {
		color: '#fff',
		fontSize: 12,
		fontWeight: '700',
	},
});
