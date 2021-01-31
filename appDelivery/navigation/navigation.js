import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';

import {Home, Restaurants, OrderDelivery} from '../screens';
import {COLORS, icons} from '../constansts';
import {
  Button,
  TabImage,
  CustomButtonContainer,
  CustomButtonContent,
  CustomButtonContainerSvg,
  CustomButtonSvg,
  IphoneXPadding,
} from './styles';

const {primary, secondary, white} = COLORS;

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const homeOptions = {
  headerShown: false,
};

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  const isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <CustomButtonContainer>
        <CustomButtonContent>
          <CustomButtonContainerSvg backgroundColor={white} />
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={white}
            />
          </Svg>
          <CustomButtonContainerSvg backgroundColor={white} />
        </CustomButtonContent>

        <CustomButtonSvg backgroundColor={white} onPress={onPress}>
          {children}
        </CustomButtonSvg>
      </CustomButtonContainer>
    );
  } else {
    return (
      <Button backgroundColor={white} activeOpacity={1} onPress={onPress}>
        {children}
      </Button>
    );
  }
};

const tabIconOptions = (img) => {
  return {
    tabBarIcon: ({focused}) => (
      <TabImage
        tintColor={focused ? primary : secondary}
        resizeMode="contain"
        source={img}
      />
    ),
    tabBarButton: (props) => <TabBarCustomButton {...props} />,
  };
};

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <IphoneXPadding backgroundColor={white} />
        <BottomTabBar {...props.props} />;
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={homeOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomStack} />
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomStack = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar props={props} />}>
      <Tabs.Screen
        options={tabIconOptions(icons.cutlery)}
        name="Home"
        component={Home}
      />
      <Tabs.Screen
        options={tabIconOptions(icons.search)}
        name="Search"
        component={Home}
      />
      <Tabs.Screen
        options={tabIconOptions(icons.like)}
        name="Like"
        component={Home}
      />
      <Tabs.Screen
        options={tabIconOptions(icons.user)}
        name="User"
        component={Home}
      />
    </Tabs.Navigator>
  );
};

export {HomeStack, BottomStack};
