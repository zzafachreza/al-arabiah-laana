import { View, Text, ImageBackground, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { fonts } from '../../utils'
import { MyInput } from '../../components'
import { colors } from '../../utils/colors'
import { showMessage } from 'react-native-flash-message'
import axios from 'axios'
import { Image } from 'react-native'
import { api_token, apiURL } from '../../utils/localStorage'

export default function Register({ navigation }) {

    const [data, setData] = useState({
        api_token: api_token,
        nama_lengkap: '',
        username: '',
        password: '',
        repassword: '',


    });

    const handleRegister = () => {
        if (data.nama_lengkap.length == '' || data.username.length == '' || data.password.length == '') {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Semua Field Harus Diisi!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10, },
                textStyle: { fontFamily: fonts.primary[600] }
            })
        } else if (data.nama_lengkap.length === '') {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Nama Harus Diisi!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10, },
                textStyle: { fontFamily: fonts.primary[600] }
            });
        } else if (data.username.length === '') {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Email Harus Diisi!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10, },
                textStyle: { fontFamily: fonts.primary[600] }
            });
        } else if (data.password.length === '') {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Password Harus Diisi!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10, },
                textStyle: { fontFamily: fonts.primary[600] }
            });
        } else if (data.password != data.repassword) {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Password Tidak Sama!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10, },
                textStyle: { fontFamily: fonts.primary[600] }
            });
        } else {
            console.log('Data yang dikirim: ', data);
            axios
                .post(apiURL + 'register', data)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status == 200) {
                        showMessage({
                            type: 'success',
                            backgroundColor: colors.success,
                            color: colors.white,
                            message: 'Selamat Anda Berhasil Mendaftar!'
                        });
                        navigation.navigate('Login');
                    } else {
                        showMessage({
                            type: 'danger',
                            backgroundColor: colors.danger,
                            color: colors.white,
                            message: res.data.message
                        });
                    }
                })
                .catch((err) => {
                    console.error('Error: ', err);
                });
        }
    };


    return (
        <View style={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: colors.white
        }}>
            <ScrollView>
                <View style={{
                    padding: 10,
                    marginTop: 10
                }}>

                    <View>
                        <Image style={{
                            width: 130,
                            height: 130,
                            alignSelf: 'center'
                        }} source={require('../../assets/logo.png')} />
                    </View>

                    <Text style={{
                        textAlign: "center",
                        fontFamily: fonts.primary[600],
                        fontSize: 25,
                        color: colors.primary,
                        marginTop: 20
                    }}>Daftar</Text>

                    <View style={{
                        padding: 10
                    }}>

                        <MyInput
                            label="Nama Lengkap"
                            placeholder="Isi Nama Lengkap"
                            value={data.nama_lengkap}
                            onChangeText={(x) => setData({ ...data, 'nama_lengkap': x })}
                        />
                        <MyInput
                            label="Username"
                            placeholder="Isi Username"
                            value={data.username}
                            onChangeText={(x) => setData({ ...data, 'username': x })}
                        />
                        <MyInput label="Kata Sandi"
                            placeholder="Isi Kata Sandi"
                            secureTextEntry={true}
                            value={data.password}
                            onChangeText={(x) => setData({ ...data, 'password': x })}
                        />
                        <MyInput
                            label="Konfirmasi Kata Sandi"
                            placeholder="Konfirmasi Kata Sandi"
                            secureTextEntry={true}
                            value={data.repassword}
                            onChangeText={(x) => setData({ ...data, 'repassword': x })}
                        />

                        <TouchableNativeFeedback onPress={handleRegister}>
                            <View style={{
                                padding: 10,
                                backgroundColor: colors.primary,
                                borderRadius: 30,
                                marginTop: 30

                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    textAlign: 'center',
                                    color: colors.white,
                                    fontSize: 15,

                                }}>Daftar</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback onPress={() => navigation.navigate("Login")}>
                            <Text style={{
                                fontFamily: fonts.primary[500],
                                textAlign: 'center',
                                color: 'black',
                                marginTop: 30

                            }}>Sudah memiliki akun? Silakan <Text style={{
                                color: colors.primary,
                                fontFamily: fonts.primary[700]
                            }}>Masuk</Text></Text>
                        </TouchableNativeFeedback>

                    </View>


                </View>
            </ScrollView>
        </View>
    )
}