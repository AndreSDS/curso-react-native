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
  StatusBar,
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  const [valor, setValor] = useState(0);
  const [pizza, setPizza] = useState(0);
  const [pizzas] = useState([
    {key: 1, sabor: 'Calabresa', valor: 35.9},
    {key: 2, sabor: 'Brigadeiro', valor: 45.9},
    {key: 3, sabor: 'Portuguesa', valor: 50.9},
    {key: 4, sabor: 'Queijo', valor: 25.9},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu pizza</Text>

      <Picker
        selectedValue={pizza}
        onValueChange={(itemVal, index) => {
          setPizza(itemVal);
        }}>
        {pizzas.map((v, k) => {
          return <Picker.Item key={k} value={k} label={v.sabor} />;
        })}
      </Picker>

      <Text style={styles.pizza}>Você esoclheu: {pizzas[pizza].sabor} </Text>
      <Text style={styles.pizza}>R$: {pizzas[pizza].valor.toFixed(2)} </Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={'#00ff00'}
        maximumTrackTintColor={'#ffaa00'}
        value={valor}
        onValueChange={(val) => setValor(val)}
      />
      <Text> {valor.toFixed(0)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  pizza: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;
