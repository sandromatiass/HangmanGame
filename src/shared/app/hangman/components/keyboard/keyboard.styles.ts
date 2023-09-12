import styled from "styled-components";

export const OKeyboard = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const CKeyboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.3rem;
  gap: 0.2rem;
  width: 100%;
`

export const StyledButton = styled.button`
  font-family: 'Ubuntu', sans-serif;
  border-radius: 0.5rem;
  background: #333333;
  font-size: 1.3em;
  text-transform: uppercase;
  padding: .5rem;
  font-weight: 400;
  cursor: pointer;
  color: white;
  width: 2.6rem;
  height: auto;
  

  &.active {
    background-color: hsl(0, 0%, 51%);
    color: white;
  }

  &.inactive {
    opacity: .3;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(0, 0%, 68%);
  }
`;
