import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemoStepOneStepComponent } from '../steps/demo-step-one/components/demo-step-one-step/demo-step-one-step.component';
import { StepperLibraryComponent } from './components/stepper-library-component/stepper-library.component';
import { demoStepOneReducer } from '../steps/demo-step-one/store/demo-step-one-reducer';
import { DemoStepOneModule } from '../steps/demo-step-one/demo-step-one.module';



@NgModule({
  declarations: [
    StepperLibraryComponent,
    DemoStepOneStepComponent
  ],
  imports: [
    CommonModule, SharedModule, DemoStepOneModule,
  ],
  exports: [StepperLibraryComponent, DemoStepOneStepComponent]
})
export class CoreModule { }
