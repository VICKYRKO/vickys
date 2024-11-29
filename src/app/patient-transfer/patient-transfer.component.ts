import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import{Router} from '@angular/router';
 
@Component({
  selector: 'app-patient-transfer',
  templateUrl: './patient-transfer.component.html',
  styleUrls: ['./patient-transfer.component.css']
})
export class PatientTransferComponent implements OnInit{

  /**
   *
   */
  constructor(private patientservice :PatientService,private router: Router) {
    
  }
  ngOnInit(): void {
    this.patientservice.setHasVisitedTransfer(true);
   
    
  }
 

}
