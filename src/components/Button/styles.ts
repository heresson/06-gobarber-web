import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  padding: 16px;
  border-radius: 10px;
  border: 0;

  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  place-content: center;

  .text {
    margin-left: auto;
    margin-right: auto;
  }

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
