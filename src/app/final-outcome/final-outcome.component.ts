import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-final-outcome',
  templateUrl: './final-outcome.component.html',
  styleUrls: ['./final-outcome.component.css']
})
export class FinalOutcomeComponent  {
  constructor() {
    console.log("yes lazy loaded")
     
   }
   ngOnInit():void{
    console.log("yes lazy loaded oninit")
   }
 
  
}
