import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';

export default function Jawaban({ navigation, route }) {
    const ITEM = route.params;
    const isFocused = useIsFocused();

    const [data, setData] = useState([]);

    useEffect(() => {

        if (isFocused) {
            getTransaction();
        }


    }, [isFocused]);


    const getTransaction = () => {
        axios.post(apiURL + 'jawaban_detail', {
            kode: route.params.kode
        }).then(res => {
            console.log(res.data);
            setData(res.data);
        })
    }


    const __renderItem = ({ item }) => {

        return (

            <View style={{
                marginHorizontal: 10,
                borderBottomWidth: 1,
                paddingVertical: 5,
                borderBottomColor: colors.white,
                backgroundColor: colors.white,
                padding: 10,
                borderRadius: 10,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 20
                    }}>{item.soal}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25,
                    }}>Jawaban : <Text style={{
                        color: colors.primary
                    }}>{item.jawaban}</Text></Text>
                </View>



            </View>

        )

    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.border,

        }}>
            <MyHeader title="Jawaban" />
            <Text style={{
                padding: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 18,
            }}>Tanggal : {moment(ITEM.tanggal).format('DD MMMM YYYY')}{'\n'}Pukul : {ITEM.jam}</Text>
            <FlatList data={data} renderItem={__renderItem} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})