import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBreadCrumb } from '../interfaces/breadcrumbs.interface';

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  private subject = new BehaviorSubject<IBreadCrumb[]>([]);

  public getBreadCrumbs(): Observable<IBreadCrumb[]> {
    return this.subject.asObservable();
  }

  public updateBreadcrumb(arr: IBreadCrumb[]): void {
    this.subject.next(arr);
  }

  public clearBreacrumb(): void {
    this.subject.next([]);
  }
}
