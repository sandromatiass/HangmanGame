import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./hangmanBody/hangmanDrawing";
import { HangmanComplet } from "./hangmanComplet/hangmanComplet";
import { Keyboard } from "./keyboard/keyboard";
import wordsData from "../list.json";

import { 
  CButtons, 
  CCompletGame, 
  CInfo, 
  CNextWord, 
  CPlayGame, 
  CTextKey, 
  CWinPlayer, 
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

  const [showLevelUpMessage, setShowLevelUpMessage] = useState(false);

  const [showNextWordButton, setShowNextWordButton] = useState(false);

  const [winPleyer, setWinPleyer] = useState(false);

  const wordsByLevel: WordData = wordsData[0];

  const resetGameState = () => {
    setCurrentHint(null);
    setGuessedLetters([]);
  };

  const determineLevelFromScore = (score: number) => {
    if (score >= 15) {
      return "levelThree"; 
    } else if (score >= 10) {
      return "levelTwo"; 
    } else {
      return "levelOne";
    }
  };

  const currentWordIndex = wordsByLevel[currentLevel].indexOf(currentWord!);
    if (currentWordIndex === wordsByLevel[currentLevel].length - 1) {
    const newLevel = determineLevelFromScore(score);
      setCurrentLevel(newLevel);
  }

  const goToNextWord = () => {
    const currentWordIndex = wordsByLevel[currentLevel].indexOf(currentWord!);
    if (currentWordIndex === wordsByLevel[currentLevel].length - 1) {
      const newLevel = determineLevelFromScore(score);
      setCurrentLevel(newLevel);
    }
    setCurrentWord(getRandomWord(wordsByLevel[currentLevel]));
    resetGameState();
  };

const handleWordGuessed = () => {
  setScore((prevScore) => prevScore + 5);

  if (!currentWord) {
    return;
  }

  const currentWordIndex = wordsByLevel[currentLevel].indexOf(currentWord!);

  if (currentWordIndex === wordsByLevel[currentLevel].length - 1) {
    const newLevel = determineLevelFromScore(score);
    setCurrentLevel(newLevel);
  } else {
    setShowNextWordButton(true);
  }

  if (score >= 5) {
    setWinPleyer(true); // Define o jogador como vencedor
  } else if (score >= 15 && currentLevel === "levelOne") {
    setShowLevelUpMessage(true);
    setShowNextWordButton(false);

    setTimeout(() => {
      setCurrentLevel("levelTwo");
    }, 3000);
  } else if (score >= 20 && currentLevel === "levelTwo") {
    setShowLevelUpMessage(true);
    setShowNextWordButton(false);

    setTimeout(() => {
      setCurrentLevel("levelThree");
    }, 3000);
  } else {
    setShowLevelUpMessage(false);
  }
};

  useEffect(() => {
    if (score >= 20 && currentLevel === "levelOne") {
      setShowLevelUpMessage(true);
    } else if (score >= 25 && currentLevel === "levelTwo") {
      setShowLevelUpMessage(true);
    } else {
      setShowLevelUpMessage(false); 
    }
  }, [score, currentLevel]);

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

  const isLoser = incorrectLetters.length >= 8;

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
    setCurrentLevel("levelOne");
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
      {winPleyer ? (
        <CWinPlayer>
          <span>Você é o vencedor! Parabéns!</span>
          <p>Obrigado por participar dessa experiencia incrível, visite nosso LinkedIn e faça um comentário no post da aplicação!</p>
          <button onClick={restartGame}>Reiniciar Jogo</button>
        </CWinPlayer>
      ) : (
        <>
        <CPlayGame>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <OcultText>
          <TextCongratulations>
            {isLoser && (
              <p style={{ color: "red" }}>
                Você errou, tente novamente!!
              </p>
            )}

           {isWinner && !showCongratulations && showNextWordButton && (
             <CNextWord>
                <p style={{ color: "green" }}>
                    Parabéns, você acertou! Ganhou mais 5 pontos. Siga para a próxima palavra.
                </p>
                <button onClick={goToNextWord}>Próxima Palavra</button>
             </CNextWord>
           )}
           
           {showLevelUpMessage && (
             <p style={{ color: "blue" }}>
               Parabéns, você passou para o próximo nível!
               <p>Aguarde...</p>
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
          <button onClick={onReturnToStart}>Início</button>
          <button onClick={restartGame}>Reiniciar Jogo</button>
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
      </>
      )}
    </CCompletGame>
  );
}

export default HangmanGame;