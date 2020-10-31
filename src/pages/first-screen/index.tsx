import React from 'react';
import * as Styled from './styles';
import Text from '../../components/Text';
import smartHomeIcon from '../../assets/images/icons/smart-home-icon.png';

const FirstScreen: React.FC = ({ navigation }: any) => {
  return (
    <Styled.Container>
      <Styled.Image source={smartHomeIcon} />

      <Styled.TextContainer>
        <Text weight="Bold" size="18px">
          Organize sua casa
        </Text>
        <Text>
          o equilibrio é importante para uma vida saudavel, quando alguma area
          da sua vida vai mal, impacta todas as outras
        </Text>
      </Styled.TextContainer>
      <Styled.ButtonsContainer>
        <Styled.Button onPress={(): void => navigation.navigate('Login')}>
          <Text weight="Bold" color="#fff">
            Entrar
          </Text>
        </Styled.Button>
        <Styled.Button onPress={(): void => navigation.navigate('Register')}>
          <Text weight="Bold" color="#fff">
            Registrar
          </Text>
        </Styled.Button>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

export default FirstScreen;
