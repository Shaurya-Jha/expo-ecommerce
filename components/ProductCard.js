import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Card, Text, Button } from "react-native-paper"
import { useRouter } from 'expo-router'

const ProductCard = ({ prodTitle, prodDesc, prodImg, id }) => {

    const router = useRouter();

    return (
        <Card style={styles.cards} onPress={() => router.push(`/${id}`)}>
            <Card.Cover source={prodImg} style={styles.cardsImg} />
            <Card.Content style={styles.content}>
                <Text variant='headlineSmall' style={styles.text}>{prodTitle}</Text>
                <Text variant='bodyMedium' style={styles.text}>{prodDesc}</Text>
                {/* <Text variant='bodyMedium' style={styles.text}>{prodPrice}</Text> */}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    cards: {
        margin: 15,
        width: 250,
        backgroundColor: 'white'
    },
    cardsImg: {
        padding: 0
    },
    content: {
        marginTop: 10,
        color: '#000',
        backgroundColor: 'white',
        minHeight: 250,
    },
    text: {
        marginTop: 10,
        color: 'black'
    },
})

export default ProductCard