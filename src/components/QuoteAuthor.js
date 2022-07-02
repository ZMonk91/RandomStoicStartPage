import React from 'react';
import { Text } from '@chakra-ui/react';

const QuoteAuthor = ({ author }) => {
  return <Text fontWeight={'bold'}>-{author}</Text>;
};

export default QuoteAuthor;
