import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { CvApiService } from 'src/app/shared/services/api/cv.api.service';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import {
  AddEmployee,
  AddEmployeeSuccess,
  EditCvProject,
  EditCvProjectSuccess,
  EditEmployee,
  EditEmployeeSuccess,
  GetCvList,
  GetCvListSuccess,
  GetEmployeeById,
  GetEmployeeByIdSuccess,
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
  getEmployeeById = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetEmployeeById),
      mergeMap((action) =>
        this.employeesApiService.getEmployeeById(action.employeeId).pipe(
          map((employee) => GetEmployeeByIdSuccess({ employee })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  editEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditEmployee),
      mergeMap((action) =>
        this.employeesApiService.editEmployee(action.employee).pipe(
          map((employee) => EditEmployeeSuccess({ employee })),
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

  getCvList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCvList),
      switchMap((action) =>
        this.cvService.getCvByUserId(action.userId).pipe(
          map((cvList) => GetCvListSuccess({ cvList })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  editCvProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditCvProject),
      mergeMap((action) =>
        this.cvService.editCvProject(action.cv).pipe(
          map((cv) => EditCvProjectSuccess({ cv })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(
    private employeesApiService: EmployeesApiService,
    private actions$: Actions,
    private cvService: CvApiService,
  ) {}
}
