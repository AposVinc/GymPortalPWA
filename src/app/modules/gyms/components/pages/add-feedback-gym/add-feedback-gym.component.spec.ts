import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackGymComponent } from './add-feedback-gym.component';

describe('AddFeedbackGymComponent', () => {
  let component: AddFeedbackGymComponent;
  let fixture: ComponentFixture<AddFeedbackGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeedbackGymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
