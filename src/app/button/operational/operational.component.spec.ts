import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalComponent } from './operational.component';

describe('OperationalComponent', () => {
  let component: OperationalComponent;
  let fixture: ComponentFixture<OperationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationalComponent]
    });
    fixture = TestBed.createComponent(OperationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
