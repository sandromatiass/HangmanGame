import { CLoadingPage, LoaderContainer, PLoading, TextRules } from "./loading.styles";
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
      <TextRules>
          {currentRule.text}
      </TextRules>
        
      
      <PLoading>Loading...</PLoading>
      <LoaderContainer/>  
    </CLoadingPage>
  )
};

export default LoadingPage;
