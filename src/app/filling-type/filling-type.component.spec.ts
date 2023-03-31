import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingTypeComponent } from './filling-type.component';

describe('FillingTypeComponent', () => {
  let component: FillingTypeComponent;
  let fixture: ComponentFixture<FillingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
