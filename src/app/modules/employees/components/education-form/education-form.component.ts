import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEducation } from 'src/app/shared/interfaces/virtual-cv.interface';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationFormComponent implements OnChanges {
  @Input() public education: IEducation;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      establishment: ['', [Validators.required]],
      profession: ['', [Validators.required]],
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['education'] && changes['education'].currentValue) {
      this.form.patchValue({
        establishment: this.education.establishment,
        profession: this.education.profession,
      });
    }
  }
}
