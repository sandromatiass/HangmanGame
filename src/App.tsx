import {BrowserRouter, Route, Routes} from "react-router-dom";

import InitialPage from "./shared/screens/initial/initialPage";
import Credits from "./shared/screens/credits/credits";

import CHeader from "./shared/screens/components/containers/header/header";
import Footer from "./shared/screens/components/containers/footer/footer";

import Reset from "./styles/Generic/Reset";

function App() {
  return (

    <BrowserRouter>
    <Reset/>
    <CHeader/>
      <Routes>
          <Route path="/" element={<InitialPage/>}/>
          <Route path="/Creditos" element={<Credits/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
