import React, { useState } from 'react'

import { Image, TouchableOpacity,View } from 'react-native'

import Text from '../../components/Text'


import * as Styled from './styles'


const Login = () => {
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

    return (
        <Styled.LoginContainer>
            <Styled.TitleContainer>
                <Text size="22px" weight="Bold">Login</Text>
            </Styled.TitleContainer>

            <Styled.SubtitleContainer>
                <Text color="#7F7F7F" weight="Loght">Access account</Text>
            </Styled.SubtitleContainer>

            <Styled.ButtonsWrapper>
                <TouchableOpacity >
                  
                        {/* <Image source={require('../../assets/images/icons/facebook-icon.svg')} /> */}
                
                </TouchableOpacity>
            </Styled.ButtonsWrapper>

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

            <Styled.Button>

                <Styled.ButtonText>Entrar</Styled.ButtonText>

            </Styled.Button>





        </Styled.LoginContainer>
    )
}

export default Login

