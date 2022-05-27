import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IaddCv, ICv, IDeleteCv } from '../../interfaces/cv.interface';
import { IVirtualCv } from '../../interfaces/virtual-cv.interface';

@Injectable({ providedIn: 'root' })
export class CvApiService {
  public endPoints = {
    cvHttp: 'virtual-cv',
  };

  constructor(private http: HttpClient) {}

  public createCv(cv: IaddCv): Observable<IVirtualCv> {
    const url = environment.apiUrl + this.endPoints.cvHttp;
    return this.http.post<IVirtualCv>(url, cv);
  }

  public getCvByUserId(userId: string): Observable<IVirtualCv[]> {
    const url = environment.apiUrl + this.endPoints.cvHttp + `?user=${userId}`;
    return this.http.get<IVirtualCv[]>(url);
  }

  public editCvProject(cv: IVirtualCv): Observable<IVirtualCv> {
    const url = environment.apiUrl + this.endPoints.cvHttp;
    return this.http.put<IVirtualCv>(url, cv);
  }

  public getCvById(userId: string): Observable<ICv> {
    const url = environment.apiUrl + 'cv' + `?user=${userId}`;
    return this.http.get<ICv[]>(url).pipe(map((cvs) => cvs[0]));
  }

  public deleteVirtualCvById(cvId: { id: string }): Observable<IDeleteCv> {
    const url = environment.apiUrl + this.endPoints.cvHttp;
    return this.http.delete<IDeleteCv>(url, { params: cvId });
  }
}
