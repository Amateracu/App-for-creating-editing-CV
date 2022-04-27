import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import { GetEmployeesList, GetEmployeesListSuccess } from './employees.actions';

@Injectable()
export class EmployeesEffect {
  getEmployeesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetEmployeesList),
      switchMap(() =>
        this.employeesApiService.getEmployeesList().pipe(
          map((employees) => GetEmployeesListSuccess({ employees })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(private employeesApiService: EmployeesApiService, private actions$: Actions) {}
}
