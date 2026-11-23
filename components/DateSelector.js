
import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function DateSelector({
  dates,
  selectedDate,
  onSelect,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {dates.map((item) => {
        const active = selectedDate === item.date;

        return (
          <Pressable
            key={item.date}
            onPress={() => onSelect(item.date)}
            style={[
              styles.dateItem,
              active && styles.dateActive,
            ]}
          >
            <Text style={[
              styles.dateDay,
              active && styles.activeText,
            ]}>
              {item.day}
            </Text>

            <Text style={[
              styles.dateNumber,
              active && styles.activeText,
            ]}>
              {item.date.split('/')[0]}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  dateItem: {
    width: 57,
    height: 76,
    backgroundColor: '#19231D',
    borderRadius: 12,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#293A30',
  },
  dateActive: {
    backgroundColor: '#00A878',
    borderColor: '#00A878',
  },
  dateDay: {
    color: '#84948A',
    fontSize: 11,
  },
  dateNumber: {
    color: '#F2F5F0',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 7,
  },
  activeText: {
    color: '#101713',
    fontWeight: 'bold',
  },
});
