import CGamer from "../components/containers/gamer/gamer";
import { SCmain } from "../components/containers/main/main.styles";
import pgImag from "../../../assets/gif/propaganda2.gif"
import { PgTWO } from "./initialPage.styles";


const InitialPage = () => {
  return (
    <SCmain>
      <CGamer/>
      <PgTWO>
          <img src={pgImag} alt="Propaganda dois" />
      </PgTWO>
    </SCmain >  
  )
}

export default InitialPage;