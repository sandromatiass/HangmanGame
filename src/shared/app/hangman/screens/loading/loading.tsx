import { CLoadingPage, LoaderContainer } from "./loading.styles";
import { useState, useEffect } from 'react';
import rules from './rules.json';

const LoadingPage = () => {
  const [ruleIndex, setRuleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRuleIndex(prevIndex => (prevIndex + 1) % rules.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentRule = rules[ruleIndex];

  return (
    <CLoadingPage>
      <p>{currentRule.text}</p>
      <p>Loading...</p>
      <LoaderContainer/>  
    </CLoadingPage>
  )
};

export default LoadingPage;
