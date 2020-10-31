import React, { useState } from 'react';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-community/google-signin';
import Text from '../../components/Text';
import TextLink from '../../components/TextLink';
import facebookIcon from '../../assets/images/icons/facebook-icon-color-2.png';
import googleIcon from '../../assets/images/icons/google-icon-color.png';
import api from '../../services/api';
import * as Styled from './styles';
import { requestLogin } from '../../redux/actions/session';

interface Props {
  data: any;
}

const Login: React.FC = ({ navigation }: any) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const handleEmailChange = (email: string): void => {
    setValues({ ...values, email });
  };

  const handlePasswordChange = (password: string): void => {
    setValues({ ...values, password });
  };

  const onFailure = (e: any): void => {
    setError(e.response.data.error);
  };

  const onSuccess = ({ data }: Props): void => {
    try {
      if (data.token) {
        setError('');
        dispatch(requestLogin(data.token));
        navigation.navigate('Home');
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleLogin = async (): Promise<void> => {
    await api
      .post('/login', { ...values })
      .then(onSuccess)
      .catch(onFailure);
  };

  const onFacebookButtonPress = async (): Promise<any> => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw new Error('canceled');
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('no data');
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );
    console.log(result);
    console.log(data);
    console.log(facebookCredential);

    // Sign-in the user with the credential
    return 'vrau';
  };

  const onFacebookPressButton = async (): Promise<string> => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    console.log(googleCredential);

    return 'vrau';
  };

  GoogleSignin.configure({
    webClientId: process.env.GOOGLE_ID,
  });

  return (
    <Styled.LoginContainer>
      <Styled.TitleContainer>
        <Text size="22px" weight="Bold">
          Login
        </Text>
      </Styled.TitleContainer>

      <Styled.SubtitleContainer>
        <Text color="#7F7F7F" weight="Loght">
          Entrar com
        </Text>
      </Styled.SubtitleContainer>

      <Styled.ButtonsWrapper>
        <Styled.IconButton
          onPress={(): void => {
            onFacebookButtonPress();
          }}
        >
          <Styled.Image source={facebookIcon} />
        </Styled.IconButton>

        <Styled.IconButton
          onPress={(): void => {
            onFacebookPressButton();
          }}
        >
          <Styled.Image source={googleIcon} />
        </Styled.IconButton>
      </Styled.ButtonsWrapper>

      <Styled.ViewContainer>
        <Text weight="SemiBold">E-mail</Text>

        <Styled.Input
          placeholder="Endereço de e-mail"
          value={values.email}
          onChangeText={handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text size="14px" weight="SemiBold">
          Senha
        </Text>
        <Styled.Input
          placeholder="Senha"
          value={values.password}
          onChangeText={handlePasswordChange}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Styled.ViewContainer>

      <Styled.ViewContainer>
        <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
      </Styled.ViewContainer>

      <Styled.ButtonContainer>
        <Styled.Button onPress={handleLogin}>
          <Styled.ButtonText>Entrar</Styled.ButtonText>
        </Styled.Button>
        <Text>Ainda não esta registrado?</Text>

        <TextLink onPress={(): void => navigation.navigate('Register')}>
          Registre-se
        </TextLink>
      </Styled.ButtonContainer>
    </Styled.LoginContainer>
  );
};

export default Login;
