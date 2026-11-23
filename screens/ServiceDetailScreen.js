
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function ServiceDetailScreen({ route, navigation }) {
  const { service } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>‹  QUAY LẠI</Text>
      </Pressable>

      <Image
        source={{ uri: service.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.tag}>PREMIUM SERVICE</Text>

        <Text style={styles.title}>{service.name}</Text>

        <Text style={styles.description}>
          Tận hưởng dịch vụ chăm sóc chuyên nghiệp,
          mang đến cho bạn những phút giây thư giãn
          và trải nghiệm tuyệt vời.
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>THỜI LƯỢNG</Text>
            <Text style={styles.infoValue}>{service.duration}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>GIÁ DỊCH VỤ</Text>
            <Text style={styles.price}>{service.price}</Text>
          </View>
        </View>

        <View style={styles.noteBox}>
          <Text style={styles.noteTitle}>THÔNG TIN DỊCH VỤ</Text>
          <Text style={styles.noteText}>
            • Nhân viên phục vụ chuyên nghiệp.
          </Text>
          <Text style={styles.noteText}>
            • Không gian sạch sẽ, thoải mái.
          </Text>
          <Text style={styles.noteText}>
            • Có thể lựa chọn thời gian phù hợp.
          </Text>
        </View>

        <Pressable
          style={styles.bookButton}
          onPress={() =>
            navigation.navigate('Booking', { service })
          }
        >
          <Text style={styles.bookButtonText}>
            ĐẶT LỊCH NGAY  →
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101713',
  },
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 18,
  },
  backText: {
    color: '#00A878',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  image: {
    width: '100%',
    height: 260,
  },
  content: {
    padding: 22,
  },
  tag: {
    color: '#D6B56D',
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: '#F2F5F0',
    fontSize: 27,
    fontWeight: 'bold',
  },
  description: {
    color: '#9BA99F',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 13,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    gap: 12,
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#1D3028',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#345044',
  },
  infoLabel: {
    color: '#84948A',
    fontSize: 10,
    letterSpacing: 1,
  },
  infoValue: {
    color: '#F2F5F0',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    color: '#00A878',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  noteBox: {
    backgroundColor: '#19231D',
    padding: 18,
    borderRadius: 14,
    marginTop: 22,
  },
  noteTitle: {
    color: '#D6B56D',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 13,
    letterSpacing: 1,
  },
  noteText: {
    color: '#B8C5BC',
    fontSize: 13,
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: '#00A878',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  bookButtonText: {
    color: '#101713',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
