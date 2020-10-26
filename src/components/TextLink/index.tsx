import React from 'react'

import * as Styled from './styles'

import Text from '../Text'


interface TextLinkProps {
    children: string,
    onPress(): void,
    weight?: string,
    size?: string,
    color?: string

}

const TextLink = ({ children, onPress,weight="Bold",size="14px",color="#000"}:TextLinkProps) => {
    return (
        <Styled.TouchableOpacity 
            onPress={onPress}
        >
            <Text 
                size={size}
                color={color}
                weight={weight}>
                {children}
            </Text>
        </Styled.TouchableOpacity>
    )
}

export default TextLink