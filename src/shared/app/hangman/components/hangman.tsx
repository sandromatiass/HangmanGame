import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./hangmanBody/hangmanDrawing";
import { HangmanComplet } from "./hangmanComplet/hangmanComplet";
import { Keyboard } from "./keyboard/keyboard";
import wordsData from "../list.json";

import { FaLinkedinIn } from "react-icons/fa";

import { VscDebugRestart } from "react-icons/vsc"

import { 
  BLinkedin,
  BRestartChampion,
  CButtons, 
  CButtonsChapions, 
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

function HangmanGame({ showCongratulations, onReturnToStart }: HangmanGameProps) {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [currentHint, setCurrentHint] = useState<string | null>(null);

  const [currentLevel, setCurrentLevel] = useState<keyof WordData>("levelOne");

  const [showLevelUpMessage, setShowLevelUpMessage] = useState(false);

  const [showNextWordButton, setShowNextWordButton] = useState(false);

  const [winPlayer, setWinPlayer] = useState(false);

  const wordsByLevel: WordData = wordsData[0];

  const [usedWords, setUsedWords] = useState<Word[]>([]);

  function getRandomWord(level: Word[]) {
    const unusedWords = level.filter(word => !usedWords.includes(word));
    if (unusedWords.length === 0) {
      setUsedWords([]);
      return getRandomWord(level);
    }
    const randomIndex = Math.floor(Math.random() * unusedWords.length);
    const randomWord = unusedWords[randomIndex];
    setUsedWords([...usedWords, randomWord]);
    return randomWord;
  }

  const resetGameState = () => {
    setCurrentHint(null);
    setGuessedLetters([]);
  };

  const determineLevelFromScore = (score: number) => {
    if (score >= 20) {
      return "levelThree";
    } else if (score >= 15) {
      return "levelTwo";
    } else {
      return "levelOne";
    }
  };
  
  const goToNextWord = () => {
    const currentWordIndex = wordsByLevel[currentLevel].indexOf(currentWord!);
    if (currentWordIndex === wordsByLevel[currentLevel].length - 1) {
      setCurrentLevel(determineLevelFromScore(score));
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
      setCurrentLevel(determineLevelFromScore(score));
    } else {
      setShowNextWordButton(true);
    }
  
    if (score >= 25 && currentLevel === "levelOne") {
      setShowLevelUpMessage(true);
      setShowNextWordButton(false);
  
      setTimeout(() => {
        setCurrentLevel("levelTwo");
      }, 3000);
    } else if (score >= 55 && currentLevel === "levelTwo") {
      setShowLevelUpMessage(true);
      setShowNextWordButton(false);
  
      setTimeout(() => {
        setCurrentLevel("levelThree");
      }, 3000);
    } else if (score >= 85) {
      setTimeout(() => {
        setWinPlayer(true);
      }, 1000);
    }else {
      setShowLevelUpMessage(false);
    };
  };
   
  useEffect(() => {
    if (score >= 30 && currentLevel === "levelOne") {
      setShowLevelUpMessage(true);
    } else if (score >= 60 && currentLevel === "levelTwo") {
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
      changeWordWith(); 
    }
  };

  const redirecionarParaLinkedIn = () => {
    window.open('https://www.linkedin.com/posts/sandro-matias_educaaexaeto-tecnologia-aprendizadointerativo-activity-7108829834113380353-04jh?utm_source=share&utm_medium=member_desktop', '_blank');
  };

 return (
    <CCompletGame>
      {winPlayer ? (
        <CWinPlayer>
          <span>Você é o vencedor! Parabéns!</span>
          <p>Obrigado por participar dessa experiencia incrível, visite nosso LinkedIn e faça um comentário no post da aplicação!</p>
          <CButtonsChapions>
            <BRestartChampion onClick={onReturnToStart}><VscDebugRestart/>Reiniciar Jogo</BRestartChampion>
            <BLinkedin onClick={redirecionarParaLinkedIn}> <FaLinkedinIn/> LinkedIn</BLinkedin>
          </CButtonsChapions>
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
            <>
            <p style={{ color: "blue" }}>
              Parabéns, você passou para o próximo nível!
            </p>
            <p style={{ color: "blue" }}>Aguarde...</p>
            </>  
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