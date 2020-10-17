/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';

import Lista from './src/components/Lista';

const App = () => {
  const feed = [
    {
      id: '1',
      nome: 'André Souza',
      descricao: 'Mais um dia de bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 5,
    },
    {
      id: '2',
      nome: 'André Souza',
      descricao: 'Mais um dia de bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '3',
      nome: 'André Souza',
      descricao: 'Mais um dia de bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 2,
    },
    {
      id: '4',
      nome: 'André Souza',
      descricao: 'Mais um dia de bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 4,
    },
    {
      id: '5',
      nome: 'André Souza',
      descricao: 'Mais um dia de bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 1,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.logo} source={require('./src/img/logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.send} source={require('./src/img/send.png')} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Lista data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {},
  send: {
    width: 23,
    height: 23,
  },
});

export default App;
