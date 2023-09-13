import styled from 'styled-components';

export const CRulesObje = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
`

export const RulesObej = styled.div`
 display: flex;
 flex-direction: column;
 font-family: 'Ubuntu', sans-serif;
 width: 100%;
 background-color: lightgrey;

 h2{
  font-size: 2em;
  margin-bottom: 1rem;
 }

 ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
 }

 li {
  font-size: 1.1em;
  line-height: 1.2rem;
 }

 span {
  font-weight: 600;
 }
`

export const CreditsContainer = styled.div`
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0 5rem;

  strong{
    font-weight: 600;
  }
`;

export const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 1.2rem;
  
  p {
    font-weight: 600;
    text-align: center;
    font-size: 1em; 
  }
`;

export const TeamMember = styled.div`
  width: 150px;
  text-align: center;
`;

export const TeamMemberImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 3px 4px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const CollegeLogo = styled.img`
  max-width: 200px;
  margin-top: 20px;
  padding-bottom: 3rem;
`;


