// components/HeroBanner.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const bannerImg = require("../assets/banner.jpg")

const HeroBanner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={bannerImg}
        style={styles.bannerImage}
      />
      <Text style={styles.bannerText}>Welcome to Our Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerText: {
    backgroundColor: 'black',
    padding: 15,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 20,
  },
});

export default HeroBanner;
