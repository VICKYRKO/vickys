import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalOutcomeComponent } from './final-outcome/final-outcome.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientTransferComponent } from './patient-transfer/patient-transfer.component';
import { WardAllocationComponent } from './ward-allocation/ward-allocation.component';

const routes: Routes = [
  { path: '', component: PatientFormComponent },
  { path: 'search', component: PatientSearchComponent },
  { path: 'ward-allocation', component: WardAllocationComponent },
  { path: 'transfer', component: PatientTransferComponent },
  { path: 'final-outcome', component: FinalOutcomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
