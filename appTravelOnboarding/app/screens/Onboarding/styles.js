import styled from 'styled-components/native';

export const Container = styled.View``;

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
`;

export const OnboardingTitle = styled.Text``;
