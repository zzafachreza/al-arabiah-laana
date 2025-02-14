import { View, Text, ScrollView, Dimensions, TouchableNativeFeedback} from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyHeader } from '../../components'
import { Image } from 'react-native'


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height

export default function IsiMateri({navigation}) {
 
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.secondary
    }}>
     

      <ScrollView contentContainerStyle={{flexGrow:1}}  showsVerticalScrollIndicator={false}>
        <View style={{
            alignItems:'center',
            top:-70
        }}>

        {/* HALAMAN INI NANTI MUNCULIN PDF? */}
        
       <TouchableNativeFeedback onPress={()=> navigation.goBack()}>
       <Image style={{
           width: screenWidth, 
            height: 1166,
            resizeMode: 'contain', // Pastikan gambar full layar
        }} source={require('../../assets/dump_materi.png')}/>
       </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </View>
  )
}