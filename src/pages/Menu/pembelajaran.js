import { View, StyleSheet, Dimensions, FlatList, BackHandler } from 'react-native';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { colors } from '../../utils';
import { MyHeader } from '../../components';
import YoutubePlayer from 'react-native-youtube-iframe';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function VideoPembelajaran({ navigation }) {
  const videoList = useMemo(() => [
    { id: '1', linkYT: 'EwuOpBNtLW0' },
    { id: '2', linkYT: '44TzhMoZaXI' },
    { id: '3', linkYT: 'h-D2YbMroOU' },
    { id: '4', linkYT: 'tGxEKfbJPoU' }
  ], []);

  const [isPlaying, setIsPlaying] = useState(null);
  const playerRefs = useRef({});

  useEffect(() => {
    const backAction = () => {
      if (isPlaying) {
        setIsPlaying(null);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
    return () => backHandler.remove();
  }, [isPlaying]);

  const handleVideoStateChange = (state, videoId) => {
    if (state === "playing") {
      setIsPlaying(videoId);
      Object.keys(playerRefs.current).forEach(id => {
        if (id !== videoId && playerRefs.current[id]) {
          playerRefs.current[id].seekTo(0, false);
          playerRefs.current[id].pause();
        }
      });
    } else if (state === "paused" || state === "ended") {
      if (isPlaying === videoId) {
        setIsPlaying(null);
      }
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.videoWrapper, isPlaying === item.linkYT && styles.videoFullScreen]}>
      <YoutubePlayer
        ref={ref => (playerRefs.current[item.linkYT] = ref)}
        height={isPlaying === item.linkYT ? screenHeight : 200}
        width={isPlaying === item.linkYT ? screenWidth : screenWidth - 40} // Mengurangi margin horizontal
        play={isPlaying === item.linkYT}
        videoId={item.linkYT}
        webViewProps={{ androidLayerType: 'hardware' }}
        webViewStyle={{ backgroundColor: 'black' }}
        onChangeState={state => handleVideoStateChange(state, item.linkYT)}
      />
    </View>
  );

  return (
    <View style={[styles.container, isPlaying && styles.fullScreenBackground]}>
      {!isPlaying && <MyHeader title="Video Pembelajaran" />}

      {isPlaying ? (
        <View style={styles.fullScreenVideoContainer}>
          {renderItem({ item: videoList.find(video => video.linkYT === isPlaying) })}
        </View>
      ) : (
        <FlatList
          data={videoList}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          removeClippedSubviews={false} 
          legacyImplementation={true}  
          windowSize={10}  
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  fullScreenBackground: {
    backgroundColor: 'black',
  },
  listContainer: {
    paddingBottom: 2,
    alignItems: 'center', // Memastikan semua video di tengah
  },
  videoWrapper: {
    marginVertical: 10, // Memberikan jarak vertikal antar video
    width: screenWidth - 40, // Mengurangi margin horizontal
    justifyContent: 'center', // Posisikan video di tengah vertikal
    alignItems: 'center', // Posisikan video di tengah horizontal
  },
  videoFullScreen: {
    margin: 0,
    flex: 1,
    justifyContent: 'center', // Posisikan video di tengah vertikal
    alignItems: 'center', // Posisikan video di tengah horizontal
    backgroundColor: 'black',
    width: screenWidth,
    height: screenHeight,
  },
  fullScreenVideoContainer: {
    flex: 1,
    justifyContent: 'center', // Posisikan video di tengah vertikal
    alignItems: 'center', // Posisikan video di tengah horizontal
    backgroundColor: 'black',
  },
});