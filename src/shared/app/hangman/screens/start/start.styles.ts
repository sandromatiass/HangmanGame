import styled from "styled-components";

export const CStartGame = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;

  img {
    width: 60rem;
    height: 30rem;
  }

  button {
    background-color: #FF3D00; 
    color: white; 
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    position: absolute;
    margin-top: 15rem;
   

    transition: transform 0.2s;
  }

  button:hover {
    transform: scale(1.1); 
  }
`;
