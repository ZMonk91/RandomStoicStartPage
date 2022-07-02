import React from 'react';
import { Text } from '@chakra-ui/react';

export const Clock = props => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours > 12 ? (hours -= 12) : hours;
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  let time = `${hours}:${minutes}`;

  return <Text {...props}>{time}</Text>;
};
