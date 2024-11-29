import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientTransferComponent } from './patient-transfer/patient-transfer.component';
import { WardAllocationComponent } from './ward-allocation/ward-allocation.component';

import{PreloadingstrategyService} from './preloadingstrategy.service';
const routes: Routes = [
  { path: '', component: PatientFormComponent },
  { path: 'search', component: PatientSearchComponent },
  { 
    path: 'ward-allocation', 
    component: WardAllocationComponent ,
   
  },
  { path: 'transfer', component: PatientTransferComponent },
  {
    path: 'final-outcome',
    loadChildren: () => import('./final-outcome/final-outcome.module').then(m => m.FinalOutcomeModule),
    data: { preload: true }
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy:PreloadingstrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
