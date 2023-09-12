import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./hangmanBody/hangmanDrawing";
import { HangmanComplet } from "./hangmanComplet/hangmanComplet";
import { Keyboard } from "./keyboard/keyboard";
import wordsData from "../list.json";

import { 
  CButtons, 
  CCompletGame, 
  CInfo, 
  CPlayGame, 
  CTextKey, 
  Ctip, 
  OcultText, 
  TextCongratulations 
} from "./hangman.styles";

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

  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [currentHint, setCurrentHint] = useState<string | null>(null);

  const [currentLevel, setCurrentLevel] = useState<keyof WordData>("levelOne");

  const wordsByLevel: WordData = wordsData[0];

  const resetGameState = () => {
    setCurrentHint(null);
    setGuessedLetters([]);
  };

  const determineLevelFromScore = (score: number) => {
    if (score >= 15) {
      return "levelThree"; // Nível 3
    } else if (score >= 10) {
      return "levelTwo"; // Nível 2
    } else {
      return "levelOne"; // Nível 1
    }
  };
  
  const goToNextLevel = () => {
    if (score >= 10 && currentLevel === "levelOne") {
      setCurrentLevel("levelTwo");
    } else if (score >= 15 && currentLevel === "levelTwo") {
      setCurrentLevel("levelThree");
    } else {
      // Não é possível avançar para o próximo nível
    }
  
    setCurrentWord(null);
    setCurrentHint(null);
    setGuessedLetters([]);
  };

  const handleWordGuessed = () => {
    setScore((prevScore) => prevScore + 5);
  
    if (!currentWord) {
      return;
    }
  
    const newLevel = determineLevelFromScore(score);
    setCurrentLevel(newLevel);
  
    const currentWordIndex = wordsByLevel[currentLevel].indexOf(currentWord);
  
    if (currentWordIndex === wordsByLevel[currentLevel].length - 1) {
      if (score >= 10 && currentLevel === "levelOne") {
        goToNextLevel();
      } else if (score >= 15 && currentLevel === "levelTwo") {
        goToNextLevel();
      } else {
        // Não é possível avançar para o próximo nível
        // Realize alguma ação, se necessário
      }
    } else {
      setTimeout(() => {
        setCurrentWord(wordsByLevel[currentLevel][currentWordIndex + 1]);
        setCurrentHint(null);
        setGuessedLetters([]);
      }, 5000);
    }
  };
  

  // Mapeia os níveis e transforma em outros nomes
  const getLevelName = (levelKey: keyof WordData) => {
    switch (levelKey) {
      case "levelOne":
        return "Nível 1";
      case "levelTwo":
        return "Nível 2";
      case "levelThree":
        return "Nível 3";
      default:
        return "";
    }
  };

  const changeWordWith = () => {
    const newWord = getRandomWord(wordsByLevel[currentLevel]);
    setCurrentWord(newWord);
    resetGameState();
  };

  useEffect(() => {
    changeWordWith();
  }, [currentLevel, wordsByLevel]);

  const showHint = () => {
    if (currentWord) {
      setCurrentHint(currentWord.dica);
    }
  };

  const incorrectLetters = guessedLetters.filter(
    (letter) => !currentWord?.palavra.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;

  const isWinner =
  currentWord?.palavra.split("").every((letter) => {
    if (letter === ' ') {
      return true;
    }
    return guessedLetters.includes(letter);
  });

const addGuessedLetter = useCallback(
  (letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  },
  [guessedLetters, isWinner, isLoser]
);

  const restartGame = () => {
    setScore(0);
    setGuessedLetters([]);
    changeWordWith(); 
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

  useEffect(() => {
    if (isWinner && currentWord) {
      handleWordGuessed();
    }
  }, [isWinner, currentWord]);


  const retryWord = () => {
    if (currentWord) {
      setCurrentHint(null);
      setGuessedLetters([]);
    }
  };

  return (
    <CCompletGame>
      <CPlayGame>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <OcultText>
          <TextCongratulations>
            {isLoser && (
              <p style={{ color: "red" }}>
                Você errou, tente novamente!!
              </p>
            )}

            {isWinner && !showCongratulations && (
              <p style={{ color: "green" }}>
                Parabéns, você acertou! Ganhou mais 5 pontos. Siga para a próxima palavra.
              </p>
            )}
          </TextCongratulations>
          <Ctip>
            <p>
              {currentHint && <span> Dica: {currentHint}</span>}
            </p>
          </Ctip>
         
        </OcultText>
        
        <CButtons style={{ fontSize: "1.5rem", textAlign: "center" }}>
          <CInfo>
            <p>
              Score {score}
            </p>
            <p>
              {getLevelName(currentLevel)}
            </p>
          </CInfo>
          <button onClick={onReturnToStart}>Home</button>
          <button onClick={restartGame}>Restart Game</button>
          <button onClick={showHint}>Dicas</button>
          <button onClick={retryWord}>Tentar novamente</button>
        </CButtons>
      </CPlayGame>
    
      <CTextKey>
        <HangmanComplet
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={currentWord?.palavra || ""}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              currentWord?.palavra.includes(letter) || []
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </CTextKey>
    </CCompletGame>
  );
}

export default HangmanGame;
