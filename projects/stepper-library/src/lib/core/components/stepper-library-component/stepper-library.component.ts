import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-stepper-library',
  template: `
    <lib-demo-step-one-step></lib-demo-step-one-step>
  `,
  styles: [
  ]
})
export class StepperLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
