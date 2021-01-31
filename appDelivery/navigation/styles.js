import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: red;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 60px;
  background-color: ${(props) => props.backgroundColor};
`;

export const TabImage = styled.Image`
  width: 25px;
  height: 25px;
  ${(props) => props.tintColor}
`;

export const CustomButtonContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const CustomButtonContent = styled.View`
  flex-direction: row;
  position: absolute;
  top: 0;
`;

export const CustomButtonContainerSvg = styled.View`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
`;

export const CustomButtonSvg = styled.TouchableOpacity`
  top: -22.5px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.backgroundColor};
`;

export const IphoneXPadding = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30px;
  background-color: ${({backgroundColor}) => backgroundColor};
`;
