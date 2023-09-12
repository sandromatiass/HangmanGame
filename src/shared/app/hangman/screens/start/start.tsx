import { CStartGame } from "./start.styles";
import imgGifStart from "../../../../../assets/gif/startGame.gif";
import Button from "../../components/buttons";
import { useState } from 'react';
import LoadingPage from "../loading/loading";
import HangmanGame from "../../components/hangman";

const StartGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStartGame, setShowStartGame] = useState(true);
  const [showHangmanGame, setShowHangmanGame] = useState(false); 
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleLoading = () => {
    setShowStartGame(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowHangmanGame(true); 
    }, 10000);
  };

  const handleReturnToStart = () => {
    setShowHangmanGame(false);
    setShowStartGame(true);
    setShowCongratulations(false);
  };

  return (
    <div>
      {showStartGame && (
        <CStartGame>
          <img src={imgGifStart} alt="Gif_Initial" />
          <Button text="INICIAR JOGO" onClick={handleLoading} />
        </CStartGame>
      )}
      {isLoading ? (
        <LoadingPage />
      ) : showHangmanGame ? ( 
        <HangmanGame
          showCongratulations={showCongratulations}
          onReturnToStart={handleReturnToStart}
        />
      ) : null}
    </div>
  );
};

export default StartGame;