// /app/product.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Product() {
    return (
        <View style={styles.container}>
            <Text>Product Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
