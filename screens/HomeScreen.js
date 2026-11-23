
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import ServiceCard from '../components/ServiceCard';

const services = [
  {
    id: '1',
    name: 'Chăm sóc da mặt',
    duration: '60 phút',
    price: '250.000đ',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
  },
  {
    id: '2',
    name: 'Massage thư giãn',
    duration: '90 phút',
    price: '350.000đ',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
  },
  {
    id: '3',
    name: 'Chăm sóc tóc',
    duration: '45 phút',
    price: '180.000đ',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
  },
  {
    id: '4',
    name: 'Chăm sóc móng',
    duration: '40 phút',
    price: '150.000đ',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subtitle}>WELCOME TO</Text>
          <Text style={styles.logo}>
            BOOKING<Text style={styles.logoGreen}>.</Text>
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
      </View>

      {/* BANNER */}
      <View style={styles.banner}>
        <Text style={styles.bannerTag}>
          PREMIUM EXPERIENCE
        </Text>

        <Text style={styles.bannerTitle}>
          Chăm sóc bản thân,{'\n'}bắt đầu từ hôm nay.
        </Text>

        <Text style={styles.bannerDesc}>
          Đặt lịch dễ dàng – Trải nghiệm khác biệt.
        </Text>

        <View style={styles.bannerLine} />
      </View>

      {/* SERVICE HEADER */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>
            Dịch vụ của chúng tôi
          </Text>

          <Text style={styles.sectionDesc}>
            Lựa chọn trải nghiệm dành cho bạn
          </Text>
        </View>

        <Text style={styles.count}>04 DỊCH VỤ</Text>
      </View>

      {/* SERVICE LIST */}
      <View style={styles.serviceList}>
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            service={item}
            onPress={() =>
              navigation.navigate('ServiceDetail', {
                service: item,
              })
            }
          />
        ))}
      </View>

      {/* FOOTER */}
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
    paddingTop: 55,
    paddingBottom: 25,
  },

  subtitle: {
    color: '#D6B56D',
    fontSize: 10,
    letterSpacing: 3,
  },

  logo: {
    color: '#F2F5F0',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 2,
  },

  logoGreen: {
    color: '#00A878',
  },

  avatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#1D3028',
    borderWidth: 1,
    borderColor: '#00A878',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#00A878',
    fontSize: 18,
    fontWeight: 'bold',
  },

  banner: {
    backgroundColor: '#1D3028',
    borderRadius: 20,
    padding: 23,
    minHeight: 195,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#345044',
    marginBottom: 30,
  },

  bannerTag: {
    color: '#D6B56D',
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 15,
  },

  bannerTitle: {
    color: '#F2F5F0',
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 34,
  },

  bannerDesc: {
    color: '#A8B8AE',
    fontSize: 12,
    marginTop: 12,
  },

  bannerLine: {
    width: 45,
    height: 3,
    backgroundColor: '#00A878',
    marginTop: 18,
    borderRadius: 5,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  sectionTitle: {
    color: '#F2F5F0',
    fontSize: 19,
    fontWeight: 'bold',
  },

  sectionDesc: {
    color: '#84948A',
    fontSize: 11,
    marginTop: 5,
  },

  count: {
    color: '#00A878',
    fontSize: 9,
    letterSpacing: 1,
  },

  serviceList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  footer: {
    color: '#607066',
    fontSize: 9,
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 15,
    marginBottom: 25,
  },
});
