import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contact=[
        {
            uid:1,
            name:'Ayush Shrestha',
            status:'Make your Gpay Smooth',
            imageUrl:'https://th.bing.com/th/id/OIP.WQvPJdjEpvh8OTXB-NBfJwHaHw?rs=1&pid=ImgDetMain'
        },
        {
          uid:2,
          name:'Khir Shrestha',
          status:'Make your Gpay Smooth',
          imageUrl:'https://img.favpng.com/24/3/18/john-a-wilson-building-charles-allen-council-of-the-district-of-columbia-councillor-png-favpng-n0v6XeE9DkWQyE59nYZUXKVmV.jpg'
      },
      {
        uid:3,
        name:'Bir Shrestha',
        status:'Make your Gpay Smooth',
        imageUrl:'https://th.bing.com/th/id/OIP.M0j6XmMu7fUPwJjKiy3REAHaHa?w=500&h=500&rs=1&pid=ImgDetMain'
    },
    {
      uid:4,
      name:'Sam Shrestha',
      status:'Make your Gpay Smooth',
      imageUrl:'https://th.bing.com/th/id/OIP.JkaFtemzRy5asvO0B7iCLQHaHb?w=989&h=992&rs=1&pid=ImgDetMain'
  },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
       {contact.map(({uid,name,status,imageUrl})=>(
        <View key={uid} style={styles.userCard}>
          <Image style={styles.userImage} source={{
            uri:imageUrl
          }}/>
          <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userStatus}>{status}</Text>
          </View>
          </View>
       ))}
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
  backgroundColor:"#84b87b",
   padding:10,

},
  userCard:{
    backgroundColor:"#436e3b",
    margin:5,
    padding:10,
    flex:1,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center'
  },
  userImage:{
    height:60,
    width:60,
    borderRadius:'50%',
    marginRight:20
  },
  userName:{
    fontSize:16,
    fontWeight:'bold'
  },
  userStatus:{},

})