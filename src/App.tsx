import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";

import InitialPage from "./shared/screens/initial/initialPage";
import Credits from "./shared/screens/credits/credits";

import CHeader from "./shared/screens/components/containers/header/header";
import Footer from "./shared/screens/components/containers/footer/footer";

import Reset from "./styles/Generic/Reset";

import imgModal from "./assets/gif/propaganda1.gif"


import { CenteredModal, CloseButton, ModalContent, ModalImage } from "./App.styles";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    <BrowserRouter>
    <Reset/>
    <CHeader/>
      <Routes>
          <Route path="/" element={<InitialPage/>}/>
          <Route path="/Creditos" element={<Credits/>}/>
      </Routes>
    <Footer/>

    <div>
      {isModalOpen && (
        <CenteredModal>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ModalImage src={imgModal} alt="Imagem do Modal" />
          </ModalContent>
        </CenteredModal>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
