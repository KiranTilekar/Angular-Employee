import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeForm } from './employee-form';

@Injectable()
export class ApiService {
  private apiUrl = 'http://localhost:8080/employee/search';

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
  getLoginData() {
    console.log("service call of getLoginData")
    return this.http.get(this.apiUrl,{ });
  }

  printLoginData(employeeForm?:EmployeeForm) {
    // const params = new HttpParams().append(paramName, paramValue);
    
    console.log("service call of printLoginData");
    
    return this.http.get(this.apiUrl, {  });
  }


  getLoginData1(employeeForm?:EmployeeForm): Observable<any> {
    let url = this.apiUrl;
    let params: any = {};

    // if (id !== undefined) params.id = id;
    // if (department) params.department = department;
    // if (minSalary !== undefined && maxSalary !== undefined) {
    //   params.minSalary = minSalary;
    //   params.maxSalary = maxSalary;
    // }

    return this.http.post(url, employeeForm,this.httpOptions);
  }
}

