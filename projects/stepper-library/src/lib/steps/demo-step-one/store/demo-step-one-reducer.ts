import { Action, createReducer, on } from "@ngrx/store";
import * as DemoStepOneActions from './demo-step-one-actions';
export interface DemoStepOneState {
  isComplete: boolean;
}

export interface IDemoStepOneState {
  AppState: DemoStepOneState | any;
}
export const DemoStepOneIntialState: DemoStepOneState = {
  isComplete: false
};

export const demoStepOneReducer = createReducer(
  DemoStepOneIntialState,
  on(DemoStepOneActions.completeStep, (state, { isComplete }) => {
    console.log(isComplete)
    return { ...state, isComplete }
  })
);

export function AppReducer(state: DemoStepOneState, action: Action): DemoStepOneState {
  console.log(state);
  return demoStepOneReducer(state as DemoStepOneState, action as Action);
}
