import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEducation } from 'src/app/shared/interfaces/virtual-cv.interface';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationFormComponent implements OnInit {
  @Input() education: IEducation;
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      establishment: ['', [Validators.required]],
      profession: ['', [Validators.required]],
    });
    this.form.setValue({
      establishment: this.education.establishment,
      profession: this.education.profession,
    });
  }
}
