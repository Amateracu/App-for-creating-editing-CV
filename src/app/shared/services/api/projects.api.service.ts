import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProject } from '../../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsApiService {
  public endPoints = {
    getProjectsList: 'projects',
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
}
