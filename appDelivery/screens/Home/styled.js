import styled from 'styled-components/native';

const handleProps = (props) => (props ? props.padding * 2 + 'px' : 0);

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.backgroundcolor};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  height: 50px;
`;

export const ImageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  padding-right: ${handleProps};
  padding-left: ${handleProps};
`;

export const Button = styled.Image`
  width: 30px;
  height: 30px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleContent = styled.View`
  width: 70%;
  height: 100%;
  background-color: ${({background}) => background};
  align-items: center;
  justify-content: center;
  border-radius: ${({radius}) => radius + 'px'};
`;

export const Title = styled.Text`
  font-family: ${({fontFamily}) => fontFamily};
  font-size: ${({fontSize}) => fontSize + 'px'};
  line-height: ${({lineHeight}) => lineHeight + 'px'};
`;
