import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {icons, images, COLORS, SIZES, FONTS} from '../../constants';

export const Home = () => {
  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      name: 'Plant 1',
      img: images.plant1,
      favourite: true,
    },
    {
      id: 1,
      name: 'Plant 2',
      img: images.plant2,
      favourite: false,
    },
    {
      id: 2,
      name: 'Plant 3',
      img: images.plant3,
      favourite: true,
    },
    {
      id: 3,
      name: 'Plant 3',
      img: images.plant4,
      favourite: false,
    },
  ]);

  const renderNewplant = (item, index) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{width: SIZES.width * 0.23, height: '82%', borderRadius: 15}}
        />

        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: -2,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </View>

        <TouchableOpacity
          style={{position: 'absolute', top: '15%', left: 7}}
          onPress={() => console.log('favourite')}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
              <TouchableOpacity onPress={() => console.log('clicou')}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: SIZES.base}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderNewplant(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={{height: '50%', backgroundColor: COLORS.lightGray}} />

      <View style={{height: '20%', backgroundColor: COLORS.lightGray}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});
