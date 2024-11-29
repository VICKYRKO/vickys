import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FinalOutcomeComponent} from './final-outcome.component';
import { FinalOutcomeRoutingModule } from './final-outcome-routing.module';


@NgModule({
  declarations: [FinalOutcomeComponent],
  imports: [CommonModule,FinalOutcomeRoutingModule],

})
export class FinalOutcomeModule {
/**
 *
 */
constructor() {

  console.log("inmodule");
  
}
  /**
   *
   */
 
 }
