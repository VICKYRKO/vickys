import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientService } from '../patient.service';
import { of } from 'rxjs';
import { WardAllocationComponent } from './ward-allocation.component';

describe('WardAllocationComponent', () => {
  let component: WardAllocationComponent;
  let fixture: ComponentFixture<WardAllocationComponent>;
  let mockPatientService: any;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('PatientService', ['postPatientForms']);
    TestBed.configureTestingModule({
      declarations: [WardAllocationComponent],
      providers: [{ provide: PatientService, useValue: spy }]
    });
    fixture = TestBed.createComponent(WardAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
