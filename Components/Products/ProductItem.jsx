import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export const categoryProducts = {
  "Health & Skin Care": [
    {
      id: "p1",
      title: "Vitamin C Glow Serum, 50 ML",
      category: "Health & Skin Care",
      price: 999,
      originalPrice: 1299,
      discount: 23,
      isNew: true,
      rating: 4.6,
      // image: require('../../assets/images/Healt&skin.webp'),
      images: [
        "https://imgs.search.brave.com/qRG9Ojfc811jmLfqODwhRSWLgcJCajGsiekitfhd_jM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFyZW1pbmVyYWxz/LmNvbS9jZG4vc2hv/cC9maWxlcy9CTV9T/UDI0X1NraW5SZXNj/dWVfU2lsb19DbG9z/ZWRfUHVyZUdsb3df/MzAwMHgzMDAwX1Ix/NTAucG5nP3Y9MTcx/MDQ0MzUxNiZ3aWR0/aD0xMTAw",
        "https://imgs.search.brave.com/qRG9Ojfc811jmLfqODwhRSWLgcJCajGsiekitfhd_jM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFyZW1pbmVyYWxz/LmNvbS9jZG4vc2hv/cC9maWxlcy9CTV9T/UDI0X1NraW5SZXNj/dWVfU2lsb19DbG9z/ZWRfUHVyZUdsb3df/MzAwMHgzMDAwX1Ix/NTAucG5nP3Y9MTcx/MDQ0MzUxNiZ3aWR0/aD0xMTAw",
        "https://imgs.search.brave.com/qRG9Ojfc811jmLfqODwhRSWLgcJCajGsiekitfhd_jM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFyZW1pbmVyYWxz/LmNvbS9jZG4vc2hv/cC9maWxlcy9CTV9T/UDI0X1NraW5SZXNj/dWVfU2lsb19DbG9z/ZWRfUHVyZUdsb3df/MzAwMHgzMDAwX1Ix/NTAucG5nP3Y9MTcx/MDQ0MzUxNiZ3aWR0/aD0xMTAw",
        "https://imgs.search.brave.com/qRG9Ojfc811jmLfqODwhRSWLgcJCajGsiekitfhd_jM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFyZW1pbmVyYWxz/LmNvbS9jZG4vc2hv/cC9maWxlcy9CTV9T/UDI0X1NraW5SZXNj/dWVfU2lsb19DbG9z/ZWRfUHVyZUdsb3df/MzAwMHgzMDAwX1Ix/NTAucG5nP3Y9MTcx/MDQ0MzUxNiZ3aWR0/aD0xMTAw",
      ],
      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      ],
      specifications: {
        brand: "GlowLab",
        modelId: "GLW-SERUM-50",
        color: "Vitamin C",
        volume: "50 ML",
        ingredients: "Vitamin C, Hyaluronic Acid, Aloe Vera",
        skinType: "All Skin Types",
        expiryDate: "2026-12-31",
        usage: "Apply 2-3 drops on clean face daily",
      },
      highlights: [
        "10% stabilized Vitamin C for daily glow boost",
        "Lightweight non-greasy formula for all skin types",
        "Helps reduce dullness and uneven skin tone",
        "Quick absorption with hydrating base",
        "Dermatologically tested and paraben-free",
      ],
      description:
        "Vitamin C serum for brighter skin tone and reduced dullness. Lightweight and suitable for daily routine.",
    },
    {
      id: "p2",
      title: "Hydra Repair Night Cream",
      category: "Health & Skin Care",
      price: 1299,
      originalPrice: 1699,
      discount: 24,
      isNew: true,
      rating: 4.4,

      images: [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
      ],
      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      ],
      specifications: {
        brand: "DermaPlus",
        modelId: "HYDRA-NIGHT-01",
        color: "Aloe",
        volume: "50 G",
        ingredients: "Ceramides, Aloe Vera, Hyaluronic Complex",
        skinType: "Dry & Combination",
        expiryDate: "2027-03-31",
        usage: "Use every night after cleansing",
      },
      highlights: [
        "Deep overnight hydration lock technology",
        "Ceramide blend for skin barrier support",
        "Reduces dryness and rough texture by morning",
        "Soft cream finish with no sticky feel",
        "Ideal for dry and combination skin",
      ],
      description:
        "Hydrating night cream with deep moisture lock formula to support skin barrier overnight.",
    },
    {
      id: "p11",
      title: "Hydrating Aloe Vera Gel, 100 ML",
      category: "Health & Skin Care",
      price: 699,
      originalPrice: 899,
      discount: 22,
      isNew: false,
      rating: 4.4,
      images: [
        "https://imgs.search.brave.com/nmVHnU0WtxJMjDUVcjM2TL9B2kRgMX85pkgIYti_klQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzI4/MGJhZDdhLTJiMjYt/NGNhMC04YzRhLTI0/M2NkYjUxNDE4OC5f/X0NSMCwwLDIyMCwy/MjBfUFQwX1NYMjIw/X1YxX19fLmpwZw",
        "https://imgs.search.brave.com/nmVHnU0WtxJMjDUVcjM2TL9B2kRgMX85pkgIYti_klQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzI4/MGJhZDdhLTJiMjYt/NGNhMC04YzRhLTI0/M2NkYjUxNDE4OC5f/X0NSMCwwLDIyMCwy/MjBfUFQwX1NYMjIw/X1YxX19fLmpwZw",
        "https://imgs.search.brave.com/nmVHnU0WtxJMjDUVcjM2TL9B2kRgMX85pkgIYti_klQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzI4/MGJhZDdhLTJiMjYt/NGNhMC04YzRhLTI0/M2NkYjUxNDE4OC5f/X0NSMCwwLDIyMCwy/MjBfUFQwX1NYMjIw/X1YxX19fLmpwZw",
        "https://imgs.search.brave.com/nmVHnU0WtxJMjDUVcjM2TL9B2kRgMX85pkgIYti_klQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzI4/MGJhZDdhLTJiMjYt/NGNhMC04YzRhLTI0/M2NkYjUxNDE4OC5f/X0NSMCwwLDIyMCwy/MjBfUFQwX1NYMjIw/X1YxX19fLmpwZw",
      ],
      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      ],
      specifications: {
        brand: "NatureCare",
        modelId: "NC-ALOE-100",
        color: "Green",
        volume: "100 ML",
        ingredients: "Aloe Vera Extract, Vitamin E, Glycerin",
        skinType: "All Skin Types",
        expiryDate: "2027-06-30",
        usage: "Apply gently on skin for hydration and soothing effect",
      },
      highlights: [
        "100% pure aloe vera extract for deep hydration",
        "Soothes irritated and sunburned skin",
        "Non-sticky and fast absorbing formula",
        "Multi-purpose use for skin and hair care",
        "Free from parabens and harmful chemicals",
      ],
      description:
        "A soothing aloe vera gel that hydrates and refreshes skin. Ideal for daily use and suitable for all skin types.",
    },
  ],
  "Hair Care": [
    {
      id: "p3",
      title: "Beardo Hair Serum with Argan Oil, 50 ML",
      category: "Hair Care",
      price: 999,
      originalPrice: 1299,
      discount: 23,
      isNew: true,
      rating: 4.5,

      images: [
        "https://imgs.search.brave.com/fJWD7Y5ofqGTbiBdcpv-p_iquzW6jjqfx0IeF9dtGL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbm5v/dmlzdC5jb20vY2Ru/L3Nob3AvZmlsZXMv/Ml8xMF81Zjg5NGVm/NS0zMzk0LTRjY2It/YWRmYS05NDdjOWNi/ZjljOWQuanBnP3Y9/MTc3MzMxOTk2NyZ3/aWR0aD03MjA",
        "https://imgs.search.brave.com/fJWD7Y5ofqGTbiBdcpv-p_iquzW6jjqfx0IeF9dtGL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbm5v/dmlzdC5jb20vY2Ru/L3Nob3AvZmlsZXMv/Ml8xMF81Zjg5NGVm/NS0zMzk0LTRjY2It/YWRmYS05NDdjOWNi/ZjljOWQuanBnP3Y9/MTc3MzMxOTk2NyZ3/aWR0aD03MjA",
        "https://imgs.search.brave.com/fJWD7Y5ofqGTbiBdcpv-p_iquzW6jjqfx0IeF9dtGL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbm5v/dmlzdC5jb20vY2Ru/L3Nob3AvZmlsZXMv/Ml8xMF81Zjg5NGVm/NS0zMzk0LTRjY2It/YWRmYS05NDdjOWNi/ZjljOWQuanBnP3Y9/MTc3MzMxOTk2NyZ3/aWR0aD03MjA",
        "https://imgs.search.brave.com/fJWD7Y5ofqGTbiBdcpv-p_iquzW6jjqfx0IeF9dtGL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbm5v/dmlzdC5jb20vY2Ru/L3Nob3AvZmlsZXMv/Ml8xMF81Zjg5NGVm/NS0zMzk0LTRjY2It/YWRmYS05NDdjOWNi/ZjljOWQuanBnP3Y9/MTc3MzMxOTk2NyZ3/aWR0aD03MjA",
      ],
      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      ],
      specifications: {
        brand: "Beardo",
        modelId: "BEARDO-ARGAN-50",
        color: "Argan",
        volume: "50 ML",
        ingredients: "Argan Oil, Vitamin E, Botanical Extracts",
        hairType: "Frizzy & Dry Hair",
        expiryDate: "2027-01-31",
        usage: "Apply on damp or dry hair lengths",
      },
      highlights: [
        "Argan oil nourishment for frizz control",
        "Instant smoothness and natural shine",
        "Non-sticky finish suitable for daily styling",
        "Protects hair from mild heat damage",
        "Pleasant long-lasting fragrance",
      ],
      description:
        "Argan enriched hair serum for smooth finish, frizz control, and natural shine.",
    },
    {
      id: "p4",
      title: "Anti-Hairfall Shampoo, 250 ML",
      category: "Hair Care",
      price: 749,
      originalPrice: 999,
      discount: 25,
      isNew: false,
      rating: 4.3,
      image: require("../../assets/images/hair_care.webp"),
      specifications: {
        brand: "HairActive",
        modelId: "ANTI-HAIRFALL-250",
        color: "Classic",
        volume: "250 ML",
        ingredients: "Biotin, Caffeine, Keratin",
        hairType: "Weak & Breakage-prone Hair",
        expiryDate: "2027-04-15",
        usage: "Massage into wet scalp and rinse well",
      },
      highlights: [
        "Gentle sulfate-balanced cleansing formula",
        "Strengthens roots to reduce hair breakage",
        "Supports scalp oil balance and freshness",
        "Daily-use safe pH-balanced composition",
        "Visible volume improvement over regular use",
      ],
      description:
        "Anti-hairfall shampoo with gentle cleansing and scalp-friendly ingredients for daily use.",
    },
  ],
  "Furnitures & Plants": [
    {
      id: "p5",
      title: "Indoor Plant with Decorative Pot",
      category: "Furnitures & Plants",
      price: 1599,
      originalPrice: 1999,
      discount: 20,
      isNew: true,
      rating: 4.7,
      image: require("../../assets/images/Furniture_plant.webp"),
      specifications: {
        brand: "HomeNest",
        modelId: "PLANT-POT-INDOOR",
        color: "White Pot",
        ram: "N/A",
        size: "Medium Pot",
        plantType: "Indoor Foliage",
        material: "Ceramic Pot",
        care: "Water 2-3 times per week",
      },
      highlights: [
        "Low-maintenance indoor decorative plant",
        "Air-purifying foliage for home freshness",
        "Premium ceramic pot with modern finish",
        "Best for living room and office corners",
        "Easy watering schedule and care guide included",
      ],
      description:
        "Indoor decorative plant with modern pot design to enhance your room ambiance.",
    },
    {
      id: "p6",
      title: "Minimal Wooden Side Table",
      category: "Furnitures & Plants",
      price: 3499,
      originalPrice: 4199,
      discount: 17,
      isNew: false,
      rating: 4.2,
      image: require("../../assets/images/Furniture_plant.webp"),
      specifications: {
        brand: "UrbanWood",
        modelId: "WOOD-SIDE-TABLE",
        color: "Walnut",
        size: "Standard",
        material: "Engineered Wood",
        dimensions: "45 x 45 x 52 cm",
        assembly: "DIY Assembly Required",
      },
      highlights: [
        "Engineered wood with matte finish top",
        "Compact design for bedside and sofa corners",
        "Scratch-resistant coating for daily use",
        "Sturdy frame with anti-slip feet",
        "Quick assembly in under 10 minutes",
      ],
      description:
        "Compact minimalist side table crafted for modern interiors and utility.",
    },
  ],
  "Chairs & Carpet": [
    {
      id: "p7",
      title: "Ergonomic Lounge Chair",
      category: "Chairs & Carpet",
      price: 4999,
      originalPrice: 6299,
      discount: 21,
      isNew: false,
      rating: 4.6,
      image: require("../../assets/images/Chair_carpet.webp"),
      specifications: {
        brand: "ComfortSeat",
        modelId: "ERGO-CHAIR-LX",
        color: "Charcoal",
        size: "Standard",
        material: "Metal Frame + Fabric",
        weightCapacity: "120 KG",
        assembly: "Partial Assembly Required",
      },
      highlights: [
        "Ergonomic posture support with curved back",
        "High-density foam cushioning for comfort",
        "Durable powder-coated metal base",
        "Breathable fabric and easy-clean surface",
        "Ideal for lounge, reading, and work corners",
      ],
      description:
        "Ergonomic lounge chair designed for comfort with supportive structure and premium finish.",
    },
    {
      id: "p8",
      title: "Soft Pattern Carpet 5x7",
      category: "Chairs & Carpet",
      price: 2899,
      originalPrice: 3499,
      discount: 17,
      isNew: true,
      rating: 4.3,
      image: require("../../assets/images/Chair_carpet.webp"),
      specifications: {
        brand: "CozyFloor",
        modelId: "CARPET-5x7-SOFT",
        color: "Wine Red",
        size: "5x7 ft",
        material: "Polyester Blend",
        backing: "Anti-slip Latex",
        care: "Vacuum clean / Spot wash",
      },
      highlights: [
        "Ultra-soft weave for cozy underfoot feel",
        "Anti-slip backing for safer placement",
        "Dust-resistant and easy to vacuum clean",
        "Modern geometric pattern for interiors",
        "Fade-resistant fabric for long-term use",
      ],
      description:
        "Soft patterned carpet with anti-slip backing and easy-maintenance fibers.",
    },
  ],
  Electronics: [
    {
      id: "p9",
      title: "Wireless Earbuds Pro",
      category: "Electronics",
      price: 3999,
      originalPrice: 4999,
      discount: 20,
      isNew: true,
      rating: 4.8,
      image: require("../../assets/images/Electronic.webp"),
      specifications: {
        brand: "Electra",
        modelId: "EARBUDS-PRO-X",
        color: "White",
        ram: "8GB",
        storage: "256 GB",
        battery: "30 Hours (with case)",
        connectivity: "Bluetooth 5.3",
        waterResistance: "IPX5",
        fastCharging: "25W",
      },
      highlights: [
        "Active noise cancellation with transparency mode",
        "Low-latency gaming audio profile",
        "Up to 30 hours total battery with case",
        "IPX5 splash resistance for workouts",
        "Touch controls with voice assistant support",
      ],
      description:
        "Wireless earbuds with immersive audio, low-latency mode, and long battery performance.",
    },
    {
      id: "p10",
      title: "Smart Watch Series Fit",
      category: "Electronics",
      price: 6999,
      originalPrice: 8999,
      discount: 22,
      isNew: false,
      rating: 4.5,
      image: require("../../assets/images/Electronic.webp"),
      specifications: {
        brand: "Electra",
        modelId: "WATCH-FIT-SERIES",
        color: "Midnight",
        ram: "8GB",
        storage: "512 GB",
        display: '1.78" AMOLED',
        battery: "Up to 7 Days",
        connectivity: "Bluetooth + GPS",
        fastCharging: "18W",
      },
      highlights: [
        "AMOLED always-on display with rich colors",
        "24/7 heart-rate and SpO2 monitoring",
        "100+ workout modes with GPS support",
        "Call, message, and app notification sync",
        "7-day battery life with magnetic charger",
      ],
      description:
        "Smart watch with health tracking, notifications, and all-day battery life.",
    },
    {
      id: "p13",
      title: "iPhone 15, 128GB",
      category: "Electronics",
      price: 119999,
      originalPrice: 129999,
      discount: 8,
      isNew: true,
      rating: 4.8,

      images: [
        "https://imgs.search.brave.com/EgayVsg0JwIbj5Q-gkebIAjrtXgOe4BlMz-wQixHywg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6UEpCb0RCb0wu/anBn",
        "https://imgs.search.brave.com/EgayVsg0JwIbj5Q-gkebIAjrtXgOe4BlMz-wQixHywg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6UEpCb0RCb0wu/anBn",
        "https://imgs.search.brave.com/EgayVsg0JwIbj5Q-gkebIAjrtXgOe4BlMz-wQixHywg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6UEpCb0RCb0wu/anBn",
        "https://imgs.search.brave.com/EgayVsg0JwIbj5Q-gkebIAjrtXgOe4BlMz-wQixHywg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6UEpCb0RCb0wu/anBn",
      ],

      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      ],

      specifications: {
        brand: "Apple",
        modelId: "IPH15-128GB",
        color: "Red",
        storage: "128GB",
        display: "6.1-inch Super Retina XDR",
        camera: "48MP Wide, 12MP Ultra Wide",
        battery: "Up to 20 hours video playback",
        os: "iOS 17",
        usage: "Smartphone for calls, internet, apps, and media",
      },

      highlights: [
        "Dynamic Island and Always-On display",
        "A17 Bionic chip for super-fast performance",
        "Advanced camera system with cinematic mode",
        "Ceramic Shield front cover",
        "Supports MagSafe accessories",
      ],

      description:
        "iPhone 15 with 128GB storage, powerful A17 Bionic chip, advanced camera system, and durable Ceramic Shield display.",
    },
    {
      id: "p12",
      title: "iPhone 16, 256GB",
      category: "Electronics",
      price: 139999,
      originalPrice: 149999,
      discount: 7,
      isNew: true,
      rating: 4.9,

      images: [
        "https://imgs.search.brave.com/oHueXip-zQRzlPMNc817P5eM2vwnyDBqn7xQkl1Ulwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY2ZWUx/ZWFlZDU1YWExZTNl/ODEzODE2ZC9tYXN0/ZXIvd18xNjAwLGNf/bGltaXQvQXBwbGUt/aVBob25lLTE2LXZz/LWlQaG9uZS0xNi1Q/bHVzLShwaW5rKS0o/Ymx1ZSktUmV2aWV3/ZXItUGhvdG8tU09V/UkNFLUp1bGlhbi1D/aG9ra2F0dHUuanBn",
        "https://imgs.search.brave.com/oHueXip-zQRzlPMNc817P5eM2vwnyDBqn7xQkl1Ulwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY2ZWUx/ZWFlZDU1YWExZTNl/ODEzODE2ZC9tYXN0/ZXIvd18xNjAwLGNf/bGltaXQvQXBwbGUt/aVBob25lLTE2LXZz/LWlQaG9uZS0xNi1Q/bHVzLShwaW5rKS0o/Ymx1ZSktUmV2aWV3/ZXItUGhvdG8tU09V/UkNFLUp1bGlhbi1D/aG9ra2F0dHUuanBn",
        "https://imgs.search.brave.com/oHueXip-zQRzlPMNc817P5eM2vwnyDBqn7xQkl1Ulwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY2ZWUx/ZWFlZDU1YWExZTNl/ODEzODE2ZC9tYXN0/ZXIvd18xNjAwLGNf/bGltaXQvQXBwbGUt/aVBob25lLTE2LXZz/LWlQaG9uZS0xNi1Q/bHVzLShwaW5rKS0o/Ymx1ZSktUmV2aWV3/ZXItUGhvdG8tU09V/UkNFLUp1bGlhbi1D/aG9ra2F0dHUuanBn",
        "https://imgs.search.brave.com/oHueXip-zQRzlPMNc817P5eM2vwnyDBqn7xQkl1Ulwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY2ZWUx/ZWFlZDU1YWExZTNl/ODEzODE2ZC9tYXN0/ZXIvd18xNjAwLGNf/bGltaXQvQXBwbGUt/aVBob25lLTE2LXZz/LWlQaG9uZS0xNi1Q/bHVzLShwaW5rKS0o/Ymx1ZSktUmV2aWV3/ZXItUGhvdG8tU09V/UkNFLUp1bGlhbi1D/aG9ra2F0dHUuanBn",
      ],

      videos: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      ],

      specifications: {
        brand: "Apple",
        modelId: "IPH16-256GB",
        color: "Blue",
        storage: "256GB",
        display: "6.7-inch Super Retina XDR",
        camera: "48MP Wide, 12MP Ultra Wide, 12MP Telephoto",
        battery: "Up to 25 hours video playback",
        os: "iOS 18",
        usage: "Smartphone for advanced multimedia, apps, and gaming",
      },

      highlights: [
        "Larger display with ProMotion 120Hz refresh rate",
        "A18 Bionic chip for ultimate performance",
        "Triple camera system with Night mode",
        "Improved battery life",
        "Supports MagSafe and wireless charging",
      ],

      description:
        "iPhone 16 with 256GB storage, A18 Bionic chip, triple camera system, and high-performance display for gaming, media, and daily use.",
    },
  ],
};

export const allProducts = Object.values(categoryProducts)
  .flat()
  .filter(
    (item, index, arr) => arr.findIndex((p) => p.id === item.id) === index,
  );

export const getProductDetailData = (product) => {
  if (!product) return null;

  const specs = product.specifications || {};
  const selectedStorage =
    specs.volume || specs.size || specs.storage || "Standard";
  const selectedColor = specs.color || "Default";

  return {
    ...product,
    model: specs.modelId || "N/A",
    brand: specs.brand || "N/A",
    ram: specs.ram || "N/A",
    color: selectedColor,
    selectedColor,
    selectedStorage,
    storage: [selectedStorage],
    colors: [{ name: selectedColor, value: "#1f2937" }],
    reviewCount: 84,
    promoText: "NPR 1,000 OFF above orders 5K",
    delivery: "Chabahil Area, Kathmandu",
    shippingFee: "Rs. 120",
    deliveryEta: "Delivery 28-30 Nov",
    highlights: product.highlights || [],
    description:
      product.description ||
      "Experience unparalleled audio quality and convenience with premium design and stable day-to-day performance.",
    fastCharging: specs.fastCharging || "N/A",
    disclaimer:
      "Specifications and availability may vary by region. Prices are subject to change.",
    ratingsBreakdown: [
      { star: 5, count: 1000 },
      { star: 4, count: 300 },
      { star: 3, count: 422 },
      { star: 2, count: 0 },
      { star: 1, count: 32 },
    ],
    images:
      Array.isArray(product.images) && product.images.length > 0
        ? product.images
        : [product.image, product.image, product.image, product.image].filter(
            Boolean,
          ),
    videos:
      Array.isArray(product.videos) && product.videos.length > 0
        ? product.videos
        : [
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          ],
  };
};

const formatCurrency = (value) => {
  if (typeof value !== "number") return "Rs. 0";
  return `Rs. ${value.toLocaleString("en-IN")}`;
};

const resolveImageSource = (source) => {
  if (!source) return null;
  if (typeof source === "string") return { uri: source };
  if (source?.uri) return source;
  return source;
};

const ProductItem = ({
  item,
  onPress,
  onAddToCart,
  onWishlist,
  variant = "grid",
}) => {
  const { title, price, originalPrice, image, discount, isNew, rating } =
    item || {};

  if (!item) return null;

  const previewImage = resolveImageSource(item?.images?.[0] || image);

  const cardStyle =
    variant === "horizontal"
      ? styles.horizontalCard
      : variant === "grid"
        ? styles.gridCard
        : styles.card;

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.imageWrap}>
        {previewImage ? (
          <Image
            source={previewImage}
            style={styles.image}
            resizeMode="contain"
          />
        ) : null}

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

        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={onWishlist}
          activeOpacity={0.8}
        >
          <Text style={styles.wishlistText}>♡</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>

        <Text style={styles.price}>{formatCurrency(price)}</Text>

        {originalPrice ? (
          <Text style={styles.originalPrice}>
            NPR {originalPrice.toLocaleString("en-IN")}
          </Text>
        ) : null}

        <View style={styles.bottomRow}>
          <View style={styles.ratingWrap}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.ratingText}>{rating || "4.0"}</Text>
          </View>

          <TouchableOpacity
            style={styles.addBtn}
            onPress={onAddToCart}
            activeOpacity={0.85}
          >
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
  gridCard: {
    width: "48.5%",
    marginBottom: 14,
  },
  horizontalCard: {
    width: "100%",
    marginBottom: 14,
  },
  imageWrap: {
    width: "100%",
    height: 175,
    borderRadius: 20,
    backgroundColor: "#ececef",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    position: "relative",
  },
  image: {
    width: "78%",
    height: "78%",
  },
  badgesRow: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
  },
  newBadge: {
    backgroundColor: "#4c66ff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 6,
  },
  discountBadge: {
    backgroundColor: "#ff8a00",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  wishlistBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  wishlistText: {
    fontSize: 18,
    color: "#ff4f6d",
  },
  content: {
    paddingHorizontal: 2,
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    color: "#1f2333",
    fontWeight: "600",
    marginBottom: 8,
  },
  price: {
    fontSize: 17,
    color: "#4064ff",
    fontWeight: "700",
    marginBottom: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
    marginBottom: 6,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    color: "#f7a400",
    fontSize: 13,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
  addBtn: {
    backgroundColor: "#4064ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
});
