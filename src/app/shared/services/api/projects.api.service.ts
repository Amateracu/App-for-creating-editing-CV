import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IProject,
  IProjectRoles,
  IResponsibility,
  ISpecialization,
} from '../../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsApiService {
  public endPoints = {
    getProjectsList: 'projects',
    getSpecializationsList: 'specializations',
    getProjectRolesList: 'project-roles',
    getResponsibilitiesList: 'responsibilities',
  };
  constructor(private http: HttpClient) {}

  public getProjectsList(): Observable<IProject[]> {
    const url = environment.apiUrl + this.endPoints.getProjectsList;
    return this.http.get<IProject[]>(url);
  }

  public createProject(project: IProject): Observable<IProject> {
    const url = environment.apiUrl + this.endPoints.getProjectsList;
    return this.http.post<IProject>(url, project);
  }

  public editProject(project: IProject): Observable<IProject> {
    const url = environment.apiUrl + this.endPoints.getProjectsList;
    return this.http.put<IProject>(url, project);
  }

  public getProjectById(projectId: string): Observable<IProject> {
    const url = environment.apiUrl + this.endPoints.getProjectsList + `?id=${projectId}`;
    return this.http.get<IProject[]>(url).pipe(
      map((projects) => {
        return projects[0];
      }),
    );
  }

  public getSpecializations(): Observable<ISpecialization[]> {
    const url = environment.apiUrl + this.endPoints.getSpecializationsList;
    return this.http.get<ISpecialization[]>(url);
  }

  public getProjectRoles(): Observable<IProjectRoles[]> {
    const url = environment.apiUrl + this.endPoints.getProjectRolesList;
    return this.http.get<IProjectRoles[]>(url);
  }

  public getResponsibilities(): Observable<IResponsibility[]> {
    const url = environment.apiUrl + this.endPoints.getResponsibilitiesList;
    return this.http.get<IResponsibility[]>(url);
  }
}
