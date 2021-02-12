import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { EntityDetails } from '../../store/entitiesSlice';

interface IProps {
  selectedEntity: EntityDetails
}

const propsLabelsMapping = {
  abv: 'ABV',
  ibu: 'IBU',
  first_brewed: 'First brewed',
  food_pairing: 'Better tastes with',
  brewers_tips: 'Brewer tips',
};

const EntityProperties = ({ selectedEntity }: IProps) => {
  return (
    <Flex w="70%" flexDir="column">
      {Object.keys(propsLabelsMapping).map((key) => (
        <Flex py="15px">
          <Text d="box" w={1 / 4}>{propsLabelsMapping[ key as keyof (typeof propsLabelsMapping) ]}:</Text>
          <Text d="box" w={3 / 4}>{selectedEntity && selectedEntity[ key as keyof EntityDetails ]}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default EntityProperties;
