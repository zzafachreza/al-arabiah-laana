import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyInput } from '../../components'
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import { color } from 'react-native-reanimated';

export default function Login({navigation}) {
    const [data, setData] = useState({
        email: '',
        password:'',
    });

    const handleLogin = () => {
        if (data.email.length == '' || data.password.length == '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Semua Field Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
            });
        } else if (data.email.length == '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Email Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
                
            });
        } else if (data.password.length == '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.white,
                color:colors.danger,
                message:'Password Harus Diisi!',
            });
        }  else {
            console.log('Data yang dikirim: ', data);

            axios
            .post('API KEY', data)
            .then((res) => {
                if (res.data.status == 'success') {
                    showMessage({
                        type:'success',
                        backgroundColor:colors.white,
                        color:colors.success,
                        message:res.data.message
                    });
                    navigation.navigate('Home');
                } else {
                    showMessage({
                        type:'danger',
                        backgroundColor:colors.white,
                        color:colors.danger,
                        message:res.data.message
                    });
                }
            
            })
            .catch((err) => {
                console.error('Error: ', err);
            })
        }
    };


  return (
    <View style={{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    }}>
      <ScrollView>
        
        <View style={{
            padding:10,
            marginTop:100
    
        }}>

        <View>
            <View>
                <Image style={{
                    width:197,
                    height:199,
                    alignSelf:"center"

                }} source={require('../../assets/logo.png')}/>
            </View>

            <Text style={{
                fontFamily:fonts.primary[600],
                textAlign:"center",
                color:colors.primary,
                fontSize:30,
                marginTop:80
            }}>Masuk</Text>
            
            <View style={{
                padding:10
            }}>
                <MyInput label="Username" placeholder="Masukan Username"/>
                <MyInput label="Kata Sandi" placeholder="Masukan Password" secureTextEntry={true}/>

                <TouchableNativeFeedback>
                    <View style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:30,
                        marginTop:20,
                    }}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            textAlign:'center',
                            color:colors.white,
                            fontSize:15,
                        }}>Masuk</Text>
                    </View>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback onPress={() => navigation.navigate("Register")}>
                    <Text style={{
                        fontFamily:fonts.primary[500],
                        textAlign:'center',
                        color:'black',
                        marginTop:68
                        
                    }}>Belum memiliki akun? Silakan <Text style={{
                        color:colors.primary,
                        fontFamily:fonts.primary[700]
                    }}>Daftar</Text></Text>
                </TouchableNativeFeedback>
            </View>
        </View>

        </View>


      </ScrollView>
    </View>
  )
}