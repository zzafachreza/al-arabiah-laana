import { View, Text, ScrollView, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';

export default function EvaluasiAdd({ navigation }) {
  return (
    <View style={styles.container}>
      <MyHeader title="Evaluasi" />

      <ScrollView>
        <View style={styles.contentContainer}>
        {/* SOAL 1 */}
          <View style={styles.questionContainer}>
            {/* TEKS ARAB */}
            <View style={styles.arabicTextContainer}>
              <Text style={styles.arabicText}>إِلَى أَيْنَ ذَهَبَ الكَاتِب ؟</Text>
              <Text style={styles.questionNumber}> .1</Text>
            </View>

            {/* TEXT INPUT */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true} // Mengaktifkan multiline
                placeholder="Isi jawaban disini"
                placeholderTextColor={colors.grey}
                textAlignVertical="top" // Memastikan teks dimulai dari atas
                textAlign="left" // Teks dimulai dari kiri
              />
            </View>
          </View>

            {/* SOAL 2 */}
            <View style={styles.questionContainer}>
            {/* TEKS ARAB */}
            <View style={styles.arabicTextContainer}>
              <Text style={styles.arabicText}> خَلَعَ لِبَاسَهُ وَلَبِسَ لِبَاسَ الْإِحْرَامِ ؟</Text>
              <Text style={styles.questionNumber}> .2</Text>
            </View>

            {/* TEXT INPUT */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true} // Mengaktifkan multiline
                placeholder="Isi jawaban disini"
                placeholderTextColor={colors.grey}
                textAlignVertical="top" // Memastikan teks dimulai dari atas
                textAlign="left" // Teks dimulai dari kiri
              />
            </View>
          </View>


            {/* SOAL 3 */}
            <View style={styles.questionContainer}>
            {/* TEKS ARAB */}
            <View style={styles.arabicTextContainer}>
              <Text style={styles.arabicText}>كَمْ شَوْطًا طَافَ الكَاتِبِ حَوْلَ الكَعْبَة ؟</Text>
              <Text style={styles.questionNumber}> .3</Text>
            </View>

            {/* TEXT INPUT */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true} // Mengaktifkan multiline
                placeholder="Isi jawaban disini"
                placeholderTextColor={colors.grey}
                textAlignVertical="top" // Memastikan teks dimulai dari atas
                textAlign="left" // Teks dimulai dari kiri
              />
            </View>
          </View>

            {/* SOAL 4*/}
            <View style={styles.questionContainer}>
            {/* TEKS ARAB */}
            <View style={styles.arabicTextContainer}>
              <Text style={styles.arabicText}>سَعَى الكَاتِب بَيْنَ الصَّفَا والمروة ؟</Text>
              <Text style={styles.questionNumber}> .4</Text>
            </View>

            {/* TEXT INPUT */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true} // Mengaktifkan multiline
                placeholder="Isi jawaban disini"
                placeholderTextColor={colors.grey}
                textAlignVertical="top" // Memastikan teks dimulai dari atas
                textAlign="left" // Teks dimulai dari kiri
              />
            </View>
          </View>


           {/* SOAL 5 */}
            <View style={styles.questionContainer}>
            {/* TEKS ARAB */}
            <View style={styles.arabicTextContainer}>
              <Text style={styles.arabicText}>مَتَى غَادَرَ الكاتب إلى المدينة ؟</Text>
              <Text style={styles.questionNumber}> .5</Text>
            </View>

            {/* TEXT INPUT */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true} // Mengaktifkan multiline
                placeholder="Isi jawaban disini"
                placeholderTextColor={colors.grey}
                textAlignVertical="top" // Memastikan teks dimulai dari atas
                textAlign="left" // Teks dimulai dari kiri
              />
            </View>
          </View>


              {/* SOAL 5 */}
              <View style={styles.questionContainer}>
            {/* TEKS ARAB */}
            <View style={styles.arabicTextContainer}>
              <Text style={styles.arabicText}>؟ رأى الكاتب المسجد النَّبَوِي العَظِيم</Text>
              <Text style={styles.questionNumber}> .6</Text>
            </View>

            {/* TEXT INPUT */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true} // Mengaktifkan multiline
                placeholder="Isi jawaban disini"
                placeholderTextColor={colors.grey}
                textAlignVertical="top" // Memastikan teks dimulai dari atas
                textAlign="left" // Teks dimulai dari kiri
              />
            </View>
          </View>

          <TouchableNativeFeedback>
          <View style={{
            padding:10,
            backgroundColor:colors.primary,
            borderRadius:10,
            marginTop:20
          }}>
          <Text style={{
            fontFamily:fonts.primary[600],
            textAlign:"center",
            color:'white',

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
    fontSize: 20,
  },
  questionNumber: {
    fontFamily: fonts.secondary[500],
    fontSize: 18,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: colors.grey,
    borderRadius: 10,
    padding: 10,
    backgroundColor:'#f5f5f5'
  },
  textInput: {
    height: 69, // Tinggi TextInput
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.primary,
    textAlign: 'left', // Teks dimulai dari kiri
    backgroundColor:'#F5F5F5',
    
  },
});