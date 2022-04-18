import { Input } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { AddProject } from 'src/app/store/projects/projects.actions';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent implements OnInit {
  public form!: FormGroup;
  public titleRoles: string = 'Roles';
  public titleDescription: string = 'Description ';
  public titleResponsibilities: string = 'Responsibilities';
  public selectedRoles: string[] = ['PM'];
  public allRoles: string[] = ['PM', 'Team lead', 'Tech lead'];
  public selectedDescriptions: string[] = ['Routing'];
  public allDescriptions: string[] = ['Routing', 'Testing', 'Structuring'];
  public selectedResponsibilities: string[] = ['Eat'];
  public allResponsibilities: string[] = ['Eat', 'Work', 'Sleep'];
  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      techStack: ['', [Validators.required]],
      roles: ['', [Validators.required]],
      description: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
    });
  }
  submit() {
    const project: IProject = {
      ...this.form.value,
      id: '',
    };
    console.log(this.form.value);
    this.store.dispatch(AddProject({ project }));
  }
}
