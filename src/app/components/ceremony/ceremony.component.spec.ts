import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyComponent } from './ceremony.component';

describe('CeremonyComponent', () => {
  let component: CeremonyComponent;
  let fixture: ComponentFixture<CeremonyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeremonyComponent]
    });
    fixture = TestBed.createComponent(CeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
