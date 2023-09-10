import { CStartGame } from "./start.styles";
import imgGifStart from "../../../../../assets/gif/startGame.gif";
import Button from "../../components/buttons";
import { useState } from 'react';
import Register from "../register/register";
import LoadingPage from "../loading/loading";

type UserData = {
  name: string;
  avatar: string;
};

const StartGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStartGame, setShowStartGame] = useState(true);
  const [showRegister, setShowRegister] = useState(false); // Novo estado

  const handleRegister = (newUserData: UserData) => {
    // Lidar com o registro aqui se necessário
  };

  const handleLoading = () => {
    setShowStartGame(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowRegister(true); 
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
      {isLoading ? (
        <LoadingPage />
      ) : showRegister ? ( 
        <Register onRegister={handleRegister} />
      ) : null}
    </div>
  );
};

export default StartGame;
