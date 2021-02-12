import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './types';
import { getEntities, getEntity } from '../services/api';

export interface ListEntity {
  id: number;
  name: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

export interface EntityDetails extends ListEntity {
  tagline: string;
  abv: string;
  ibu: string;
  food_pairing: string;
  brewers_tips: string;
}

export interface EntitiesState {
  list: ListEntity[],
  isLoading: boolean,
  error: string | null,
  selectedEntity: EntityDetails | null
}

const initialState: EntitiesState = {
  list: [],
  isLoading: false,
  error: null,
  selectedEntity: null,
};

export const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    loadingStarted: state => {
      state.isLoading = true;
      state.error = null;
    },
    loadingCompleted: state => {
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setList: (state, action: PayloadAction<ListEntity[]>) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    setEntity: (state, action: PayloadAction<EntityDetails>) => {
      state.selectedEntity = action.payload;
      state.isLoading = false;
    },
    clearEntity: (state) => {
      state.selectedEntity = null;
    },
  },
});
export const { setEntity, loadingStarted, setError, setList, clearEntity } = entitiesSlice.actions;

export const fetchList = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loadingStarted());
    const response = await getEntities();
    dispatch(setList(response.data));
  } catch (e) {
    setError(e.message);
  }
};

export const fetchEntity = (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loadingStarted());
      const response = await getEntity(id);
      const entity = response.data[ 0 ];
      if (!entity) {
        setError('Entity not found');
      }
      dispatch(setEntity({ ...entity, food_pairing: entity.food_pairing.join(', ') }));
    } catch (e) {
      setError(e.message);
    }
  };

export default entitiesSlice.reducer;
