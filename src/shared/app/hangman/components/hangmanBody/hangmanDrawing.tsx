import { Head, Body, RightArm, LeftArm, RightLeg, LeftLeg } from "./HagmanBody.styles";

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

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const bodyParts = [
    <Head key="head" />,
    <Body key="body" />,
    <RightArm key="right-arm" />,
    <LeftArm key="left-arm" />,
    <RightLeg key="right-leg" />,
    <LeftLeg key="left-leg" />
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
