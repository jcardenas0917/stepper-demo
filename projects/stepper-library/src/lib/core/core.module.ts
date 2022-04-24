import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StepperLibraryComponent } from './components/stepper-library-component/stepper-library.component';



@NgModule({
  declarations: [
    StepperLibraryComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [StepperLibraryComponent]
})
export class CoreModule { }
