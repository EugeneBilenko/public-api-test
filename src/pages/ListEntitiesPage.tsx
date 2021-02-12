import React from 'react';
import { Wrap } from "@chakra-ui/react";
import useListEntities from '../hooks/useListEntities';
import ListEntitiesItem from '../components/ListEntitiesComponents/ListEntitiesItem';
import ErrorBoundary from '../components/ErrorBoundary';
import Spinner from '../components/Spinner';


const ListEntitiesPage = () => {
  const { list, isLoading, error } = useListEntities();

  if (isLoading) return <Spinner />;

  if (error) {
    return (
      <ErrorBoundary>
        {error}
      </ErrorBoundary>
    );
  }
  return (
    <Wrap py="15px">
      {list.map((item) => <ListEntitiesItem item={item} key={item.id} />)}
    </Wrap>
  );
};

export default ListEntitiesPage;
