import React from 'react';
import { Flex } from '@chakra-ui/react';
import useEntityDetails from '../hooks/useEntityDetails';
import Spinner from '../components/Spinner';
import EntityImage from '../components/EntityDetailsComponents/EntityImage';
import EntityProperties from '../components/EntityDetailsComponents/EntityProperties';


const EntityDetailsPage = () => {
  const { selectedEntity, isLoading } = useEntityDetails();
  if (isLoading) {
    return <Spinner />;
  }
  if (!selectedEntity) {
    return null;
  }
  return selectedEntity && (
    <Flex py={30}>
      <EntityImage imageUrl={selectedEntity.image_url} />
      <EntityProperties selectedEntity={selectedEntity} />
    </Flex>
  );
};

export default EntityDetailsPage;

