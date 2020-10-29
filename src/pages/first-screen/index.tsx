import React from 'react'
import { View, Image } from 'react-native'
import * as Styled from './styles'
import Text from '../../components/Text'
import smartHomeIcon from '../../assets/images/icons/smart-home-icon.png'

const FirstScreen = () => {
    return (
        <Styled.Container>
            
                <Styled.Image source={smartHomeIcon} />
      

            <Styled.TextContainer>
                    <Text weight="Bold" size="18px">
                        Organize sua casa
            </Text>
                    <Text>
                        o equilibrio é importante para uma vida saudavel, quando alguma area da sua vida vai mal, impacta todas as outras
            </Text>
                </Styled.TextContainer>
                <Styled.ButtonsContainer>
                    <Styled.Button >
                        <Text weight="Bold" color="#fff">Entrar</Text>
                    </Styled.Button>
                    <Styled.Button>
                        <Text weight="Bold" color="#fff">Registrar</Text>
                    </Styled.Button>
                </Styled.ButtonsContainer>
        </Styled.Container>
    )
}

export default FirstScreen
