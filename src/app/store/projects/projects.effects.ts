import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import {
  AddProject,
  AddProjectSuccess,
  GetProjectsList,
  GetProjectsListSuccess,
} from './projects.actions';

@Injectable()
export class ProjectsEffects {
  loadUser$ = createEffect(() => {
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
  constructor(private projectsApiService: ProjectsApiService, private actions$: Actions) {}
}

export class ProjectEffect {
  constructor(private projectsApiService: ProjectsApiService, private actions$: Actions) {}

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddProjectSuccess),
      mergeMap((action) =>
        this.projectsApiService.createProject(action.project).pipe(
          map((project) => AddProjectSuccess({ project })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
}
