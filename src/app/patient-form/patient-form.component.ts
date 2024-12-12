import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  @ViewChild('input') button!: ElementRef;
  @ViewChildren('input') inputs!: QueryList<ElementRef>;
  patientForm: FormGroup;
  constructor( private fb:FormBuilder,private patientService:PatientService){
    this.patientForm=this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      medicalConditions: [''],
    })
   }
   ngAfterViewInit() {
    console.log(  "value;",this.button.nativeElement.textContent);
    //console.log(this.inputs.forEach((value)=>{ console.log(value.nativeElement)})); // Access the button DOM element
    this.button.nativeElement.placeholder="fill the name";
   
    
  }
   onSubmit() {
    if (this.patientForm.valid) {
      var formData = this.patientForm.value;
      const uniqueId = this.generatePatientId(); // Generate unique ID
      formData.patientId = uniqueId; 
      formData.createdTime = new Date().toISOString()
      this.patientService.postPatientForms(formData).subscribe({
        next: (response) => {
          console.log('Data posted successfully:', response);
         
        },
        error: (error) => {
          console.error('Error posting data:', error);
        },
      });
      
      alert(`Patient data saved successfully! Generated ID: ${uniqueId}`);
      this.patientForm.reset();


    }
    else {
      alert('Please fill all required fields.');
    }

   }
   generatePatientId(): string {
    // Get the last ID from localStorage (or start at 1 if it doesn't exist)
    let lastId = Number(localStorage.getItem('lastPatientId')) || 0;
    lastId += 1; // Increment the ID by 1
    localStorage.setItem('lastPatientId', lastId.toString()); // Store the updated ID

    // Format the ID to PASID-000001, PASID-000002, etc.
    return `PASID-${lastId.toString().padStart(6, '0')}`;
  }

}
