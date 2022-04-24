import { CoreModule } from './../../projects/stepper-library/src/lib/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperLibraryModule } from 'stepper-library';
import { StepperLibraryContainerComponent } from './components/stepper-library-container/stepper-library-container.component';
import { DemoStepOneModule } from 'projects/stepper-library/src/lib/steps/demo-step-one/demo-step-one.module';

@NgModule({
  declarations: [
    AppComponent,
    StepperLibraryContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    DemoStepOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
