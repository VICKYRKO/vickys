import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

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