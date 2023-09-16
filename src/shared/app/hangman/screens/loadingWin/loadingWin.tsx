import { CLoadingPage, LoaderContainer, PLoading } from "./loadingWin.styles";

const LoadingWin = () => {
  

  return (
    <CLoadingPage>
      <h2>Você atingiu 90 pontos, parabéns!!</h2>  
      
      <PLoading>Loading...</PLoading>
      <LoaderContainer/>  
    </CLoadingPage>
  )
};

export default LoadingWin;
