import styled from "styled-components";

export const CKeyboard = styled.div`
  display: "grid";
  grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
  gap: ".8rem";
  width: 100%;
`

export const StyledButton = styled.button`
  border: 2px solid black;
  background: none;
  aspect-ratio: 1 / 1;
  font-size: 1.2em;
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
