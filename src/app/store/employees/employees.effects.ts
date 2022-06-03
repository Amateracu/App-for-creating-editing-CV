import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { CvApiService } from 'src/app/shared/services/api/cv.api.service';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import {
  AddCv,
  AddCvSuccess,
  AddEmployee,
  AddEmployeeSuccess,
  DeleteVirtualCv,
  DeleteVirtualCvSuccess,
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
  GetVirtualCvList,
  GetVirtualCvListSuccess,
} from './employees.actions';

@Injectable()
export class EmployeesEffect {
  public getEmployeesList$ = createEffect(() => {
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
  public createEmployee$ = createEffect(() => {
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
  public getEmployeeById = createEffect(() => {
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
  public editEmployee$ = createEffect(() => {
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
  public getSkills$ = createEffect(() => {
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
  public getLanguages$ = createEffect(() => {
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
  public getRoles$ = createEffect(() => {
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

  public getCvList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetVirtualCvList),
      switchMap((action) =>
        this.cvService.getCvByUserId(action.userId).pipe(
          map((cvList) => GetVirtualCvListSuccess({ cvList })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public editCvProject$ = createEffect(() => {
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
  public createCv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddCv),
      mergeMap((action) =>
        this.cvService.createCv(action.addCv).pipe(
          map((addCv) => AddCvSuccess({ addCv })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public getCvUserList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCvList),
      switchMap((action) =>
        this.cvService.getCvById(action.userId).pipe(
          map((cvUser) => GetCvListSuccess({ cvUser })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public deleteCv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteVirtualCv),
      mergeMap(({ id }) =>
        this.cvService.deleteVirtualCvById({ id }).pipe(
          map(() => DeleteVirtualCvSuccess({ id })),
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
