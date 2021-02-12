import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchList } from '../store/entitiesSlice';
import { RootState } from '../store/types';
import { AppDispatch } from '../store';

const useListEntities = () => {
  const dispatch: AppDispatch = useDispatch();
  const { list, isLoading, error } = useSelector((state: RootState) => state.entities);
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);
  return { list, isLoading, error };
};

export default useListEntities;
