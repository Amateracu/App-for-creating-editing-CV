import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IBreadCrumb } from '../interfaces/breadcrumbs.interface';

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  private subject = new Subject<IBreadCrumb[] | null>();

  getBreadCrumbs(): Observable<IBreadCrumb[] | null> {
    return this.subject.asObservable();
  }

  updateBreadcrumb(arr: IBreadCrumb[]) {
    this.subject.next(arr);
  }

  clearBreacrumb() {
    this.subject.next(null);
  }
}
