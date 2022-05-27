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

  public getEmployeesList(): Observable<IEmployees[]> {
    const url = environment.apiUrl + this.endPoints.getEmployeesList;
    return this.http.get<IEmployees[]>(url);
  }

  public createEmployee(employee: IEmployees): Observable<IEmployees> {
    const url = environment.apiUrl + this.endPoints.getEmployeesList;
    return this.http.post<IEmployees>(url, employee);
  }

  public getEmployeeById(employeeId: string): Observable<IEmployees> {
    const url = environment.apiUrl + this.endPoints.getEmployeesList + `?id=${employeeId}`;
    return this.http.get<IEmployees[]>(url).pipe(
      map((employees) => {
        return employees[0];
      }),
    );
  }

  public editEmployee(employee: IEmployees): Observable<IEmployees> {
    const url = environment.apiUrl + this.endPoints.getEmployeesList;
    return this.http.put<IEmployees>(url, employee);
  }

  public getSkills(): Observable<ISkills[]> {
    const url = environment.apiUrl + this.endPoints.getSkills;
    return this.http.get<ISkills[]>(url).pipe(
      map((skills) => {
        return skills.filter((item) => {
          return item.id, item.name;
        });
      }),
    );
  }

  public getLanguages(): Observable<ILanguages[]> {
    const url = environment.apiUrl + this.endPoints.getLanguages;
    return this.http.get<ILanguages[]>(url).pipe(
      map((languages) => {
        return languages.filter((item) => {
          return item.id, item.name;
        });
      }),
    );
  }

  public getRoles(): Observable<IRoles[]> {
    const url = environment.apiUrl + this.endPoints.getRoles;
    return this.http.get<IRoles[]>(url);
  }
}
