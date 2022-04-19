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
  public titleSpecializations: string = 'Specializations';
  public titleRoles: string = 'Roles ';
  public titleResponsibilities: string = 'Responsibilities';
  public selectedSpecializations: string[] = [];
  public allSpecializations: string[] = ['PM', 'Team lead', 'Tech lead'];
  public selectedRoles: string[] = [];
  public allRoles: string[] = ['Routing', 'Testing', 'Structuring'];
  public selectedResponsibilities: string[] = [];
  public allResponsibilities: string[] = ['Eat', 'Work', 'Sleep'];
  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      teamSize: [null, [Validators.required]],
      tasksPerformed: ['', [Validators.required]],
      projectRoles: ['', [Validators.required]],
      description: ['', [Validators.required]],
      specializations: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
    });
  }
  submit() {
    const project: IProject = {
      ...this.form.getRawValue(),
      teamSize: Number(this.form.get('teamSize').value),
    };
    console.log(this.form.value);
    this.store.dispatch(AddProject({ project }));
  }
}
