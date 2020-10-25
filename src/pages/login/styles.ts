import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Text from '../../components/Text'

export const LoginContainer = styled.View`
    flex:1;
    margin:10%;
`

export const TitleContainer = styled.View`
    flex:1;
    align-items:center;
    margin-bottom:50px;
`


export const SubtitleContainer = styled.View`
    flex:1;
    align-items:center;
    margin-bottom:50px;
`

export const ButtonsWrapper = styled.View`

`

export const Input = styled.TextInput`
    height:50px;
    font-family: "OpenSans-SemiBold";
    background:#EBECF0;
`;

export const Button = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    background-color:#466475;
    height:45px;
    border-radius:12px;
  
`;

export const ButtonText = styled.Text`
    color:#fff;
    font-family: "OpenSans-SemiBold";
`

export const ButtonLinearGradient = styled(LinearGradient)`
    width:100%;
    height:100%;
`
