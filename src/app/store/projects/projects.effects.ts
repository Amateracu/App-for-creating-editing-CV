import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { GetProjectsList, GetProjectsListSuccess } from './projects.actions';

@Injectable()
export class ProjectsEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetProjectsList),
      switchMap((action) =>
        this.projectsApiService.getProjectsList().pipe(
          map((projects) => GetProjectsListSuccess({ projects })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(private projectsApiService: ProjectsApiService, private actions$: Actions) {}
}
