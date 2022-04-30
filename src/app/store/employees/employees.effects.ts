import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import {
  AddEmployee,
  AddEmployeeSuccess,
  GetEmployeesList,
  GetEmployeesListSuccess,
  GetLanguagesList,
  GetLanguagesListSuccess,
  GetRolesList,
  GetRolesListSuccess,
  GetSkillsList,
  GetSkillsListSuccess,
} from './employees.actions';

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
  createEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddEmployee),
      mergeMap((action) =>
        this.employeesApiService.createEmployee(action.employee).pipe(
          map((employee) => AddEmployeeSuccess({ employee })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  getSkills$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetSkillsList),
      switchMap(() =>
        this.employeesApiService.getSkills().pipe(
          map((skills) => GetSkillsListSuccess({ skills })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  getLanguages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetLanguagesList),
      switchMap(() =>
        this.employeesApiService.getLanguages().pipe(
          map((languages) => GetLanguagesListSuccess({ languages })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  getRoles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetRolesList),
      switchMap(() =>
        this.employeesApiService.getRoles().pipe(
          map((roles) => GetRolesListSuccess({ roles })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(private employeesApiService: EmployeesApiService, private actions$: Actions) {}
}
