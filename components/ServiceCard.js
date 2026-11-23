
import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function ServiceCard({ service, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: service.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>{service.name}</Text>

        <Text style={styles.duration}>
          {service.duration}
        </Text>

        <View style={styles.bottom}>
          <Text style={styles.price}>{service.price}</Text>
          <Text style={styles.arrow}>↗</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#19231D',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#293A30',
  },
  image: {
    width: '100%',
    height: 115,
  },
  content: {
    padding: 12,
  },
  name: {
    color: '#F2F5F0',
    fontSize: 13,
    fontWeight: 'bold',
    minHeight: 35,
  },
  duration: {
    color: '#84948A',
    fontSize: 11,
    marginTop: 5,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    color: '#00A878',
    fontSize: 13,
    fontWeight: 'bold',
  },
  arrow: {
    color: '#D6B56D',
    fontSize: 18,
  },
});
