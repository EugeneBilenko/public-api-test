import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { useEffect } from 'react';
import { clearEntity, EntitiesState, fetchEntity } from '../store/entitiesSlice';
import { useParams } from 'react-router-dom';

const useEntityDetails = (): Partial<EntitiesState> => {
  const dispatch = useDispatch();
  const { entityId } = useParams<{ entityId: string }>();
  const { selectedEntity, isLoading } = useSelector((state: RootState) => state.entities);
  useEffect(() => {
    dispatch(fetchEntity(entityId));
    return () => {
      dispatch(clearEntity());
    };
  }, [ dispatch, entityId ]);

  return { selectedEntity, isLoading };
};

export default useEntityDetails;
