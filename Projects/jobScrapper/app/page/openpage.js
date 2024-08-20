import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function openPage() {
  return (
    <View>
      <Text>openPage</Text>
      <Pressable onPress={()=>router.replace('/tabs/Home')} style={{marginTop:16}}>
              <Text style={{color:"gray",textAlign:'center',fontSize:15,fontFamily:'arial'}}>continue</Text>
            </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})