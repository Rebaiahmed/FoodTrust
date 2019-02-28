import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToRetailerComponent } from './send-to-retailer.component';

describe('SendToRetailerComponent', () => {
  let component: SendToRetailerComponent;
  let fixture: ComponentFixture<SendToRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendToRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
