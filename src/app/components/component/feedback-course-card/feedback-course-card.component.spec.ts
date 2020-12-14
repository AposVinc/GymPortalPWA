import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedbackCourseCardComponent} from './feedback-course-card.component';

describe('FeedbackCourseCardComponent', () => {
  let component: FeedbackCourseCardComponent;
  let fixture: ComponentFixture<FeedbackCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackCourseCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
