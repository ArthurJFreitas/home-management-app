import React from 'react'
import * as Styled from './styled'

interface TextProps {
    children: any,
    weight?: string,
    size?: string,
    color?: string
}

const Text = ({children,weight="Regular",size="14px",color="#000"}: TextProps) => {
    return (
        <Styled.Text color={color} size={size} weight={weight}>
            {children}
        </Styled.Text>
    )
}

export default Text