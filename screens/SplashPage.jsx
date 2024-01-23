
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import AppStackNavigator from '../navigation/AppStackNavigator'

const SplashPage = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
      setProgress(navigation.navigate(AppStackNavigator));

  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professional Rendezvous</Text>
      {/* <Progress.Bar
        progress={progress}
        // size={200}
        // indeterminate={false}
        // showsText
        // formatText={() => `${Math.round(progress * 100)}%`}
        color="#FFFFFF"
        // thickness={10}
        style={styles.progressBar}
      /> */}
      <Progress.Bar progress={0.7} width={256} color='#FFFFFF' borderRadius={10}/>
      <Text style={styles.load}>Loading....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12B2E4'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
    fontWeight: '600' 
  },
  progressBar: {
    marginTop: 20,
    width: 256,
    height: 10,
    backgroundColor: '#263238'
  },
  load: {
    color: "#FFFFFF",
    fontWeight: '300',
    fontSize: 14,
    marginTop: 8
  }
});

export default SplashPage;
