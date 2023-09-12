import { CKeyboard, StyledButton } from "./keyboard.styles";

const LETTERS = "abcdefghijklmnopqrstuvwxyzáàâãéêíóôõúç";

function normalizeLetter(letter: string): string {
  const index = LETTERS.indexOf(letter);
  return index !== -1 ? LETTERS[index] : letter;
}

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <CKeyboard
    >
      {LETTERS.split("").map((key) => {
        const normalizedKey = normalizeLetter(key);
        const isActive = activeLetters.includes(normalizedKey);
        const isInactive = inactiveLetters.includes(normalizedKey);
        return (
          <StyledButton
            onClick={() => addGuessedLetter(normalizedKey)}
            className={`${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </StyledButton>
        );
      })}
    </CKeyboard>
  );
}
