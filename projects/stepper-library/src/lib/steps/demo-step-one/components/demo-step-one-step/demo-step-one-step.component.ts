import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { completeStep } from '../../store/demo-step-one-actions';

@Component({
  selector: 'lib-demo-step-one-step',
  templateUrl: './demo-step-one-step.component.html',
  styleUrls: ['./demo-step-one-step.component.css']
})
export class DemoStepOneStepComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  dispatchIsCompleteAction(): void {
    console.log('clicked')
    this.store.dispatch(completeStep({ isComplete: true }))
  }
}
