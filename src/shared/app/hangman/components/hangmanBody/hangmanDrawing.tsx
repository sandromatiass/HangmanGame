import { Head, Body, RightArm, LeftArm, RightLeg, LeftLeg, EyesX, EyesY } from "./HagmanBody.styles";

import {
  BaseOne,
  BaseTwo,
  BaseThree,
  BaseFour,
  CDrawing
} from './hangmanDrawing.styles';

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const X = () =>{
  return (
    <EyesX>
      <p>X</p>
    </EyesX>
  )
};

const XX = () =>{
  return (
    <EyesY>
      <p>X</p>
    </EyesY>
  )
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const bodyParts = [
    <Head key="head" />,
    <Body key="body" />,
    <RightArm key="right-arm" />,
    <LeftArm key="left-arm" />,
    <RightLeg key="right-leg" />,
    <LeftLeg key="left-leg" />,
    <X key="EyesX"/>,
    <XX key="EyesY"/>,
  ];

  return (
    <CDrawing>
      {bodyParts.slice(0, numberOfGuesses)}
      <BaseFour />
      <BaseThree />
      <BaseTwo />
      <BaseOne />
    </CDrawing>
  );
}
