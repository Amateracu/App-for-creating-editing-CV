import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getProjectsList(): Observable<IProject[]> {
    const url = environment.apiUrl + this.endPoints.getProjectsList;
    return this.http.get<IProject[]>(url);
  }

  createProject(project: IProject): Observable<IProject> {
    const url = environment.apiUrl + this.endPoints.getProjectsList;
    return this.http.post<IProject>(url, project);
  }

  editProject(project: IProject): Observable<IProject> {
    const url = environment.apiUrl + this.endPoints.getProjectsList;
    return this.http.put<IProject>(url, project);
  }

  getProjectById(id: string): Observable<IProject> {
    const url = environment.apiUrl + this.endPoints.getProjectsList + id;
    return this.http.get<IProject>(url);
  }

  getSpecializations(): Observable<ISpecialization[]> {
    const url = environment.apiUrl + this.endPoints.getSpecializationsList;
    return this.http.get<ISpecialization[]>(url);
  }

  getProjectRoles(): Observable<IProjectRoles[]> {
    const url = environment.apiUrl + this.endPoints.getProjectRolesList;
    return this.http.get<IProjectRoles[]>(url);
  }

  getResponsibilities(): Observable<IResponsibility[]> {
    const url = environment.apiUrl + this.endPoints.getResponsibilitiesList;
    return this.http.get<IResponsibility[]>(url);
  }
}
