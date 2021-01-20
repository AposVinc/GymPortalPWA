import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackCourseCardComponent } from './add-feedback-course-card.component';

describe('AddFeedbackCourseCardComponent', () => {
  let component: AddFeedbackCourseCardComponent;
  let fixture: ComponentFixture<AddFeedbackCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeedbackCourseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
