import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

interface IProps {
  imageUrl: string;
}

const EntityImage = ({ imageUrl }: IProps) => {
  return (
    <Flex w="30%">
      <Image px={30} src={imageUrl} objectFit="contain" />
    </Flex>
  );
};

export default EntityImage;
