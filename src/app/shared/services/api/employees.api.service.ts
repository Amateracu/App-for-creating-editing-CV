import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployees } from '../../interfaces/employees.interface';

@Injectable({ providedIn: 'root' })
export class EmployeesApiService {
  public endPoints = {
    getEmployeesList: 'users',
  };
  constructor(private http: HttpClient) {}

  getEmployeesList(): Observable<IEmployees[]> {
    const url = environment.apiUrl + this.endPoints.getEmployeesList;
    return this.http.get<IEmployees[]>(url);
  }
}
