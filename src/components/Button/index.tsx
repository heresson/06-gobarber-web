import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtontProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtontProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
