/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import LottieView from 'lottie-react-native';
import animation from './src/lf20_znfposau.json';

const App = () => {
  let [numero, setNumero] = useState(0);
  let [timer, setTimer] = useState(null);
  let [btn, setBtn] = useState('Vai');

  console.log('qualquer coisa ', animation.nm);

  const vai = () => {
    if (timer != null) {
      clearInterval(numero);
      setTimer(null);
      setBtn('Vai');
    } else {
      setInterval(() => {
        setNumero(numero + 0.1);
      }, 100),
        setBtn('Parar');
    }
  };

  const limpar = () => {
    if (timer != null) {
      clearInterval();
      setTimer(null);
    } else {
      setNumero(0);
      setBtn('Vai');
    }
  };

  return (
    <LottieView
      source={require('./src/lf20_znfposau.json')}
      resizeMode="contain"
      autoSize
      autoPlay
      loop
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    fontSize: 65,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 10,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
});

export default App;
