import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedbackGymCardComponent} from './feedback-gym-card.component';

describe('FeedbackGymCardComponent', () => {
  let component: FeedbackGymCardComponent;
  let fixture: ComponentFixture<FeedbackGymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackGymCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackGymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
