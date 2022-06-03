import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILanguages } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-languages-form',
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesFormComponent implements OnInit {
  @Input() public foreignLanguages: ILanguages[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      everydayReadingLevel: ['', [Validators.required]],
      everydayWritingLevel: ['', [Validators.required]],
      everydaySpeakingLevel: ['', [Validators.required]],
      professionalReadingLevel: ['', [Validators.required]],
      professionalWritingLevel: ['', [Validators.required]],
      professionalSpeakingLevel: ['', [Validators.required]],
    });
  }

  public setFormLanguages(languages: ILanguages): void {
    this.form.patchValue({
      ...languages,
    });
  }
}
