import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppReducer, IDemoStepOneState } from '../steps/demo-step-one/store/demo-step-one-reducer';

export const reducers: ActionReducerMap<IDemoStepOneState> = {
  AppState: AppReducer,
};

export const metaReducers: MetaReducer<IDemoStepOneState>[] = [];
