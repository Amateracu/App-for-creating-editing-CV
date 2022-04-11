import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { IBreadCrumb } from '../interfaces/breadcrumbs.interface';

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  private subject = new BehaviorSubject<IBreadCrumb[]>([]);

  getBreadCrumbs(): Observable<IBreadCrumb[]> {
    return this.subject.asObservable();
  }

  updateBreadcrumb(arr: IBreadCrumb[]) {
    this.subject.next(arr);
  }

  clearBreacrumb() {
    this.subject.next([]);
  }
}
