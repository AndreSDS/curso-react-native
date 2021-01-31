import React, {useState} from 'react';
import {COLORS, icons, SIZES, FONTS} from '../../constansts';
const {fontFamily, fontSize, lineHeight} = FONTS.h3;
import {
  Container,
  TitleContainer,
  TitleContent,
  Title,
  HeaderContainer,
  ImageButton,
  Button,
} from './styled';

import {
  initialCurrentLocation,
  categoryData,
  affordable,
  fairPrice,
  expensive,
  restaurantData,
} from '../../dummyData';

const ImageHeader = ({img}) => {
  return (
    <ImageButton padding={SIZES.padding}>
      <Button source={img} resizeMode="contain" />
    </ImageButton>
  );
};

const HeaderTitle = ({title}) => {
  return (
    <TitleContainer>
      <TitleContent background={COLORS.lightGray3} radius={SIZES.radius}>
        <Title
          fontFamily={fontFamily}
          fontSize={fontSize}
          lineHeight={lineHeight}>
          {title}
        </Title>
      </TitleContent>
    </TitleContainer>
  );
};

const HeaderComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );

  return (
    <HeaderContainer>
      <ImageHeader img={icons.nearby} />
      <HeaderTitle title={initialCurrentLocation.streetName} />
      <ImageHeader img={icons.basket} />
    </HeaderContainer>
  );
};

const Home = () => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);

  return (
    <Container backgroundcolor={COLORS.lightGray}>
      <HeaderComponent />
    </Container>
  );
};

export default Home;
