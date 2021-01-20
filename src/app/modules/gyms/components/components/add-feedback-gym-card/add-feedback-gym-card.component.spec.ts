import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackGymCardComponent } from './add-feedback-gym-card.component';

describe('AddFeedbackGymCardComponent', () => {
  let component: AddFeedbackGymCardComponent;
  let fixture: ComponentFixture<AddFeedbackGymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeedbackGymCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackGymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
