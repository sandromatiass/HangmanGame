import styled, { keyframes } from 'styled-components';

export const CLoadingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  margin-top: 2rem;
`

export const PLoading = styled.p`
  font-size: 2em;
  color: #333333;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bolder;
`

export const TextRules = styled.p`
  text-align: center;
  font-size: 2em;
  margin-bottom: 3rem;
  font-family: 'Ubuntu', sans-serif;
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
    background: #333333;
    animation: ${progKeyframes} 6s ease-in infinite;
  }
`;