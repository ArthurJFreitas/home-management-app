import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

export const LoginContainer = styled(View)`
  flex: 1;
  align-items: center;
  padding: 10%;
  height: 100%;
`;

export const TitleContainer = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const SubtitleContainer = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.View`
  display: flex;

  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  height: 8%;
  margin-bottom: 10%;
`;

export const IconButton = styled.TouchableOpacity`
  background: #ebecf0;
  width: 45%;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #77056d;
  height: 45px;
  border-radius: 12px;

  width: 100%;
  margin-top: 32%;
  margin-bottom: 7%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'OpenSans-SemiBold';
`;

export const ButtonLinearGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`;

export const ViewContainer = styled.View`
  width: 100%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`;
