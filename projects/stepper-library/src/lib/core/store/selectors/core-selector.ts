import { createSelector } from '@ngrx/store';
import { IApp, IAppState } from '../app.interface';
 
export const selectFeature = (state: IAppState) => state;
 
export const getUserName = createSelector(
  selectFeature,
  (state: IAppState) => state.AppState
);