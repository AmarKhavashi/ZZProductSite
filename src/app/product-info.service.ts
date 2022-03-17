import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
  apiUrl = "http://reqres.in/api"
  constructor(private http: HttpClient) { 

  }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // getUserDetails(): Observable<EmailAddress>{
  //   return this.http.get<EmailAddress>(this.apiUrl + '/users?page=2')
  // }  
}
