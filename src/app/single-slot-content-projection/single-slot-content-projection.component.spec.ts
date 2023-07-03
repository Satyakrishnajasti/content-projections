import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotContentProjectionComponent } from './single-slot-content-projection.component';

describe('SingleSlotContentProjectionComponent', () => {
  let component: SingleSlotContentProjectionComponent;
  let fixture: ComponentFixture<SingleSlotContentProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SingleSlotContentProjectionComponent]
    });
    fixture = TestBed.createComponent(SingleSlotContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
