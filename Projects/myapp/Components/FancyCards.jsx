import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{
            uri:'https://th.bing.com/th/id/R.6fa9f6446405a7057a372ce8333f3e88?rik=v%2fLQgBSRUBKZQg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fBerserk-HD-Wallpapers.jpg&ehk=M0Q70fTrIyCvY%2fATeGVLB14v%2fNtaj28kTLT3%2fqfi5o0%3d&risl=&pid=ImgRaw&r=0'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>BERSERK</Text>
            <Text style={styles.cardLabel}>Japan</Text>
            <Text style={styles.cardGenre}>Action, Adventure Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem debitis iste!</Text>

        </View>

        
      </View>

      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{
            uri:'https://th.bing.com/th/id/R.6fa9f6446405a7057a372ce8333f3e88?rik=v%2fLQgBSRUBKZQg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fBerserk-HD-Wallpapers.jpg&ehk=M0Q70fTrIyCvY%2fATeGVLB14v%2fNtaj28kTLT3%2fqfi5o0%3d&risl=&pid=ImgRaw&r=0'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>BERSERK</Text>
            <Text style={styles.cardLabel}>Japan</Text>
            <Text style={styles.cardGenre}>Action, Adventure Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem debitis iste!</Text>

        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: "bold",
        margin: 20
    },
    card:{
        width:350,
        height:360,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:12,
        
    },
    cardElevated:{
        backgroundColor:"black",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,

       
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:"white",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:6,

    },
    cardLabel:{
        fontFamily:'Arial',
        color:"white",
        fontSize:15,
        fontWeight:'700',
        marginBottom:4,
    },
    cardGenre:{
        fontFamily:'Arial',
        color:"white",
        fontSize:12,
        fontWeight:'ultralight',
        marginBottom:12,
        flexShrink:1,
        marginTop:6
    }

})