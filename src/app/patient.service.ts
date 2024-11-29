import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  public hasVisitedTransferSubject = new BehaviorSubject<boolean>(false);
  
  setHasVisitedTransfer(hasVisited: boolean): void {
    this.hasVisitedTransferSubject.next(hasVisited);
  
  }
  getHasVisitedTransfer(): boolean {
    return this.hasVisitedTransferSubject.value;
    
  }

  constructor(private http:HttpClient) { }
  private postUrl ='http://localhost:3000/users'; // POST endpoint
  private getUrl ='http://localhost:3000/users'; // GET endpoint


getPatientDatas(): Observable<any> {
    return this.http.get<any>(this.getUrl);
  }
postPatientForms(data: any) {
   
  
  return this.http.post<any>(this.postUrl, data);
  
  
}

 

}