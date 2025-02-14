import { View, Text, ImageBackground, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { fonts } from '../../utils'
import { MyInput } from '../../components'
import { colors } from '../../utils/colors'
import { showMessage } from 'react-native-flash-message'
import axios from 'axios'
import { Image } from 'react-native'

export default function Register({navigation}) {

    const [data, setData] = useState({
        nama:'',
        email:'',
        telepon:'',
        alamat:'',
        password:'',


    });

    const handleRegister = () => {
        if (data.nama.length == '' || data.email.length == '' || data.telepon.length == '' || data.alamat.length == '' || data.password.length == '') { 
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Semua Field Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
            })
        } else if (data.nama.length === '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Nama Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.email.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Email Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.telepon.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Telepon Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.alamat.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Alamat Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.password.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Password Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else {
        console.log('Data yang dikirim: ', data);
        axios
        .post('API KEY', data)
        .then((res) => {
            if (res.data.status == 'success') {
                showMessage({
                    type:'success',
                    backgroundColor:colors.success,
                    color:colors.white,
                    message:'Selamat Anda Berhasil Mendaftar!'
                });
                navigation.navigate('Login');
            } else {
                showMessage({
                    type:'danger',
                    backgroundColor:colors.danger,
                    color:colors.white,
                    message:'Akun Sudah Terdaftar!'
                });
            }
        })
        .catch((err) => {
            console.error('Error: ', err);
        });
     }
    };


  return (
    <View  style={{
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor:colors.white
    }}>
      <ScrollView>
        <View style={{
            padding:10,
            marginTop:18
        }}>

        <View>
            <Image style={{
                width:197,
                height:199,
                alignSelf:'center'
            }} source={require('../../assets/logo.png')}/>
        </View>

        <Text style={{
            textAlign:"center",
            fontFamily:fonts.primary[600],
            fontSize:30,
            color:colors.primary,
            marginTop:30
        }}>Daftar</Text>

        <View style={{
            padding:10
        }}>

        <MyInput label="Nama Lengkap" placeholder="Isi Nama Lengkap"/>
        <MyInput label="Username" placeholder="Isi Username"/>
        <MyInput label="Kata Sandi" placeholder="Isi Kata Sandi" secureTextEntry={true}/>
        <MyInput label="Konfirmasi Kata Sandi" placeholder="Konfirmasi Kata Sandi" secureTextEntry={true}/>

        <TouchableNativeFeedback>
            <View style={{
                padding:10,
                backgroundColor:colors.primary,
                borderRadius:30,
                marginTop:30

            }}>
                <Text style={{
                    fontFamily:fonts.primary[600],
                    textAlign:'center',
                    color:colors.white,
                    fontSize:15,
          
                }}>Daftar</Text>
            </View>
        </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => navigation.navigate("Login")}>
                            <Text style={{
                                fontFamily:fonts.primary[500],
                                textAlign:'center',
                                color:'black',
                                marginTop:30
                                
                            }}>Sudah memiliki akun? Silakan <Text style={{
                                color:colors.primary,
                                fontFamily:fonts.primary[700]
                            }}>Masuk</Text></Text>
                        </TouchableNativeFeedback>

        </View>


        </View>
      </ScrollView>
    </View>
  )
}