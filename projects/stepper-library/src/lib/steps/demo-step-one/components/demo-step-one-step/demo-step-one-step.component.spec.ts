import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStepOneStepComponent } from './demo-step-one-step.component';

describe('DemoStepOneStepComponent', () => {
  let component: DemoStepOneStepComponent;
  let fixture: ComponentFixture<DemoStepOneStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoStepOneStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStepOneStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
