import styled from 'styled-components/native'

interface PropsTypes {
    weight:string,
    size: string,
    color: string
}

export const Text = styled.Text`
    font-size: ${(props:PropsTypes) => props.size};
    font-family: ${(props:PropsTypes ) => "OpenSans-"+props.weight};
    color:${(props:PropsTypes) => props.color};

`