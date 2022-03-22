import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  private subject = new Subject<string>();

  getBreadCrumbs(): Observable<string> {
    return this.subject.asObservable();
  }

  updateBreadcrumb(str: string) {
    this.subject.next(str);
  }
}
