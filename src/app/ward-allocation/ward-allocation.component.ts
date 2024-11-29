import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PatientService } from '../patient.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ward-allocation',
  templateUrl: './ward-allocation.component.html',
  styleUrls: ['./ward-allocation.component.css']
})
export class WardAllocationComponent implements OnInit {
  patientId: any;
  patient: any;
  wards: string[] = ['Ortho', 'Surgery', 'Maternity', 'Pediatric']; 
  constructor(private router: ActivatedRoute,private patientService :PatientService) {}
  ngOnInit(): void {
  

    this.patientId = this.router.snapshot.queryParamMap.get('patientId');
    console.log('Patient ID from query params:', this.patientId);
    if (this.patientId) {
      
      this.patientService.getPatientDatas()
      .subscribe(data => {
        this.patient = data.find((patient: { patientId: any; }) => patient.patientId === this.patientId);
        
        console.log('Fetched patient data using id:', this.patient);
        
      });
    }

   
  }
  assignWard(newWard: string): void {
    if (this.patient) {
      this.patient.ward = newWard;
      console.log(`Assigned ${this.patient.name} to ${newWard}`);
    }
  }
 
 

}
