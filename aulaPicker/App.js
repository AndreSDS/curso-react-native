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
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  const [conta, abrirConta] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState(null);
  const [limit, setLimit] = useState(100);
  const [estudante, setIsEstudante] = useState(false);

  //const validCampos = (nome && nome !== '', idade && idade !== '', sexo);

  const sexos = [
    {id: 1, value: 'masculino'},
    {id: 2, value: 'feminino'},
  ];

  const contaAbrir = () => {
    abrirConta(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.logo}>Banco React</Text>

        <View>
          <View>
            <Text style={styles.title}>Qual seu nome?</Text>
            <TextInput
              placeholder="Digite seu nome..."
              onChangeText={(val) => setNome(val)}
              underlineColorAndroid="transparent"
            />
            <Text style={styles.title}>Qual sua idade?</Text>
            <TextInput
              placeholder="Digite sua idade..."
              onChangeText={(val) => setIdade(val)}
            />
          </View>

          <View>
            <Text style={styles.title}>Qual seu sexo?</Text>
            <Picker
              selectedValue={sexo}
              onValueChange={(itemVal) => {
                setSexo(itemVal);
              }}>
              {sexos.map((v, k) => {
                return <Picker.Item key={k} value={k} label={v.value} />;
              })}
            </Picker>
          </View>

          <View>
            <Text style={styles.title}>Qual limite desejado?</Text>
            <Slider
              minimumValue={100}
              maximumValue={1000}
              value={limit}
              onValueChange={(val) => setLimit(val)}
            />
          </View>

          <View>
            <Text style={styles.title}>É estudante?</Text>
            <Switch
              value={estudante}
              onValueChange={(val) => setIsEstudante(val)}
            />
          </View>
        </View>

        {conta ? (
          <View>
            <Text style={styles.title}>Dados</Text>
            <View>
              <Text>Nome: {nome}</Text>
              <Text>Idade: {idade}</Text>
              <Text>Sexo: {sexo}</Text>
              <Text>Limite: {limit.toFixed(2)} </Text>
              <Text>Estudante {}</Text>
            </View>
          </View>
        ) : null}

        <TouchableOpacity
          //disabled={validCampos}
          style={styles.button}
          onPress={() => contaAbrir}>
          <Text style={styles.text}>Abrir conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //disabled={validCampos}
          style={styles.button}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>

        <View style={{marginVertical: 15, padding: 10, flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>{nome}</Text>
        </View>

        {/* <Picker
        selectedValue={pizza}
        onValueChange={(itemVal, index) => {
          setPizza(itemVal);
        }}>
        {pizzas.map((v, k) => {
          return <Picker.Item key={k} value={k} label={v.sabor} />;
        })}
      </Picker> */}

        {/* <Text style={styles.pizza}>Você esoclheu: {pizzas[pizza].sabor} </Text>
      <Text style={styles.pizza}>R$: {pizzas[pizza].valor.toFixed(2)} </Text> */}

        {/* <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={'#00ff00'}
        maximumTrackTintColor={'#ffaa00'}
        value={valor}
        onValueChange={(val) => setValor(val)}
      />
      <Text> {valor.toFixed(0)} </Text>

      <Switch
        thumbColor="brown"
        value={status}
        onValueChange={(val) => setStatus(val)}
      /> */}

        {/* <Text style={{textAlign: 'center', fontSize: 15}}>
        {status ? 'Ativo' : 'Inativo'}
      </Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'darkblue',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
