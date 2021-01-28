import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedbackGymProfileComponent} from './feedback-gym-profile.component';

describe('FeedbackGymProfileComponent', () => {
  let component: FeedbackGymProfileComponent;
  let fixture: ComponentFixture<FeedbackGymProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackGymProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackGymProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
