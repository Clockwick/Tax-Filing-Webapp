import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFillingDetailComponent } from './tax-filling-detail.component';

describe('TaxFillingDetailComponent', () => {
  let component: TaxFillingDetailComponent;
  let fixture: ComponentFixture<TaxFillingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFillingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxFillingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
