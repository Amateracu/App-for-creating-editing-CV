import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGeneral } from 'src/app/shared/interfaces/virtual-cv.interface';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralFormComponent implements OnChanges {
  @Input() public general: IGeneral;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['general'] && changes['general'].currentValue) {
      this.form.patchValue({
        firstName: this.general.firstName,
        lastName: this.general.lastName,
        name: this.general.name,
      });
    }
  }
}
