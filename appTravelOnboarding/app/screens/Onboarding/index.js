import React from 'react';
import {Image, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {theme, images} from '../../constants';
import {SafeContainer, OnboardingTitle} from './styles';

const {onboarding1, onboarding2, onboarding3} = images;
const {COLORS, FONTS, SIZES} = theme;
const {white, black, blue, gray} = COLORS;
const onboardings = [
  {
    title: "Let's Travelling",
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding3,
  },
];

const Onboarding = () => {
  const scrollX = new Animated.Value(0);

  const renderContent = () => {
    return (
      <Animated.ScrollView
        decelerationRate={0}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffSet: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onboardings.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40,
              }}>
              <Text style={{...FONTS.h1, color: gray, textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: gray,
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{flexDirection: 'row', height: SIZES.padding}}>
        {onboardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outPutRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outPutRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: SIZES.radius,
                backgroundColor: blue,
                marginHorizontal: SIZES.radius / 2,
                width: dotSize,
                height: 20,
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeContainer bgcolor={white}>
      <View>{renderContent()}</View>

      <View
        style={{
          position: 'absolute',
          bottom: SIZES.height > 700 ? '26%' : '15%',
        }}>
        {renderDots()}
      </View>
    </SafeContainer>
  );
};

export default Onboarding;
