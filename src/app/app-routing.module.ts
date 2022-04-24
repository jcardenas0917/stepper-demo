import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperLibraryContainerComponent } from './components/stepper-library-container/stepper-library-container.component';

const routes: Routes = [
  {
    path: '',
    component: StepperLibraryContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
