import { HEAD, BODY, RIGHTARM, RIGHTLEG, LEFTLEG, LEFTARM } from "./dataHangman";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {[HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG].slice(0, numberOfGuesses).map((part, index) => (
        <div key={index}>{part}</div>
      ))}
      <div
        style={{
          height: "3.5rem",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "10rem",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "15rem",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "15rem", background: "black" }} />
    </div>
  );
}
