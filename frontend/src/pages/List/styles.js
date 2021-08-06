import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
`;

export const Icon = styled.div`
  
    position: absolute;
    display: flex;
    margin-top: 20px;
    align-self: center;
    padding-left: 20%;

      ${props => props.loading && css`
        svg {
        animation: ${rotate} 2s linear infinite;
        }`
  }
      `;