import { Injectable } from '@angular/core';
import { IInfo } from '../interfaces/info.interface';

@Injectable({ providedIn: 'root' })
export class UrlService {
  public cvElements: IInfo[] = [
    {
      id: 1232,
      firstName: 'Danik',
      lastName: 'Vasin',
      email: 'd@mail.ru',
      department: 'JavaScript',
      specialization: 'Angular',
    },
  ];
}
