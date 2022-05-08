import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { demoStepOneReducer } from './store/demo-step-one-reducer';


@NgModule({
  imports: [CommonModule, SharedModule, StoreModule.forRoot({ demoStepOneReducer })],
  declarations: [],
})
export class DemoStepOneModule { }
