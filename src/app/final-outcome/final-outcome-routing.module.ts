import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalOutcomeComponent } from './final-outcome.component';

const routes: Routes = [{
  path: '',
  component:FinalOutcomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalOutcomeRoutingModule { }
