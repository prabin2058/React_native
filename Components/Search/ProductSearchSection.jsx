import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const resolveImageSource = (source) => {
  if (!source) return null;
  if (typeof source === "string") return { uri: source };
  if (source?.uri) return source;
  return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString("en-IN")}`;

const ProductSearchSection = ({
  query = "",
  products = [],
  onProductPress,
  onClearSearch,
}) => {
  const trimmedQuery = query.trim();
  const [discountOnly, setDiscountOnly] = useState(false);
  const [topSalesOnly, setTopSalesOnly] = useState(false);
  const [sortMode, setSortMode] = useState("relevance");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const matchedProducts = useMemo(() => {
    if (!trimmedQuery) return [];

    const normalizedQuery = trimmedQuery.toLowerCase();
    return (products || []).filter((item) =>
      (item?.title || "").toLowerCase().includes(normalizedQuery),
    );
  }, [products, trimmedQuery]);

  const categories = useMemo(() => {
    const list = Array.from(
      new Set((matchedProducts || []).map((item) => item?.category).filter(Boolean)),
    );
    return ["All", ...list];
  }, [matchedProducts]);

  useEffect(() => {
    setSelectedCategory("All");
    setSortMode("relevance");
    setDiscountOnly(false);
    setTopSalesOnly(false);
  }, [trimmedQuery]);

  const visibleProducts = useMemo(() => {
    let next = [...matchedProducts];

    if (discountOnly) {
      next = next.filter((item) => Number(item?.discount || 0) > 0);
    }

    if (topSalesOnly) {
      next = next.filter((item) => Number(item?.rating || 0) >= 4.5);
    }

    if (selectedCategory !== "All") {
      next = next.filter((item) => item?.category === selectedCategory);
    }

    if (sortMode === "priceLow") {
      next.sort((a, b) => Number(a?.price || 0) - Number(b?.price || 0));
    } else if (sortMode === "priceHigh") {
      next.sort((a, b) => Number(b?.price || 0) - Number(a?.price || 0));
    } else if (sortMode === "rating") {
      next.sort((a, b) => Number(b?.rating || 0) - Number(a?.rating || 0));
    }

    return next;
  }, [matchedProducts, discountOnly, topSalesOnly, selectedCategory, sortMode]);

  const handleSortToggle = () => {
    setSortMode((prev) => {
      if (prev === "relevance") return "priceLow";
      if (prev === "priceLow") return "priceHigh";
      if (prev === "priceHigh") return "rating";
      return "relevance";
    });
  };

  const handleCategoryToggle = () => {
    setSelectedCategory((prev) => {
      const currentIndex = categories.findIndex((item) => item === prev);
      const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % categories.length : 0;
      return categories[nextIndex] || "All";
    });
  };

  const sortLabel =
    sortMode === "priceLow"
      ? "Price: Low"
      : sortMode === "priceHigh"
        ? "Price: High"
        : sortMode === "rating"
          ? "Rating"
          : "Sort By";

  if (!trimmedQuery) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search Results ({visibleProducts.length})</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={onClearSearch}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[styles.controlChip, discountOnly && styles.controlChipActive]}
          onPress={() => setDiscountOnly((prev) => !prev)}
        >
          <Ionicons name="options-outline" size={14} color="#6b7280" />
          <Text style={styles.controlText}>Filter</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.85} style={styles.controlChip} onPress={handleSortToggle}>
          <MaterialIcons name="sort" size={14} color="#6b7280" />
          <Text style={styles.controlText}>{sortLabel}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.85} style={styles.controlChip} onPress={handleCategoryToggle}>
          <Text style={styles.controlText}>{selectedCategory === "All" ? "Category" : selectedCategory}</Text>
          <Ionicons name="chevron-down" size={14} color="#6b7280" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.85}
          style={[styles.controlChip, topSalesOnly && styles.controlChipActive]}
          onPress={() => setTopSalesOnly((prev) => !prev)}
        >
          <Text style={styles.controlText}>Top Sales</Text>
        </TouchableOpacity>
      </View>

      {visibleProducts.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyText}>No product found for "{trimmedQuery}"</Text>
        </View>
      ) : (
        <View style={styles.productGrid}>
          {visibleProducts.map((item) => {
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
      )}
    </View>
  );
};

export default ProductSearchSection;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 12,
    marginBottom: 8,
  },
  header: {
    paddingHorizontal: 12,
    marginBottom: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1f2333",
  },
  clearText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#646cff",
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 8,
    flexWrap: "wrap",
    gap: 6,
  },
  controlChip: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  controlChipActive: {
    borderColor: "#646cff",
    backgroundColor: "#eef0ff",
  },
  controlText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#374151",
    fontWeight: "500",
  },
  emptyWrap: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  emptyText: {
    color: "#6b7280",
    fontSize: 14,
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
    backgroundColor: "#ececf0",
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
