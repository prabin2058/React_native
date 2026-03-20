import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { categoryProducts } from "./Products/ProductItem";

const resolveImageSource = (source) => {
  if (!source) return null;
  if (typeof source === "string") return { uri: source };
  if (source?.uri) return source;
  return source;
};

const formatCurrency = (value) => `Rs. ${(value || 0).toLocaleString("en-IN")}`;

const INITIAL_TIMER_SECONDS = (12 * 60) + 59;

const DealsList = ({ products = [], onProductPress }) => {
  const deals = [
    {
      id: "1",
      image: {
        uri: "https://imgs.search.brave.com/NEJvuq_icIqTQEbuiDBqzYcaNXbRKIrMZJi2XVIP8cg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg2LzUzLzYz/LzM2MF9GXzg2NTM2/MzMzX1piUmlZUUJD/Smkzbkw2S3RlTW44/Vlg0dDViRjNRdWNw/LmpwZw",
      },
      label: "BIG",
    },
    {
      id: "2",
      image: {
        uri: "https://imgs.search.brave.com/igOfltSXeG6ra8vFYOIHRLehig6VAx7s5Ge3JltABkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEy/MTU3OTg3L3Bob3Rv/LzNkLXJlZC10ZXh0/LTIwLXBlcmNlbnQt/b2ZmLW9uLWNyYWNr/LWhvbGUtZmxvb3Iu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWp3UzU1TXEyTl92/VzRpTjV6WVRwdFN3/eTJDU2duU0RoYkhw/aTk3QmFXXzA9",
      },
      label: "Sale",
    },
    {
      id: "3",
      image: {
        uri: "https://imgs.search.brave.com/gJXtEis7RwoV8lpc5Ag829wohHGojEdCn7AYQqyAWfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/cmVkLXBlcmNlbnQt/c2lnbi1vbi1mbGF0/LTI2MG53LTE5MDAz/MzI4MzIuanBn",
      },
      label: "20%",
    },
    {
      id: "4",
      image: {
        uri: "https://imgs.search.brave.com/-QuevTrmWVaUGLkYdIq5TvlZQCKBWqqrBfCQpQCHbw8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/MTk4NjI1NS92ZWN0/b3IvYmlnLXNhbGUt/cmVkLXByaWNlLXRh/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9STA5bDN1MFQ1/Y3NmRTFEMmVGbDd4/Y3dnT0RZVms2VGJO/aktTMFg1TEpHZz0",
      },
      label: "SALE",
    },
    {
      id: "5",
      image: {
        uri: "https://imgs.search.brave.com/QD3LFFzs8ZQzosf-x9t0OvQlW6CEjln-Pt4270brHr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNjEz/ODA0Nzk2L3N0b2Nr/LXBob3RvLWJsYWNr/LWZyaWRheS1zdXBl/ci1zYWxlLXNob3Bw/aW5nLWJhZy1jaHJp/c3RtYXMtaGFwcHkt/bmV3LXllYXI",
      },
      label: "OFFER",
    },
  ];

  const [dealSeconds, setDealSeconds] = useState(INITIAL_TIMER_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setDealSeconds((prev) => (prev > 0 ? prev - 1 : INITIAL_TIMER_SECONDS));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(dealSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((dealSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(dealSeconds % 60).padStart(2, "0");

  const todaysDeals = products.slice(0, 8);
  const skinCareProducts = categoryProducts["Health & Skin Care"] || [];
  const skinCarePreview = skinCareProducts.slice(0, 3);
  const bedsItem = products.find((item) => /bed|furniture|table/i.test(item?.title || "")) || null;

 
  const saleBanner = {
    uri: "https://imgs.search.brave.com/gtq_rykBheraaQFMae8HTv6lkELGwExJoJTsyJlYQxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzQv/MTUwLzQ3NS9zbWFs/bC95ZWxsb3ctYmFj/a2dyb3VuZC13aXRo/LWJsYWNrLWFuZC13/aGl0ZS1saW1pdGVk/LW9mZmVyLXRleHQt/YW5kLXN0b3B3YXRj/aC1pY29uLXZlY3Rv/ci5qcGc",
  };

  return (
    <View style={styles.wrapper}>
      {/* Header: More Deals + View All */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>More Deals</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All {">"}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={deals}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => console.log("Clicked deal", item.id)}
          >
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            {/* The label is not displayed as text because the images already contain text; 
                keeping it here for reference if needed */}
          </TouchableOpacity>
        )}
      />

      <View style={styles.todayHeaderWrap}>
        <Text style={styles.todayTitle}>Today&apos;s Deal</Text>
        <View style={styles.timerWrap}>
          <Text style={styles.timerChip}>{hours}</Text>
          <Text style={styles.timerColon}>:</Text>
          <Text style={styles.timerChip}>{minutes}</Text>
          <Text style={styles.timerColon}>:</Text>
          <Text style={styles.timerChip}>{seconds}</Text>
        </View>
      </View>

      <FlatList
        data={todaysDeals}
        horizontal
        keyExtractor={(item) => item.id?.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productRow}
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

      <View style={styles.promoWrap}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.skinCareCard}
          onPress={() => skinCareProducts[0] && onProductPress?.(skinCareProducts[0])}
        >
          <Text style={styles.skinCareTitle}>Skin Care Products</Text>
          <View style={styles.skinCareRow}>
            {skinCarePreview.map((item) => {
              const image = resolveImageSource(item?.images?.[0] || item?.image);
              return (
                <View key={item.id} style={styles.skinItemWrap}>
                  {image ? (
                    <Image source={image} style={styles.skinItemImage} resizeMode="contain" />
                  ) : null}
                  <View style={styles.pricePill}>
                    <Text style={styles.pricePillText}>{formatCurrency(item?.price)}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </TouchableOpacity>

        

        <Image source={saleBanner} style={styles.saleBanner} resizeMode="cover" />
      </View>
    </View>
  );
};

export default DealsList;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    backgroundColor: "#fff",
    paddingBottom: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  viewAll: {
    fontSize: 14,
    color: "#f3b400",
    fontWeight: "500",
  },
  item: {
    marginRight: 10,
    width: 70,
    height: 45,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  todayHeaderWrap: {
    marginTop: 14,
    marginBottom: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  todayTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1f2333",
  },
  timerWrap: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  timerChip: {
    minWidth: 22,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: "#5964e8",
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
  },
  timerColon: {
    marginHorizontal: 3,
    color: "#5964e8",
    fontWeight: "700",
    fontSize: 12,
  },
  productRow: {
    paddingHorizontal: 10,
    paddingRight: 14,
  },
  productCard: {
    width: 122,
    marginHorizontal: 4,
  },
  productImageWrap: {
    width: "100%",
    height: 86,
    borderRadius: 14,
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
    top: 6,
    left: 6,
    flexDirection: "row",
  },
  newBadge: {
    backgroundColor: "#4c66ff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 7,
    marginRight: 4,
  },
  discountBadge: {
    backgroundColor: "#ff8a00",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 7,
  },
  badgeText: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "700",
  },
  productTitle: {
    fontSize: 11,
    lineHeight: 14,
    color: "#1f2333",
    fontWeight: "500",
  },
  productPrice: {
    marginTop: 4,
    fontSize: 12,
    color: "#4064ff",
    fontWeight: "700",
  },
  productOldPrice: {
    marginTop: 1,
    fontSize: 9,
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },
  ratingRow: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 10,
    color: "#f7a400",
    marginRight: 2,
  },
  ratingText: {
    fontSize: 11,
    color: "#6b7280",
  },
  promoWrap: {
    marginTop: 14,
    paddingHorizontal: 10,
  },
  skinCareCard: {
    backgroundColor: "#efeff2",
    borderRadius: 16,
    padding: 12,
  },
  skinCareTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2a2d3b",
    marginBottom: 8,
  },
  skinCareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  skinItemWrap: {
    width: "31%",
    alignItems: "center",
  },
  skinItemImage: {
    width: "100%",
    height: 90,
  },
  pricePill: {
    marginTop: -4,
    backgroundColor: "#5b63e8",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  pricePillSmall: {
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: [{ translateX: -30 }],
    backgroundColor: "#5b63e8",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  pricePillText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },
  smallCardsRow: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallCard: {
  singleSmallCard: {
    flex: 1,
  },
    width: "49%",
    backgroundColor: "#efeff2",
    borderRadius: 16,
    padding: 12,
    height: 118,
    overflow: "hidden",
  },
  smallCardTitle: {
    fontSize: 24,
    color: "#2a2d3b",
    fontWeight: "500",
  },
  smallCardImage: {
    width: "100%",
    height: 76,
    marginTop: 4,
  },
  saleBanner: {
    marginTop: 12,
    width: "100%",
    height: 150,
    borderRadius: 20,
  },
});