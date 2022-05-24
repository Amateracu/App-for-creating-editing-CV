import { T } from '@angular/cdk/keycodes';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILanguages } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-languages-form',
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesFormComponent implements OnInit {
  @Input() foreignLanguages: ILanguages[];
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  setFormLanguages(languages: ILanguages) {
    this.form.setValue({
      name: languages.name,
      everydayReadingLevel: languages.everydayReadingLevel,
      everydayWritingLevel: languages.everydayWritingLevel,
      everydaySpeakingLevel: languages.everydaySpeakingLevel,
      professionalReadingLevel: languages.professionalReadingLevel,
      professionalWritingLevel: languages.professionalWritingLevel,
      professionalSpeakingLevel: languages.professionalSpeakingLevel,
    });
  }
  ngOnInit(): void {
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
}
