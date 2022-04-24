import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperLibraryContainerComponent } from './stepper-library-container.component';

describe('StepperLibraryContainerComponent', () => {
  let component: StepperLibraryContainerComponent;
  let fixture: ComponentFixture<StepperLibraryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperLibraryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperLibraryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
