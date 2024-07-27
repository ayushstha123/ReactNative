import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardFour]}>
                        <Text>Red</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: "bold",
        margin: 20
    },
    container: {
        flexDirection: "row",
        padding: 4,
        justifyContent: "center"
        },
    card: {
        width: '20%',
        height: 100,
        margin: 8,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    cardOne: {
        backgroundColor: "red"
    },
    cardTwo: {
        backgroundColor: "green"
    },
    cardThree: {
        backgroundColor: "blue"
    },
    cardFour: {
        backgroundColor: "black"
    },
})

