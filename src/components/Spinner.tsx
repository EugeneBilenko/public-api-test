import React from 'react';
import { Center, Spinner as Spin } from '@chakra-ui/react';


const Spinner = () => (
  <Center w="100%" h="100vh">
    <Spin
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
);
export default Spinner;
