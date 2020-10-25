import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Text from '../../components/Text'
import {View} from 'react-native'

export const LoginContainer = styled(View)`
    flex:1;

    align-items:center;


    padding:10%;

    height:100%;



`

export const TitleContainer = styled.View`
    align-items:center;
    margin-bottom:50px;
`


export const SubtitleContainer = styled.View`
    align-items:center;
    margin-bottom:50px;
`

export const ButtonsWrapper = styled.View`

`

export const Input = styled.TextInput`
    height:50px;
    font-family: "OpenSans-SemiBold";
    background:#EBECF0;

    margin-bottom:13px;
    margin-top:15px;

    padding: 0 15px;

    width:100%;
    border-radius:12px;

`;

export const Button = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    background-color:#466475;
    height:45px;
    border-radius:12px;

    width:100%;
    margin-top:32%;
    margin-bottom:7%;
  
`;

export const ButtonText = styled.Text`
    color:#fff;
    font-family: "OpenSans-SemiBold";
  
`

export const ButtonLinearGradient = styled(LinearGradient)`
    width:100%;
    height:100%;
`

export const ViewContainer = styled.View`
    width:100%;
`

export const ButtonContainer = styled.View`

width:100%;
    align-items:center;

`

