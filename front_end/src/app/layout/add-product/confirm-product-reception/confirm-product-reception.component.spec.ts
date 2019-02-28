import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProductReceptionComponent } from './confirm-product-reception.component';

describe('ConfirmProductReceptionComponent', () => {
  let component: ConfirmProductReceptionComponent;
  let fixture: ComponentFixture<ConfirmProductReceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmProductReceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmProductReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
