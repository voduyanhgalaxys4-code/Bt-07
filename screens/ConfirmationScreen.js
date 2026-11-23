
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

import BookingSummary from '../components/BookingSummary';

export default function ConfirmationScreen({ route, navigation }) {
  const {
    service,
    customerName,
    selectedDate,
    selectedTime,
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.step}>STEP 03 / 03</Text>
      </View>

      <View style={styles.successIcon}>
        <Text style={styles.check}>✓</Text>
      </View>

      <Text style={styles.tag}>BOOKING SUCCESSFUL</Text>

      <Text style={styles.title}>
        Đặt lịch{'\n'}thành công!
      </Text>

      <Text style={styles.subtitle}>
        Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ.
        Thông tin lịch hẹn của bạn được ghi nhận bên dưới.
      </Text>

      <BookingSummary
        service={service}
        customerName={customerName}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />

      <Pressable
        style={styles.homeButton}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.homeButtonText}>
          QUAY VỀ TRANG CHỦ  →
        </Text>
      </Pressable>

      <Text style={styles.footer}>
        BOOKING.  •  YOUR TIME, YOUR STYLE
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101713',
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'flex-end',
    paddingTop: 50,
    marginBottom: 35,
  },

  step: {
    color: '#84948A',
    fontSize: 10,
    letterSpacing: 2,
  },

  successIcon: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#1D3028',
    borderWidth: 1,
    borderColor: '#00A878',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  check: {
    color: '#00A878',
    fontSize: 35,
    fontWeight: 'bold',
  },

  tag: {
    color: '#D6B56D',
    fontSize: 10,
    letterSpacing: 2,
  },

  title: {
    color: '#F2F5F0',
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 42,
    marginTop: 12,
  },

  subtitle: {
    color: '#84948A',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 12,
    marginBottom: 28,
  },

  homeButton: {
    backgroundColor: '#00A878',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
  },

  homeButtonText: {
    color: '#101713',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  footer: {
    color: '#607066',
    fontSize: 9,
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 28,
    marginBottom: 35,
  },
});
