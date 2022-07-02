import React, { useEffect, useState } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import { SkeletonText } from '@chakra-ui/react';


const Quote = (props) => {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    fetchQuote().then(info => setQuoteInfo(info));
  }, []);

  const fetchQuote = async function () {
    const response = await fetch(
      'https://stoicquotesapi.com/v1/api/quotes/random'
    );
    const responseJSON = await response.json();
    const data = await responseJSON
    return { ...data };
  };
  if (!quoteInfo.body) return <div {...props}>
  <SkeletonText noOfLines={3} mx='20%'/><br/>
  <SkeletonText ml='50%' mr='20%' noOfLines={1}/></div>;
  return (
    <div {...props}>
      <QuoteText quote={quoteInfo.body} />
      <QuoteAuthor author={quoteInfo.author} />
    </div>
  );
};

export default Quote;
