import React from 'react';

import Text from '../Text';

import * as Styled from './styles';

const ErrorMessage = ({ children }: any) => {
  return (
    <Styled.ErrorMessage>
      <Text color="#e00d0d">{children}</Text>
    </Styled.ErrorMessage>
  );
};

export default ErrorMessage;
