import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons, COLORS} from '../constants';

import {Home, Box, Camera, Search, Favourite} from '../screens/index';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    height: '10%',
  },
};

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
      }}>
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={{width: 23, height: 23}}
      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flash}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );

            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );

            case 'Camera':
              return <CameraButton />;

            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );

            case 'Favourite':
              return (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Box} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
};

export default Tabs;
