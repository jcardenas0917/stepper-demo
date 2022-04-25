import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemoStepOneStepComponent } from '../steps/demo-step-one/components/demo-step-one-step/demo-step-one-step.component';
import { StepperLibraryComponent } from './components/stepper-library-component/stepper-library.component';



@NgModule({
  declarations: [
    StepperLibraryComponent,
    DemoStepOneStepComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [StepperLibraryComponent, DemoStepOneStepComponent]
})
export class CoreModule { }
