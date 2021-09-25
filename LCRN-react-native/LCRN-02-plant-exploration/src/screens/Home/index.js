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

  const [friendList, setFriendList] = useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
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
              marginTop: SIZES.padding,
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

      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.primary, ...FONTS.h2}}>
                Today's Share
              </Text>
              <TouchableOpacity onPress={() => console.log('See all pressed')}>
                <Text style={{color: COLORS.primary, ...FONTS.body2}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '88%',
                marginTop: SIZES.base,
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={() => console.log('clicou')}
                  style={{
                    flex: 1,
                  }}>
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('clicou')}
                  style={{
                    flex: 1,
                    marginTop: SIZES.font,
                  }}>
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1.3,
                }}>
                <TouchableOpacity
                  onPress={() => console.log('clicou')}
                  style={{
                    flex: 1,
                    marginLeft: SIZES.font,
                  }}>
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
          <View
            style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding}}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Added Friend
            </Text>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              {friendList.length} Total
            </Text>

            <View style={{flexDirection: 'row', height: '60%'}}>
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'yellow',
                }}
              />

              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: 'red',
                }}>
                <Text>Add Friend</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
