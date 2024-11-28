import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOutcomeComponent } from './final-outcome.component';

describe('FinalOutcomeComponent', () => {
  let component: FinalOutcomeComponent;
  let fixture: ComponentFixture<FinalOutcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalOutcomeComponent]
    });
    fixture = TestBed.createComponent(FinalOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
