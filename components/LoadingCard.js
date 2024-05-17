import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, ActivityIndicator, MD2Colors } from 'react-native-paper'

const LoadingCard = () => {
    return (
        <Card style={styles.cards}>
            <ActivityIndicator animating={true} color={MD2Colors.green600} />
        </Card>
    )
}

const styles = StyleSheet.create({
    cards: {
        margin: 15,
        width: 250,
        padding: 125,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default LoadingCard