import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  loading: boolean = false;
  departments: string[] = ['Ortho', 'Cardio', 'Surgical']; 

constructor(private patientService:PatientService,private router:Router,private snackBar :MatSnackBar){}
  ngOnInit(): void {
    this.fetchPatientData();
  }
  fetchPatientData(): void {
    this.loading = true;
    this.patientService.getPatientDatas().subscribe(data => {
      this.patients= data; // Assign API data to the data source
      this.filteredPatients = [...this.patients]; 
      this.loading = false; 
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
    else{
      const snackBarRef =  this.snackBar.open('No patient selected!', 'close', {
        duration: 3000, // Duration in milliseconds
        verticalPosition: 'top', // Position vertically (top or bottom)
        horizontalPosition: 'right', // Position horizontally (left, center, right)
        panelClass: ['mat-toolbar', 'mat-primary'], // Optional: styling of the snackbar
      });
       snackBarRef.onAction().subscribe(() => {
       console.log('Snackbar closed by user');
       });
    }
  }

}
