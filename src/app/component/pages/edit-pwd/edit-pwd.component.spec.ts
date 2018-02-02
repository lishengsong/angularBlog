import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPwdComponent } from './edit-pwd.component';

describe('EditPwdComponent', () => {
  let component: EditPwdComponent;
  let fixture: ComponentFixture<EditPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
