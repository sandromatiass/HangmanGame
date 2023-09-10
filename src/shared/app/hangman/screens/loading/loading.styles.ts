import styled, { keyframes } from 'styled-components';

export const CLoadingPage = styled.div`
 
`

const progKeyframes = keyframes`
  to {
    width: 100%;
  }
`;

export const LoaderContainer = styled.div`
  display: block;
  position: relative;
  height: 12px;
  width: 80%;
  border: 1px solid #fff;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #FF3D00;
    animation: ${progKeyframes} 6s ease-in infinite;
  }
`;