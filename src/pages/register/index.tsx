import React, { useState } from 'react'

import { Image, TouchableOpacity, View } from 'react-native'

import Text from '../../components/Text'

import api from '../../services/api'

import * as Styled from './styles'
import TextLink from '../../components/TextLink'



const Register = ({ navigation }: any) => {
    const [error, setError] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: ""
    })

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    const [passwordConfirmation, setPasswordConfirmation] = useState("")


    const handleNameChange = (name: string) => {
        setValues({ ...values, name })
    }
    const handleEmailChange = (email: string) => {
        setValues({ ...values, email })
    }

    const handlePhoneChange = (phone: string) => {
        setValues({ ...values, phone })
    }

    const handlePasswordChange = (password: string) => {
        setValues({ ...values, password })
    }

    const handlePasswordConfirmationChange = (passwordConfirmation: string) => {
        setPasswordConfirmation(passwordConfirmation)
    }

    const arePasswordsEqual = () => {
        return passwordConfirmation === values.password
    }


    const handleRegister = () => {
        if (arePasswordsEqual()) {
            setError({ ...error, passwordConfirmation: "" })

            api.post('/users/new', { ...values })
        } else {
            setError({ ...error, passwordConfirmation: "Senhas não coincidem" })
        }

    }

    return (
        <Styled.LoginContainer>

            <Styled.TitleContainer>
                <Text size="22px" weight="Bold">Registro</Text>
            </Styled.TitleContainer>

            <Styled.SubtitleContainer>
                <Text color="#7F7F7F" weight="Loght">Registre sua conta</Text>
            </Styled.SubtitleContainer>

            <Styled.ViewContainer>

                <Text weight="SemiBold">
                    Nome
                </Text>

                <Styled.Input
                    placeholder="Nome"
                    value={values.name}
                    onChangeText={handleNameChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Styled.ErrorMessage>
                    {error.password}
                </Styled.ErrorMessage>

                <Text weight="SemiBold">
                    E-mail
                </Text>



                <Styled.Input
                    placeholder="Endereço de e-mail"
                    value={values.email}
                    onChangeText={handleEmailChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Styled.ErrorMessage>
                    {error.email}
                </Styled.ErrorMessage>

                <Text weight="SemiBold">
                    Celular
                </Text>

                <Styled.Input
                    placeholder="Celular"
                    value={values.phone}
                    onChangeText={handlePhoneChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Styled.ErrorMessage>
                    {error.phone}
                </Styled.ErrorMessage>

                <Text size="14px" weight="SemiBold">Senha</Text>
                <Styled.Input
                    placeholder="Senha"
                    value={values.password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Styled.ErrorMessage>
                    {error.password}
                </Styled.ErrorMessage>

                <Text size="14px" weight="SemiBold">Confirme sua senha</Text>
                <Styled.Input
                    placeholder="Confirme sua senha"
                    value={passwordConfirmation}
                    onChangeText={handlePasswordConfirmationChange}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Styled.ViewContainer>
            <Styled.ErrorMessage>
                {error.passwordConfirmation}
            </Styled.ErrorMessage>


            <Styled.ButtonContainer>
                <Styled.Button
                    onPress={handleRegister}
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





        </Styled.LoginContainer>
    )
}

export default Register

