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

const App = () => {
  let [numero, setNumero] = useState(0);
  let [timer, setTimer] = useState(null);
  let [btn, setBtn] = useState('Vai');

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
    <View style={styles.container}>
      <Image
        source={require('./src/images/cronometro.png')}
        style={styles.cronometro}
      />

      <Text style={styles.timer}>{numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity onPress={vai} style={styles.btn}>
          <Text style={styles.btnTexto}>{btn}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => limpar} style={styles.btn}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
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
