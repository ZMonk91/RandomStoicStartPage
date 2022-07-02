import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Grid, theme, GridItem } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import Quote from './components/Quote';
import { Clock } from './components/Clock';
import { SettingsButton } from './components/SettingsButton';
import { fetchBg } from './utils';

function App() {
  const [bg, setBg] = useState('');
  let bgImage = bg;

  useEffect(() => {
    fetchBg().then(url => setBg(url));

  }, []);
  bgImage = `url('${bg}')`;

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        bg={
          'radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );'
        }
        backgroundImage={bgImage}
        bgSize="cover"
      >
        <Grid
          minH="100vh"
          p={4}
          templateRows="repeat(8,1fr)"
          templateColumns="repeat(8,1fr)"
        >
          {/* First Row */}
          <GridItem rowSpan={1} colSpan={1}>
            <Clock />
          </GridItem>
          <GridItem rowSpan={1} colSpan={6} />
          <GridItem rowSpan={1} colSpan={1}>
            <Box>
              <ColorModeSwitcher justifySelf="flex-end" />
              <SettingsButton />
            </Box>
          </GridItem>

          {/* Second Row */}
          <GridItem
            display="grid"
            rowSpan={5}
            colSpan={8}
            alignContent="center"
          >
            <Quote />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
