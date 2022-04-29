import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILanguages, ISkills } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesFormComponent implements OnInit {
  public form: FormGroup;
  public allSkills: ISkills[] = [];
  public selectedSkills: ISkills[] = [];
  public allLanguages: ILanguages[] = [];
  public selectedLanguages: ILanguages[] = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      diplomaProfession: ['', [Validators.required]],
      skills: [[], [Validators.required]],
      role: ['', [Validators.required]],
      department: ['', [Validators.required]],
      languages: [[], [Validators.required]],
    });
  }
  submit() {}
}
