import React, { useState } from 'react'

import { Alert, Image, TouchableOpacity, View } from 'react-native'

import Text from '../../components/Text'

import api from '../../services/api'

import * as Styled from './styles'
import TextLink from '../../components/TextLink'

import { Formik } from 'formik'
import * as yup from 'yup'

let validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório').min(4, "Ta tirando mermao"),
    email: yup.string().required('Campo obrigatório').email('Formato inválido'),
    phone: yup.string().required('Campo obrigatório').min(11, "Telefone inválido"),
    password: yup.string().required('Campo obrigatório').min(5, 'A senha precisa de no minimo 5 caracteres'),
    passwordConfirmation: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), ''], 'Senhas não coincidem')
})


const Register = ({ navigation }: any) => {

    const handleRegister = (values: any) => {
        api.post('/users/new', { ...values })
            .then(() => Alert.alert('usuario cadastrado'))
    }

    return (
        <Styled.LoginContainer>

            <Styled.TitleContainer>
                <Text size="22px" weight="Bold">Registro</Text>
            </Styled.TitleContainer>

            <Styled.SubtitleContainer>
                <Text color="#7F7F7F" weight="Loght">Registre sua conta</Text>
            </Styled.SubtitleContainer>



            <Formik
                validateOnBlur={true}
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    passwordConfirmation: ""
                }}
                onSubmit={values => {

                    handleRegister(values)
                }}
                validationSchema={validationSchema}
            >

                {({ handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    handleSubmit
                }) => (
                        <>

                        <Text weight="SemiBold">
                                Nome
                        </Text>

                            <Styled.Input
                                onBlur={() => setFieldTouched('name')}
                                placeholder="Nome"
                                onChangeText={handleChange('name')}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />

                            <Styled.ErrorMessage>
                                {
                                    touched.name &&
                                    errors.name &&
                                    errors.name
                                }
                            </Styled.ErrorMessage>

                            <Text weight="SemiBold">
                                E-mail
                            </Text>

                            <Styled.Input
                                onBlur={() => setFieldTouched('email')}
                                placeholder="Endereço de e-mail"
                                onChangeText={handleChange('email')}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />

                            <Styled.ErrorMessage>
                                {
                                    touched.email &&
                                    errors.email &&
                                    errors.email
                                }
                            </Styled.ErrorMessage>

                            <Text weight="SemiBold">
                                Celular
                            </Text>

                            <Styled.Input
                                onBlur={() => setFieldTouched('phone')}
                                placeholder="Celular"
                                onChangeText={handleChange('phone')}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Styled.ErrorMessage>
                                {
                                    touched.phone &&
                                    errors.phone &&
                                    errors.phone
                                }
                            </Styled.ErrorMessage>

                            <Text size="14px" weight="SemiBold">Senha</Text>
                            <Styled.Input
                                onBlur={() => setFieldTouched('password')}
                                placeholder="Senha"
                                onChangeText={handleChange('password')}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Styled.ErrorMessage>
                                {
                                    touched.password &&
                                    errors.password &&
                                    errors.password
                                }
                            </Styled.ErrorMessage>

                            <Text size="14px" weight="SemiBold">Confirmação de senha</Text>
                            <Styled.Input
                                onBlur={() => setFieldTouched('passwordConfirmation')}
                                placeholder="Senha"
                                onChangeText={handleChange('passwordConfirmation')}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Styled.ErrorMessage>
                                {
                                    touched.passwordConfirmation &&
                                    errors.passwordConfirmation &&
                                    errors.passwordConfirmation
                                }
                            </Styled.ErrorMessage>




                            <Styled.ButtonContainer>
                                <Styled.Button
                                    onPress={handleSubmit}
                                >
                                    <Styled.ButtonText>Registrar</Styled.ButtonText>
                                </Styled.Button>

                                <TextLink weight="SemiBold"
                                    onPress={() => navigation.navigate('Register')

                                    }
                                >
                                    Esqueceu sua senha?
                    </TextLink>
                            </Styled.ButtonContainer>

                        </>
                    )}
            </Formik>
        </Styled.LoginContainer>
    )
}

export default Register

