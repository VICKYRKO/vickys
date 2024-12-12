import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Router } from '@angular/router';
import { PatientService } from '../patient.service';

import { PatientTransferComponent } from './patient-transfer.component';

describe('PatientTransferComponent', () => {
  let component: PatientTransferComponent;
  let fixture: ComponentFixture<PatientTransferComponent>;
  let patientServiceSpy: jasmine.SpyObj<PatientService>;
  let routerSpy: jasmine.SpyObj<Router>;

 
  beforeEach(async() => {
    patientServiceSpy = jasmine.createSpyObj('PatientService', ['setHasVisitedTransfer']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [PatientTransferComponent],
      providers: [
        { provide: PatientService, useValue: patientServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
     
    });
    fixture = TestBed.createComponent(PatientTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call setHasVisitedTransfer with true on ngOnInit', () => {
    // Test if setHasVisitedTransfer is called when the component is initialized
    expect(patientServiceSpy.setHasVisitedTransfer).toHaveBeenCalledWith(true);
  });
});
