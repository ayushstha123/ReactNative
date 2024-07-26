import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Whats new in Ayush Brain
                    </Text>
                </View>

                <Image source={{
                    uri: 'https://th.bing.com/th/id/OIP.TdjMGoc5f53QLt9rCF22nwHaFO?rs=1&pid=ImgDetMain'
                }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Omnis quia repellat aperiam, eum vero voluptates. In vero 
                        impedit iure velit.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={()=>openWebsite('https://www.bing.com/search?pglt=675&q=asthetic+timer&cvid=18da1a3f183642fb8a2905642f0d721d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIxMzRqMGoxqAIIsAIB&FORM=ANNTA1&PC=ACTS')}> 
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>openWebsite('https://www.bing.com/search?pglt=675&q=asthetic+timer&cvid=18da1a3f183642fb8a2905642f0d721d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIxMzRqMGoxqAIIsAIB&FORM=ANNTA1&PC=ACTS')}> 
                        <Text style={styles.socialLinks}>follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
    card: {
        width:350,
        height:360,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:12,
    },
    elevatedCard: {
        backgroundColor:"orange",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4,



    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    headerText:{
        color:'black',
        fontSize:16,
        fontWeight:'600',

    },
    cardImage:{
        height:180,
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLinks:{
        fontSize:16,
        color:'black',
        backgroundColor:"white",
        paddingHorizontal:20,
        borderRadius:6,
        paddingVertical:10

    }

})