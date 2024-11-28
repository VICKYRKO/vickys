import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { WardAllocationComponent } from './ward-allocation/ward-allocation.component';
import { PatientTransferComponent } from './patient-transfer/patient-transfer.component';
import { FinalOutcomeComponent } from './final-outcome/final-outcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    PatientSearchComponent,
    WardAllocationComponent,
    PatientTransferComponent,
    FinalOutcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
