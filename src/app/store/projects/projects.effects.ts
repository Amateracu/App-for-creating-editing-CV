import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import {
  AddProject,
  AddProjectSuccess,
  EditProject,
  EditProjectSuccess,
  GetProjectById,
  GetProjectByIdSuccess,
  GetProjectRolesList,
  GetProjectRolesListSuccess,
  GetProjectsList,
  GetProjectsListSuccess,
  GetResponsibilitiesList,
  GetResponsibilitiesListSuccess,
  GetSpecializationsList,
  GetSpecializationsListSuccess,
} from './projects.actions';

@Injectable()
export class ProjectsEffects {
  public getProjectList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetProjectsList),
      switchMap(() =>
        this.projectsApiService.getProjectsList().pipe(
          map((projects) => GetProjectsListSuccess({ projects })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public createProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddProject),
      mergeMap((action) =>
        this.projectsApiService.createProject(action.project).pipe(
          map((project) => AddProjectSuccess({ project })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public getProjectById = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetProjectById),
      mergeMap((action) =>
        this.projectsApiService.getProjectById(action.projectId).pipe(
          map((project) => GetProjectByIdSuccess({ project })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public editProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditProject),
      mergeMap((action) =>
        this.projectsApiService.editProject(action.project).pipe(
          map((project) => EditProjectSuccess({ project })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public getSpecializations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetSpecializationsList),
      switchMap(() =>
        this.projectsApiService.getSpecializations().pipe(
          map((specializations) => GetSpecializationsListSuccess({ specializations })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public getProjectRoles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetProjectRolesList),
      switchMap(() =>
        this.projectsApiService.getProjectRoles().pipe(
          map((projectRoles) => GetProjectRolesListSuccess({ projectRoles })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  public getResponsibilities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetResponsibilitiesList),
      switchMap(() =>
        this.projectsApiService.getResponsibilities().pipe(
          map((responsibilities) => GetResponsibilitiesListSuccess({ responsibilities })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
  constructor(private projectsApiService: ProjectsApiService, private actions$: Actions) {}
}
