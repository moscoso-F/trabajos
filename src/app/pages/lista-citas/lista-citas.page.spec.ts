import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCitasPage } from './lista-citas.page';

describe('ListaCitasPage', () => {
  let component: ListaCitasPage;
  let fixture: ComponentFixture<ListaCitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
