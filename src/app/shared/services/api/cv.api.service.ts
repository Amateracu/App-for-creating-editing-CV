import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICv } from '../../interfaces/cv.interface';
import { IVirtualCv } from '../../interfaces/virtual-cv.interface';

@Injectable({ providedIn: 'root' })
export class CvApiService {
  public endPoints = {
    getCvList: 'virtual-cv',
  };
  constructor(private http: HttpClient) {}

  createCv(cv: IVirtualCv): Observable<IVirtualCv> {
    const url = environment.apiUrl + this.endPoints.getCvList;
    return this.http.post<IVirtualCv>(url, cv);
  }

  getCvByUserId(userId: string): Observable<IVirtualCv[]> {
    const url = environment.apiUrl + this.endPoints.getCvList + `?user=${userId}`;
    return this.http.get<IVirtualCv[]>(url);
  }
  editCvProject(cv: IVirtualCv): Observable<IVirtualCv> {
    const url = environment.apiUrl + this.endPoints.getCvList;
    return this.http.put<IVirtualCv>(url, cv);
  }
}
