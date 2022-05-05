import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICv } from '../../interfaces/cv.interface';

@Injectable({ providedIn: 'root' })
export class CvApiService {
  public endPoints = {
    getCvList: 'cv',
  };
  constructor(private http: HttpClient) {}

  getCvList(): Observable<ICv[]> {
    const url = environment.apiUrl + this.endPoints.getCvList;
    return this.http.get<ICv[]>(url);
  }
}
