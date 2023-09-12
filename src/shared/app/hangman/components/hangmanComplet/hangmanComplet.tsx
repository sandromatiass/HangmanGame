import { CHangmanComplet, TagText } from "./hagmanComplet.styles"

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

export function HangmanComplet({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <CHangmanComplet
      style={{
        
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <TagText  key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "lightGrey" : "black",
            }}
          >
            {letter}
          </span>
        </TagText>
      ))}
    </CHangmanComplet>
  )
}