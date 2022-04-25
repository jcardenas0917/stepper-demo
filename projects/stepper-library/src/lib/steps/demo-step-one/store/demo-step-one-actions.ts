import { createAction, props } from '@ngrx/store';

export enum DemoStepOneActionTypes {
  CompleteStep = '[Demo Step One] Complete Step'
}
export const completeStep = createAction(
  DemoStepOneActionTypes.CompleteStep,
  props<{ isComplete: boolean }>()
);
