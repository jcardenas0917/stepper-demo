import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'projects/stepper-library/src/lib/core/store/actions/core-actions';
import { IApp, IAppState } from 'projects/stepper-library/src/lib/core/store/app.interface';
import { getUserName } from 'projects/stepper-library/src/lib/core/store/selectors/core-selector';
import { completeStep } from '../../store/demo-step-one-actions';

@Component({
  selector: 'lib-demo-step-one-step',
  templateUrl: './demo-step-one-step.component.html',
  styleUrls: ['./demo-step-one-step.component.css']
})
export class DemoStepOneStepComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }
  logInInfo!: IAppState | any

  ngOnInit(): void {
    this.logInInfo = this.store.select(getUserName)
    console.log(this.logInInfo);
  }

  dispatchIsCompleteAction(): void {
    console.log('clicked')
    this.store.dispatch(completeStep({ isComplete: true }))
  }

  login(): void {
    this.store.dispatch(login({ usernamae: 'username', password: 'password' }));
  }
}
