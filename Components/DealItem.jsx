import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const DealsList = () => {
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
    </View>
  );
};

export default DealsList;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    backgroundColor: "#fff",
    paddingBottom: 10,
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
    color: "#1a72dc",
    fontWeight: "500",
  },
  item: {
    marginRight: 10,
    width: 90,
    height: 90,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});