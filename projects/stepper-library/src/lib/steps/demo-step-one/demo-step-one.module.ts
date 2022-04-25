import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { demoStepOneReducer } from './store/demo-step-one-reducer';



@NgModule({
  imports: [CommonModule, SharedModule, StoreModule.forRoot(demoStepOneReducer)],
  declarations: [],
})
export class DemoStepOneModule { }
