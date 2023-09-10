import styled from 'styled-components';

export const CreditsContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;

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
`;

export const CollegeLogo = styled.img`
  max-width: 200px;
  margin-top: 20px;
`;