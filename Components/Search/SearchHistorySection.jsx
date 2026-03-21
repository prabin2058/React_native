import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchHistorySection = ({ history = [], onSelectHistory, onClearHistory }) => {
  if (!history.length) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Search History</Text>

        <View style={styles.headerActions}>
          <TouchableOpacity activeOpacity={0.8} onPress={onClearHistory}>
            <Text style={styles.clearText}>Clear All</Text>
          </TouchableOpacity>
          <Ionicons name="trash-outline" size={14} color="#9ca3af" />
        </View>
      </View>

      <View style={styles.chipsWrap}>
        {history.map((item) => (
          <TouchableOpacity
            key={item}
            activeOpacity={0.85}
            style={styles.chip}
            onPress={() => onSelectHistory?.(item)}
          >
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchHistorySection;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 12,
    paddingHorizontal: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2333',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  clearText: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '500',
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  chipText: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },
});
