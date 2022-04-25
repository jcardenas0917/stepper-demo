import { createReducer, on } from "@ngrx/store";
import * as DemoStepOneActions from './demo-step-one-actions';
export interface DemoStepOneState {
  isComplete: boolean;
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
