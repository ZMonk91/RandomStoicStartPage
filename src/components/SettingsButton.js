import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaCog } from 'react-icons/fa';

export const SettingsButton = props => {
  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Go to Settings page`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={console.log('settings clicked')}
      icon={<FaCog />}
      {...props}
    />
  );
};
