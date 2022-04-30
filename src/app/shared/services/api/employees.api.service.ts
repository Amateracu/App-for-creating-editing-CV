import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployees, ILanguages, IRoles, ISkills } from '../../interfaces/employees.interface';

@Injectable({ providedIn: 'root' })
export class EmployeesApiService {
  public endPoints = {
    getEmployeesList: 'users',
    getSkills: 'skills',
    getLanguages: 'languages',
    getRoles: 'roles',
  };
  constructor(private http: HttpClient) {}

  getEmployeesList(): Observable<IEmployees[]> {
    const url = environment.apiUrl + this.endPoints.getEmployeesList;
    return this.http.get<IEmployees[]>(url);
  }

  createEmployee(employee: IEmployees): Observable<IEmployees> {
    const url = environment.apiUrl + this.endPoints.getEmployeesList;
    return this.http.post<IEmployees>(url, employee);
  }
  getSkills(): Observable<ISkills[]> {
    const url = environment.apiUrl + this.endPoints.getSkills;
    return this.http.get<ISkills[]>(url).pipe(
      map((skills) => {
        return skills.filter((item) => {
          return item.id, item.name;
        });
      }),
    );
  }
  getLanguages(): Observable<ILanguages[]> {
    const url = environment.apiUrl + this.endPoints.getLanguages;
    return this.http.get<ILanguages[]>(url).pipe(
      map((languages) => {
        return languages.filter((item) => {
          return item.id, item.name;
        });
      }),
    );
  }
  getRoles(): Observable<IRoles[]> {
    const url = environment.apiUrl + this.endPoints.getRoles;
    return this.http.get<IRoles[]>(url);
  }
}
