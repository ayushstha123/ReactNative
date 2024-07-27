import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                    <View style={[styles.card, styles.elevated]}>
                        <Text>🤖</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text>👀</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text>🥴</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text>😆</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text>👁️</Text>
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
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    elevated: {
        backgroundColor: "black",
        elevation: 10,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"black",
    }
})