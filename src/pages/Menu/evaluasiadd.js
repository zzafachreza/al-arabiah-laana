import { View, Text, ScrollView, TextInput, StyleSheet, TouchableNativeFeedback, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { apiURL, getData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';

export default function EvaluasiAdd({ navigation, route }) {

  const [user, setUser] = useState({});

  const __renderItem = ({ item, index }) => {
    return (
      <View style={styles.questionContainer}>
        {/* TEKS ARAB */}
        <View style={styles.arabicTextContainer}>
          <Text style={styles.arabicText}>{item.soal}</Text>
          <Text style={styles.questionNumber}> .{item.nomor}</Text>
        </View>

        {/* TEXT INPUT */}
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={x => {
              let tmp = [...data];
              tmp[index].jawaban = x;
              setData(tmp);

              axios.post(apiURL)
            }}
            style={styles.textInput}
            multiline={true} // Mengaktifkan multiline
            placeholder="Isi jawaban disini"
            placeholderTextColor={colors.grey}
            textAlignVertical="top" // Memastikan teks dimulai dari atas
            textAlign="left" // Teks dimulai dari kiri
          />
        </View>
      </View>
    )
  }

  const isFocused = useIsFocused();

  const [data, setData] = useState([]);

  useEffect(() => {

    getData('user').then(u => setUser(u));
    if (isFocused) {
      getTransaction();
    }


  }, [isFocused]);


  const getTransaction = () => {
    axios.post(apiURL + 'soal').then(res => {
      console.log(res.data);
      setData(res.data);
    })
  }


  return (
    <View style={styles.container}>
      <MyHeader title="Evaluasi" />

      <ScrollView>
        <View style={styles.contentContainer}>
          {/* SOAL 1 */}

          <FlatList data={data} renderItem={__renderItem} />

          <TouchableNativeFeedback onPress={() => {
            axios.post(apiURL + 'insert_soal', {
              soal: data,
              fid_pengguna: user.id_pengguna,
            }).then(res => {
              console.log(res.data);
              if (res.data.status == 200) {
                showMessage({
                  type: 'success',
                  message: res.data.message
                });
                navigation.goBack();
              }
            })
          }}>
            <View style={{
              padding: 10,
              backgroundColor: colors.primary,
              borderRadius: 10,
              marginTop: 20
            }}>
              <Text style={{
                fontFamily: fonts.primary[600],
                textAlign: "center",
                color: 'white',

              }}>Simpan Jawaban</Text>

            </View>
          </TouchableNativeFeedback>


        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: 10,
  },
  questionContainer: {
    padding: 10,
  },
  arabicTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10, // Memberikan jarak antara teks dan input
  },
  arabicText: {
    fontFamily: fonts.secondary[500],
    fontSize: 16,
  },
  questionNumber: {
    fontFamily: fonts.secondary[500],
    fontSize: 16,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: colors.grey,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  textInput: {
    height: 69, // Tinggi TextInput
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.primary,
    textAlign: 'left', // Teks dimulai dari kiri
    backgroundColor: '#F5F5F5',

  },
});