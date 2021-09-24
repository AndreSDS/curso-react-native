import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {theme, images} from '../../constants';
import {
  Container,
  ItemContainer,
  ItemImgContainer,
  ItemImg,
  TextContainer,
  TextTitle,
  TextDescription,
  ItemButton,
  ItemButtonText,
  DotsContainer,
  Content,
  ContentDots,
} from './styles';

const {onboarding1, onboarding2, onboarding3} = images;
const {COLORS, FONTS, SIZES} = theme;
const {blue, gray} = COLORS;
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
  const [completed, setCompleted] = useState(false);

  const scrollX = new Animated.Value(0);

  //esse componente pode ser um memo
  const ItemContent = ({img, title, description}) => {
    return (
      <ItemContainer>
        <ItemImgContainer>
          <ItemImg source={img} resizeMode="cover" />
        </ItemImgContainer>

        <TextContainer>
          <TextTitle>{title}</TextTitle>
          <TextDescription>{description}</TextDescription>
        </TextContainer>
        <ItemButton onPress={() => console.warn('clicou')}>
          <ItemButtonText>{completed ? "Let's Go!" : 'Skip'}</ItemButtonText>
        </ItemButton>
      </ItemContainer>
    );
  };

  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        {onboardings.map((item, index) => (
          <ItemContent key={index} {...item} />
        ))}
      </Animated.ScrollView>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <DotsContainer>
        {onboardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.blue,
                marginHorizontal: SIZES.radius / 2,
                width: dotSize,
                height: dotSize,
              }}
            />
          );
        })}
      </DotsContainer>
    );
  };

  useEffect(() => {
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onboardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeAllListeners();
  }, [scrollX]);

  return (
    <Container>
      <Content>{renderContent()}</Content>

      <ContentDots>{renderDots()}</ContentDots>
    </Container>
  );
};

export default Onboarding;
