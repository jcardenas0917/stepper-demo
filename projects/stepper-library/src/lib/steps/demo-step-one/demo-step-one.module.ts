import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoStepOneStepComponent } from './components/demo-step-one-step/demo-step-one-step.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DemoStepOneStepComponent],
})
export class DemoStepOneModule { }
