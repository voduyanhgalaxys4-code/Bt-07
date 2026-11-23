
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function TimeSlot({
  times,
  selectedTime,
  onSelect,
}) {
  return (
    <View style={styles.container}>
      {times.map((time) => (
        <Pressable
          key={time}
          onPress={() => onSelect(time)}
          style={[
            styles.timeItem,
            selectedTime === time && styles.timeActive,
          ]}
        >
          <Text
            style={[
              styles.timeText,
              selectedTime === time && styles.activeText,
            ]}
          >
            {time}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 15,
  },

  timeItem: {
    width: '30%',
    paddingVertical: 13,
    backgroundColor: '#19231D',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#293A30',
  },

  timeActive: {
    backgroundColor: '#00A878',
    borderColor: '#00A878',
  },

  timeText: {
    color: '#F2F5F0',
    fontSize: 13,
  },

  activeText: {
    color: '#101713',
    fontWeight: 'bold',
  },
});
