import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartGame from "./screens/start/start";
import Register from "./screens/register/register";
import { useState } from "react";

type UserData = {
  name: string;
  avatar: string;
};

const HangmanApp = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<UserData[]>([]);

  const handleRegister = (newUserData: UserData) => {
    setUserData(newUserData);
    setRegisteredUsers([...registeredUsers, newUserData]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HangmanApp;
