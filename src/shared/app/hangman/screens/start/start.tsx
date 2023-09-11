import { CStartGame } from "./start.styles";
import imgGifStart from "../../../../../assets/gif/startGame.gif";
import Button from "../../components/buttons";
import { useState } from 'react';
import LoadingPage from "../loading/loading";
import HangmanGame from "../../components/hangman";

const StartGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStartGame, setShowStartGame] = useState(true);
  const [showHangmanGame, setShowHangmanGame] = useState(false); // Novo estado
  const [showCongratulations, setShowCongratulations] = useState(false); // Novo estado

  const handleLoading = () => {
    setShowStartGame(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowHangmanGame(true); // Ative o HangmanGame após a tela de loading
    }, 6000);
  };

  const handleReturnToStart = () => {
    // Esta função será chamada quando o botão "Return to Start" for clicado
    setShowHangmanGame(false);
    setShowStartGame(true);
    setShowCongratulations(false); // Certifique-se de redefinir o estado de parabéns ao retornar ao início
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
      ) : showHangmanGame ? ( // Renderize o HangmanGame apenas quando showHangmanGame for verdadeiro
        <HangmanGame
          showCongratulations={showCongratulations}
          onReturnToStart={handleReturnToStart}
        />
      ) : null}
    </div>
  );
};

export default StartGame;