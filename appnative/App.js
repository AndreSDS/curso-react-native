/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TextInput,
} from 'react-native';

const Jobs = (props) => {
  const [nome, setNome] = useState('Steve Jobs');
  const img = 'https://sujeitoprogramador.com/steve.png';

  const entrar = () => {
    setNome('André Souza');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />

      <Text style={styles.texto}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

const App = (props) => {
  const [name, setName] = useState('André');
  const [input, setInput] = useState('André');

  const getName = () => {
    setName(`Bem vindo: ${input}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome."
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setInput(texto)}
      />
      <Button title="Entrar" onPress={getName} />
      <Text style={styles.texto}> {name}</Text>
    </View>
  );
};

export default App;
