import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperLibraryComponent } from './stepper-library.component';

describe('StepperLibraryComponent', () => {
  let component: StepperLibraryComponent;
  let fixture: ComponentFixture<StepperLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperLibraryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
