import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiasPage } from './admin-dias.page';

describe('AdminDiasPage', () => {
  let component: AdminDiasPage;
  let fixture: ComponentFixture<AdminDiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
