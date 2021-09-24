import styled from 'styled-components/native';
import {COLORS, theme, images} from '../../constants';

const {SIZES, FONTS} = theme;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
`;

export const ItemContainer = styled.View`
  width: ${SIZES.width};
`;

export const ItemImgContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ItemImg = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.View`
  position: absolute;
  bottom: 10%;
  left: 40px;
  right: 40px;
`;

export const TextTitle = styled.Text`
  font-family: ${FONTS.h1.fontFamily};
  font-size: ${SIZES.h1};
  line-height: ${FONTS.h1.lineHeight}px;
  color: ${COLORS.gray};
  text-align: center;
`;
export const TextDescription = styled.Text`
  font-family: ${FONTS.body3.fontFamily};
  font-size: ${SIZES.body3};
  line-height: ${FONTS.body3.lineHeight}px;
  margin-top: ${SIZES.base};
  text-align: center;
  color: gray;
`;

export const ItemButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 60px;
  justify-content: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-left: 20px;
  background-color: ${COLORS.blue};
`;

export const ItemButtonText = styled.Text`
  font-family: ${FONTS.h1.fontFamily};
  font-size: ${SIZES.h1};
  line-height: ${FONTS.h1.lineHeight}px;
  color: ${COLORS.white};
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  height: ${SIZES.padding}px;
  align-items: center;
  justify-content: center;
`;

export const DotsContent = styled.View`
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.blue};
  margin: 0 ${SIZES.radius / 2}px;
  width: 20px;
  height: 20px;
`;

export const Content = styled.View``;

export const ContentDots = styled.View`
  position: absolute;
  bottom: ${SIZES.height > 700 ? '26%' : '15%'};
`;
