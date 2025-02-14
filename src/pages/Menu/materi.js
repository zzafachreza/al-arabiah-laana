import { View, Text, ScrollView, ImageBackground, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors } from 'react-native-elements'
import { MyHeader } from '../../components'
import { fonts } from '../../utils'

export default function Materi({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white,

    }}>
    <MyHeader title="Materi"/>
     <ScrollView>
        <View style={{
            padding:10,

        }}>

       
        <TouchableNativeFeedback onPress={()=> navigation.navigate('IsiMateri')}>
        <View style={{
            alignItems:'center',
            padding:10
        }}>
            <ImageBackground style={{
                 flex: 1,
                resizeMode: "cover",
                justifyContent: "flex-end",
                height:191,
                width:321,
            }}
                source={require('../../assets/materi_img.png')}
            > 
            <View style={{
                 backgroundColor: "rgba(0, 0, 0, 0.5)", // Efek gradasi hitam
                 padding: 20,
                 borderBottomLeftRadius:10,
                 borderBottomRightRadius:10,
            }}>
                <Text style={{
                    fontFamily:fonts.primary[600],
                    color:colors.white,
                    fontSize:14,

                }}>
                    Materi 1
                </Text>
            </View>

            </ImageBackground>
        </View>
        </TouchableNativeFeedback>
    

        <TouchableNativeFeedback>
        <View style={{
            alignItems:'center',
            padding:10
        }}>
            <ImageBackground style={{
                 flex: 1,
                resizeMode: "cover",
                justifyContent: "flex-end",
                height:191,
                width:321,
            }}
                source={require('../../assets/materi_img.png')}
            > 
            <View style={{
                 backgroundColor: "rgba(0, 0, 0, 0.5)", // Efek gradasi hitam
                 padding: 20,
                 borderBottomLeftRadius:10,
                 borderBottomRightRadius:10,
            }}>
                <Text style={{
                    fontFamily:fonts.primary[600],
                    color:colors.white,
                    fontSize:14,

                }}>
                    Materi 2
                </Text>
            </View>

            </ImageBackground>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
        <View style={{
            alignItems:'center',
            padding:10
        }}>
            <ImageBackground style={{
                 flex: 1,
                resizeMode: "cover",
                justifyContent: "flex-end",
                height:191,
                width:321,
            }}
                source={require('../../assets/materi_img.png')}
            > 
            <View style={{
                 backgroundColor: "rgba(0, 0, 0, 0.5)", // Efek gradasi hitam
                 padding: 20,
                 borderBottomLeftRadius:10,
                 borderBottomRightRadius:10,
            }}>
                <Text style={{
                    fontFamily:fonts.primary[600],
                    color:colors.white,
                    fontSize:14,

                }}>
                    Materi 3
                </Text>
            </View>

            </ImageBackground>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
        <View style={{
            alignItems:'center',
            padding:10
        }}>
            <ImageBackground style={{
                 flex: 1,
                resizeMode: "cover",
                justifyContent: "flex-end",
                height:191,
                width:321,
                
            }}
                source={require('../../assets/materi_img.png')}
            > 
            <View style={{
                 backgroundColor: "rgba(0, 0, 0, 0.5)", // Efek gradasi hitam
                 padding: 20,
                 borderBottomLeftRadius:10,
                 borderBottomRightRadius:10,
            }}>
                <Text style={{
                    fontFamily:fonts.primary[600],
                    color:colors.white,
                    fontSize:14,

                }}>
                    Materi 4
                </Text>
            </View>

            </ImageBackground>
        </View>
        </TouchableNativeFeedback>
        
        </View>
     </ScrollView>
    </View>
  )
}