import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperLibraryModule } from 'stepper-library';
import { StepperLibraryContainerComponent } from './components/stepper-library-container/stepper-library-container.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperLibraryContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StepperLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
