import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { PatientService } from './patient.service';



@Injectable({
  providedIn: 'root'
})
export class PreloadingstrategyService implements PreloadingStrategy {

  constructor(private patientservice :PatientService) {
    
  }
  preload(route: Route, load: Function): Observable<any> {
    // Listen to the latest value from `hasVisitedTransfer$`
    return this.patientservice.hasVisitedTransferSubject.pipe(
      switchMap((hasVisited) => {
        if (hasVisited && route.data?.['preload']) {
          console.log('Preloading the module:', route.path);
          return load(); // Trigger preloading
        } else {
          console.log('Skipping preload for route:', route.path);
          return of(null); // Do not preload
        }
      })
    );
  }

}
