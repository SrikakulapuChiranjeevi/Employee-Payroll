import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // Pass the headers in the options parameter
  options = { headers: this.headers, };

  getAllEmployee(): Observable<any> {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee',
      this.options
    );
  }

  createEmployee(obj: any): Observable<any> {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/TeamSync/CreateEmployee',
      obj
    );
  }
  updateEmployee(obj: any): Observable<any> {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/TeamSync/UpdateEmployee',
      obj
    );
  }

  getEmpById(id: number) {
    return;
    this.http.get(
      'https://onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeByEmpId?empid=' +
        id
    );
  }
  deleteEmpById(id: number) {
    return this.http.get<any>(
      `https://onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeById/${id}`
    );
  }
}
