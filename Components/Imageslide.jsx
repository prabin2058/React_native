import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, useWindowDimensions } from 'react-native';

const images = [
  'https://imgs.search.brave.com/y0y6uN8VSJh4-E1PPanRSPFh1-hXHvtmSA2CMVIlFqY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk5/OTc1NzMyL3ZlY3Rv/ci9iaWctc3VtbWVy/LXNhbGUtYmFubmVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1EZTRUdjFJNVJS/aWlnWkloeUU4bWZn/a3ZFSHM1dm5CMkU5/a0NYeWIzSVVBPQ',
  'https://imgs.search.brave.com/C3jphYD6i-fnG84NMjBzFUPOoFZ7j6C5ST5HFPZT2N8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYy/MDc2MTc0L3ZlY3Rv/ci9iaWctc3VtbWVy/LXNhbGUtYmFubmVy/LXN1bi13aXRoLXJh/eXMtY2xvdWRzLWFu/ZC1zaWduLXN1bW1l/ci10ZW1wbGF0ZS1w/b3N0ZXItZGVzaWdu/LWZvci1wcmludC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/YU42N1luem5weDhT/UDZTeGc3aXcwVHQ5/bTIwVklITkE1MTR1/ZTB0eTRSZz0',
  'https://imgs.search.brave.com/50WhFelFyAQIAiaw-fvGpi5vEkPu-IZLtmGIOFC2hk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk5/NzU4NTc0L3Bob3Rv/L3NwZWNpYWwtb2Zm/ZXItdGV4dC1oYW5n/aW5nLW9uLXRoZS1z/dHJpbmdzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13MTdQ/OUgxb1R0MjZRRzlz/U3JNbEdmX2llNlVF/T1RpZXVxTmtwY0No/bGprPQ',
  'https://imgs.search.brave.com/tcZASNB0U7TOiyBv-98ieW1gD6KY5adnXAmnCcAyZ5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/NDkxMTUxMy92ZWN0/b3IvbGltaXRlZC1v/ZmZlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eFNJVWVj/Qi0xZk1XVGhiZEkx/Y0VWckU5bWtjd1hl/VDBVeDAzODY0ZEtQ/dz0',
  
];

export default function ImageSlider() {
  const scrollRef = useRef(null);
  const { width } = useWindowDimensions();
  const sliderWidth = Math.max(width - 24, 0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length || sliderWidth <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        scrollRef.current?.scrollTo({ x: next * sliderWidth, animated: true });
        return next;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, [sliderWidth]);

  const onScrollEnd = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.min(images.length - 1, Math.max(0, Math.round(xOffset / sliderWidth)));
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.sliderFrame, { width: sliderWidth, height: 170 }]}> 
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
          style={styles.slider}
        >
          {images.map((image, index) => (
            <View key={index} style={{ width: sliderWidth, height: 170 }}>
              <Image
                source={{ uri: image }}
                style={styles.image}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: '100%',
  },
  sliderFrame: {
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#e9edf5',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#d2d3da',
    marginHorizontal: 3,
  },
  activeDot: {
    width: 22,
    borderRadius: 10,
    backgroundColor: '#646cff',
  },
});