import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { getData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import { colorsDark } from 'react-native-elements/dist/config';

const images = [
  { id: 1, src: require('../../assets/korosel-1.png'), label: 'Gambar 1' },
  { id: 2, src: require('../../assets/koresel-2.png'), label: 'Gambar 2' },
  { id: 3, src: require('../../assets/koresel-3.png'), label: 'Gambar 3' },
];

const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const scrollX = useRef(new Animated.Value(0)).current; // Untuk animasi scroll
  const scrollViewRef = useRef(null); // Untuk mengontrol scroll view
  const [currentIndex, setCurrentIndex] = useState(0);

  const __getUser = () => {
    getData('user').then((u) => {
      setUser(u);
    });
  };

  useEffect(() => {
    __getUser();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextIndex = (currentIndex + 1) % images.length;
  //     scrollViewRef.current.scrollTo({
  //       x: nextIndex * windowWidth,
  //       animated: true,
  //     });
  //     setCurrentIndex(nextIndex);
  //   }, 3000); // Ganti slide setiap 3 detik

  //   return () => clearInterval(interval); // Hentikan interval saat komponen di-unmount
  // }, [currentIndex]);

  return (
    <View
      source={require('../../assets/bghome.png')}
      style={{
        flex: 1,
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
      }}
    >
      <ScrollView>
        <View style={{}}>
         <View style={{
          padding:20,
          backgroundColor:colors.primary,
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10
         }}>
         <View style={{
          marginTop:30
         }}>
         <Text style={{
          fontFamily:fonts.primary[600],
          color:colors.white,
          fontSize:20,
         }}><Text style={{fontFamily:fonts.primary[400],}}>Hi</Text>, Fadhlan Himawan</Text>

         <View style={{
          marginTop:15
         }}>
          <Image style={{
            width:144,
            height:146,
            alignSelf:"center"
          }} source={require('../../assets/logohome.png')}/>
         </View>
         </View>
         </View> 

         <View style={{
          padding:20
         }}>

        <View style={{
          marginTop:27
        }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Materi')}>
            <View style={{
              padding:0,
              backgroundColor:colors.primary,
              borderRadius:10,
              height:67,
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:"center",

            }}>
            <Image style={{
              width:85, 
              height:85,
              left:-10
            }} source={require('../../assets/menu_materi.png')}/>
            <Text style={{
              fontFamily:fonts.primary[600],
              color:colors.white,
              fontSize:23,
            }}>Materi</Text>
            <View style={{padding:10}}/>
            </View>
          </TouchableNativeFeedback>
        </View>



        <View style={{
          marginTop:27
        }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('VideoPembelajaran')}>
            <View style={{
              padding:0,
              backgroundColor:colors.primary,
              borderRadius:10,
              height:67,
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:"center",

            }}>
            <Image style={{
              width:85, 
              height:85,
              left:-12,
              top:-2.3
              
            }} source={require('../../assets/icon_video.png')}/>
            <Text style={{
              fontFamily:fonts.primary[600],
              color:colors.white,
              fontSize:23,
              textAlign:"center"
            }}>Video{'\n'}Pembelajaran</Text>
            <View style={{padding:10}}/>
            </View>
          </TouchableNativeFeedback>
        </View>

        
        <View style={{
          marginTop:27
        }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Evaluasi')}>
            <View style={{
              padding:0,
              backgroundColor:colors.primary,
              borderRadius:10,
              height:67,
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:"center",

            }}>
            <Image style={{
              width:85, 
              height:85,
              left:-12,
              
            }} source={require('../../assets/menu_evaluasi.png')}/>
            <Text style={{
              fontFamily:fonts.primary[600],
              color:colors.white,
              fontSize:23,
              textAlign:"center"
            }}>Evaluasi</Text>
            <View style={{padding:10}}/>
            </View>
          </TouchableNativeFeedback>
        </View>

        

         </View>
         
        </View>
      </ScrollView>
    </View>
  );
}
