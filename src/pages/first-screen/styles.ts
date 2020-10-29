import styled from 'styled-components/native'

export const Container = styled.View`
    
    align-items:center;
    flex-direction:column;
    padding:10%;

    height:100%;

`
export const Image = styled.Image`
    width:100%;
    height:300px;
`

export const TextContainer = styled.View`
    width:100%;
    flex:1;
    align-items:center;
 
`



export const Button = styled.TouchableOpacity`
    width:45%;
    height:50px;
    background-color:#77056D;
    padding:15px;
    border-radius:15px;
    align-items:center;
    justify-content:center;
`

export const ButtonsContainer = styled.View`
display:flex;
flex-direction:row;
width:100%;
justify-content:space-between;
`