import React, { useState } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import AwesomeAlert from 'react-native-awesome-alerts';
import Text from '../../components/Text';

import api from '../../services/api';

import * as Styled from './styles';
import TextLink from '../../components/TextLink';
import Input from '../../components/Input';
import ErrorMessage from '../../components/ErrorMessage';

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório').min(4, 'Ta tirando mermao'),
  email: yup.string().required('Campo obrigatório').email('Formato inválido'),
  phone: yup
    .string()
    .required('Campo obrigatório')
    .min(11, 'Telefone inválido'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(5, 'A senha precisa de no minimo 5 caracteres'),
  passwordConfirmation: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password'), ''], 'Senhas não coincidem'),
});

const Register = ({ navigation }: any) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleRegister = (values: any) => {
    console.log(values);
    api.post('/users/new', { ...values }).then((res) => {
      setShowAlert(!showAlert);
    });
  };

  return (
    <Styled.LoginContainer>
      <Styled.TitleContainer>
        <Text size="22px" weight="Bold">
          Registro
        </Text>
      </Styled.TitleContainer>

      <Styled.SubtitleContainer>
        <Text color="#7F7F7F" weight="Loght">
          Registre sua conta
        </Text>
      </Styled.SubtitleContainer>

      <Formik
        validateOnBlur
        initialValues={{
          name: '',
          email: '',
          phone: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={(values) => {
          handleRegister(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
          values,
        }) => (
          <>
            <AwesomeAlert
              show={showAlert}
              showProgress={false}
              closeOnTouchOutside={false}
              closeOnHardwareBackPress={false}
              title="Cadastrado com sucesso"
              message={`Seja bem vindo(a) ${values.name}`}
              showConfirmButton
              confirmText="Daora!"
              confirmButtonColor="#77056D"
              onCancelPressed={() => {
                setShowAlert(!showAlert);
              }}
              onConfirmPressed={() => {
                setShowAlert(!showAlert);
                navigation.navigate('Login');
              }}
            />
            <Text weight="SemiBold">Nome</Text>

            <Input
              onBlur={() => setFieldTouched('name')}
              placeholder="Nome"
              onChangeText={handleChange('name')}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <ErrorMessage>
              {touched.name && errors.name && errors.name}
            </ErrorMessage>

            <Text weight="SemiBold">E-mail</Text>

            <Input
              onBlur={() => setFieldTouched('email')}
              placeholder="Endereço de e-mail"
              onChangeText={handleChange('email')}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <ErrorMessage>
              {touched.email && errors.email && errors.email}
            </ErrorMessage>

            <Text weight="SemiBold">Celular</Text>

            <Input
              onBlur={() => setFieldTouched('phone')}
              placeholder="Celular"
              onChangeText={handleChange('phone')}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <ErrorMessage>
              {touched.phone && errors.phone && errors.phone}
            </ErrorMessage>

            <Text size="14px" weight="SemiBold">
              Senha
            </Text>
            <Input
              onBlur={() => setFieldTouched('password')}
              placeholder="Senha"
              onChangeText={handleChange('password')}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
            <ErrorMessage>
              {touched.password && errors.password && errors.password}
            </ErrorMessage>

            <Text size="14px" weight="SemiBold">
              Confirmação de senha
            </Text>
            <Input
              onBlur={() => setFieldTouched('passwordConfirmation')}
              placeholder="Senha"
              onChangeText={handleChange('passwordConfirmation')}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
            <ErrorMessage>
              {touched.passwordConfirmation &&
                errors.passwordConfirmation &&
                errors.passwordConfirmation}
            </ErrorMessage>

            <Styled.ButtonContainer>
              <Styled.Button onPress={handleSubmit}>
                <Styled.ButtonText>Registrar</Styled.ButtonText>
              </Styled.Button>

              <TextLink
                weight="SemiBold"
                onPress={() => navigation.navigate('Register')}
              >
                Esqueceu sua senha?
              </TextLink>
            </Styled.ButtonContainer>
          </>
        )}
      </Formik>
    </Styled.LoginContainer>
  );
};

export default Register;
