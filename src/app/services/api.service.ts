import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // getLoginData() {
  //   console.log("service call")
  //   return this.http.get(this.apiUrl);
  // }

  getLoginData(paramName: string, paramValue: string) {
    const params = new HttpParams().append(paramName, paramValue);
    
    console.log("service call with params:", this.apiUrl + '?' + params.toString());
    
    return this.http.get(this.apiUrl, { params });
  }
}

