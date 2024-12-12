import { TestBed } from '@angular/core/testing';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService],
    });
    service = TestBed.inject(PatientService);
  });

  it('patient service should be created', () => {
    expect(service).toBeTruthy();
  });
});
