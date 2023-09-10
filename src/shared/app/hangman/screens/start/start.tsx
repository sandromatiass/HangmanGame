import { CStartGame } from "./start.styles";
import imgGifStart from "../../../../../assets/gif/startGame.gif";
import Button from "../../components/buttons";
import { useState } from 'react';
import LoadingPage from "../loading/loading";
import { useNavigate } from 'react-router-dom'; 

const StartGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStartGame, setShowStartGame] = useState(true);
  const navigate = useNavigate(); 

  const handleLoading = () => {
    setShowStartGame(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      navigate('/register');
    }, 6000);
  };

  return (
    <div>
      {showStartGame && (
        <CStartGame>
          <img src={imgGifStart} alt="Gif_Initial" />
          <Button text="INICIAR JOGO" onClick={handleLoading} />
        </CStartGame>
      )}
      {isLoading && (
        <LoadingPage />
      )}
    </div>
  );
};

export default StartGame;
