import React, { useState } from 'react'

import Text from '../../components/Text'
import TextLink from '../../components/TextLink'

import facebookIcon from '../../assets/images/icons/facebook-icon-color-2.png'
import googleIcon from '../../assets/images/icons/google-icon-color.png'

import {LoginApi} from '../../services/api'

import * as Styled from './styles'



const Login = ({ navigation }: any) => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleEmailChange = (email: string) => {
        setValues({ ...values, email })
    }

    const handlePasswordChange = (password: string) => {
        setValues({ ...values, password })
    }

    const handleLogin = async() => {
        LoginApi(values)
     
    }


    return (
        <Styled.LoginContainer>

            <Styled.TitleContainer>
                <Text size="22px" weight="Bold">Login</Text>
            </Styled.TitleContainer>

            <Styled.SubtitleContainer>
                <Text color="#7F7F7F" weight="Loght">Access account</Text>
            </Styled.SubtitleContainer>

            <Styled.ButtonsWrapper>

                <Styled.IconButton >
                    <Styled.Image source={facebookIcon} />
                </Styled.IconButton>

                <Styled.IconButton >
                    <Styled.Image source={googleIcon} />
                </Styled.IconButton>

            </Styled.ButtonsWrapper>

            <Styled.ViewContainer>
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

                <Text size="14px" weight="SemiBold">Senha</Text>
                <Styled.Input
                    placeholder="Senha"
                    value={values.password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Styled.ViewContainer>


            <Styled.ButtonContainer>
                <Styled.Button onPress={
                    handleLogin}
                    >
                    <Styled.ButtonText>Entrar</Styled.ButtonText>
                </Styled.Button>
                <Text>Ainda não esta registrado?


                </Text>

                <TextLink
                       onPress={() => navigation.navigate('Register')

                    }
                    >
                        Registre-se
                    </TextLink>

            </Styled.ButtonContainer>





        </Styled.LoginContainer>
    )
}

export default Login

