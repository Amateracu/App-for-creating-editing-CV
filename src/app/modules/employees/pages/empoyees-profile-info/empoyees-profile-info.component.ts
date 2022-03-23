import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empoyees-profile-info',
  templateUrl: './empoyees-profile-info.component.html',
  styleUrls: ['./empoyees-profile-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpoyeesProfileInfoComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      specialization: ['', [Validators.required]],
      departament: ['', [Validators.required]],
    });
  }

  submit() {}
}
