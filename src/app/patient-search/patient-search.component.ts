import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

  displayedColumns: string[] = ['select', 'patientId', 'name', 'dob', 'medicalConditions', 'actions'];
  patients: any[] = []; // Store fetched patient data
  filteredPatients: any[] = [];
  searchText: string = '';

constructor(private patientService:PatientService,private router:Router){}
  ngOnInit(): void {
    this.fetchPatientData();
  }
  fetchPatientData(): void {
    this.patientService.getPatientDatas().subscribe(data => {
      this.patients= data; // Assign API data to the data source
      this.filteredPatients = [...this.patients]; 
    });
      
  }
  applyFilter() {
    this.filteredPatients = this.patients.filter(patient =>
      patient.patientId.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  searchPatient() {
    this.applyFilter();
  }
  selectAll(event: any) {
    const selected = event.checked;
    this.filteredPatients.forEach(patient => patient.selected = selected);
  }
  goToNext(patient: any) {
    if(patient.selected){
  
    this.router.navigate(['/ward-allocation'],  { queryParams: {  patientId: patient.patientId} });
    }
  }

}
