import { View, Text, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyHeader } from '../../components'

export default function Evaluasi({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white,
    }}>
      <MyHeader title="Evaluasi"/>

      <ScrollView>
        <View style={{
            padding:10
        }}>


        </View>
      </ScrollView>

      <View style={{
        padding:20,
        flexDirection:"row",
        justifyContent:"flex-end"
      }}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('EvaluasiAdd')}>
        <View style={{
            padding:10,

        }}>
            <Image style={{
                width:50,
                height:50
            }} source={require('../../assets/add.png')}/>
        </View>
      </TouchableWithoutFeedback>

      </View>
    </View>
  )
}