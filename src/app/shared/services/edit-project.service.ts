import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProject } from '../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class EditProjectService {
  public subject: IProject;
}
