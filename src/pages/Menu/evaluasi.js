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

export default function Kegiatan({ navigation }) {

  const isFocused = useIsFocused();

  const [data, setData] = useState([]);

  useEffect(() => {

    if (isFocused) {
      getTransaction();
    }


  }, [isFocused]);


  const getTransaction = () => {
    getData('user').then(u => {
      axios.post(apiURL + 'jawaban', {
        fid_pengguna: u.id_pengguna
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    })
  }


  const __renderItem = ({ item }) => {

    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Jawaban', item)}>
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
            }}>{moment(item.tanggal).format('DD MMMM YYYY')}</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 28
            }}>{item.jam}</Text>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>

            <Icon type='ionicon' name='clipboard-outline' size={40} color={colors.primary} />

          </View>

        </View>
      </TouchableWithoutFeedback>
    )

  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.border,

    }}>
      <MyHeader title="Evaluasi" />
      <FlatList data={data} renderItem={__renderItem} />
      <TouchableOpacity onPress={() => navigation.navigate('EvaluasiAdd')} style={{
        width: 60,
        height: 60,
        backgroundColor: colors.primary,
        marginRight: 10,
        alignSelf: 'flex-end',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      }}>
        <Icon type='ionicon' size={35} name='add-outline' color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})