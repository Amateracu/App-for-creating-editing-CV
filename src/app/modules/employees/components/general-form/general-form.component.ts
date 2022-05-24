import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGeneral } from 'src/app/shared/interfaces/virtual-cv.interface';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralFormComponent implements OnInit {
  @Input() general: IGeneral;
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
    this.form.setValue({
      firstName: this.general.firstName,
      lastName: this.general.lastName,
      name: this.general.name,
    });
  }
}
