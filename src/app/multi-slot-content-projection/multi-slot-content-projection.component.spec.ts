import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection.component';

describe('MultiSlotContentProjectionComponent', () => {
  let component: MultiSlotContentProjectionComponent;
  let fixture: ComponentFixture<MultiSlotContentProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultiSlotContentProjectionComponent]
    });
    fixture = TestBed.createComponent(MultiSlotContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
