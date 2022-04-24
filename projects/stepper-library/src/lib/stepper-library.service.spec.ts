import { TestBed } from '@angular/core/testing';

import { StepperLibraryService } from './stepper-library.service';

describe('StepperLibraryService', () => {
  let service: StepperLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepperLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
