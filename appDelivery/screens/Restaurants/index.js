import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Restaurants = () => {
  return <Text style={styles.title}>Restaurants</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Restaurants;
