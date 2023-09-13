import styled from 'styled-components';

export const Head = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 0.4rem solid black;
  position: absolute;
  top: 2.89rem;
  right: -2px;
`;

export const Body = styled.div`
  width: 0.4rem;
  height: 100px;
  background: black;
  position: absolute;
  top: 5.4rem;
  right: 1rem;
`;

export const RightArm = styled.div`
  width: 5rem;
  height: 0.4rem;
  background: black;
  position: absolute;
  top: 7rem;
  right: -4rem;
  transform: rotate(-30deg);
  transform-origin: left bottom;
`;

export const LeftArm = styled.div`
  width: 5rem;
  height: 0.4rem;
  background: black;
  position: absolute;
  top: 7rem;
  right: 1.3rem;
  transform: rotate(30deg);
  transform-origin: right bottom;
`;

export const RightLeg = styled.div`
  width: 5rem;
  height: 0.4rem;
  background: black;
  position: absolute;
  top: 11rem;
  right: -3.7rem;
  transform: rotate(60deg);
  transform-origin: left bottom;
`;

export const LeftLeg = styled.div`
  width: 5rem;
  height: 0.4rem;
  background: black;
  position: absolute;
  top: 11rem;
  right: 1rem;
  transform: rotate(-60deg);
  transform-origin: right bottom;
`;

export const EyesX = styled.div`
  font-size: 0.8em;
  font-weight: bolder;
  position: absolute;
  margin-left: 14rem;
  margin-top: 2.8rem;
`;

export const EyesY = styled.div`
  font-size: 0.8em;
  font-weight: bolder;
  position: absolute;
  margin-left: 15rem;
  margin-top: 2.8rem;
`;

