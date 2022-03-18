import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeesProfileInfoComponent } from './empoyees-profile-info.component';

describe('EmpoyeesProfileInfoComponent', () => {
  let component: EmpoyeesProfileInfoComponent;
  let fixture: ComponentFixture<EmpoyeesProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeesProfileInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeesProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
