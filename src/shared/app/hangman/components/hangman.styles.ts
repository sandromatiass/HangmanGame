import styled from "styled-components";

export const CCompletGame = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Ubuntu', sans-serif;
  padding: 0.5rem;
`

export const CPlayGame = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OcultText = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.5rem;
 justify-content: center;
 align-items: center;
 width: 30%;
`

export const TextCongratulations = styled.div`
  font-size: 1.2em;
  text-align: center;
`

export const Ctip = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
`

export const CButtons = styled.div`
  display: flex;
  flex-direction: column;
 
  gap: 0.5rem;
  align-items: center;

  button {
    border: none;
    border-radius: 1rem;
    background: #333333;
    display: flex;
    font-weight: 600;
    justify-content: center;
    padding: 0.3rem 0;
    width: 85%;
    color: white;

    &:hover{
      background: #7a7a7a;
      cursor: pointer;
      
    }
  }
`

export const CInfo = styled.div`
  display: flex;
  gap: 1rem;
  
  margin-bottom: 0.5rem;

  p {
    font-weight: 600;
    text-transform: uppercase;
  }
`

export const CTextKey = styled.div`
  display: flex;
  flex-direction: column;
`



