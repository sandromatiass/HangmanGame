import styled from "styled-components";
import { Link } from 'react-router-dom'; 

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  justify-content: center;
  padding: 1.2rem;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;