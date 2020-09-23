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
} from 'react-native';

const Jobs = (props) => {
  const [nome, setNome] = useState('Steve Jobs');
  const img = 'https://sujeitoprogramador.com/steve.png';

  const entrar = () => {
    setNome('André Souza');
  };

  return (
    <>
      <Image
        source={{uri: img}}
        style={{width: props.largura, height: props.altura}}
      />
      <Text style={{fontSize: 25}}> {nome} </Text>
      <Button title="Entrar" onPress={entrar} />
    </>
  );
};

const App = () => {
  return (
    <View>
      <Text>Olá André</Text>
      <Text>Meu primeiro app</Text>
      <Text style={{color: 'red', fontSize: 25, margin: 15}}>
        Sujeito programador
      </Text>

      <Jobs altura={200} largura={200} nome="Steve Jobs" />
    </View>
  );
};

export default App;
