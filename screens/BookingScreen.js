
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

import DateSelector from '../components/DateSelector';
import TimeSlot from '../components/TimeSlot';

const dates = [
  { day: 'T2', date: '23/11' },
  { day: 'T3', date: '24/11' },
  { day: 'T4', date: '25/11' },
  { day: 'T5', date: '26/11' },
  { day: 'T6', date: '27/11' },
  { day: 'T7', date: '28/11' },
];

const times = [
  '08:00', '09:00', '10:00',
  '11:00', '13:00', '14:00',
  '15:00', '16:00', '17:00',
];

export default function BookingScreen({ route, navigation }) {
  const { service } = route.params;

  const [selectedDate, setSelectedDate] = useState('23/11');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [customerName, setCustomerName] = useState('');

  const handleBooking = () => {
    if (!customerName.trim()) {
      alert('Vui lòng nhập tên khách hàng!');
      return;
    }

    navigation.navigate('Confirmation', {
      service,
      customerName: customerName.trim(),
      selectedDate,
      selectedTime,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>‹  QUAY LẠI</Text>
        </Pressable>

        <Text style={styles.step}>STEP 02 / 03</Text>
      </View>

      {/* TITLE */}
      <Text style={styles.tag}>BOOK YOUR EXPERIENCE</Text>

      <Text style={styles.title}>
        Đặt lịch{'\n'}hẹn của bạn.
      </Text>

      <Text style={styles.subtitle}>
        Vui lòng chọn thời gian phù hợp.
      </Text>

      {/* SELECTED SERVICE */}
      <View style={styles.serviceBox}>
        <Text style={styles.serviceLabel}>
          DỊCH VỤ ĐÃ CHỌN
        </Text>

        <View style={styles.serviceRow}>
          <Text style={styles.serviceName}>
            {service.name}
          </Text>

          <Text style={styles.price}>
            {service.price}
          </Text>
        </View>

        <Text style={styles.duration}>
          {service.duration}
        </Text>
      </View>

      {/* DATE SELECTOR */}
      <Text style={styles.sectionTitle}>
        01. Chọn ngày
      </Text>

      <Text style={styles.sectionDesc}>
        THÁNG 11, 2026
      </Text>

      <DateSelector
        dates={dates}
        selectedDate={selectedDate}
        onSelect={setSelectedDate}
      />

      {/* TIME SELECTOR */}
      <Text style={styles.sectionTitle}>
        02. Chọn giờ
      </Text>

      <TimeSlot
        times={times}
        selectedTime={selectedTime}
        onSelect={setSelectedTime}
      />

      {/* CUSTOMER INFORMATION */}
      <Text style={styles.sectionTitle}>
        03. Thông tin khách hàng
      </Text>

      <Text style={styles.inputLabel}>
        HỌ VÀ TÊN
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn..."
        placeholderTextColor="#75857A"
        value={customerName}
        onChangeText={setCustomerName}
      />

      {/* CONFIRM BUTTON */}
      <Pressable
        style={styles.confirmButton}
        onPress={handleBooking}
      >
        <Text style={styles.confirmText}>
          XÁC NHẬN ĐẶT LỊCH  →
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    marginBottom: 30,
  },

  backText: {
    color: '#00A878',
    fontWeight: 'bold',
    fontSize: 12,
  },

  step: {
    color: '#84948A',
    fontSize: 10,
    letterSpacing: 2,
  },

  tag: {
    color: '#D6B56D',
    fontSize: 10,
    letterSpacing: 2,
  },

  title: {
    color: '#F2F5F0',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    marginTop: 12,
  },

  subtitle: {
    color: '#84948A',
    fontSize: 13,
    marginTop: 10,
  },

  serviceBox: {
    backgroundColor: '#1D3028',
    borderRadius: 14,
    padding: 17,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#345044',
  },

  serviceLabel: {
    color: '#D6B56D',
    fontSize: 10,
    letterSpacing: 1,
  },

  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
    gap: 8,
  },

  serviceName: {
    color: '#F2F5F0',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },

  price: {
    color: '#00A878',
    fontWeight: 'bold',
    fontSize: 13,
  },

  duration: {
    color: '#84948A',
    fontSize: 11,
    marginTop: 7,
  },

  sectionTitle: {
    color: '#F2F5F0',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 28,
  },

  sectionDesc: {
    color: '#D6B56D',
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 9,
  },

  activeText: {
    color: '#101713',
    fontWeight: 'bold',
  },

  inputLabel: {
    color: '#D6B56D',
    fontSize: 10,
    letterSpacing: 1,
    marginTop: 18,
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#19231D',
    borderWidth: 1,
    borderColor: '#345044',
    borderRadius: 10,
    padding: 15,
    color: '#F2F5F0',
    fontSize: 14,
  },

  confirmButton: {
    backgroundColor: '#00A878',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 28,
  },

  confirmText: {
    color: '#101713',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  footer: {
    color: '#607066',
    fontSize: 9,
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 25,
    marginBottom: 30,
  },
});
