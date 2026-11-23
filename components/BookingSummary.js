
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function BookingSummary({
  service,
  customerName,
  selectedDate,
  selectedTime,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        THÔNG TIN ĐẶT LỊCH
      </Text>

      <View style={styles.divider} />

      <Text style={styles.label}>KHÁCH HÀNG</Text>
      <Text style={styles.value}>{customerName}</Text>

      <Text style={styles.label}>DỊCH VỤ</Text>
      <Text style={styles.value}>{service.name}</Text>

      <Text style={styles.label}>THỜI LƯỢNG</Text>
      <Text style={styles.value}>{service.duration}</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>NGÀY HẸN</Text>
          <Text style={styles.value}>
            {selectedDate}/2026
          </Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>GIỜ HẸN</Text>
          <Text style={styles.value}>{selectedTime}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.label}>TỔNG CHI PHÍ</Text>
      <Text style={styles.price}>{service.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D3028',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#345044',
  },

  heading: {
    color: '#D6B56D',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  divider: {
    height: 1,
    backgroundColor: '#345044',
    marginVertical: 18,
  },

  label: {
    color: '#84948A',
    fontSize: 9,
    letterSpacing: 1.5,
    marginTop: 12,
  },

  value: {
    color: '#F2F5F0',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },

  row: {
    flexDirection: 'row',
    marginTop: 8,
  },

  column: {
    flex: 1,
  },

  price: {
    color: '#00A878',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
