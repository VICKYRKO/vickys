import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardAllocationComponent } from './ward-allocation.component';

describe('WardAllocationComponent', () => {
  let component: WardAllocationComponent;
  let fixture: ComponentFixture<WardAllocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WardAllocationComponent]
    });
    fixture = TestBed.createComponent(WardAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
