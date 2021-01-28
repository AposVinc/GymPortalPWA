import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedbackCourseProfileComponent} from './feedback-course-profile.component';

describe('FeedbackCourseProfileComponent', () => {
  let component: FeedbackCourseProfileComponent;
  let fixture: ComponentFixture<FeedbackCourseProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackCourseProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCourseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
