import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  border: 3px solid black;
  background: none;
  aspect-ratio: 1 / 1;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: .5rem;
  font-weight: bold;
  cursor: pointer;
  color: black;

  &.active {
    background-color: hsl(200, 100%, 50%);
    color: white;
  }

  &.inactive {
    opacity: .3;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);
  }
`;
