import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeesProfileCvComponent } from './empoyees-profile-cv.component';

describe('EmpoyeesProfileCvComponent', () => {
  let component: EmpoyeesProfileCvComponent;
  let fixture: ComponentFixture<EmpoyeesProfileCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpoyeesProfileCvComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeesProfileCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
