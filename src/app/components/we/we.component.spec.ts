import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeComponent } from './we.component';

describe('WeComponent', () => {
  let component: WeComponent;
  let fixture: ComponentFixture<WeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeComponent]
    });
    fixture = TestBed.createComponent(WeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
