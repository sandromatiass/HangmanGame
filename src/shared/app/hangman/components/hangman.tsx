import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./hangmanBody/hangmanDrawing";
import { HangmanComplet } from "./hangmanComplet/hangmanComplet";
import { Keyboard } from "./keyboard/keyboard";
import wordsData from "../list.json";

interface Word {
  id: number;
  palavra: string;
  dica: string;
}

interface WordData {
  levelOne: Word[];
  levelTwo: Word[];
  levelThree: Word[];
}

interface HangmanGameProps {
  showCongratulations: boolean;
  onReturnToStart: () => void;
}

function getRandomWord(level: Word[]) {
  return level[Math.floor(Math.random() * level.length)];
}

function HangmanGame({ showCongratulations, onReturnToStart }: HangmanGameProps) {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const levels: (keyof WordData)[] = ["levelOne", "levelTwo", "levelThree"];
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const currentLevel = levels[currentLevelIndex];

  const wordsByLevel: WordData = wordsData[0]; // Altere o índice se necessário

  const currentWordList = wordsByLevel[currentLevel];
  const currentWord = getRandomWord(currentWordList);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !currentWord.palavra.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner =
    currentWord.palavra.split("").every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  const nextWord = useCallback(() => {
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
      setScore((prevScore) => prevScore + 5);
      onReturnToStart();
    } else {
      setCurrentLevelIndex(0);
      setScore(0);
    }
    setGuessedLetters([]);
  }, [currentLevelIndex, onReturnToStart, levels.length]);

  const restartGame = () => {
    setCurrentLevelIndex(0);
    setScore(0);
    setGuessedLetters([]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [setGuessedLetters]);

  return (
    <div
      style={{
        maxWidth: "60rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isLoser && "Nice Try - Refresh to try again"}
        {isWinner && showCongratulations && (
          <p style={{ color: "red" }}>
            Parabéns, você acertou! Ganhou mais 5 pontos. Siga para a próxima palavra.
          </p>
        )}
        {isWinner && !showCongratulations && (
          <span>
            Winner! Score: {score} -{" "}
            <button onClick={nextWord}>Next Word</button>{" "}
            <button onClick={restartGame}>Restart Game</button>
          </span>
        )}
      </div>
      <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
        Score: {score}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanComplet
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={currentWord.palavra}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            currentWord.palavra.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default HangmanGame;
